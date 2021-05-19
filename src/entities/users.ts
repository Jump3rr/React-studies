// export interface ISingleUser {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//       street: string;
//       suite: string;
//       city: string;
//       zipcode: string;
//       geo: {
//         lat: string;
//         lng: string;
//       }
//     },
//     phone: string;
//     website: string;
//     company: {
//       name: string;
//       catchPhrase: string;
//       bs: string;
//     }
// };

import {ISingleLocation} from './locations';

export interface ISingleUser {
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
  location: ISingleLocation;
};