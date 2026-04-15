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
    name: "Nitin Sharma",
    photo: "/images/team/nitin - Nitin Sharma.jpeg",
    vision: "Turning complex data into intelligent real-world solutions",
    projectName: "RoadAtthena dashboard",
    // projectDescription: "Orchestrated a brand new cloud-native ecosystem capable of handling immense loads.",
    bulletPoints: [
      "Roads and anomalies on an interactive map using GPX and survey data",
      "Videos with real-time location and timestamp overlay",
      "AI-powered infrastructure detection"
    ],
    projectImage: "/images/projects/project-2.jpg",
    projectLink: "https://example.com/project-2"
  },
  {
    id: "emp3",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp4",
    name: "Keshav",
    photo: "/images/team/Keshav.jpeg",
    vision: "Code that thinks ahead",  // ✅ new field
    projectName: "Attendance Predictive Analytics",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Real Time Graphical Representation of Predictive Analysis",
      "Individual Performance Predictione",
      "Based on Random Forest Regressor and Structural Time-Series inspired Model"
    ],
    projectImage: "/images/projects/project-1.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp5",
    name: "Nikhil",
    photo: "/images/team/nikhil.jpeg",
    vision: "I connect the logic of AI with the pulse of real life—turning complex ideas into things people can actually feel, use, and understand.",
    projectName: "RSA Model",
    bulletPoints: [
      "Extracts and detects sign boards directly from PDF documents",
      "AI classification of detected sign board into relevant categories",
      "Structured analysis and retrieval of geographically grouped data.",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp6",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp7",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp8",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp9",
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
    id: "emp10",
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
    id: "emp11",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Keen interest in developing mobile ready GPU models .",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Built resilient ETL pipelines scaling to PB/day",
      "Deployed automated data quality checks",
    ],
    projectImage: "/images/projects/project-3.png",
    projectLink: "https://example.com/project-3"
  },
];
