import { useEffect, useRef, useState } from "react";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import { commands } from "../../data/commands";
import ProjectSelector from "./ProjectSelector";
import ProjectDetail from "./ProjectDetail";
import ResumeSelector from "./ResumeSelector";

import softwareResume from "../../assets/resumes/Lakshya_Software_CV.pdf";
import hardwareResume from "../../assets/resumes/Lakshya_Hardware_CV.pdf";

type TerminalMode =
  | "idle"
  | "projects"
  | "project-detail"
  | "resume";

type HistoryEntry = {
  command: string;
  lines: string[];
};

type TerminalProps = {
  isActive: boolean;
};

export default function Terminal({
  isActive,
}: TerminalProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const projectDetailRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] =
  useState<TerminalMode>("idle");

const [selectedProject, setSelectedProject] =
  useState<number | null>(null);
  

  // Automatically scroll to the newest content
  useEffect(() => {
  if (!scrollRef.current) {
    return;
  }

  if (selectedProject !== null) {
    setTimeout(() => {
      projectDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return;
  }

  scrollRef.current.scrollTo({
    top: scrollRef.current.scrollHeight,
    behavior: "smooth",
  });
}, [history, mode, selectedProject]);
  // Select a project
  const handleProjectSelect = (id: number) => {
    setSelectedProject(id);
    setMode("project-detail");
  };

  // Return to the project list
  const handleProjectBack = () => {
    setSelectedProject(null);
    setMode("projects");
  };
  const handleResumeSelect = (
  type: "software" | "hardware"
) => {
  const resumeUrl =
    type === "software"
      ? softwareResume
      : hardwareResume;

  window.open(
    resumeUrl,
    "_blank",
    "noopener,noreferrer"
  );
};
  // Handle commands typed into the diary
const handleCommand = (command: string) => {
  const normalizedCommand = command.trim().toLowerCase();

  if (normalizedCommand === "clear") {
  setHistory([]);
  setSelectedProject(null);
  setMode("idle");

  return;
}

  // Open project selector
 if (normalizedCommand === "projects") {
  setMode("projects");
  setSelectedProject(null);

  setHistory((previous) => [
    ...previous,
    {
      command,
      lines: [
        "The ink begins to move...",
        "",
        "The diary remembers eight creations.",
        "",
        "Choose a memory by entering its number.",
      ],
    },
  ]);

  return;
}

  if (normalizedCommand === "resume") {
  setMode("resume");
  setSelectedProject(null);

  setHistory((previous) => [
    ...previous,
    {
      command,
      lines: [
        "The diary knows you seek his complete record...",
      ],
    },
  ]);

  return;
}

  if (mode === "resume") {
  if (normalizedCommand === "1") {
    handleResumeSelect("software");

    setHistory((previous) => [
      ...previous,
      {
        command,
        lines: [
          "Opening the software record...",
        ],
      },
    ]);

    return;
  }

  if (normalizedCommand === "2") {
    handleResumeSelect("hardware");

    setHistory((previous) => [
      ...previous,
      {
        command,
        lines: [
          "Opening the hardware record...",
        ],
      },
    ]);

    return;
  }

  if (/^\d+$/.test(normalizedCommand)) {
    setHistory((previous) => [
      ...previous,
      {
        command,
        lines: [
          "The diary contains only two records.",
          "",
          "Choose 1 for Software / ML.",
          "Choose 2 for Hardware / Electronics.",
        ],
      },
    ]);

    return;
  }
}
  // If project selector is open, allow numbers 1-8
 if (mode === "projects") {
  if (/^\d+$/.test(normalizedCommand)) {
    const projectId = Number(normalizedCommand);

    if (projectId >= 1 && projectId <= 8) {
      setSelectedProject(projectId);
      setMode("project-detail");

      setHistory((previous) => [
        ...previous,
        {
          command,
          lines: [
            `Memory ${projectId} opened.`,
          ],
        },
      ]);

      return;
    }

    setHistory((previous) => [
      ...previous,
      {
        command,
        lines: [
          "The diary contains no memory with that number.",
          "",
          "Choose a number between 1 and 8.",
        ],
      },
    ]);

    return;
  }
}
// Return from a project detail
if (normalizedCommand === "back") {
  if (mode === "project-detail") {
    setSelectedProject(null);
    setMode("projects");
    return;
  }

  if (mode === "projects" || mode === "resume") {
    setSelectedProject(null);
    setMode("idle");
    return;
  }
}  // Normal commands
  const response = commands[normalizedCommand];

  const lines = response
    ? response.lines
    : [
        "The ink hesitates...",
        "",
        `"${command}"`,
        "",
        "No such memory exists within these pages.",
        "",
        "Perhaps you should ask something else.",
        "",
        "Try 'help' if you have forgotten what I remember.",
      ];

  setHistory((previous) => [
    ...previous,
    {
      command,
      lines,
    },
  ]);
};

  return (
    <div className="mt-8">
      <div
        ref={scrollRef}
        className="
          max-h-[470px]
          overflow-y-auto
          pr-2
          scroll-smooth
        "
        style={{
          scrollbarWidth: "none",
        }}
      >
        {/* Previous commands and responses */}
        {history.map((entry, index) => (
          <div
            key={`${entry.command}-${index}`}
            className="mb-8"
          >
            <div
              className="
                font-['IM_FELL_English']
                text-sm
                text-[#241a14]
              "
            >
              &gt; {entry.command}
            </div>

            <TerminalOutput lines={entry.lines} />
          </div>
        ))}

        {/* Project selector */}
        {mode === "projects" && (
  <ProjectSelector
    onSelect={handleProjectSelect}
  />
)}

{mode === "project-detail" &&
  selectedProject !== null && (
    <div ref={projectDetailRef}>
      <ProjectDetail
        projectId={selectedProject}
        onBack={handleProjectBack}
      />
    </div>
  )}

{mode === "resume" && (
  <ResumeSelector
    onSelect={handleResumeSelect}
  />
)}

        {/* Command input */}
        <TerminalInput
          isActive={isActive}
          onSubmit={handleCommand}
        />
      </div>
    </div>
  );
}