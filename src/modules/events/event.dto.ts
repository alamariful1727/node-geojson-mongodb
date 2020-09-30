import { IEvent } from './event.model';

export interface ICreateEventRequest {
  name: IEvent['name'];
  contactNo: IEvent['contactNo'];
  address: IEvent['address'];
  latitude: number;
  longitude: number;
}
