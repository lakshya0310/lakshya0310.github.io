export type ProjectCategory = "software" | "hardware" | "robotics";

export type Project = {
  id: number;
  name: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Real-Time Chat Application",
    category: "software",
    description:
      "A full-stack real-time messaging application with JWT authentication, REST APIs, MongoDB persistence, and low-latency communication using Socket.IO.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,
    name: "Custom C-Shell",
    category: "software",
    description:
      "A Unix-like shell built in C supporting command execution, process creation, piping, input/output redirection, signal handling, networking utilities, and persistent command history.",
    technologies: [
      "C",
      "POSIX APIs",
      "Linux",
      "Socket Programming",
    ],
  },

  {
    id: 3,
    name: "NaviSight",
    category: "robotics",
    description:
      "An Edge AI wearable device for visually impaired users, using a fine-tuned YOLOv11 model and an offline inference pipeline optimized for latency and resource-constrained devices.",
    technologies: [
      "Computer Vision",
      "YOLOv11",
      "Edge AI",
    ],
  },

  {
    id: 4,
    name: "LiDAR-Camera Calibration",
    category: "robotics",
    description:
      "An end-to-end LiDAR-camera calibration pipeline based on the MDPCalib paper, with feature extraction, correspondence matching, and nonlinear optimization for sensor extrinsic estimation.",
    technologies: [
      "Python",
      "Computer Vision",
      "LiDAR",
      "Sensor Fusion",
      "Optimization",
    ],
  },

  {
    id: 5,
    name: "RISC-V Processor Design",
    category: "software",
    description:
      "Sequential and 5-stage pipelined RISC-V processors implementing hazard detection, forwarding, and control logic, verified through simulation and comprehensive testing.",
    technologies: [
      "SystemVerilog",
      "Computer Architecture",
      "RISC-V",
    ],
  },

  {
    id: 6,
    name: "Audio Amplifier Design",
    category: "hardware",
    description:
      "A multi-stage audio amplifier designed to deliver more than 1.5W to a 10Ω load using a ±5V supply, with differential pre-amplification, common-emitter gain, band-pass filtering, and Class-AB power amplification.",
    technologies: [
      "Analog Electronics",
      "LTSpice",
      "Circuit Design",
      "Signal Processing",
    ],
  },

  {
    id: 7,
    name: "Pulse Oximeter Design",
    category: "hardware",
    description:
      "A transimpedance-amplifier-based pulse oximeter using synchronized red and infrared LEDs, a photodiode, analog signal conditioning, and Arduino-based SpO2 processing.",
    technologies: [
      "Analog Electronics",
      "Arduino",
      "LTSpice",
      "Biomedical Instrumentation",
    ],
  },

  {
    id: 8,
    name: "4-bit Carry Lookahead Adder",
    category: "hardware",
    description:
      "A 4-bit Carry Lookahead Adder implemented across HDL, transistor-level design, MAGIC layout, and FPGA using TSMC 180nm technology, with static CMOS and TSPC logic.",
    technologies: [
      "Verilog HDL",
      "CMOS",
      "VLSI",
      "MAGIC",
      "FPGA",
      "TSMC 180nm",
    ],
  },
];