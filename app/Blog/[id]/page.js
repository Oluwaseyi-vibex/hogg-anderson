import { Colors } from "@/utils/font/color";
import { Image } from "@mantine/core";
import { notFound } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "Optimizing Your Restaurant's Inventory",
    image: "/blog1.jpg",
    content: `
      <p>
        Inventory management is the backbone of a well-run restaurant, yet many restaurateurs overlook its significance. Managing your stock effectively not only ensures that you meet customer demand but also prevents over-ordering and wastage. The first step in optimizing your inventory is to develop an organized system for tracking and managing stock. This could be through manual processes like spreadsheets or, more commonly, using restaurant-specific inventory software. By having a clear picture of your stock levels at any given time, you avoid the common pitfalls of running out of key ingredients during peak hours or letting perishable items spoil in storage.
      </p>
      
      <p>
        Another critical aspect of optimization is accurate demand forecasting. Restaurants face fluctuating customer volumes based on seasons, holidays, or even day-to-day variations. A comprehensive analysis of historical sales data can guide you in predicting future stock requirements. For example, you may notice higher sales of soups and hot beverages during the winter months, requiring adjustments in your ordering process. Ensuring that your orders align with anticipated demand minimizes waste and maximizes profits.
      </p>

      <p>
        Supplier relationships also play an important role in inventory management. Working closely with your suppliers to set clear expectations on delivery schedules, quality, and consistency helps you maintain an optimal level of inventory without overstocking. Additionally, you can negotiate better terms, bulk discounts, and more flexible return policies, all of which contribute to better inventory turnover rates. This collaboration with suppliers can also serve as a buffer in times of market price fluctuations or supply chain disruptions, helping you maintain stability.
      </p>

      <p>
        Finally, conducting regular stock audits and implementing a robust first-in, first-out (FIFO) system ensures that older inventory is used before newer stock, preventing spoilage and unnecessary waste. Routine checks and reconciliations allow you to spot discrepancies early, reducing the chances of theft or loss. By combining these strategies, you not only improve efficiency but also enhance your restaurant’s profitability and customer satisfaction.
      </p>
      `,
  },
  {
    id: 2,
    title: "Cost Accounting for Hospitality",
    image: "/images/cost-accounting.jpg",
    content: "Full content for post 2...",
  },
  {
    id: 3,
    title: "Effective Payroll Management",
    image: "/images/payroll-management.jpg",
    content: "Full content for post 3...",
  },
  {
    id: 4,
    title: "Sales Analytics for Restaurants",
    image: "/images/sales-analytics.jpg",
    content: "Full content for post 4...",
  },
  {
    id: 5,
    title: "Streamlining Your Accounting System",
    image: "/images/accounting-system.jpg",
    content: "Full content for post 5...",
  },
  {
    id: 6,
    title: "Business Advisory Services",
    image: "/images/business-advisory.jpg",
    content: "Full content for post 6...",
  },
  {
    id: 7,
    title: "Training for Hospitality Staff",
    image: "/images/staff-training.jpg",
    content: "Full content for post 7...",
  },
  {
    id: 8,
    title: "Improving Customer Experience",
    image: "/images/customer-experience.jpg",
    content: "Full content for post 8...",
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const BlogPost = ({ params }) => {
  const post = posts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-10 py-5 flex flex-col gap-5">
      <Image
        width={1000}
        height={400}
        src={post.image}
        alt={post.title}
        // className="w-[900px] h-[430px]"
      />
      <h1 className={`text-4xl text-[${Colors.white}] font-bold mt-4 mb-4`}>
        {post.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className={`text-[${Colors.white}] flex flex-col gap-5 w-[90%] font-thin text-lg`}
      />

      <p className={`text-[${Colors.white}] font-thin text-lg`}></p>
    </div>
  );
};

export default BlogPost;
