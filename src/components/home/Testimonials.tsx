"use client";

import React, { useRef, useState } from "react";
import Container from "../common/ui/Container";
import Card from "./testimonial/Card";

const TESTIMONIALS = [
  {
    id: 0,
    src: "/assets/client-1.webp",
    review:
      "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
    user: "Alice Johnson",
    profession: "Fashion Designer",
  },
  {
    id: 1,
    src: "/assets/client-2.jpg",
    review:
      "The tours in this website are great. I had been really enjoying with my family! Will surely recommend it to my friends.",
    user: "David Malan",
    profession: "Traveller",
  },
  {
    id: 2,
    src: "/assets/client-3.jpeg",
    review:
      " This is due to their best service, pricing and customer support. It’s throughly refresing to such a personal touch. Duis aute irure lupsum reprehenderit.",
    user: "Sheldon Smith",
    profession: "CEO",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const count = useRef<number>(0);

  const [currentSlide,setCurrentSlide] = useState<number>(0)

  const handleSlider = (cards: Element[], currentSlider: number) => {
    [...cards].forEach((elem, i) => {
      let newNum = i - currentSlider;

      if (newNum < 0) {
        newNum += cards.length;
      }

      for (let i = 0; i < cards.length; i++) {
        elem.classList.remove(`testimonial-${i + 1}`);
        elem.classList.add(`testimonial-${newNum + 1}`);
      }
    });
  };

  const onClick = () => {
    if (!containerRef.current) return;

    const cards = [...containerRef.current.children].filter((elem) =>
      elem.classList.contains("testimonial")
    );

    if (count.current === cards.length - 1) {
      count.current = 0;
    } else {
      count.current = count.current + 1;
    }
    console.log(count.current);
    handleSlider(cards, count.current);
  };

  const gotoSlide = (sliderNo: number) => {
    if (!containerRef.current) return;

    const cards = [...containerRef.current.children].filter((elem) =>
      elem.classList.contains("testimonial")
    );

    count.current = sliderNo;

    setCurrentSlide(count.current);

    handleSlider(cards, count.current);
  };

  return (
    <Container className="py-10 sm:py-20">
      <section className="my-30 rounded-xl px-6 sm:px-14 py-32 bg-gradient-to-r from-primary to-red-700 grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center gap-3.5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Quotes from our <br /> customer about us
          </h2>
          <p className="text-white text-sm font-medium leading-[1.6] w-[80%]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center lg:items-start relative lg:mt-0 lg:py-28 mt-32 py-32"
          ref={containerRef}
        >
          {TESTIMONIALS.map((test, i) => (
            <Card
              className={`testimonial-${i + 1} testimonial`}
              key={i}
              src={test.src}
              review={test.review}
              user={test.user}
              profession={test.profession}
              onClick={() => gotoSlide(test.id)}
            />
          ))}

          <div className="absolute -bottom-[115px] sm:bottom-auto sm:-right-[25px] lg:-right-[50px] flex sm:flex-col gap-2">
            {TESTIMONIALS.map((_,i)=><button key={i} className={`size-3  rounded-full ${currentSlide === i ? 'bg-secondary' : 'bg-gray-50'}`} onClick={()=>gotoSlide(i)}></button>)}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
