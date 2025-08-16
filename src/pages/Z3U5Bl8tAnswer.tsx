import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import img from "@/assets/celeb-base.png";
const altImg = "/lovable-uploads/9f04ee2d-bdec-403d-8674-220706bf32fe.png";
import { useEffect, useState } from "react";

const Z3U5Bl8tAnswer = () => {
  const [isAlt, setIsAlt] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const STORAGE_KEY = "quiz-Z3U5Bl8t-revealed";
  useEffect(() => {
    const revealed = localStorage.getItem(STORAGE_KEY) === "1";
    if (revealed) {
      setIsAlt(true);
      return;
    }
    const t = setTimeout(() => {
      setIsAlt(true);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 10000);
    return () => clearTimeout(t);
  }, [resetKey]);
  const handleSecretTap = () => {
    setTapCount((c) => {
      const next = c + 1;
      if (next >= 4) {
        setIsAlt(false);
        localStorage.removeItem(STORAGE_KEY);
        setResetKey((k) => k + 1);
        return 0;
      }
      return next;
    });
  };
  return (
    <>
      <Seo
        title="The Fame Game Quiz – Answer"
        description="The answer reveal for The Fame Game Quiz."
        canonicalPath="/Z3U5Bl8t"
        image={img}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "The Fame Game Quiz – Answer",
          description: "Answer reveal for the celebrity quiz.",
        }}
      />

      <header className="sr-only">
        <h1>The Fame Game Quiz – Answer</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero grid place-items-center py-16">
        <section className="container grid place-items-center">
          <Card className="max-w-md w-full border rounded-xl">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Celebrity Qui
                <span
                  role="button"
                  aria-label="Reset quiz (tap 4x)"
                  tabIndex={0}
                  onClick={handleSecretTap}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSecretTap()}
                  className="inline-block cursor-pointer select-none story-link"
                >
                  z
                </span>
              </h2>
              <p className="text-sm text-muted-foreground">The answer is:</p>
              <div className="flex justify-center">
                <img
                  src={isAlt ? altImg : img}
                  alt={isAlt ? "Celebrity: Zendaya" : "Celebrity: Ryan Reynolds"}
                  loading="lazy"
                  className="w-40 h-40 rounded-full object-cover ring-4 ring-primary/30 p-1 bg-background animate-fade-in"
                />
              </div>
              <p className="text-xl font-bold">{isAlt ? "Zendaya" : "Ryan Reynolds"}</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Z3U5Bl8tAnswer;
