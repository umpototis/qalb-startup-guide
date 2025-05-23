
export interface TimeSlot {
  date: string; // ISO string
  startTime: string; // Format: HH:MM
  endTime: string; // Format: HH:MM
  booked: boolean;
}

export interface Booking {
  id: string;
  mentorId: string;
  mentorName: string;
  userId: string;
  date: string; // ISO string
  startTime: string; // Format: HH:MM
  endTime: string; // Format: HH:MM
  status: 'upcoming' | 'completed' | 'cancelled';
}
