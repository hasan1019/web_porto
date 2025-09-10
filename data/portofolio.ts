export interface ProjectImage {
  src: string;
  caption: string;
}
export interface FaQ {
  question: string;
  answer: string;
}
export interface Project {
  id: number;
  tittle: string;
  description: string;
  details: string;
  faqs: FaQ[];
  bgColor: string;
  span?: string;
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 1,
    tittle: "SinauBareng",
    description: "Internship Team Project",
    details:
      "This UI/UX design was created while I was doing an independent internship with MagangJogja as a UI/UX designer. The project I worked on was SinauBareng, which was carried out as a team of three people. The aim of this project was to produce the UI design for the SinauBareng website, which is used for online courses for students and non-students",
    faqs: [
      {
        question: "Why do we make it ?",
        answer:
          "Because this is a task assigned by the mentor. In addition, the reason for creating Sinaubareng is to become a website-based course platform that operates in the local area of Yogyakarta.",
      },
      {
        question: "How does it work ?",
        answer:
          "Users will register and join sinaubareng. Then, the course learning process will be conducted in a hybrid manner. When meetings are held offline, the admin will determine a meeting point as the course location, and course participants will be directed to gather at that location.",
      },
      {
        question: "Why not make it into an app ?",
        answer:
          "Because applications have higher maintenance costs and require more skilled personnel than websites. In addition, websites are easier to access without burdening users with having to download applications onto their devices.",
      },
    ],
    bgColor: "bg-amber-200",
    images: [
      { src: "/SinauBareng.png", caption: "Landing Page" },
      { src: "/SinauBareng-Login.png", caption: "Login" },
      {
        src: "/SinauBareng-jadiMentor.png",
        caption: "Join Mentor",
      },
      {
        src: "/SinauBareng-userDashboard.png",
        caption: "User Dashboard",
      },
    ],
  },
  {
    id: 2,
    tittle: "Ndoro Arum",
    description: "Study Independent Team Project",
    details:
      "Working as a team to create a functional website for our final project in Study Independent program with Infinite Learning Indonesia. The issue we addressed was the offline registration process for mountain climbing, so our solution was to improve the user experience by enabling online registration via the website.",
    faqs: [
      {
        question: "Why do we make it ?",
        answer:
          "We want to provide a quick solution for booking hiking trips to Mount Ndoro Arum. The old method of using paper was quite time-consuming and inconvenient for hikers, who had to prepare various supporting documents that detracted from the hiking experience.",
      },
      {
        question: "Why choose website as the solution ?",
        answer:
          "Because websites are the easiest solution to offline problems. Moreover, websites are easily accessible using desktop computers, tablets, or smartphones.",
      },
      {
        question: "Then, how does it work ?",
        answer:
          "Hikers will be asked to register an account. Then, when they want to hike, they make a booking via the website by filling out several forms with their details so that their data can be recorded as a preventive measure in case something dangerous happens.",
      },
    ],
    bgColor: "bg-sky-200",
    images: [
      { src: "/NdoroArum.png", caption: "Landing Page" },
      { src: "/NdoroArum-Login.png", caption: "Login" },
      {
        src: "/NdoroArum-AboutUs.png",
        caption: "About Us",
      },
      {
        src: "/NdoroArum-Booking.png",
        caption: "Booking Page",
      },
      {
        src: "/NdoroArum-FormBooking.png",
        caption: "Form Booking",
      },
    ],
  },
  {
    id: 3,
    tittle: "HiColleagues",
    description: "Study Independent Test Project",
    details:
      "I created it during the test to join study independent program offered by HiColleagues. The purpose of this redesign is to improve the user experience to make it more appealing to open and easier to understand by applying simple icons that symbolize a featur",
    faqs: [
      {
        question: "Why do i make it ?",
        answer:
          "Because this is a task assigned by our partner as part of the testing process to join the independent study program by the Ministry of Education and Culture.",
      },
      {
        question: "So, what is the task ?",
        answer:
          "The task is to redesign the HiColleagues landing page. It is designed to be neater, more informative, and more appealing to users.",
      },
      {
        question: "Then, what are u making ?",
        answer:
          "I redesigned it by simplifying the overly long layout, removing text that was too complicated to understand, replacing images with icons to convey the message more clearly, and creating a more minimalist design to make it easier to access via the website.",
      },
    ],
    bgColor: "bg-neutral-200",
    span: "col-span-2",
    images: [
      { src: "/HiColleagues.png", caption: "Landing Page" },
      {
        src: "/HiColleagues_About.png",
        caption: "About Section",
      },
      {
        src: "/HiColleagues-FAQ.png",
        caption: "FAQ Section",
      },
    ],
  },
];
