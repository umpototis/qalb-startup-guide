
import { Booking } from "./booking";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  field?: string;
  interests?: string[];
  bookings: Booking[];
}
