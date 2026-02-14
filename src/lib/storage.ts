import type { User, Course } from "@/types";
import { MOCK_USER, MOCK_ENROLLED_COURSES } from "./mockData";

export class StorageService {
  private static instance: StorageService;
  private STORAGE_KEY = "enrolled_courses";

  private constructor() {
    // Initialize storage with mock data if empty
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(MOCK_ENROLLED_COURSES),
      );
    }
  }

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Auth methods
  isAuthenticated(): boolean {
    return !!this.getItem("token");
  }

  setToken(token: string): void {
    this.setItem("token", token);
  }

  // User methods
  getUser(): User | null {
    const user = this.getItem<User>("user");
    if (!user) {
      // Initialize with mock data if no user exists
      this.setUser(MOCK_USER);
      return MOCK_USER;
    }
    return user;
  }

  setUser(user: User): void {
    this.setItem("user", user);
  }

  // Course methods
  addEnrolledCourse(newCourse: Course): void {
    const courses = this.getEnrolledCourses();
    courses.push(newCourse);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }

  getEnrolledCourses(): Course[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
}

export const storage = StorageService.getInstance();
