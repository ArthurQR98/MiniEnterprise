import { NotFoundException } from '@nestjs/common';
class TypeSuggestionNotFoundException extends NotFoundException{
    constructor(typeId) {
        super(`Type Suggestion with id ${typeId} not found.`);
    }
}
export default TypeSuggestionNotFoundException;