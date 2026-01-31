
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  logo?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
