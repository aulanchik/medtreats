import React from "react";
import { Header, Hero } from "@/components";

const App: React.FC = (): JSX.Element => (
  <div className="App background">
    <main className="main">
      <Header />
      <Hero />
    </main>
  </div>
);

export default App;
