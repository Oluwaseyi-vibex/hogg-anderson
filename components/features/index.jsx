"use client"; // Ensure client-side rendering for Next.js

import React, { useEffect, useRef } from "react";
import { Title, SimpleGrid, Text, ThemeIcon, Grid, rem } from "@mantine/core";
import {
  IconCalculatorFilled,
  IconTax,
  IconCalendarCheck,
  IconChartBar,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./FeaturesTitle.module.css"; // Your CSS module

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const features = [
  {
    icon: IconChartBar,
    title: "Financial Accuracy",
    description:
      "Ensure your financial statements reflect the true value of your inventory, providing accurate profit and loss calculations.",
  },
  {
    icon: IconCalculatorFilled,
    title: "Cost Control",
    description:
      "Manage costs effectively by avoiding overstocking or understocking, minimizing waste and optimizing purchasing.",
  },
  {
    icon: IconTax,
    title: "Tax Compliance",
    description:
      "Ensure correct tax reporting to avoid overpayment or underpayment of taxes, preventing legal or financial issues.",
  },
  {
    icon: IconCalendarCheck,
    title: "Business Planning",
    description:
      "Make informed decisions on purchasing, production, and sales strategies, improving operational efficiency.",
  },
];

export function FeaturesTitle() {
  const wrapperRef = useRef(null); // Ref for the entire wrapper
  const serviceTitle = useRef(null);
  const items = features.map((feature) => (
    <div key={feature.title} className="item">
      <ThemeIcon size={54} radius="md" variant="gradient" bg={"#FFCC99"}>
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" color="#F5F5F5" className="font-bold" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  useEffect(() => {
    const textAnime = () => {
      gsap.to(serviceTitle.current, {
        duration: 1,
        text: "Why Accurate Monthly Inventory Valuation Matters",
        ease: "none",
        scrollTrigger: {
          trigger: serviceTitle.current, // Trigger animation when this element enters the viewport
          start: "top 80%", // Trigger when the top of the element reaches 80% of the viewport
          end: "bottom 50%", // End the animation when the bottom of the element reaches
          toggleActions: "play none none none", // Play animation on enter
          scrub: true,
          // markers: true,
        },
      });
    };
    // return () => textAnime.revert();

    const ctx = gsap.context(() => {
      // Left Column Animation (Title and Text)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current.querySelector(".left-col"),
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1, // Ties animation progress to scroll
            toggleActions: "play none none none", // Replay each time in view
          },
        })
        .to(wrapperRef.current.querySelector("h2"), {
          duration: 1.5,
          ease: "power3.in",
          text: "Why Accurate Monthly Inventory Valuation Matters",
        })
        .fromTo(
          wrapperRef.current.querySelector("p"),
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5 },
          "<0.2"
        );

      // Right Column Animation (Feature Items)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current.querySelector(".right-col"),
            start: "top 80%",
            scrub: 1, // Scrub animation progress with scroll
            toggleActions: "play none none none", // Replay every time it's in view
          },
        })
        .fromTo(
          wrapperRef.current.querySelectorAll(".item"),
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
        );
    }, wrapperRef);

    // Cleanup animation on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className={classes.wrapper}>
      <Grid gutter={45}>
        {/* Left Column */}
        <Grid.Col span={{ base: 12, md: 5 }} className="left-col">
          <Title
            ref={serviceTitle}
            className={classes.title}
            c="white"
            order={2}
          ></Title>
          <Text c="dimmed">
            Accurate inventory valuation is vital for financial stability in the
            hospitality industry, affecting everything from cost control to tax
            compliance. At Hogg Anderson Business Solutions Limited, we ensure
            precise valuation, helping you make informed decisions, improve
            efficiency, and build investor trust.
          </Text>
        </Grid.Col>

        {/* Right Column */}
        <Grid.Col span={{ base: 12, md: 7 }} className="right-col">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
