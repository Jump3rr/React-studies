export interface IFullUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: {
    state: string;
    street: string;
    country: string;
    timezone: string;
    city: string;
  };
};