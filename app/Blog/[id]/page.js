import { Colors } from "@/utils/font/color";
import { poppins } from "@/utils/font/fonts";
import { Image } from "@mantine/core";
import Link from "next/link";
// import Image from "next/image";
// import { Image } from "@mantine/core";
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
    image: "/blog2.jpg",
    content: `
    <p>
      Cost accounting in the hospitality industry is essential for maintaining profitability and sustainability. Unlike traditional businesses, hotels, restaurants, and catering services deal with fluctuating costs and revenues that vary significantly based on seasonality, guest volumes, and market conditions. As a result, proper cost accounting allows businesses to monitor and control operational expenses, providing a clear picture of profitability at any given time.
    </p>

    <p>
      One of the most significant aspects of cost accounting is tracking direct costs, such as food and beverage expenses, labor, and utilities. These costs often represent a considerable portion of a hospitality business's overall expenses. To manage them effectively, many businesses implement cost control measures, such as limiting food waste, optimizing staff scheduling, and negotiating better supplier contracts. By identifying where costs can be reduced without sacrificing quality, businesses can improve their profit margins and operate more efficiently.
    </p>

    <p>
      Indirect costs, like marketing expenses, equipment depreciation, and administrative overheads, also play a crucial role in the cost accounting process. While these expenses may not be directly tied to a product or service, they significantly impact the overall financial performance of a business. Properly allocating these costs ensures that businesses can set competitive prices and understand the true profitability of each department or service offering.
    </p>

    <p>
      Another key component of hospitality cost accounting is variance analysis. This process involves comparing actual costs against budgeted or forecasted costs to identify discrepancies and adjust operational strategies accordingly. For example, if food costs for a particular month exceed the budget, management can investigate the root causes, such as supplier price hikes or excessive waste, and take corrective actions. In this way, cost accounting is not just about number-crunching but about making informed decisions that keep the business financially healthy.
    </p>
    `,
  },
  {
    id: 3,
    title: "Effective Payroll Management",
    image: "/blog3.jpg",
    content: `
    <p>
      Effective payroll management is a cornerstone of any successful business, especially in the hospitality industry where staffing levels can fluctuate dramatically based on seasonality and events. Timely and accurate payroll ensures that employees are compensated fairly and on time, fostering a positive work environment and increasing staff retention. Poor payroll management, on the other hand, can lead to disgruntled employees, increased turnover, and potential legal issues. It is crucial to implement a streamlined payroll process that addresses the specific needs of your workforce while adhering to labor laws.
    </p>

    <p>
      One way to optimize payroll management is by leveraging automated payroll software. These systems handle everything from calculating wages and taxes to processing payments and generating detailed reports. By automating the process, businesses reduce the likelihood of human errors, which can be costly and time-consuming to fix. Moreover, payroll software can help businesses stay compliant with tax regulations, which vary depending on the location and type of business. This not only saves time but also reduces the risk of incurring penalties for non-compliance.
    </p>

    <p>
      Another critical factor in payroll management is understanding labor laws, particularly those related to overtime, minimum wage, and employee benefits. Misunderstanding or overlooking these regulations can result in legal complications and financial losses. In the hospitality industry, where employees often work irregular hours, it is important to accurately track time worked and ensure that employees are compensated for overtime. Staying compliant with these laws not only protects your business from legal repercussions but also builds trust and transparency with your employees.
    </p>

    <p>
      Lastly, payroll audits should be conducted regularly to ensure accuracy and compliance. Audits involve reviewing payroll records, verifying employee classifications, and checking for discrepancies in wage calculations or tax withholdings. By conducting periodic audits, businesses can detect and resolve issues before they become larger problems. This proactive approach ensures that payroll management remains efficient and aligned with the overall financial goals of the company.
    </p>
    `,
  },
  {
    id: 4,
    title: "Sales Analytics for Restaurants",
    image: "/blog4.jpg",
    content: "Full content for post 4...",
  },
  {
    id: 5,
    title: "Streamlining Your Accounting System",
    image: "/blog5.jpg",
    content: "Full content for post 5...",
  },
  {
    id: 6,
    title: "Business Advisory Services",
    image: "/blog6.jpg",
    content: "Full content for post 6...",
  },
  {
    id: 7,
    title: "Training for Hospitality Staff",
    image: "/blog7.jpg",
    content: "Full content for post 7...",
  },
  {
    id: 8,
    title: "Improving Customer Experience",
    image: "/blog8.jpg",
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
    <div className={`${poppins.className} w-full`}>
      <div
        className={`px-10 py-8 flex gap-2 flex-col w-full bg-[${Colors.orange}]`}
      >
        <div className="text-[#4169e1] sticky top-[95px] py-1 flex items-center gap-4 text-sm">
          <p className="cursor-pointer">Home</p>
          <div className={`text-[${Colors.bg}] text-xs`}>{`>`}</div>{" "}
          <Link className="cursor-pointer link link-hover " href={"/Blog"}>
            Blog
          </Link>
          <div className={`text-[${Colors.bg}] text-xs`}>{`>`}</div>{" "}
          <Link
            className="cursor-pointer link uppercase link-hover "
            href={"#"}
          >
            {post.title}
          </Link>
        </div>
        <h1 className={`text-4xl text-[${Colors.white}] uppercase font-bold`}>
          {post.title}
        </h1>
        <div className={`w-[100px] h-1 bg-[#4169e1]`}></div>
      </div>
      <div className="px-10 py-5 flex flex-col gap-5">
        <Image
          w={700}
          h={300}
          src={post.image}
          alt={post.title}
          className="w-full h-[280px] "
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className={`text-[${Colors.white}] flex flex-col gap-5 w-[90%] font-thin text-lg`}
        />

        <p className={`text-[${Colors.white}] font-thin text-lg`}></p>
      </div>
    </div>
  );
};

export default BlogPost;
