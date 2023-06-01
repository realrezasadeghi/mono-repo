import { BoardPresenter, SessionPresenter } from "@reza/adapter";
import { IUseCases } from "./useCases";

export interface IPresenters {
  board: BoardPresenter;
  session: SessionPresenter;
}

export default (useCases: IUseCases): IPresenters => {
  return {
    board: new BoardPresenter(useCases.board),
    session: new SessionPresenter(useCases.session),
  };
};
