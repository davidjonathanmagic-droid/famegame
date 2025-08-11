import Seo from "@/components/Seo";
import PointerGlow from "@/components/PointerGlow";
import heroImage from "@/assets/flash-celeb-quest-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useMemo, useState } from "react";

const TOTAL_TIME = 20;

const TC6Kl3xQuiz = () => {
  const [guess, setGuess] = useState("");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, submitted]);

  const pct = useMemo(() => (timeLeft / TOTAL_TIME) * 100, [timeLeft]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim()) return;
    setSubmitted(guess.trim());
  };

  return (
    <>
      <Seo
        title="Celebrity Flash Quiz 59 – Quiz"
        description="Play the Celebrity Flash Quiz 59. Guess the star before time runs out!"
        canonicalPath="/TC6Kl3x"
        image={heroImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Celebrity Flash Quiz 59 – Quiz",
          description: "Fast, fun celebrity guessing challenge.",
        }}
      />

      <header className="sr-only">
        <h1>Celebrity Flash Quiz 59 – Quiz</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero">
        <PointerGlow className="w-full">
          <section className="container py-16">
            <Card className="card-glass border rounded-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Guess the Celebrity</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <Progress value={pct} className="w-full" aria-label="Time left" />
                  <p className="text-sm text-muted-foreground">Time left: {timeLeft}s</p>
                  <form onSubmit={onSubmit} className="flex gap-2">
                    <Input
                      value={guess}
                      onChange={(e) => setGuess(e.target.value)}
                      placeholder="Type your guess..."
                      aria-label="Your guess"
                    />
                    <Button type="submit" variant="hero">Submit</Button>
                  </form>
                  {submitted && (
                    <div className="text-sm">
                      Your guess: <span className="font-medium">{submitted}</span>
                    </div>
                  )}
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={heroImage}
                    alt="Stylized celebrity collage for the quiz"
                    loading="lazy"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          </section>
        </PointerGlow>
      </main>
    </>
  );
};

export default TC6Kl3xQuiz;
