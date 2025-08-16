import Seo from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="The Fame Game Quiz"
        description="Put your star knowledge to the test in the ultimate celebrity trivia game. Quick rounds, endless fun!"
        canonicalPath="/"
        image="/lovable-uploads/fd33ab36-81ab-4d53-8ab9-80ee9e9b848b.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "The Fame Game Quiz",
          description: "Put your star knowledge to the test in the ultimate celebrity trivia game. Quick rounds, endless fun!",
        }}
      />

      <header className="sr-only">
        <h1>The Fame Game Quiz</h1>
      </header>

      <main className="min-h-screen bg-gradient-hero flex items-center justify-center py-16">
        <section className="container text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            The Fame Game Quiz
          </h1>
          
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/fd33ab36-81ab-4d53-8ab9-80ee9e9b848b.png"
              alt="Question mark symbol for The Fame Game Quiz"
              loading="lazy"
              className="w-48 h-48 md:w-64 md:h-64 object-contain animate-fade-in"
            />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">
              🌟 Think You Know Your Celebs? 🎬
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Put your star knowledge to the test in the ultimate celebrity trivia game. Quick rounds, endless fun!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
