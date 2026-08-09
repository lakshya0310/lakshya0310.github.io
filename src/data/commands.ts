import { profile } from "./profile";
import { projects } from "./projects";
import { skills } from "./skills";
import { experience } from "./experience";
import { achievements } from "./achievements";
import { research } from "./research";
import { contact } from "./contact";

export type CommandResponse = {
  title?: string;
  lines: string[];
};

export const commands: Record<string, CommandResponse> = {
  help: {
  lines: [
    "The ink trembles beneath your command...",
    "",
    "Very well.",
    "You may ask about the following:",
    "",
    "  about        Who is Lakshya?",
    "  projects     What has he created?",
    "  research     What does he investigate?",
    "  skills       What does he know?",
    "  experience   Where has he ventured?",
    "  achievements What memories are worth keeping?",
    "  resume       Reveal his record.",
    "  contact      How may he be reached?",
    "",
    "Choose carefully.",
    "Some memories are deeper than others.",
  ],
},

 about: {
  lines: [
    "The ink begins to move...",
    "",
    `${profile.name}.`,
    "",
    profile.title,
    profile.institution + ".",
    "",
    "He is drawn to the places where",
    "hardware meets intelligence.",
    "",
    "Robotics.",
    "Motion planning.",
    "Computer vision.",
    "Edge AI.",
    "Processor design.",
  ],
},

 projects: {
  lines: [
    "The ink begins to move...",
    "",
    "The diary remembers his creations:",
    "",
    ...projects.flatMap((project) => [
      `◈ ${project.name}`,
      `  ${project.description}`,
      `  ${project.technologies.join(" · ")}`,
      "",
    ]),
  ],
},

  research: {
  lines: [
    "The diary remembers the questions he chose to pursue...",
    "",
    ...research.flatMap((entry) => [
      entry.title.toUpperCase(),
      "",
      entry.organization,
      entry.role,
      entry.period,
      "",
      entry.description,
      "",
      "AREAS OF INTEREST",
      ...entry.topics.map((topic) => `◈ ${topic}`),
      "",
    ]),
  ],
},

  skills: {
  lines: [
    "The diary reveals what he knows...",
    "",

    "LANGUAGES",
    `  ${skills.languages.join(" · ")}`,
    "",

    "SOFTWARE",
    `  ${skills.software.join(" · ")}`,
    "",

    "ROBOTICS",
    `  ${skills.robotics.join(" · ")}`,
    "",

    "HARDWARE DESIGN",
    `  ${skills.hardware.join(" · ")}`,
    "",

    "AI / COMPUTER VISION",
    `  ${skills.ai.join(" · ")}`,
    "",

    "TOOLS",
    `  ${skills.tools.join(" · ")}`,
  ],
},

  experience: {
  lines: [
    "The ink remembers where he has ventured...",
    "",
    ...experience.flatMap((entry) => [
      entry.organization,
      entry.institution,
      "",
      entry.role,
      entry.period,
      "",
      entry.description,
      "",
    ]),
  ],
},

  resume: {
    lines: [
      "You seek the complete record...",
      "",
      "The diary knows where to find it.",
      "",
      "[ Resume will be revealed here ]",
    ],
  },

  contact: {
  lines: [
    "The diary knows where its keeper may be found...",
    "",
    "EMAIL",
    `  ${contact.email}`,
    "",
    "GITHUB",
    `  ${contact.github}`,
    "",
    "LINKEDIN",
    `  ${contact.linkedin}`,
    "",
    "The ink waits for your next command.",
  ],
},
  achievements: {
  lines: [
    "Some memories are worth preserving...",
    "",
    ...achievements.map(
      (achievement) => `◈ ${achievement}`
    ),
  ],
},
};