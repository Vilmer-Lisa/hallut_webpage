import React from "react";
import { Linkedin, Mail} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Author = () => {
  const quotes = [
    {
      quote: "Min yrkesmässiga mission är att hjälpa företag och investerare " + 
      "att vara ett verktyg för att skapa långsiktigt värde för flera.",
    },
    {
      quote: "Min önskan för egen del är att den dag jag lämnar in ha bidragit med "+ 
      "mer än vad jag tagit och ha så roligt som möjligt på vägen",
    },
  ];
  return (
    <>
      {/* Author Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="mx-auto md:col-span-1">
              <div className="aspect-square w-64 md:w-full max-w-xs bg-sage-200 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={"../emma.JPG"}
                alt="Book cover"
                className="w-64 rounded"
              />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-3">
                Emma Ihre
              </h1>
              <p className="text-lg text-primary mb-4">
                Skapare av Håll ut!
              </p>
              <p className="text-muted-foreground mb-6">
              Emma Ihre har under flera decennier varit en central gestalt inom hållbarhetsområdet, 
              med en omfattande erfarenhet som sträcker sig över både offentlig och privat sektor. 
              Hennes karriär inleddes inom finansiell analys och värdepappershandel, 
              där hon tidigt engagerade sig i utvecklingen av etiska och hållbara investeringar. ​
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-700 hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:author@example.com"
                  className="text-sage-700 hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Biography" 
            align="left"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg">
            I rollen som chef för Corporate Engagement på Ethix SRI Advisors rådgav Emma kapitalägare och kapitalförvaltare om hur miljömässiga, sociala och ägarstyrningsfrågor kunde integreras i investeringsprocessen. Hennes engagemang för mänskliga rättigheter manifesterades genom hennes arbete som rådgivare till Amnesty Business Group i Sverige, där hon var en av initiativtagarna.​
            </p>
            
            <p className="mt-4">
            Vid Finansdepartementet ansvarade Emma för att integrera hållbarhetsfrågor i ägarstyrningen av statligt ägda bolag, vilket resulterade i att hållbarhet blev en naturlig del av statens ägarstyrning. Hon betonade vikten av att företag förstår och integrerar hållbarhet i sina affärsmodeller och riskhantering för att säkerställa långsiktig lönsamhet. ​
            </p>
            
            <p className="mt-4">
            Som Mannheimer Swartlings första hållbarhetschef lade Emma grunden för byråns hållbarhetsarbete och integrera hållbarhetsfrågor i rådgivningen till klienter. Hennes arbete där stärkte byråns fokus på hållbarhet och bidrog till att positionera dem som en föregångare inom området.​
            </p>
            
            <p className="mt-4">
            Senare tog Emma rollen som Head of Sustainability på Embracer Group, där hon fortsatte att driva hållbarhetsfrågor inom spel och underhållningsbranschen. Hennes förmåga att anpassa sig och tillämpa sin expertis i olika sektorer visar på hennes djupa förståelse för hållbarhetens betydelse över hela näringslivet. ​
            </p>

            <p className="mt-4">
            Utöver sina operativa roller har Emma haft diverse styrelseuppdrag och har bland annat varit ordförande för Global Compact Network Sweden och Investor ombudsman i Nordkinn Investment Management.
            </p>

            <p className="mt-4">
            Hennes akademiska bakgrund inkluderar en kandidatexamen i nationalekonomi från Stockholms universitet. ​
            </p>
          </div>
        </div>
      </section>

      <section className="section blue-gradient text-white  flex items-center md:pt-0 md:pb-0">
        <div className="content-wrapper">
        <div className="flex flex-wrap gap-8 mx-4 md:mx-12 lg:mx-32">
            {quotes.map((quote, idx) => (
              <div key={idx} className="flex-1 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <blockquote>
                  <div className="flex flex-col items-start justify-between">
                    <p className="text-lg italic mb-4">
                      "{quote.quote}"
                    </p>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Positions */}
      <section className="section bg-white">
        <div className="content-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Employment */}
              <Card className="bg-gradient-to-br from-white to-sage-50 shadow-md border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-serif">Anställning</h3>
                  </div>
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <p className="font-medium">Head of ESG and Nordic Public Affairs</p>
                    <p className="text-muted-foreground">Asmodee</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Board Positions */}
              <Card className="bg-gradient-to-br from-white to-sage-50 shadow-md border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-serif">Förtroendeuppdrag</h3>
                  </div>
                  <Separator className="mb-4" />
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Vice ordförande</p>
                      <p className="text-muted-foreground">AP7</p>
                    </li>
                    <li>
                      <p className="font-medium">Styrelseledamot</p>
                      <p className="text-muted-foreground">Praktikertjänst</p>
                    </li>
                    <li>
                      <p className="font-medium">Ledamot i fullmäktige</p>
                      <p className="text-muted-foreground">Skandia</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
