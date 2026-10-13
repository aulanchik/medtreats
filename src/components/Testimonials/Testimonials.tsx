import React from "react";
import { Carousel } from "@/components";
import data from "@/data/testimonials.json";

const Testimonials: React.FC = (): JSX.Element => {
  const { title, subtitle, actions, feedbacks } = data[0];

  const renderItem = (item: {
    id: number;
    author: string;
    feedback: string[];
  }) => (
    <div className="testimonials__item">
      <ul className="testimonials__item--feedback">
        {item.feedback.map((feedback, index) => (
          <li key={index}>{feedback}</li>
        ))}
      </ul>
      <p className="testimonials__item--author">{item.author}</p>
    </div>
  );

  return (
    <section id="testimonials" className="testimonials">
      <h2
        className="testimonials__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <div className="testimonials__container">
        <div className="testimonials__container--left">
          <p className="testimonials__content">{subtitle}</p>
          <div className="testimonials__actions">
            {actions.map((action) => (
              <button
                key={action.id}
                className={`testimonials__actions--${action.id === 1 ? "primary" : "secondary"}`}
              >
                {action.title}
              </button>
            ))}
          </div>
        </div>
        <div className="testimonials__container--right">
          <Carousel
            id="testimonials-carousel"
            template={renderItem}
            data={feedbacks}
            autoPlay
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
