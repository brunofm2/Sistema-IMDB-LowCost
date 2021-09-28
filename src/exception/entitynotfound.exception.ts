import { Exception } from './exception';

export class EntityNotFoundException extends Exception {
  constructor(description: string, context?: any) {
    super(
      400,
      'EntityNotFoundException',
      description,
      context,
      EntityNotFoundException,
    );
  }
}
