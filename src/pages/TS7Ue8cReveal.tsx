import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import img from "@/assets/celeb-47.png";

const TS7Ue8cReveal = () => {
  return (
    <>
      <Seo
        title="Celebrity Quiz – Answer"
        description="The answer reveal for Celebrity Quiz 47."
        canonicalPath="/TS7Ue8c"
        image={img}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Celebrity Quiz – Answer",
          description: "Answer reveal for the celebrity quiz.",
        }}
      />

      <header className="sr-only">
        <h1>Celebrity Quiz – Answer</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero grid place-items-center py-16">
        <section className="container grid place-items-center">
          <Card className="max-w-md w-full border rounded-xl">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">Celebrity Quiz</h2>
              <p className="text-sm text-muted-foreground">The answer is:</p>
              <div className="flex justify-center">
                <img
                  src={img}
                  alt="Celebrity: Drake"
                  loading="lazy"
                  className="w-40 h-40 rounded-full object-cover ring-4 ring-primary/30 p-1 bg-background"
                />
              </div>
              <p className="text-xl font-bold">Drake</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export default TS7Ue8cReveal;
