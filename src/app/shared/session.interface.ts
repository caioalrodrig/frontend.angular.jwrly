export interface IUserSession{
  bearer: string,
  name: string,
  userId: number
};

export type TRelogiosSessionData = [string, any][];