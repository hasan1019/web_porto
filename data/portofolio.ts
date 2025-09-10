export interface ProjectImage {
  src: string;
  caption: string;
}
export interface Project {
  id: number;
  tittle: string;
  description: string;
  details: string;
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
    bgColor: "bg-amber-200",
    images: [
      { src: "/SinauBareng.png", caption: "Landing Page" },
      { src: "/SinauBareng-Login.png", caption: "Login" },
      { src: "/SinauBareng-jadiMentor.png", caption: "Join Mentor" },
      { src: "/SinauBareng-userDashboard.png", caption: "User Dashboard" },
    ],
  },
  {
    id: 2,
    tittle: "Ndoro Arum",
    description: "Study Independent Team Project",
    details:
      "working as a team to create a functional website for our final project in Study Independent program with Infinite Learning Indonesia. The issue we addressed was the offline registration process for mountain climbing, so our solution was to improve the user experience by enabling online registration via the website.",
    bgColor: "bg-sky-200",
    images: [
      { src: "/NdoroArum.png", caption: "Landing Page" },
      { src: "/NdoroArum-Login.png", caption: "Login" },
      { src: "/NdoroArum-AboutUs.png", caption: "About Us" },
      { src: "/NdoroArum-Booking.png", caption: "Booking Page" },
      { src: "/NdoroArum-FormBooking.png", caption: "Form Booking" },
    ],
  },
  {
    id: 3,
    tittle: "HiColleagues",
    description: "Study Independent Test Project",
    details:
      "i created it during the test to join study independent program offered by HiColleagues. The purpose of this redesign is to improve the user experience to make it more appealing to open and easier to understand by applying simple icons that symbolize a featur",
    bgColor: "bg-neutral-200",
    span: "col-span-2",
    images: [
      { src: "/HiColleagues.png", caption: "Landing Page" },
      { src: "/HiColleagues_About.png", caption: "About Section" },
      { src: "/HiColleagues-FAQ.png", caption: "FAQ Section" },
    ],
  },
];
