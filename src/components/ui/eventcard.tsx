import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  audience: string;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const eventcard = ({ event }: EventCardProps) => {
  return (
    <div className="border-t border-gray-200 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 flex-shrink-0">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-[240px] object-cover object-center rounded-md"
          />
        </div>
        
        <div className="w-full md:w-3/4">
          <Link to={`/event/${event.id}`} className="block group">
            <h2 className="text-2xl font-bold mb-2 group-hover:underline">{event.title}</h2>
          </Link>
          
          <p className="text-gray-700 mb-4">{event.description}</p>
          
          <p className="text-gray-600 font-medium mb-3">{event.audience}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-gray-600">{event.date} {event.time}</span>
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