
import { Mentor } from "@/types/mentor";
import { addDays } from "date-fns";

// Helper function to generate time slots for a mentor
const generateTimeSlots = (startDate: Date, daysCount: number) => {
  const slots = [];
  
  for (let i = 0; i < daysCount; i++) {
    const date = addDays(startDate, i);
    const dateString = date.toISOString();
    
    // Add morning slots
    slots.push({
      date: dateString,
      startTime: "09:00",
      endTime: "10:00",
      booked: false
    });
    
    slots.push({
      date: dateString,
      startTime: "11:00",
      endTime: "12:00",
      booked: false
    });
    
    // Add afternoon slots
    slots.push({
      date: dateString,
      startTime: "14:00",
      endTime: "15:00",
      booked: false
    });
    
    slots.push({
      date: dateString,
      startTime: "16:00",
      endTime: "17:00",
      booked: Math.random() > 0.7 // Randomly mark some slots as booked
    });
  }
  
  return slots.filter(slot => !slot.booked); // Return only available slots
};

const today = new Date();

export const mentorData: Mentor[] = [
  {
    id: "1",
    name: "Fatima Al-Balushi",
    field: "Technology & Innovation",
    bio: "With over 15 years in tech startups, I help entrepreneurs navigate technical challenges and build scalable solutions.",
    expertise: ["Software Development", "Product Management", "Tech Strategy"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(today, 14)
  },
  {
    id: "2",
    name: "Ahmed Al-Harthy",
    field: "Business Strategy",
    bio: "Serial entrepreneur with experience in scaling businesses across Oman and the GCC. Specializing in market entry strategies.",
    expertise: ["Business Planning", "Market Analysis", "Growth Strategy"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(addDays(today, 2), 10)
  },
  {
    id: "3",
    name: "Laila Al-Kindi",
    field: "Marketing & Branding",
    bio: "Marketing expert with a focus on digital strategies and brand development for startups in the MENA region.",
    expertise: ["Digital Marketing", "Brand Strategy", "Social Media"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(addDays(today, 1), 10)
  },
  {
    id: "4",
    name: "Khalid Al-Rawahi",
    field: "Finance & Investment",
    bio: "Financial advisor with expertise in startup funding, investment strategies, and financial planning for new businesses.",
    expertise: ["Financial Planning", "Investment", "Fundraising"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(addDays(today, 3), 14)
  },
  {
    id: "5",
    name: "Zainab Al-Lawati",
    field: "E-commerce",
    bio: "E-commerce specialist with experience in building successful online retail businesses from the ground up.",
    expertise: ["E-commerce Strategy", "Online Retail", "Digital Payments"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(addDays(today, 2), 7)
  },
  {
    id: "6",
    name: "Mohammed Al-Siyabi",
    field: "Legal & Compliance",
    bio: "Legal expert specializing in business law, startup regulations, and intellectual property in Oman.",
    expertise: ["Business Law", "IP Protection", "Regulatory Compliance"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    availableSlots: generateTimeSlots(addDays(today, 4), 10)
  }
];
