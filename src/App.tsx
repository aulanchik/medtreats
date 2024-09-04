import React from "react";
import {
  Header,
  Hero,
  Treatments,
  Testimonials,
  Gallery,
  Enquiry,
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
      <Enquiry />
      <Footer />
    </main>
  </div>
);

export default App;
