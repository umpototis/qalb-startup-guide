
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MentorCard from "@/components/mentors/MentorCard";
import BookingDialog from "@/components/mentors/BookingDialog";
import { Input } from "@/components/ui/input";
import { Mentor } from "@/types/mentor";
import { TimeSlot } from "@/types/booking";
import { Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { mentorData } from "@/data/mentors";

const MentorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  // Filter mentors based on search query
  const filteredMentors = mentorData.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleMentorSelect = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setDialogOpen(true);
  };

  const handleBookSlot = (mentorId: string, slot: TimeSlot) => {
    // In a real app, this would connect to a backend service
    toast({
      title: "Session Booked!",
      description: `You have successfully booked a session on ${new Date(slot.date).toLocaleDateString()} at ${slot.startTime}`,
    });
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Find a Mentor</h1>
        <p className="text-muted-foreground mb-4">
          Connect with experienced mentors who can guide you on your entrepreneurial journey
        </p>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, field or expertise..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <MentorCard 
                key={mentor.id} 
                mentor={mentor} 
                onClick={handleMentorSelect} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No mentors found matching your search.</p>
          </div>
        )}
      </div>
      
      <BookingDialog
        mentor={selectedMentor}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onBookSlot={handleBookSlot}
      />
    </MainLayout>
  );
};

export default MentorsPage;
