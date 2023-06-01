import { BoardUseCase, IBoardEntity } from "@reza/core";

export class BoardPresenter {
  constructor(private readonly useCase: BoardUseCase) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    return await this.useCase.getBoards();
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.useCase.insertBoard(author, content);
  }
}
