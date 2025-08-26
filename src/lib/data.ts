import { project } from "@/components/parts/ProjectCard";
import { blogCard } from "./interface";

export const skillsData = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 97 },
    { name: "Solid.js", level: 80 },
    { name: "TypeScript", level: 90 },
  ],
  Styling: [
    { name: "SASS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Styled components", level: 70 },
  ],
  Backend: [
    { name: "Express.js", level: 80 },
    { name: "JAVA spring", level: 70 },
    { name: "Hono", level: 75 },
    { name: "Go", level: 50 },
    { name: "Trpc", level: 50 },
  ],
  Database: [
    { name: "Drizzle", level: 85 },
    { name: "Sqlite", level: 85 },
    { name: "Redis", level: 80 },
    { name: "Mysql", level: 75 },
    { name: "MongoDB", level: 70 },
  ],
  "DevOps & Cloud": [
    { name: "Vercel (or Netlify)", level: 85 },
    { name: "Turso (or Neon)", level: 85 },
    { name: "Docker", level: 80 },
    { name: "GitHub Actions", level: 68 },
  ],
  More: [
    { name: "Git", level: 99 },
    { name: "Linux", level: 98 },
    { name: "Figma", level: 20 },
  ],
};

export const projects: project[] = [
  {
    title: "Hooshban",
    titleFa: "هوشبان",
    description: "Full-stack Branding website with AI features",
    descriptionFa: "وب‌سایت برندینگ فول‌استک با قابلیت‌های هوش مصنوعی",
    tech: ["Solid.js", "Drizzle", "TailwindCSS", "shadcn", "Chat interface"],
    link: "https://brand-amber.vercel.app/",
    github: "https://github.com/thepooyan/brand.git",
    isDemo: true,
    importantPages: [
      { name: "Chat page", nameFa: "صفحه چت", url: "/services/ai/chat-bot/Demo" },
      { name: "Login", nameFa: "ورود", url: "/Login" },
      { name: "Order", nameFa: "سفارش", url: "/Place-order/Website" },
    ],
    lighthouseScore: { performance: 100, accessibility: 95, bestPractices: 96, seo: 100 },
    features: [
      {
        title: "AI chat",
        titleFa: "چت هوش مصنوعی",
        description:
          "An intelligent chat assistant that interfaces with the Gemini API, utilizing a predefined system prompt to generate and deliver responses.",
        descriptionFa:
          "یک دستیار چت هوشمند که با API جِمینی ارتباط برقرار می‌کند و با استفاده از دستورالعمل‌های از پیش تعریف‌شده، پاسخ‌ها را تولید و ارائه می‌کند.",
      },
      {
        title: "Three animation libraries",
        titleFa: "سه کتابخانه انیمیشن",
        description:
          "A combination of View Transition API, a custom Motion.js implementation for SolidJS, and Tailwind CSS animations to create smooth, responsive UI transitions.",
        descriptionFa:
          "ترکیبی از View Transition API، پیاده‌سازی سفارشی Motion.js برای SolidJS و انیمیشن‌های Tailwind CSS برای ایجاد انتقالات روان و پاسخگو در رابط کاربری.",
      },
      {
        title: "SSR rendering",
        titleFa: "رندرینگ SSR",
        description:
          "Server-side rendering implemented with Suspense in SolidStart to enhance initial load performance and SEO capabilities.",
        descriptionFa:
          "رندرینگ سمت سرور با استفاده از Suspense در SolidStart برای بهبود عملکرد بارگذاری اولیه و قابلیت‌های SEO.",
      },
      {
        title: "Telegram connection",
        titleFa: "اتصال تلگرام",
        description:
          "A Telegram integration that enables event notifications for administrators and supports direct AI interaction through the messaging platform.",
        descriptionFa:
          "یک یکپارچه‌سازی تلگرام که اعلان رویدادها را برای مدیران فعال می‌کند و از تعامل مستقیم هوش مصنوعی از طریق پلتفرم پیام‌رسان پشتیبانی می‌کند.",
      },
    ],
    challenges: [
      {
        title: "Chat streaming",
        titleFa: "پخش زنده چت",
        description:
          "Developing a front-end mechanism to receive the LLM’s response in real time and stream it to the client, incorporating a buffer to ensure the text appears in a smooth, visually appealing manner.",
        descriptionFa:
          "توسعه مکانیزم فرانت‌اند برای دریافت پاسخ LLM به صورت زمان واقعی و ارسال آن به کاربر، با استفاده از بافر برای نمایش روان و جذاب متن.",
      },
    ],
    image: "/samples/Hooshban.webp",
  },
  {
    title: "Trusty.sci",
    titleFa: "Trusty.sci",
    description: "Educational article sharing with tons of features",
    descriptionFa: "به اشتراک‌گذاری مقالات آموزشی با امکانات فراوان",
    tech: ["Next.js", "Stripe", "NextUI", "TailwindCSS", ".Net rest api"],
    link: "https://trustysci.com/",
    importantPages: [
      { name: "Search", nameFa: "جستجو", url: "/Search?searchKeys=[0,1,2,3,4,5,6,7]&pageNumber=1&searchTerm=sanaat" },
      { name: "Profile", nameFa: "پروفایل", url: "/user/3/amirhossein-sanaat/submittedManuscripts" },
      { name: "Discussion", nameFa: "بحث و گفتگو", url: "/Manuscript/2/the-promise-of-artificial-intelligence-and-deep-learning-in-pet-and-spect-imaging" },
      { name: "User Panel", nameFa: "پنل کاربر", url: "/panel/RegisterReviewer" },
    ],
    lighthouseScore: { performance: 98, accessibility: 89, bestPractices: 100, seo: 82 },
    features: [
      {
        title: "Stripe payment",
        titleFa: "اتصال به درگاه Stripe",
        description: "Application connects to Stripe for services with payment.",
        descriptionFa: "برنامه میتواند با اتصال به Stripe فرایند پرداخت انجام دهد.",
      },
      {
        title: "Live chat page",
        titleFa: "صفحه چت زنده",
        description:
          "An interactive live chat interface where users can post comments and upload images in real time.",
        descriptionFa:
          "یک رابط چت زنده تعاملی که کاربران می‌توانند نظرات خود را ارسال کرده و تصاویر را به صورت زنده بارگذاری کنند.",
      },
      {
        title: "Next.js tag-based caching",
        titleFa: "کش مبتنی بر تگ Next.js",
        description:
          "Full-page and data-level caching implemented using Next.js tag-based cache with precise invalidation for up-to-date content delivery.",
        descriptionFa:
          "کش کامل صفحه و داده‌ها با استفاده از کش مبتنی بر تگ Next.js با اعتبارسنجی دقیق برای ارائه محتوای به‌روز.",
      },
      {
        title: "Dynamic pages",
        titleFa: "صفحات پویا",
        description:
          "Pages that can be created on demand, assigned to the header or footer navigation, and customized with dynamic titles and content.",
        descriptionFa:
          "صفحات قابل ایجاد بر اساس نیاز، اختصاص به ناوبری هدر یا فوتر، و سفارشی‌سازی با عنوان‌ها و محتوای پویا.",
      },
      {
        title: "Dynamic content management",
        titleFa: "مدیریت محتوای پویا",
        description:
          "A fully dynamic landing page where all content is managed by administrators through a CKEditor-powered dashboard.",
        descriptionFa:
          "صفحه فرود کاملاً پویا که تمام محتوا توسط مدیران از طریق داشبورد مبتنی بر CKEditor مدیریت می‌شود.",
      },
    ],
    challenges: [
      {
        title: "Complex forms",
        titleFa: "فرم‌های پیچیده",
        description:
          "Building advanced forms that required specialized libraries, dynamic dropdowns with on-demand data fetching, and real-time search suggestion handling with debouncing.",
        descriptionFa:
          "ساخت فرم‌های پیشرفته که نیاز به کتابخانه‌های تخصصی داشت، با منوهای کشویی پویا، واکشی داده‌ها بر اساس نیاز و مدیریت پیشنهادهای جستجو در زمان واقعی با Debouncing.",
      },
    ],
    image: "/samples/trusty.webp",
  },
  {
    title: "Tahlildadeh Academy",
    titleFa: "آکادمی تحلیل‌داده",
    description: "Coding Academy website",
    descriptionFa: "وب‌سایت آکادمی کدنویسی",
    tech: ["SASS", "HTML", "Pure js", ".Net Razor Pages"],
    link: "https://tahlildadeh.com/",
    importantPages: [],
    lighthouseScore: { performance: 91, accessibility: 69, bestPractices: 96, seo: 92 },
    features: [],
    challenges: [],
    image: "/samples/Tahlildadeh.webp",
  },
  {
    title: "Invoice creation app",
    titleFa: "اپلیکیشن صدور فاکتور",
    description: "Hobby project, for creating and sharing invoices easily",
    descriptionFa: "پروژه سرگرمی برای ایجاد و اشتراک‌گذاری آسان فاکتور",
    tech: ["Solid.js", "UnoCSS", "shadcn", "Python", "FastAPI"],
    link: "https://factor-coral.vercel.app",
    github: "https://github.com/thepooyan/factor",
    isDemo: true,
    isHobby: true,
    importantPages: [],
    lighthouseScore: { performance: 98, accessibility: 89, bestPractices: 93, seo: 73 },
    features: [],
    challenges: [],
    image: "/samples/onetapfactor.webp",
  },
  {
    title: "Private Room",
    titleFa: "Private Room",
    description: "A Hobby chating website, with Crypto encryption",
    descriptionFa: "یک وب‌سایت سرگرمی چت با رمزگذاری کریپتو",
    tech: ["Solid.js", "Pocketbase", "shadcn", "TailwindCSS", "WebCryptoAPI"],
    link: "",
    github: "https://github.com/thepooyan/private-room",
    isDemo: true,
    isHobby: true,
    importantPages: [],
    lighthouseScore: { performance: 55, accessibility: 78, bestPractices: 100, seo: 70 },
    features: [
      {
        title: "Cryptographic identity",
        titleFa: "هویت رمزنگاری‌شده",
        description: "A privacy-focused system where users are identified solely through cryptographic keys, ensuring complete anonymity.",
        descriptionFa: "سیستم متمرکز بر حفظ حریم خصوصی که کاربران تنها از طریق کلیدهای رمزنگاری‌شده شناسایی می‌شوند و ناشناسی کامل را تضمین می‌کند.",
      },
      {
        title: "Encrypted messaging",
        titleFa: "پیام‌رسانی رمزنگاری‌شده",
        description: "End-to-end encrypted communication that guarantees message confidentiality and security.",
        descriptionFa: "ارتباط رمزنگاری‌شده انتها به انتها که محرمانگی و امنیت پیام‌ها را تضمین می‌کند.",
      },
      {
        title: "Key-based authentication",
        titleFa: "احراز هویت مبتنی بر کلید",
        description: "A streamlined account creation and authentication process where no personal data is stored on the server, relying entirely on private key ownership verification.",
        descriptionFa: "فرآیند ساده ایجاد و احراز هویت حساب که هیچ داده شخصی روی سرور ذخیره نمی‌شود و کاملاً بر اساس مالکیت کلید خصوصی تأیید می‌شود.",
      },
    ],
    challenges: [
      {
        title: "Cryptography API integration",
        titleFa: "یکپارچه‌سازی API رمزنگاری",
        description: "Mastering the Web Crypto API to securely generate, store, and manage cryptographic keys in the browser.",
        descriptionFa: "تسلط بر Web Crypto API برای تولید، ذخیره و مدیریت امن کلیدهای رمزنگاری در مرورگر.",
      },
      {
        title: "Key-based authentication system",
        titleFa: "سیستم احراز هویت مبتنی بر کلید",
        description: "Designing an authentication mechanism that verifies user identity through private key ownership without revealing sensitive information.",
        descriptionFa: "طراحی مکانیزم احراز هویت که هویت کاربر را از طریق مالکیت کلید خصوصی تأیید می‌کند بدون افشای اطلاعات حساس.",
      },
      {
        title: "Account deletion with proof of ownership",
        titleFa: "حذف حساب با اثبات مالکیت",
        description: "Implementing a secure account deletion process that requires cryptographic proof of ownership before execution.",
        descriptionFa: "پیاده‌سازی فرآیند امن حذف حساب که قبل از اجرا نیاز به اثبات رمزنگاری شده مالکیت دارد.",
      },
      {
        title: "Dual-key encrypted messaging",
        titleFa: "پیام‌رسانی رمزنگاری‌شده دو کلیدی",
        description: "Creating a message encryption method accessible only to the private keys of both participants in a conversation.",
        descriptionFa: "ایجاد روش رمزنگاری پیام که تنها توسط کلیدهای خصوصی هر دو شرکت‌کننده در گفتگو قابل دسترسی است.",
      },
    ],
    image: "/samples/privateRoom.webp",
  },
];

export const blogPosts:blogCard[] = [
  {
    title: "Building Scalable React Applications",
    description:
      "Best practices for structuring large React applications with proper state management and component architecture.",
    date: "2024-01-15",
    readTime: 8,
  },
  {
    title: "Modern Backend Development with Node.js",
    description:
      "Exploring the latest trends in Node.js development including microservices and serverless architectures.",
    date: "2024-01-08",
    readTime: 6,
  },
  {
    title: "Database Design Patterns",
    description:
      "Common database design patterns and when to use them in your applications.",
    date: "2024-01-01",
    readTime: 10,
  },
];
