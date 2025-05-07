"use client";
import { useForm } from "react-hook-form";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Notification,
} from "@mantine/core";
import classes from "./GetInTouch.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function GetInTouch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "contact@hogganderson.com.ng",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundImage: `url(/hero2.jpg)`,
            backgroundColor: "#4169E1",
          }}
        ></div>

        <form
          className={`${classes.form} bg-[#F5F5F5]`}
          onSubmit={handleSubmit(onSubmit, (formErrors) =>
            console.log("Form errors:", formErrors)
          )}
        >
          <Text fz="xl" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            {success && (
              <Notification
                title="Success"
                color="green"
                onClose={() => setSuccess(false)}
              >
                Your message has been sent successfully!
              </Notification>
            )}
            {error && (
              <Notification
                title="Error"
                color="red"
                onClose={() => setError(null)}
              >
                {error}
              </Notification>
            )}

            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />

              <TextInput
                label="Your email"
                placeholder="hello@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email?.message}
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              error={errors.subject?.message}
            />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              {...register("message", { required: "Message is required" })}
              error={errors.message?.message}
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                variant="gradient"
                bg={"#4169E1"}
                size="sm"
                radius="sm"
                justify="center"
                w={150}
                loading={loading}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
