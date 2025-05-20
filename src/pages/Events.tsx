import { Link } from "react-router-dom";
import { Calendar, MapPin, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/ui/eventcard";
import SectionHeading from "@/components/SectionHeading";
import { DataContext } from '../strapi-data/ActivityPageProvider'; 
import { useContext } from 'react';


const Events = () => {
  const { ActivityPage } = useContext(DataContext);
  if (!ActivityPage) {
    return <div className="p-4">Loading...</div>;
  }
  const monthMap: Record<string, string> = {
    januari: "January",
    februari: "February",
    mars: "March",
    april: "April",
    maj: "May",
    juni: "June",
    juli: "July",
    augusti: "August",
    september: "September",
    oktober: "October",
    november: "November",
    december: "December",
  };

  // 2. Convert "14 maj 2025" to a real Date object
  const parseDate = (dateStr: string): Date => new Date(dateStr);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents: typeof ActivityPage.events = [];
  const pastEvents: typeof ActivityPage.events = [];

  ActivityPage.events.forEach(event => {
    const eventDate = parseDate(event.date);
    eventDate.setHours(0, 0, 0, 0);
    if (eventDate >= today) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });
  
  const sortedEvents = upcomingEvents.sort((a, b) =>
    parseDate(a.date).getTime() - parseDate(b.date).getTime()
  );

return (
  <div className="container mx-auto px-4 py-8 max-w-6xl">
    <SectionHeading 
          title="Kommande aktiviteter"
          align="left"
        />
    
    <div className="space-y-6 mb-16">
      {sortedEvents.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </div>
    <SectionHeading 
          title="Tidigare aktiviteter"
          align="left"
        />
    
    <div className="space-y-6">
      {pastEvents.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </div>
  </div>
  );
};

export default Events;