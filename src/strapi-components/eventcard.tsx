import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ImageData {
  url:string; 
}

interface Event {
  title: string;
  description: string;
  who: string;
  location: string;
  image: ImageData;
  date: string;
  startingtime: string;
  endingtime: string;
  link: string;
}

interface EventCardProps {
  event: Event;
}

const parseDate = (dateStr: string): Date => new Date(dateStr);

const formatDateToSwedish = (dateStr: string): string => {
  const date = parseDate(dateStr);
  return date.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatTime = (timeStr: string): string => {
  return timeStr.slice(0, 5);
};

const eventcard = ({ event }: EventCardProps) => {

  return (
    <div className="border-t border-gray-200 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 flex-shrink-0">
        {event.image && event.image.url ? (
            <img 
              src={`${event.image.url}`} 
              alt={event.title} 
              className="w-full h-[240px] object-cover object-center rounded-md" 
            />
          ) : (
            <div className="w-full h-[240px] bg-gray-200 flex items-center justify-center rounded-md text-gray-500">
              No image available
            </div>
          )}
        </div>
        
        <div className="w-full md:w-3/4">
          <Link to={`/event`} className="block group">
            <h2 className="text-2xl font-bold mb-2 group-hover:underline">{event.title}</h2>
          </Link>
          
          <p className="text-gray-700 mb-4">{event.description}</p>
          
          <p className="text-gray-600 font-medium mb-3">{event.who}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-gray-600">{formatDateToSwedish(event.date)} {formatTime(event.startingtime)} - {formatTime(event.endingtime)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-500" />
              <span className="text-gray-600">{event.location}</span>
            </div>
            
            
          </div>
          
          <Button 
            variant="outline" 
            className="text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-1"
          >
            Till inbjudan <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default eventcard;