export interface IUserSession{
  bearer: string,
  name: string,
  userId: number
};

interface IRelogiosSessionData{
  title: string, 
  id: number
};

export type TRelogiosSessionData = IRelogiosSessionData[];