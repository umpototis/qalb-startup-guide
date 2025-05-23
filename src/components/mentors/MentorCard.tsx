
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Code, Briefcase, Megaphone, DollarSign, ShoppingCart, Scale } from "lucide-react";
import { Mentor } from "@/types/mentor";

interface MentorCardProps {
  mentor: Mentor;
  onClick: (mentor: Mentor) => void;
}

const getFieldIcon = (field: string) => {
  switch (field.toLowerCase()) {
    case 'technology & innovation':
      return Code;
    case 'business strategy':
      return Briefcase;
    case 'marketing & branding':
      return Megaphone;
    case 'finance & investment':
      return DollarSign;
    case 'e-commerce':
      return ShoppingCart;
    case 'legal & compliance':
      return Scale;
    default:
      return Briefcase;
  }
};

const MentorCard: React.FC<MentorCardProps> = ({ mentor, onClick }) => {
  const FieldIcon = getFieldIcon(mentor.field);

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <FieldIcon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{mentor.name}</h3>
          <p className="text-sm text-muted-foreground">{mentor.field}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-3">{mentor.bio}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {mentor.expertise.map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-accent rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between items-center">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{mentor.availableSlots.length} time slots</span>
        </div>
        <Button 
          variant="default" 
          size="sm" 
          onClick={() => onClick(mentor)}
        >
          <Clock className="h-4 w-4 mr-2" />
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
