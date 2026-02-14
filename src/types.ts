export interface Mentor {
  id: string;
  courseTitle: string;
  description: string;
  mentorName: string;
  mentorImageUrl: string;
  mentorCompany: string;
  courseImageUrl: string;
  startYear: string;
  positiveReviews: number;
  enrollments: number;
  isCertified: boolean;
}

export interface Course {
  id: string;
  courseTitle: string;
  mentorName: string;
  mentorImageUrl: string;
  status: "pending" | "accepted" | "completed" | "cancelled";
  nextSession: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  sessions: any[];
  enrolledCourses: Course[];
}
