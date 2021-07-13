export interface IPic {
  id: string;
  owner?: string;
  secret?: string;
  server?: number;
  farm?: number;
  title: string;
}

interface IResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Array<IPic>;
  };
  stat: string;
}

export interface IResponseFromSaga {
  data: IResponse;
}

export default IResponse;
