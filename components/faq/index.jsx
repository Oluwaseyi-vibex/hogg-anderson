"use client";
import React from "react";
import { Accordion, Container, Title, Text, Button } from "@mantine/core";
import { Colors } from "@/utils/font/color";

const FAQSection = () => {
  return (
    <Container size="md" my="xl">
      {/* Title Section */}
      <Title c={Colors.blue} order={2} align="center" my="lg">
        Frequently Asked Questions
      </Title>

      {/* Accordion FAQ Section */}
      <Accordion
        variant="separated"
        radius="md"
        w={1000}
        transitionDuration={300}
        sx={{ backgroundColor: "#f9f9f9" }} // Background for FAQ
      >
        {/* FAQ 1 */}
        <Accordion.Item value="faq-1">
          <Accordion.Control c={Colors.blue}>
            How do I schedule a consultation?
          </Accordion.Control>
          <Accordion.Panel>
            Scheduling a consultation with Hogg Anderson is easy! Simply fill
            out the contact form above or reach out to us directly at +1 (800)
            123-4567. You can also email us at contact@hogganderson.com. Once we
            receive your request, a representative will get in touch within 1-2
            business days to confirm the details.
          </Accordion.Panel>
        </Accordion.Item>

        {/* FAQ 2 */}
        <Accordion.Item value="faq-2">
          <Accordion.Control c={Colors.blue}>
            What services do you offer?
          </Accordion.Control>
          <Accordion.Panel>
            Hogg Anderson Business Solutions provides a wide range of services,
            including cost accounting for the hospitality industry, financial
            consulting, inventory management, business advisory services, and
            more. For a full list of services, visit our Services page or
            contact us for more specific inquiries.
          </Accordion.Panel>
        </Accordion.Item>

        {/* FAQ 3 */}
        <Accordion.Item value="faq-3">
          <Accordion.Control c={Colors.blue}>
            How soon will I hear back after contacting you?
          </Accordion.Control>
          <Accordion.Panel>
            We aim to respond to all inquiries within 24 hours on business days.
            For more complex requests, like detailed consultations or project
            discussions, it may take up to 48 hours. If you haven&apos;t
            received a response, please check your spam folder or give us a
            call.
          </Accordion.Panel>
        </Accordion.Item>

        {/* FAQ 4 */}
        <Accordion.Item value="faq-4">
          <Accordion.Control c={Colors.blue}>
            What industries do you specialize in?
          </Accordion.Control>
          <Accordion.Panel>
            While Hogg Anderson serves a variety of sectors, we specialize in
            providing accounting and business solutions for the hospitality
            industry. This includes hotels, restaurants, and other
            hospitality-focused businesses. Our deep expertise in this area
            allows us to provide tailored financial services that enhance
            profitability and operational efficiency.
          </Accordion.Panel>
        </Accordion.Item>

        {/* FAQ 5 */}
        <Accordion.Item value="faq-5">
          <Accordion.Control c={Colors.blue}>
            Can I request a customized solution for my business?
          </Accordion.Control>
          <Accordion.Panel>
            Absolutely! We understand that every business is unique, which is
            why we offer customized financial and business solutions based on
            your specific needs. Our team will work closely with you to identify
            challenges and develop strategies that align with your goals.
            Contact us today to discuss how we can help your business grow.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      {/* CTA Section */}
      <Text
        align="center"
        c={Colors.white}
        className="flex items-center gap-5 justify-center"
        mt="lg"
      >
        <p> Didn&apos;t find what you were looking for? </p>{" "}
        <Button
          component="a"
          //   href="/contact"
          variant="light"
          color="blue"
          //   mt="md"
        >
          Contact Us
        </Button>
      </Text>
    </Container>
  );
};

export default FAQSection;
