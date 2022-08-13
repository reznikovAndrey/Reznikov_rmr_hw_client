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

export type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
