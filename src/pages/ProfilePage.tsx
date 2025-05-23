
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Check, X } from "lucide-react";
import { userData } from "@/data/users";

const ProfilePage = () => {
  const user = userData; // In a real app, this would be fetched from an authentication context

  // Group bookings by status
  const upcomingBookings = user.bookings.filter(
    (booking) => booking.status === "upcoming"
  );
  const pastBookings = user.bookings.filter(
    (booking) => booking.status === "completed"
  );

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback className="text-xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </CardHeader>
          <CardContent>
            {user.bio && (
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">About</h3>
                <p className="text-sm">{user.bio}</p>
              </div>
            )}

            {user.interests && user.interests.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Button className="w-full mt-2" variant="outline">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Bookings Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <h2 className="text-xl font-bold">Upcoming Sessions</h2>
            </CardHeader>
            <CardContent>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex justify-between items-center p-4 border rounded-md"
                    >
                      <div>
                        <h3 className="font-medium">{booking.mentorName}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            {new Date(booking.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>
                            {booking.startTime} - {booking.endTime}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    You don't have any upcoming sessions.
                  </p>
                  <Button className="mt-4" asChild>
                    <a href="/mentors">Book a Session</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <h2 className="text-xl font-bold">Past Sessions</h2>
            </CardHeader>
            <CardContent>
              {pastBookings.length > 0 ? (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex justify-between items-center p-4 border rounded-md"
                    >
                      <div>
                        <h3 className="font-medium">{booking.mentorName}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>
                            {new Date(booking.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>
                            {booking.startTime} - {booking.endTime}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge 
                          variant="outline" 
                          className="flex items-center gap-1 font-normal"
                        >
                          <Check className="h-3 w-3" />
                          Completed
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center py-8 text-muted-foreground">
                  You don't have any past sessions.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
