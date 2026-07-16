export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
  content?: string[];
  views: number;
  featured?: boolean;
  popular?: boolean;
}

export const articles: Article[] = [
  {
    id: "hr-1",
    slug: "how-to-build-a-high-performance-culture",
    title: "How to Build a High-Performance Culture in Your Organization",
    date: "May 10, 2024",
    image: "/hr-1.png",
    category: "hr-knowledge",
    excerpt:
      "Build a stronger organizational culture through practical HR strategies.",
    content: [
      "A high-performance culture is not created by slogans, posters, or short-term incentive programs. It develops when people understand what the organization expects, feel supported in their work, and see a clear connection between their contribution and the organization’s success.",

      "For HR leaders and managers, building this kind of culture requires consistent leadership, clear communication, fair people practices, and a strong commitment to employee development.",

      "1. Define what high performance means",

      "Every organization should clearly define the behaviors and results that represent high performance. Employees need to understand not only what they are expected to achieve, but also how they are expected to work with colleagues, customers, and stakeholders.",

      "Clear expectations reduce confusion and help managers evaluate performance more consistently. They also allow employees to make better decisions without waiting for constant direction.",

      "2. Connect individual work to organizational goals",

      "Employees are more engaged when they understand how their daily work contributes to a larger purpose. Managers should regularly explain how team priorities support business goals and why each role matters.",

      "This connection should be reinforced during goal setting, team meetings, performance discussions, and recognition activities.",

      "3. Build strong and accountable leadership",

      "Leaders shape culture through their everyday behavior. Employees pay attention to what leaders reward, tolerate, and prioritize. A high-performance culture requires leaders who communicate clearly, make fair decisions, provide direction, and take responsibility for results.",

      "Managers should also receive training in coaching, feedback, conflict resolution, and performance management. Technical expertise alone does not automatically make someone an effective people leader.",

      "4. Encourage continuous feedback",

      "Performance should not be discussed only during an annual review. Employees need timely and practical feedback throughout the year.",

      "Good feedback helps employees understand what they are doing well, what needs improvement, and what support is available. It should be specific, respectful, and focused on observable behavior rather than personality.",

      "5. Recognize meaningful contributions",

      "Recognition reinforces the behaviors and results the organization values. It does not always need to involve financial rewards. A sincere message from a manager, public appreciation, expanded responsibility, or a development opportunity can be highly meaningful.",

      "Recognition should be timely, fair, and connected to a specific contribution. Generic praise is less effective than explaining exactly why the employee’s work mattered.",

      "6. Invest in employee development",

      "High-performing organizations help employees continue to grow. Development can include formal training, coaching, mentoring, job rotations, challenging assignments, and access to new responsibilities.",

      "Managers should discuss career interests with employees and identify realistic development actions. When people see opportunities to learn and progress, they are more likely to remain engaged and committed.",

      "7. Address poor performance fairly",

      "A strong culture does not ignore performance problems. When expectations are not met, managers should respond promptly and fairly.",

      "The first step is to understand the cause. The employee may lack clarity, skills, resources, motivation, or appropriate support. Managers should explain the gap, agree on improvement actions, provide reasonable assistance, and document important discussions.",

      "8. Support employee well-being",

      "Sustainable high performance is different from constant pressure. Employees cannot perform at their best when excessive workload, unclear priorities, or poor management practices create ongoing exhaustion.",

      "Organizations should monitor workload, encourage reasonable boundaries, provide psychological safety, and create an environment where employees can raise concerns without fear.",

      "9. Use data to improve people practices",

      "HR data can help organizations understand whether their culture is improving. Useful indicators may include employee turnover, absenteeism, engagement, internal promotion, performance distribution, learning participation, and employee feedback.",

      "The purpose of measurement is not simply to produce reports. Data should lead to informed conversations and practical action.",

      "Conclusion",

      "A high-performance culture is built through many consistent decisions rather than one major initiative. Clear expectations, capable managers, regular feedback, employee development, fair accountability, and sustainable working practices all contribute to stronger performance.",

      "When these elements work together, employees are more likely to understand their role, take ownership of their work, and contribute to long-term organizational success.",
    ],
    views: 2356,
    featured: true,
    popular: true,
  },
  {
    id: "hr-2",
    slug: "effective-feedback-a-key-to-employee-growth",
    title: "Effective Feedback: A Key to Employee Growth",
    date: "April 28, 2024",
    image: "/hr-2.png",
    category: "hr-knowledge",
    excerpt:
      "Learn how effective feedback improves employee engagement and performance.",
    views: 1842,
    featured: true,
    popular: true,
  },
  {
    id: "hr-3",
    slug: "hr-metrics-that-matter-for-business-leaders",
    title: "HR Metrics That Matter for Business Leaders",
    date: "April 15, 2024",
    image: "/hr-3.png",
    category: "hr-knowledge",
    excerpt:
      "Discover the HR metrics every business leader should monitor.",
    views: 1635,
    featured: true,
  },
  {
    id: "hr-4",
    slug: "building-an-effective-onboarding-process",
    title: "Building an Effective Onboarding Process",
    date: "April 2, 2024",
    image: "/hr-4.png",
    category: "hr-knowledge",
    excerpt:
      "A great onboarding experience sets the foundation for long-term employee success.",
    views: 1214,
  },
  {
    id: "hr-5",
    slug: "employee-well-being-from-policies-to-practice",
    title: "Employee Well-being: From Policies to Practice",
    date: "March 18, 2024",
    image: "/hr-5.png",
    category: "hr-knowledge",
    excerpt:
      "Practical ways to support employee well-being and create a healthier workplace.",
    views: 987,
  },
  {
    id: "law-1",
    slug: "update-on-labor-contract-regulations-in-vietnam-2024",
    title: "Update on Labor Contract Regulations in Vietnam 2024",
    date: "May 8, 2024",
    image: "/law-1.png",
    category: "labor-laws",
    excerpt:
      "Key changes and what businesses need to know to ensure compliance.",
    views: 2148,
    featured: true,
    popular: true,
  },
  {
    id: "law-2",
    slug: "new-guidelines-on-probation-period-under-labor-code",
    title: "New Guidelines on Probation Period Under Labor Code",
    date: "April 25, 2024",
    image: "/law-2.png",
    category: "labor-laws",
    excerpt:
      "Understand the latest rules on probation period, duration and requirements.",
    views: 1763,
    featured: true,
    popular: true,
  },
  {
    id: "law-3",
    slug: "understanding-termination-rules-and-compliance",
    title: "Understanding Termination Rules and Compliance",
    date: "April 12, 2024",
    image: "/law-3.png",
    category: "labor-laws",
    excerpt:
      "A practical guide to lawful termination and reducing legal risks for employers.",
    views: 1492,
    featured: true,
  },
  {
    id: "law-4",
    slug: "overtime-regulations-what-employers-need-to-know",
    title: "Overtime Regulations: What Employers Need to Know",
    date: "March 28, 2024",
    image: "/law-4.png",
    category: "labor-laws",
    excerpt:
      "Summary of overtime rules, payment and compliance requirements.",
    views: 1106,
  },
  {
    id: "law-5",
    slug: "annual-leave-and-public-holiday-regulations-2024",
    title: "Annual Leave and Public Holiday Regulations 2024",
    date: "March 10, 2024",
    image: "/law-5.png",
    category: "labor-laws",
    excerpt:
      "Updated provisions on annual leave, public holidays and entitlements.",
    views: 864,
  },
  {
    id: "market-1",
    slug: "vietnam-hr-market-overview-2024",
    title: "Vietnam HR Market Overview 2024: Key Trends and Insights",
    date: "May 5, 2024",
    image: "/market-1.png",
    category: "market-perspectives",
    excerpt:
      "Key takeaways of key HR market changes that matter most for businesses.",
    views: 2289,
    featured: true,
    popular: true,
  },
  {
    id: "market-2",
    slug: "the-future-of-work-in-vietnam",
    title: "The Future of Work in Vietnam: Trends to Watch",
    date: "April 30, 2024",
    image: "/market-2.png",
    category: "market-perspectives",
    excerpt:
      "Explore the major shifts in the world of work and how to adapt your people strategies.",
    views: 1954,
    featured: true,
    popular: true,
  },
  {
    id: "market-3",
    slug: "salary-benchmark-guide-for-key-roles-in-2024",
    title: "Salary Benchmark Guide for Key Roles in 2024",
    date: "April 8, 2024",
    image: "/market-3.png",
    category: "market-perspectives",
    excerpt:
      "Latest salary benchmarks and market insights for in-demand roles.",
    views: 1688,
    featured: true,
  },
  {
    id: "market-4",
    slug: "diversity-equity-and-inclusion-business-value",
    title: "Diversity, Equity & Inclusion: Why It Drives Business Value",
    date: "March 25, 2024",
    image: "/market-4.png",
    category: "market-perspectives",
    excerpt:
      "Building an inclusive workplace that attracts talent and drives better outcomes.",
    views: 1325,
  },
  {
    id: "market-5",
    slug: "the-rise-of-skills-based-organizations",
    title: "The Rise of Skills-based Organizations",
    date: "March 10, 2024",
    image: "/market-5.png",
    category: "market-perspectives",
    excerpt:
      "How focusing on skills over titles and degrees helps organizations build a more agile and future-ready workforce.",
    views: 1042,
  },
];

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((article) => article.category === categorySlug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}