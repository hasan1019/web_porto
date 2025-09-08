export interface Project {
  id: number;
  tittle: string;
  description: string;
  bgColor: string;
  span?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    tittle: "SinauBareng",
    description: "Internship Team Project",
    bgColor: "bg-amber-200",
    image: "/SinauBareng.png",
  },
  {
    id: 2,
    tittle: "Ndoro Arum",
    description: "Study Independent Team Project",
    bgColor: "bg-sky-200",
    image: "/NdoroArum.png",
  },
  {
    id: 3,
    tittle: "HiColleagues",
    description: "Study Independent Test Project",
    bgColor: "bg-neutral-200",
    span: "col-span-2",
    image: "/HiColleagues.png",
  },
];
