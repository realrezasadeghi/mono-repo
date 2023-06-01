import {
  BoardDTO,
  IBoardDTO,
  CommentDTO,
  ICommentDTO,
  IBoardParams,
  ICommentParams,
} from "@reza/core";
import { IHttp } from "../infrastructures/Http";

export class BoardRepository {
  constructor(private readonly baseURL: string, readonly http: IHttp) {}

  async getBoards(): Promise<Array<IBoardDTO>> {
    const response = await this.http.request({
      method: "GET",
      url: `${this.baseURL}/boards`,
    });
    return (
      response?.boards.map((board: IBoardParams) => new BoardDTO(board)) || []
    );
  }

  async getComments(): Promise<Array<ICommentDTO>> {
    const response = await this.http.request({
      method: "GET",
      url: `${this.baseURL}/comments`,
    });
    return (
      response?.comments.map(
        (comment: ICommentParams) => new CommentDTO(comment)
      ) || []
    );
  }

  insertBoard(author: string, content: string): Promise<boolean> {
    return this.http.request({
      method: "POST",
      url: `${this.baseURL}/boards`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        author,
        content,
      },
    });
  }
}
