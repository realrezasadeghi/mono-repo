import { SessionUseCase, BoardUseCase } from "@reza/core";
import { IRepositories } from "./repositories";

export interface IUseCases {
  board: BoardUseCase;
  session: SessionUseCase;
}

export default (repositories: IRepositories): IUseCases => {
  return {
    board: new BoardUseCase(repositories.board),
    session: new SessionUseCase(repositories.session),
  };
};
