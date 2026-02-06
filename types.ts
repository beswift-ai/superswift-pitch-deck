
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string[];
}

export interface ComparisonRow {
  feature: string;
  mckinsey: boolean | string;
  genericAi: boolean | string;
  superSwift: boolean | string;
}

export interface Deliverable {
  title: string;
  description: string;
  details: string[];
}
