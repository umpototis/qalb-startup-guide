
import { TimeSlot } from "./booking";

export interface Mentor {
  id: string;
  name: string;
  field: string;
  bio: string;
  expertise: string[];
  avatar?: string;
  availableSlots: TimeSlot[];
}
