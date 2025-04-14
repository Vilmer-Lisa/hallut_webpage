import { Link } from "react-router-dom";
import { Calendar, MapPin, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EventCard from "@/components/ui/eventcard";

// Sample event data
const events = [
  {
    id: 1,
    title: "Nyhet! Studio Akavia AI",
    description: "Vad innebär artificiell intelligens för framtidens arbetsliv, hur kan du komma att påverkas och vilka nya trender är viktiga att hålla koll på i en ständigt snabbföränderlig värld?",
    date: "26 mars 2025",
    time: "12:00 - 12:00",
    location: "Online",
    type: "Livestream",
    audience: "För vem: Yrkesverksam",
    image: "/lovable-uploads/06206a2b-818d-4914-b26a-992ecb1769e8.png"
  },
  {
    id: 2,
    title: "Trendspaning: Livslångt lärande i AI-eran",
    description: "I en värld där AI revolutionerar arbetslivet blir livslångt lärande inte bara en möjlighet utan en nödvändighet. Vilka kompetenser krävs för att möta framtidens utmaningar? Hur kan vi som individer...",
    date: "8 maj 2025",
    time: "11:30 - 12:15",
    location: "Online - Webbinarium",
    type: "Platser kvar",
    audience: "För vem: Yrkesverksam",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Det bästa kanske inte har hänt än - hitta rätt mitt i arbetslivet",
    description: "Varannan svensk uppger att de vill byta jobb eller bransch och fyra av tio ångrar sitt yrkesval. Hur vet man om det är dags att söka sig vidare och hur kommer man fram till vad man verkligen vill...",
    date: "14 maj 2025",
    time: "11:30 - 12:15",
    location: "Online - Webbinarium",
    type: "Platser kvar",
    audience: "För vem: Yrkesverksam",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=300&auto=format&fit=crop"
  }
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Kommande evenemang</h1>
      
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;