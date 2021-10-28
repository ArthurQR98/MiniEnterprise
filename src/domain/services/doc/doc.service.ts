import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from '../../../infrastructure/repository/employee.repository';
import { DocRepository } from '../../../infrastructure/repository/doc.repository';
import { ConfigService } from '../../../appconfig/config.service';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { CreateDocDto } from '../../../application/dto/doc/create-doc.dto';

@Injectable()
export class DocService {
    constructor(
        @InjectRepository(EmployeeRepository)
        private readonly _employeeRepository:EmployeeRepository,
        @InjectRepository(DocRepository)
        private readonly _docRepository:DocRepository,
        private readonly _configService:ConfigService
    ) {}

    // async createDoc():Promise<CreateDocDto>{
        
    // }
    async getDoc(){}
    async updateDoc(){}
    async addDocFile(){}
    async deleteDocFile(){}
    async deleteDoc(){}

    async uploadPrivateFile(dataBuffer:Buffer,employeeId:number,filename:string){
        const s3 = new S3();
        const uploadResult = await s3.upload({
            Bucket:this._configService.get('AWS_PRIVATE_BUCKET_NAME'),
            Body: dataBuffer,
            Key:`${uuid()}-${filename}`            
        }).promise();
        const newFile = this._docRepository.create({
            key:uploadResult.Key,
            document_url:uploadResult.Location,
            employee:{
                id:employeeId
            }
        });
        await this._docRepository.save(newFile);
        return newFile;        
    }

    async getPrivateFile(fileId:number){
        const s3 = new S3();
        const fileInfo = await this._docRepository.findOne({id:fileId});
        if(fileInfo){
            const stream = await s3.getObject({
                Bucket:this._configService.get('AWS_PRIVATE_BUCKET_NAME'),
                Key:fileInfo.key
            }).createReadStream();
            return {
                stream,
                info:fileInfo
            }
        }
        throw new NotFoundException();
    }
    
    async generatePresignedUrl(key:string){
        const s3 = new S3();
        return s3.getSignedUrlPromise('getObject',{
            Bucket: this._configService.get('AWS_PRIVATE_BUCKET_NAME'),
            Key:key            
        })
    }

    async deletePrivateFile(fileId:number){
        const file = await this._docRepository.findOne({id:fileId});
        const s3 = new S3();
        await s3.deleteObject({
            Bucket:this._configService.get('AWS_PRIVATE_BUCKET_NAME'),
            Key:file.key
        }).promise()
        await this._docRepository.delete(fileId);
    }
    
}
