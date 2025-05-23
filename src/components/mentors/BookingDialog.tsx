
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Mentor } from "@/types/mentor";
import { TimeSlot } from "@/types/booking";

interface BookingDialogProps {
  mentor: Mentor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookSlot: (mentorId: string, slot: TimeSlot) => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({
  mentor,
  open,
  onOpenChange,
  onBookSlot,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  // Filter time slots based on selected date
  const availableSlots = mentor?.availableSlots.filter(slot => {
    if (!selectedDate) return false;
    
    const slotDate = new Date(slot.date);
    return (
      slotDate.getDate() === selectedDate.getDate() &&
      slotDate.getMonth() === selectedDate.getMonth() &&
      slotDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  const handleBooking = () => {
    if (mentor && selectedSlot) {
      onBookSlot(mentor.id, selectedSlot);
      onOpenChange(false);
    }
  };

  // Find dates that have available slots
  const datesWithSlots = mentor?.availableSlots.map(slot => new Date(slot.date)) || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book a session with {mentor?.name}</DialogTitle>
          <DialogDescription>
            Select a date and time slot for your mentoring session.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Select Date</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setSelectedSlot(null);
                }}
                disabled={(date) => {
                  // Disable dates that don't have available slots
                  return !datesWithSlots.some(
                    (slotDate) =>
                      slotDate.getDate() === date.getDate() &&
                      slotDate.getMonth() === date.getMonth() &&
                      slotDate.getFullYear() === date.getFullYear()
                  );
                }}
                className={cn("p-3 pointer-events-auto border rounded-md")}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Available Time Slots</h3>
              {selectedDate ? (
                availableSlots && availableSlots.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto">
                    {availableSlots.map((slot) => (
                      <Button
                        key={`${slot.date}-${slot.startTime}-${slot.endTime}`}
                        variant={selectedSlot === slot ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot.startTime} - {slot.endTime}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[220px] border rounded-md">
                    <p className="text-sm text-muted-foreground">
                      No available slots for this date
                    </p>
                  </div>
                )
              ) : (
                <div className="flex items-center justify-center h-[220px] border rounded-md">
                  <p className="text-sm text-muted-foreground">
                    Select a date first
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleBooking} 
            disabled={!selectedSlot}
          >
            Book Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
