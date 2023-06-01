import { SessionRepository, BoardRepository } from "@reza/adapter";
import { IInfrastructures } from "./infrastructures";

export interface IRepositories {
  session: SessionRepository;
  board: BoardRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => {
  const baseURL = "http://localhost:7777";
  return {
    session: new SessionRepository(
      baseURL,
      infrastructure.http,
      infrastructure.storage
    ),
    board: new BoardRepository(baseURL, infrastructure.http),
  };
};
