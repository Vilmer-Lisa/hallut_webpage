import { Link } from "react-router-dom";
import { Calendar, MapPin, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/ui/eventcard";

// Sample event data
const events = [
  {
    id: 1,
    title: "Boksläpp och panelsamtal",
    description: "Vad innebär artificiell intelligens för framtidens arbetsliv, hur kan du komma att påverkas och vilka nya trender är viktiga att hålla koll på i en ständigt snabbföränderlig värld?",
    date: "26 mars 2025",
    time: "12:00 - 12:00",
    location: "Online",
    type: "Livestream",
    audience: "För vem: Yrkesverksam",
    image: "img/timbro.jpg"
  },
  {
    id: 2,
    title: "Hug på almedalsvecka",
    description: "I en värld där AI revolutionerar arbetslivet blir livslångt lärande inte bara en möjlighet utan en nödvändighet. Vilka kompetenser krävs för att möta framtidens utmaningar? Hur kan vi som individer...",
    date: "8 maj 2025",
    time: "11:30 - 12:15",
    location: "Online - Webbinarium",
    type: "Platser kvar",
    audience: "För vem: Yrkesverksam",
    image: "img/hug.webp"
  },
  {
    id: 3,
    title: "Frukostseminarium med Kivra",
    description: "Varannan svensk uppger att de vill byta jobb eller bransch och fyra av tio ångrar sitt yrkesval. Hur vet man om det är dags att söka sig vidare och hur kommer man fram till vad man verkligen vill...",
    date: "14 maj 2025",
    time: "11:30 - 12:15",
    location: "Online - Webbinarium",
    type: "Platser kvar",
    audience: "För vem: Yrkesverksam",
    image: "img/kivra.png"
  }
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h3 className="text-xl font-semibold mb-16 text-gray-800">Kommande evenemang</h3>
      
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;