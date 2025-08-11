import Seo from "@/components/Seo";
import PointerGlow from "@/components/PointerGlow";
import heroImage from "@/assets/flash-celeb-quest-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const JC2Mw3gResult = () => {
  const [score, setScore] = useState(() => Math.floor(6 + Math.random() * 5));
  const [total] = useState(10);

  const reroll = () => setScore(Math.floor(6 + Math.random() * 5));

  return (
    <>
      <Seo
        title="Celebrity Flash Quiz 39 – Result"
        description="Your results for Celebrity Flash Quiz 39. See how you scored!"
        canonicalPath="/JC2Mw3g"
        image={heroImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Celebrity Flash Quiz 39 – Result",
          description: "Results summary for the celebrity flash quiz.",
        }}
      />

      <header className="sr-only">
        <h1>Celebrity Flash Quiz 39 – Result</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero">
        <PointerGlow className="w-full">
          <section className="container py-16 grid place-items-center">
            <Card className="card-glass border rounded-lg max-w-xl w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Your Result</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <img
                    src={heroImage}
                    alt="Result background motif"
                    loading="lazy"
                    className="w-36 h-24 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-4xl font-bold">
                      {score} <span className="text-muted-foreground text-lg">/ {total}</span>
                    </p>
                    <p className="text-muted-foreground">Nice work! Try different rounds to improve.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" onClick={reroll}>Reroll Score</Button>
                  <Button variant="outline" onClick={() => window.location.reload()}>Reset Page</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </PointerGlow>
      </main>
    </>
  );
};

export default JC2Mw3gResult;
