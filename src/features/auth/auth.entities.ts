import { ServerSuccessStatus } from '../../infrastructure/RequestService/request.entities';

export type User = {
  email: string;
  phone: string;
  password: string;
};

export type UserFromServer = Omit<User, 'password'> & {
  id: string;
  name: string;
};

export type FormValues = User;

export type UserStatus = boolean | null;

export type AuthContextType = {
  loggedIn: UserStatus;
  setLoggedIn: React.Dispatch<React.SetStateAction<UserStatus>>;
  imgSrc: string;
  userData: UserFromServer | null;
};

export type AuthRequestServiceType = {
  login: (body: FormValues) => Promise<ServerSuccessStatus>;
  logout: () => Promise<ServerSuccessStatus>;
};
