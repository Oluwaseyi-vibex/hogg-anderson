// import { HeroContentLeft } from "@/components/hero";
import { Colors } from "@/utils/font/color";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Optimizing Your Restaurant's Inventory",
      content:
        "Learn the best practices for managing and optimizing restaurant inventory...",
      image: "blog1.jpg",
      date: "September 14, 2024",
    },
    {
      id: 2,
      title: "Cost Accounting for Hospitality",
      content:
        "Discover how accurate cost accounting can impact your business profitability...",
      image: "/images/cost-accounting.jpg",
      date: "September 12, 2024",
    },
    {
      id: 3,
      title: "Effective Payroll Management",
      content:
        "Tips for managing payroll efficiently in the hospitality industry...",
      image: "/images/payroll-management.jpg",
      date: "September 10, 2024",
    },
    {
      id: 4,
      title: "Sales Analytics for Restaurants",
      content: "Utilizing sales analytics to improve restaurant performance...",
      image: "/images/sales-analytics.jpg",
      date: "September 8, 2024",
    },
    {
      id: 5,
      title: "Streamlining Your Accounting System",
      content:
        "Best practices for a more efficient accounting system in hospitality...",
      image: "/images/accounting-system.jpg",
      date: "September 6, 2024",
    },
    {
      id: 6,
      title: "Business Advisory Services",
      content: "How business advisory can transform your operations...",
      image: "/images/business-advisory.jpg",
      date: "September 4, 2024",
    },
    {
      id: 7,
      title: "Training for Hospitality Staff",
      content:
        "The importance of training for staff in the hospitality industry...",
      image: "/images/staff-training.jpg",
      date: "September 2, 2024",
    },
    {
      id: 8,
      title: "Improving Customer Experience",
      content: "Strategies to enhance customer satisfaction in hospitality...",
      image: "/images/customer-experience.jpg",
      date: "August 30, 2024",
    },
  ];

  return (
    <div className={`container relative  mx-auto px-10 bg-[${Colors.white}]`}>
      <div
        style={{
          backgroundImage: `url('/bloghero.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`h-screen w-full bg-[${Colors.blue}]`}
      >
        <div
          className={`w-full flex text-base pt-[250px] gap-4 flex-col items-center`}
        >
          <p className={`text-black font-medium`}>
            Get the latest updates and financial advise from Hogg Anderson
          </p>
        </div>
      </div>
      <div className="grid h-full my-12  md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <Link href={`/Blog/${post.id}`}>
                <p className="mt-4 inline-block text-indigo-500 hover:text-indigo-600 font-medium">
                  Read More &rarr;
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;