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
    photo: "/images/team/aniket.jpeg",
    // role: "Senior Machine Learning Engineer",
    vision: "Interested in building solutions that make a real difference.",  // ✅ new field
    projectName: "GPU optimising dashboard",
    // projectDescription: "Developed a dashboard to optimize GPU performance on the go.",
    bulletPoints: [
      "Monitored GPU usage and identified performance bottlenecks.",
      "Optimized model inference and reduced latency.",
      "Created visualizations for performance metrics."
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
    projectImage: "/images/projects/nitinpic.png",
    projectLink: "https://example.com/project-2"
  },
  {
    id: "emp3",
    name: "Bhuvandeep Singh",
    photo: "/images/team/Bhuvan.jpg",
    vision: "Powered by Algorithms, driven by Intelligence",
    projectName: "Road anamoly detection mobile app",
    bulletPoints: [
      "Identifies and classifies road defects and road assets",
      "Running complex AI models without any external hardware",
      "Comprehensive report of all the true detections in real time",
    ],
    projectImage: "/images/projects/bhuvanpic.png",
    projectLink: "https://example.com/"
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
    projectImage: "/images/projects/keshavpic.png",
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
    projectImage: "/images/projects/nikhilpic.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp6",
    name: "Sukhwinder Singh",
    photo: "/images/team/sukhwinder.png",
    vision: "Create and implement the pipeline to make task automated",
    projectName: "Model training automated pipeline ",
    bulletPoints: [
      "Annotations, data saved on S3",
      "Agent will check the repo and start training automately",
      "Track the process with web portals",
    ],
    projectImage: "/images/projects/sukhipic.jpg",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp7",
    name: "Keshav Hari Nanda",
    photo: "/images/team/keshav.jpg",
    vision: "Focused on AI R&D and advanced model architectures, building production-grade ML systems and intelligent LLM-powered chatbot solutions.",
    projectName: "In house transcriber module ",
    bulletPoints: [
      "Translates audio to text ",
      "It supports more than 20+ languages ",
      "Trained in house for data security",
    ],
    projectImage: "/images/projects/keshavhpic.jpeg",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp8",
    name: "Kaushik Kumar Giri",
    photo: "/images/team/kaushik.png",
    vision: "Facing technical challenges with persistence",
    projectName: "PKRMS",
    bulletPoints: [
      "Analyse road conditions and calculate maintenance ",
      "Multi-year work programmes within defined budget constraints",
      "Generate reports, strip maps, and GIS maps",
    ],
    projectImage: "/images/projects/kaushikpic.jpg",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp9",
    name: "Sushant, Mukesh and Anurag ",
    photo: "/images/team/sma.png",
    vision: "Build solutions that work today and grow tomorrow.",
    projectName: "Road survey mobile app",
    bulletPoints: [
      "AI-detected roads with survey data collection",
      "Efficient surveyor expense tracking",
      "Real time data sync and offline support"
    ],
    projectImage: "/images/projects/smapic.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp10",
    name: "Aditya",
    photo: "/images/team/aditya.jpeg",
    vision: "Passionate about making AI faster, leaner, and accessible at scale.",
    projectName: "AI based complaint management system",
    bulletPoints: [
      "AI-powered complaint and summon generation",
      "Real-time tracking and resolution workflows",
      "Analytics dashboard for service improvement"
    ],
    projectImage: "/images/projects/adityapic.png",
    projectLink: "https://example.com/project-1"
  },
  {
    id: "emp11",
    name: "Ritik",
    photo: "/images/team/ritik.png",
    vision: "Backend engineer building scalable systems with a focus on performance and clean architecture",
    projectName: "Haryana Roads Management system",
    bulletPoints: [
      "Built interactive map to visualize Haryana road networks.",
      "Enabled real-time road data upload and attribute updates.",
      "Centralized platform for efficient road data management.",
    ],
    projectImage: "/images/projects/ritikpic.png",
    projectLink: "https://example.com/project-3"
  },
  {
    id: "emp12",
    name: "Prabin Kumar Mohanta",
    photo: "/images/team/prabin.jpeg",
    vision: "Building Solutions | Leading Teams | Solving Problems | Code. Lead. Solve. Repeat...",
    projectName: "CPIT",
    bulletPoints: [
      "Implemented corridor planning connecting key transport hubs.",
      "Coordinated data and prioritized strategic road corridors.",
      "Evaluated corridor feasibility using strategic planning criteria.",
    ],
    projectImage: "/images/projects/prabinpic.jpg",
    projectLink: "https://example.com/project-3"
  },
];
