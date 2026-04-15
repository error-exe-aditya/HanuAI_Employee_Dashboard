export interface EmployeeProject {
  id: string;
  name: string;
  photo: string;
  role?: string;
  vision?: string;
  projectName: string;
  projectDescription?: string;
  bulletPoints: string[];
  projectImage: string;
  projectLink: string;
}

export const teamData: EmployeeProject[] = [
  {
    id: "emp1",
    name: "Aniket Kalta",
    photo: "/images/team/employee-1.png",
    // role: "Senior Machine Learning Engineer",
    vision: "Passionate about making AI faster, leaner, and accessible at scale.",  // ✅ new field
    projectName: "GPU optimising dashboard",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Designed machine learning detection pipeline",
      "Built scalable microservice backend architecture",
      "Reduced false-positive rates by 42%"
    ],
    projectImage: "/images/projects/project-1.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp2",
    name: "Nitin",
    photo: "/images/team/employee-2.jpg",
    role: "Senior software developer",
    vision: "Passionate about making user friendly interfaces for better interaction and usability.",
    projectName: "Road Athena dashboard",
    // projectDescription: "Orchestrated a brand new cloud-native ecosystem capable of handling immense loads.",
    bulletPoints: [
      "Migrated monolithic systems to Kubernetes",
      "Optimized cloud spend resulting in 30% savings",
      "Architected multi-region resilient failovers"
    ],
    projectImage: "/images/projects/project-2.jpg",
    projectLink: "https://example.com/project-2"
  },
  {
    id: "emp3",
    name: "Bhuvan",
    photo: "/images/team/employee-3.png",
    role: "Machine Learning intern",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    // projectDescription: "Created an advanced stream processing engine mapping relationships natively.",
    bulletPoints: [
      "Implemented Kafka clusters for real-time streaming",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp4",
    name: "Keshav",
    photo: "/images/team/employee-1.png",
    role: "Software developer intern",
    vision: " developing reliabele user interfaces and enhancing user experience .",  // ✅ new field
    projectName: "GPU optimising dashboard",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Designed machine learning detection pipeline",
      "Built scalable microservice backend architecture",
      "Reduced false-positive rates by 42%"
    ],
    projectImage: "/images/projects/project-1.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp5",
    name: "Aniket",
    photo: "/images/team/employee-1.png",
    role: "Senior Machine Learning Engineer",
    vision: "Passionate about making AI faster, leaner, and accessible at scale.",  // ✅ new field
    projectName: "GPU optimising dashboard",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Designed machine learning detection pipeline",
      "Built scalable microservice backend architecture",
      "Reduced false-positive rates by 42%"
    ],
    projectImage: "/images/projects/project-1.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp6",
    name: "Aniket",
    photo: "/images/team/employee-1.png",
    role: "Senior Machine Learning Engineer",
    vision: "Passionate about making AI faster, leaner, and accessible at scale.",  // ✅ new field
    projectName: "GPU optimising dashboard",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Designed machine learning detection pipeline",
      "Built scalable microservice backend architecture",
      "Reduced false-positive rates by 42%"
    ],
    projectImage: "/images/projects/project-1.png",
    projectLink: "https://example.com/project-1"
  }
];
