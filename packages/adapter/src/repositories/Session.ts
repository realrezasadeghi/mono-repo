import { IUserDTO } from "@reza/core";
import { IHttp } from "../infrastructures/Http";
import { IStorage } from "../infrastructures/Storage";

export class SessionRepository {
  constructor(
    private readonly baseURL: string,
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.http.request({
      method: "POST",
      url: `${this.baseURL}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: userDTO.id,
        pw: userDTO.pw,
      },
    });

    return response?.token;
  }

  getToken(): Promise<string> {
    return this.storage.get("token");
  }

  setToken(token: string): void {
    this.storage.set("token", token);
  }

  removeToken(): void {
    this.storage.remove("token");
  }
}
