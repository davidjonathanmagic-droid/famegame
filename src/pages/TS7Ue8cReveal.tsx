import Seo from "@/components/Seo";
import PointerGlow from "@/components/PointerGlow";
import heroImage from "@/assets/flash-celeb-quest-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const TS7Ue8cReveal = () => {
  const [blur, setBlur] = useState(8);

  return (
    <>
      <Seo
        title="Celebrity Flash Quiz 47 – Reveal"
        description="Slide to reveal the celebrity in Celebrity Flash Quiz 47."
        canonicalPath="/TS7Ue8c"
        image={heroImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Celebrity Flash Quiz 47 – Reveal",
          description: "Interactive image reveal for the celebrity quiz.",
        }}
      />

      <header className="sr-only">
        <h1>Celebrity Flash Quiz 47 – Reveal</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero">
        <PointerGlow className="w-full">
          <section className="container py-16 grid place-items-center">
            <Card className="card-glass border rounded-lg max-w-3xl w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Image Reveal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <img
                  src={heroImage}
                  alt="Hidden celebrity revealed by slider"
                  loading="lazy"
                  style={{ filter: `blur(${blur}px)` }}
                  className="w-full h-auto rounded-md"
                />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Adjust the slider to reveal</p>
                  <Slider
                    value={[blur]}
                    onValueChange={([v]) => setBlur(v)}
                    min={0}
                    max={12}
                    step={1}
                    aria-label="Reveal slider"
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

export default TS7Ue8cReveal;
