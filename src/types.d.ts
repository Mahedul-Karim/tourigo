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

type AllToursType ={
  id:string;
  tourName:string;
  location:string;
  gallery:{
    url:string;
  }[];
  duration:string;
  price:number;
  totalRatings:number;
}