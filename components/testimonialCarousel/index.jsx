import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Hogg Anderson's cost accounting services have drastically improved our financial processes. Highly recommended!",
      position: "Restaurant Owner",
    },
    {
      name: "Jane Smith",
      feedback:
        "Their inventory management has helped us reduce waste and improve profitability. A fantastic service!",
      position: "Hotel Manager",
    },
    {
      name: "Michael Brown",
      feedback:
        "The variance analysis provided by the team has been crucial in identifying cost-saving opportunities.",
      position: "Lounge Owner",
    },
    {
      name: "Emily Davis",
      feedback:
        "We’ve seen significant improvements in our business planning since working with Hogg Anderson. Great expertise!",
      position: "Restaurant Manager",
    },
    {
      name: "Robert Wilson",
      feedback:
        "Their attention to detail and accuracy in financial reporting is unmatched. We’re very happy with the service.",
      position: "Hotel General Manager",
    },
    {
      name: "Linda Johnson",
      feedback:
        "Hogg Anderson has helped us better manage our inventory turnover and improve our overall efficiency.",
      position: "Lounge Manager",
    },
  ];

  return (
    <section className="testimonial-section my-28">
      <h2 className="text-4xl font-bold text-center my-8">
        What Our Clients Say
      </h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded shadow-md">
            <p className="text-lg italic">&quot;{testimonial.feedback}&quot;</p>
            <p className="mt-4 font-bold text-sm">{testimonial.name}</p>
            <p className="text-sm mb-6 text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
