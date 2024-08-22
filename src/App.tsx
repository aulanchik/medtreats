import React from "react";
import {
  Header,
  Hero,
  Treatments,
  Testimonials,
  Gallery,
  Footer,
} from "@/components";

const App: React.FC = (): JSX.Element => (
  <div className="App background">
    <main className="main">
      <Header />
      <Hero />
      <Treatments />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  </div>
);

export default App;
