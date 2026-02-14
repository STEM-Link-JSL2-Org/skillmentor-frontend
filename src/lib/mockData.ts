import Mentor1Img from "@/assets/mentor-1.webp";
import Mentor2Img from "@/assets/mentor-2.webp";
import Mentor3Img from "@/assets/mentor-3.webp";
import Mentor4Img from "@/assets/mentor-4.webp";
import Mentor5Img from "@/assets/mentor-5.webp";
import Mentor6Img from "@/assets/mentor-6.webp";
import AWSCertified1Img from "@/assets/aws-certified-1.webp";
import AWSCertified2Img from "@/assets/aws-certified-2.webp";
import AWSCertified3Img from "@/assets/aws-certified-3.webp";
import MicrosoftCertified1Img from "@/assets/microsoft-certified-1.webp";
import MicrosoftCertified2Img from "@/assets/microsoft-certified-2.webp";
import type { Course, Mentor, User } from "@/types";

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "1",
    courseTitle: "AWS Developer Associate Exam Prep",
    description:
      "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions.",
    mentorName: "Michelle Burns",
    mentorImageUrl: Mentor1Img,
    mentorCompany: "Tech Lead at IFS",
    courseImageUrl: AWSCertified1Img,
    startYear: "2018",
    positiveReviews: 99,
    isCertified: false,
    enrollments: 158,
  },
  {
    id: "2",
    courseTitle: "AWS DevOps Engineering Proffesional Exam Prep",
    description:
      "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My sessions include hands-on infrastructure as code exercises and real-world automation scenarios.",
    mentorName: "David Kumar",
    mentorImageUrl: Mentor2Img,
    mentorCompany: "Senior DevOps Engineer at WSO2",
    courseImageUrl: AWSCertified2Img,
    startYear: "2015",
    positiveReviews: 97,
    isCertified: true,
    enrollments: 175,
  },
  {
    id: "3",
    courseTitle: "AWS Machine Learning Specialty Certification Examp Prep",
    description:
      "Hi there! I'm a Senior Machine Learning Engineer with 8+ years of experience in ML/AI. I specialize in helping developers master AWS ML services like SageMaker, Comprehend, and Rekognition. I've successfully guided over 120 students to achieve their AWS ML Specialty certification. My sessions include hands-on ML model deployment, practical deep learning exercises, and real-world case studies. We'll cover everything from data preprocessing to model optimization and production deployment on AWS.",
    mentorName: "Dr. Priya Sharma",
    mentorImageUrl: Mentor3Img,
    mentorCompany: "Senior ML Engineer at IBM",
    courseImageUrl: AWSCertified3Img,
    startYear: "2015",
    positiveReviews: 98,
    isCertified: true,
    enrollments: 142,
  },
  {
    id: "4",
    courseTitle:
      "Microsoft Cybersecurity Architect Expert Certification Exam Prep",
    description:
      "Hello! I'm a Microsoft-certified Cybersecurity Architect with 10+ years of enterprise security experience. I specialize in Zero Trust architecture, identity management, and cloud security. I've helped over 100 professionals achieve their Microsoft Cybersecurity Architect Expert certification. My sessions cover comprehensive security strategy design, hands-on labs with Microsoft security technologies, and real-world case studies. We'll focus on identity & access, platform protection, security operations, and hybrid cloud security architectures.",
    mentorName: "Scarlet Nexus",
    mentorImageUrl: Mentor4Img,
    mentorCompany: "Cybersecurity Architect at Microsoft",
    courseImageUrl: MicrosoftCertified1Img,
    startYear: "2020",
    positiveReviews: 99,
    isCertified: true,
    enrollments: 523,
  },
  {
    id: "5",
    courseTitle: "Microsoft Azure Developer Associate Certification Exam Prep",
    description:
      "Hi! I'm a Microsoft-certified Azure Solutions Architect and Developer with 4+ years of cloud development experience. I specialize in Azure application development, serverless computing, and cloud-native solutions. I've helped over 130 developers achieve their Azure Developer Associate certification. My sessions include hands-on coding with Azure SDK, practical exercises in Azure Functions, Web Apps, and Storage solutions. We'll cover everything from authentication and security to monitoring and performance optimization.",
    mentorName: "Alex Thompson",
    mentorImageUrl: Mentor5Img,
    mentorCompany: "Azure Solutions Architect at Microsoft",
    courseImageUrl: MicrosoftCertified2Img,
    startYear: "2019",
    positiveReviews: 98,
    isCertified: false,
    enrollments: 134,
  },
  {
    id: "6",
    courseTitle:
      "Microsoft Azure Data Engineer Associate Certification Exam Prep",
    description:
      "Hello! I'm a certified Azure Data Engineer with 8+ years of experience in data architecture and engineering. I specialize in modern data warehousing, big data solutions, and lakehouse architectures on Azure. I've helped over 140 professionals achieve their Azure Data Engineer Associate certification. My sessions cover hands-on experience with Azure Synapse Analytics, Data Factory, Databricks, and Stream Analytics. We'll work through real-world scenarios in data pipeline development, optimization, and monitoring using SQL, Python, and Scala.",
    mentorName: "Sarah Zhang",
    mentorImageUrl: Mentor6Img,
    mentorCompany: "Data Engineer at Google",
    courseImageUrl: MicrosoftCertified2Img,
    startYear: "2022",
    positiveReviews: 97,
    isCertified: true,
    enrollments: 240,
  },
];

export const MOCK_ENROLLED_COURSES: Course[] = [
  {
    id: "1",
    courseTitle: "AWS Developer Associate Exam Prep",
    mentorName: "Michelle Burns",
    mentorImageUrl: Mentor1Img,
    status: "accepted",
    nextSession: "2025-03-01T10:00:00Z",
  },
  {
    id: "2",
    courseTitle: "AWS Machine Learning Specialty Certification Examp Prep",
    mentorName: "Dr. Priya Sharma",
    mentorImageUrl: Mentor3Img,
    status: "pending",
    nextSession: "2025-03-03T15:00:00Z",
  },
  {
    id: "3",
    courseTitle:
      "Microsoft Cybersecurity Architect Expert Certification Exam Prep",
    mentorName: "Scarlet Nexus",
    mentorImageUrl: Mentor4Img,
    status: "completed",
    nextSession: "2024-03-04T11:00:00Z",
  },
];

export const MOCK_USER: User = {
  id: "1",
  name: "Demo User",
  email: "demo@skillmentor.com",
  sessions: [],
  enrolledCourses: MOCK_ENROLLED_COURSES,
};
