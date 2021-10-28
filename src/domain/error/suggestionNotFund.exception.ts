import { NotFoundException } from '@nestjs/common';
class SuggestionNotFoundException extends NotFoundException{
    constructor(suggestionId) {
        super(`Suggestion with id ${suggestionId} not found.`)
    }
}
export default SuggestionNotFoundException;