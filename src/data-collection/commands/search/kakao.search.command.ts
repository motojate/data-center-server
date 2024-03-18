import { ICommand } from '@nestjs/cqrs';

export class KakaoSearchCommand implements ICommand {
  constructor(public readonly keyword: string) {}
}
