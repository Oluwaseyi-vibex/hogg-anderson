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
      image: "/blog1.jpg",
      date: "September 14, 2024",
    },
    {
      id: 2,
      title: "Cost Accounting for Hospitality",
      content:
        "Discover how accurate cost accounting can impact your business profitability...",
      image: "/blog2.jpg",
      date: "September 12, 2024",
    },
    {
      id: 3,
      title: "Effective Payroll Management",
      content:
        "Tips for managing payroll efficiently in the hospitality industry...",
      image: "/blog3.jpg",
      date: "September 10, 2024",
    },
    {
      id: 4,
      title: "Sales Analytics for Restaurants",
      content: "Utilizing sales analytics to improve restaurant performance...",
      image: "/blog4.jpg",
      date: "September 8, 2024",
    },
    {
      id: 5,
      title: "Streamlining Your Accounting System",
      content:
        "Best practices for a more efficient accounting system in hospitality...",
      image: "/blog5.jpg",
      date: "September 6, 2024",
    },
    {
      id: 6,
      title: "Business Advisory Services",
      content: "How business advisory can transform your operations...",
      image: "/blog6.jpg",
      date: "September 4, 2024",
    },
    {
      id: 7,
      title: "Training for Hospitality Staff",
      content:
        "The importance of training for staff in the hospitality industry...",
      image: "/blog7.jpg",
      date: "September 2, 2024",
    },
    {
      id: 8,
      title: "Improving Customer Experience",
      content: "Strategies to enhance customer satisfaction in hospitality...",
      image: "/blog8.jpg",
      date: "August 30, 2024",
    },
  ];

  return (
    <div
      className={`container relative  mx-auto px-4 md:px-10 bg-[${Colors.white}]`}
    >
      <div
        style={{
          backgroundImage: `url('/bloghero.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`h-[400px] md:h-screen w-full `}
      >
        <div
          className={`w-full flex text-base md:pt-[300px] gap-4 flex-col items-center`}
        ></div>
      </div>
      <p className={`text-blue  text-4xl mt-9 font-semibold`}>
        Get the latest updates and financial advise from Hogg Anderson
      </p>
      <div className="grid h-full my-12 pb-8 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              height={1000}
              width={1000}
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
