import { BusinessArea } from './business-area';

export interface AddressComponent {
  province: string;
  city: string;
  citycode: string;
  district: string;
  adcode: string;
  township: string;
  street: string;
  streetNumber: string;
  neighborhood: string;
  neighborhoodType: string;
  building: string;
  buildingType: string;
  businessAreas: BusinessArea[];
}
