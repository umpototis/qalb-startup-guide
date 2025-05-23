
import { User } from "@/types/user";
import { addDays, subDays } from "date-fns";

const today = new Date();

export const userData: User = {
  id: "u1",
  name: "Saif Al-Habsi",
  email: "saif@example.com",
  bio: "Aspiring entrepreneur with a passion for technology and innovation.",
  field: "Technology",
  interests: ["Mobile Apps", "E-commerce", "Sustainability"],
  bookings: [
    {
      id: "b1",
      mentorId: "1",
      mentorName: "Fatima Al-Balushi",
      userId: "u1",
      date: addDays(today, 2).toISOString(),
      startTime: "09:00",
      endTime: "10:00",
      status: "upcoming"
    },
    {
      id: "b2",
      mentorId: "3",
      mentorName: "Laila Al-Kindi",
      userId: "u1",
      date: addDays(today, 5).toISOString(),
      startTime: "14:00",
      endTime: "15:00",
      status: "upcoming"
    },
    {
      id: "b3",
      mentorId: "2",
      mentorName: "Ahmed Al-Harthy",
      userId: "u1",
      date: subDays(today, 7).toISOString(),
      startTime: "11:00",
      endTime: "12:00",
      status: "completed"
    },
    {
      id: "b4",
      mentorId: "5",
      mentorName: "Zainab Al-Lawati",
      userId: "u1",
      date: subDays(today, 14).toISOString(),
      startTime: "16:00",
      endTime: "17:00",
      status: "completed"
    }
  ]
};
