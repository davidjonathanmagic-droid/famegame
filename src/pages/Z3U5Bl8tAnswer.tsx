import Seo from "@/components/Seo";
import PointerGlow from "@/components/PointerGlow";
import heroImage from "@/assets/flash-celeb-quest-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Z3U5Bl8tAnswer = () => {
  const [revealed, setRevealed] = useState(false);
  const celebrityName = revealed ? "A. Starling" : "Hidden";

  return (
    <>
      <Seo
        title="Celebrity Flash Quiz – Answer"
        description="Answer reveal for Celebrity Flash Quiz. Uncover the star."
        canonicalPath="/Z3U5Bl8t"
        image={heroImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Celebrity Flash Quiz – Answer",
          description: "Answer page for a flash celebrity question.",
        }}
      />

      <header className="sr-only">
        <h1>Celebrity Flash Quiz – Answer</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero">
        <PointerGlow className="w-full">
          <section className="container py-16 grid place-items-center">
            <Card className="card-glass border rounded-lg max-w-2xl w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Answer</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <img
                    src={heroImage}
                    alt="Blurred celebrity hint"
                    loading="lazy"
                    className={`w-full h-auto rounded-md transition ${revealed ? 'blur-0' : 'blur-sm'}`}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Tap to reveal the correct answer.</p>
                  <Button variant="hero" onClick={() => setRevealed((v) => !v)}>
                    {revealed ? 'Hide Answer' : 'Reveal Answer'}
                  </Button>
                  <div className="text-lg">
                    Revealed: <span className="font-semibold">{celebrityName}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </PointerGlow>
      </main>
    </>
  );
};

export default Z3U5Bl8tAnswer;
