import { Test, TestingModule } from '@nestjs/testing';
import { SuggestionController } from '../suggestion/suggestion.controller';

describe('Suggestion Controller', () => {
  let controller: SuggestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuggestionController],
    }).compile();

    controller = module.get<SuggestionController>(SuggestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
