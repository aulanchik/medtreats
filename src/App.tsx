import React from "react";
import { Header, Hero, Footer } from "@/components";

const App: React.FC = (): JSX.Element => (
  <div className="App background">
    <main className="main">
      <Header />
      <Hero />
      <Footer />
    </main>
  </div>
);

export default App;
