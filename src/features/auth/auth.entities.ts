export type FormValues = {
  email: string;
  phone: string;
  password: string;
};

export type AuthContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
