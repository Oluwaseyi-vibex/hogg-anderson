"use client";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons.jsx";
import classes from "./GetInTouch.module.css";

export default function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundImage: `url(/hero2.jpg)`,
            backgroundColor: "#4169E1",
          }}
        >
          {/* <Text fz="lg" fw={700} className={`${classes.title}`} c="#fff">
            Contact information
          </Text> */}

          {/* <ContactIconsList /> */}
        </div>

        <form
          className={`${classes.form} bg-[#F5F5F5]`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="xl" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
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
