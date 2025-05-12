export type ProjectItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  content?: string | null;
  stack: string[];
  link?: string | null;
  github?: string | null;
  created_at: string;
  updated_at: string;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
};
