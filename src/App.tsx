import React from "react";
import { Header, Hero, Footer, Gallery } from "@/components";

const App: React.FC = (): JSX.Element => (
  <div className="App background">
    <main className="main">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </main>
  </div>
);

export default App;
