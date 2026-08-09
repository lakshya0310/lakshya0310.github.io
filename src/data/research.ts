export type ResearchEntry = {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  topics: string[];
};

export const research: ResearchEntry[] = [
  {
    title: "Motion-Planning Infeasibility",
    organization: "Robotics Research Centre",
    role: "Undergraduate Researcher",
    period: "April 2025 – Present",

    description:
      "Research on scalable motion-planning algorithms and software for robotics, with a focus on understanding and evaluating situations where feasible motion may not exist.",

    topics: [
      "Motion Planning",
      "Robotics",
      "Infeasibility Analysis",
      "Research Software",
    ],
  },
];