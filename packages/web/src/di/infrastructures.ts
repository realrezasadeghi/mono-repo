import { Http, Storage as StorageAdapter } from "@reza/adapter";

export interface IInfrastructures {
  http: Http;
  storage: StorageAdapter;
}

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new StorageAdapter(window.sessionStorage),
  };
};
