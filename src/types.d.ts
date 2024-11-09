type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  bio?: string | null;
  role: string;
  image?: {
    url: string;
  };
};

