// import { AddressModel } from './address.model';
// import { SocialNetworksModel } from './social-networks.model';

export interface UserModel {
  id: number;
  email: string;
  pic: string;
  role: 'admin' | 'user';
  firstName: string;
  lastName: string;
}
