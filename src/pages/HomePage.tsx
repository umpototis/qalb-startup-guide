
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Users, CalendarCheck, Target } from "lucide-react";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="hero-gradient text-white rounded-lg p-6 md:p-10 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Expert Mentors in Oman
          </h1>
          <p className="text-lg mb-6">
            Access guidance, support, and expertise from established professionals
            to help grow your business or startup.
          </p>
          <Link to="/mentors">
            <Button size="lg" variant="secondary" className="font-medium">
              Find a Mentor
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Browse Mentors</h3>
            <p className="text-muted-foreground">
              Explore our diverse network of experienced mentors across various industries and specializations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <CalendarCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Book Sessions</h3>
            <p className="text-muted-foreground">
              Schedule one-on-one mentoring sessions that fit your calendar and specific needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Grow & Succeed</h3>
            <p className="text-muted-foreground">
              Gain insights, advice, and guidance to overcome challenges and achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent rounded-lg p-6 md:p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-xl font-bold mb-2">Ready to accelerate your success?</h2>
            <p className="text-muted-foreground mb-4 md:mb-0">
              Find the perfect mentor to guide you through your entrepreneurial journey.
            </p>
          </div>
          <Link to="/mentors">
            <Button className="w-full md:w-auto">Explore Mentors</Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
