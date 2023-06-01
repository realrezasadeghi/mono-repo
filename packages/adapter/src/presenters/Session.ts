import { SessionUseCase, UserDTO } from "@reza/core";
export class SessionPresenter {
  constructor(private readonly useCase: SessionUseCase) {}

  async login(id: string, pw: string): Promise<string> {
    return await this.useCase.login(new UserDTO({ id, pw }));
  }

  getToken(): Promise<string> {
    return this.useCase.getToken();
  }

  setToken(token: string): void {
    this.useCase.setToken(token);
  }

  removeToken(): void {
    this.useCase.removeToken();
  }
}
