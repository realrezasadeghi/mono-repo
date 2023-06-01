import { IBoardRepository } from "./IBoard";
import { IBoardEntity, Board } from "../../aggregates/Board";
import { IBoardDTO } from "../../dto/BoardDTO";
import { ICommentDTO } from "../../dto/CommentDTO";
import { Comment } from "../../entities/Comment";

export class BoardUseCase {
  constructor(private readonly boardRepo: IBoardRepository) {}

  async getBoards(): Promise<Array<IBoardEntity>> {
    const boarDTOList = await this.boardRepo.getBoards();
    const commentDTOList = await this.boardRepo.getComments();

    return boarDTOList.map((board: IBoardDTO) => {
      const comments = commentDTOList
        .filter((comment) => comment.boardId === board.id)
        .map((comment: ICommentDTO) => new Comment(comment));
      return new Board(board).pushComment(comments);
    });
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.boardRepo.insertBoard(author, content);
  }
}
