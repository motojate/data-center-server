import { ICommand } from '@nestjs/cqrs';

export class NaverSearchCommand implements ICommand {
  constructor(public readonly keyword: string) {}
}
