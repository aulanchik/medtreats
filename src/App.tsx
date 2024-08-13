import React from "react";
import { Header, Hero, Treatments, Footer } from "@/components";

const App: React.FC = (): JSX.Element => (
  <div className="App background">
    <main className="main">
      <Header />
      <Hero />
      <Treatments />
      <Footer />
    </main>
  </div>
);

export default App;
