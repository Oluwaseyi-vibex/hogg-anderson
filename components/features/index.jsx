"use client";
import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
} from "@mantine/core";
import {
  IconCalculatorFilled,
  IconTax,
  IconCalendarCheck,
  IconChartBar,
} from "@tabler/icons-react";
import classes from "./FeaturesTitle.module.css";

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
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md" variant="gradient" bg={"#FFCC99"}>
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

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} c={"white"} order={2}>
            Why Accurate Monthly Inventory Valuation Matters
          </Title>
          <Text c="dimmed">
            Accurate inventory valuation is vital for financial stability in the
            hospitality industry, affecting everything from cost control to tax
            compliance. At Hogg Anderson Business Solutions Limited, we ensure
            precise valuation, helping you make informed decisions, improve
            efficiency, and build investor trust.
          </Text>

          <Button
            variant="gradient"
            bg={"#4169E1"}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
