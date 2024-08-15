import React from "react";
import heroData from "@/data/hero.json";

const Hero: React.FC = (): JSX.Element => {
  const { title, description, cta } = heroData[0];

  return (
    <section className="hero">
      <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="hero__description">{description}</p>
      <div className="hero__cta">
        {cta.map((button, index) => (
          <button
            key={index}
            className={`hero__cta-btn--${index === 0 ? "primary" : "secondary"}`}
          >
            {button.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
