/**
 * data.js
 * ------------------------------------------------------------------
 * Single source of truth for personal info, skills, projects and
 * achievements. Edit values in this file only — the rest of the
 * site reads from here. Nothing here is fabricated; anything
 * marked PLACEHOLDER must be filled in by Amit before publishing.
 * ------------------------------------------------------------------
 */

const PORTFOLIO_DATA = {

  profile: {
    name: "Amit",
    role: "Electronics & Communication Engineering Student",
    tagline: "Build \u2022 Learn \u2022 Engineer",
    statusBadge: "ECE Student \u2022 Builder \u2022 Learner",
    university: "KLE Technological University",
    campus: "Dr. M. S. Sheshgiri Campus, Belagavi, Karnataka",
    education: [
      "Diploma in Electronics & Communication Engineering",
      "B.E. in Electronics & Communication Engineering (in progress, via lateral entry)"
    ],
    heroHeadline: "Electronics Engineer Building Real-World Technology",
    heroSubtext: "ECE engineering student passionate about embedded systems, IoT, electronics, intelligent energy systems, and software-driven engineering solutions.",
    aboutStatement: "I enjoy turning engineering concepts into working systems \u2014 from sensors and microcontrollers to data dashboards and intelligent monitoring solutions.",
    aboutParagraphs: [
      "I'm an ECE student at KLE Technological University, currently pursuing my B.E. after joining through lateral entry with a Diploma in Electronics & Communication Engineering.",
      "My interest sits at the point where electronics, embedded systems and software meet \u2014 microcontrollers, sensors, signal processing, and the dashboards that turn raw data into something useful.",
      "I learn by building. Most of what I know comes from taking a real engineering problem \u2014 monitoring a battery, sensing gas leaks, measuring temperature \u2014 and working through it end to end, from the circuit to the screen."
    ],
    // PLACEHOLDER — replace with real contact details before publishing
    email: "amitamitkotgi@gmail.com",
    linkedin: "https://linkedin.com/in/ameet-kotgi-43b45a34b",
    github: "https://github.com/amitamitkotgi-ops",
    githubUsername: "amitamitkotgi-ops",
    resumePath: "assets/Amit_ECE_Resume.docx", // PLACEHOLDER — add the real PDF at this path
  },

  quickStats: [
    { label: "Hands-on Projects", value: "6+" },
    { label: "Engineering Focus", value: "ECE" },
    { label: "Systems Built", value: "Embedded + IoT" },
    { label: "Approach", value: "Continuous Learning" }
  ],

  skills: {
    "Electronics": [
      { name: "Analog Electronics", level: "Hands-on" },
      { name: "Digital Electronics", level: "Hands-on" },
      { name: "Circuit Analysis", level: "Hands-on" },
      { name: "Operational Amplifiers", level: "Project Experience" },
      { name: "MOSFET", level: "Project Experience" },
      { name: "Sensors", level: "Hands-on" },
      { name: "Signal Conditioning", level: "Project Experience" }
    ],
    "Embedded Systems": [
      { name: "Arduino", level: "Hands-on" },
      { name: "ESP32", level: "Hands-on" },
      { name: "STM32", level: "Learning" },
      { name: "Microcontrollers", level: "Hands-on" },
      { name: "Embedded C", level: "Hands-on" },
      { name: "GPIO", level: "Hands-on" },
      { name: "ADC", level: "Project Experience" },
      { name: "UART", level: "Familiar" },
      { name: "I2C", level: "Project Experience" },
      { name: "SPI", level: "Familiar" }
    ],
    "Programming": [
      { name: "C", level: "Hands-on" },
      { name: "C++", level: "Familiar" },
      { name: "JavaScript", level: "Hands-on" },
      { name: "HTML", level: "Hands-on" },
      { name: "CSS", level: "Hands-on" }
    ],
    "Hardware / Simulation": [
      { name: "Proteus", level: "Familiar" },
      { name: "LTspice", level: "Familiar" },
      { name: "Multisim", level: "Familiar" },
      { name: "Vivado", level: "Learning" },
      { name: "Keil", level: "Familiar" }
    ],
    "IoT / Cloud": [
      { name: "Firebase", level: "Hands-on" },
      { name: "Realtime Database", level: "Hands-on" },
      { name: "ESP32", level: "Hands-on" },
      { name: "Web Dashboards", level: "Hands-on" },
      { name: "Sensor Monitoring", level: "Hands-on" }
    ],
    "Web Development": [
      { name: "HTML5", level: "Hands-on" },
      { name: "CSS3", level: "Hands-on" },
      { name: "JavaScript", level: "Hands-on" },
      { name: "Chart.js", level: "Project Experience" }
    ],
    "Engineering Areas": [
      { name: "Embedded Systems", level: "Hands-on" },
      { name: "IoT", level: "Hands-on" },
      { name: "VLSI", level: "Learning" },
      { name: "FPGA", level: "Learning" },
      { name: "DSP", level: "Learning" },
      { name: "Signal Processing", level: "Familiar" },
      { name: "Renewable Energy Technology", level: "Project Experience" }
    ]
  },

  filters: ["All", "Embedded", "IoT", "Electronics", "FPGA", "Web", "Energy"],

  projects: [
    {
      id: "gridguardian-ai",
      title: "GridGuardian AI",
      subtitle: "Smart Solar Battery Management System",
      categories: ["IoT", "Energy", "Web"],
      description: "A web dashboard for monitoring a 12V solar battery system \u2014 live voltage, current, state of charge, temperature and device health, with a simulation mode built to plug into real ESP32 + Firebase hardware later.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Chart.js", "ESP32 (planned)", "Firebase (planned)"],
      image: "assets/projects/gridguardian-ai.png",
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "Simulation Mode",
      problem: "A solar-powered 12V battery setup has sensors only after the battery, so solar output can't be measured directly \u2014 the system needed a clear way to watch battery health without pretending to show data it doesn't have.",
      solution: "A dark-themed dashboard that displays battery voltage, current, state of charge, temperature and a simple Charging / Idle status, with live charts and simulated data standing in for hardware that isn't connected yet.",
      features: [
        "Battery voltage, current, SOC and temperature cards",
        "Live charts built with Chart.js",
        "Charging / Idle status instead of unmeasurable solar output",
        "AI-style insights and smart alerts panel",
        "Relay control toggle and device health indicators",
        "Simulation mode with realistic value ranges, updated every few seconds"
      ],
      architecture: "Stage 1 (current) runs entirely in the browser: a JavaScript simulator generates realistic sensor values on a timer and feeds the same UI that Stage 2 will use. Stage 2 will swap the simulator for a live ESP32 + Firebase Realtime Database connection without changing the interface.",
      futureImprovements: [
        "Connect real ESP32 + Firebase data feed",
        "Add historical data export and reports",
        "Add authentication for multi-device access"
      ]
    },
    {
      id: "smart-energy-meter",
      title: "Smart Energy Meter",
      subtitle: "IoT Dashboard for Voltage, Current & Power Monitoring",
      categories: ["Embedded", "IoT", "Energy"],
      description: "An end-to-end IoT energy meter that senses voltage and current, calculates power and energy use, and pushes live readings to a cloud dashboard \u2014 built for the NMIT Hacks 2026 IoT track.",
      technologies: ["ESP32", "ZMPT101B", "ACS712", "OLED", "Relay", "Firebase Realtime Database", "HTML", "CSS", "JavaScript", "Chart.js"],
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "________ 2026",
      problem: "Households and small setups often have no simple way to see live power usage or control a load remotely.",
      solution: "An ESP32-based meter reads AC voltage and current, computes power and energy, shows readings on a local OLED, and streams the same data to a Firebase-backed web dashboard for remote monitoring.",
      features: [
        "Voltage sensing with ZMPT101B",
        "Current sensing with ACS712",
        "Real-time power and energy calculation",
        "Local OLED readout",
        "Relay for remote load control",
        "Cloud dashboard with live charts"
      ],
      architecture: "The ESP32 reads the ZMPT101B and ACS712 sensors, computes RMS voltage, current and power, and writes readings to Firebase Realtime Database. A web dashboard subscribes to the same database and renders live charts and cards.",
      futureImprovements: [
        "Add energy cost estimation",
        "Add usage alerts and thresholds",
        "Support multiple appliance channels"
      ]
    },
    {
      id: "temperature-precision-control",
      title: "Temperature Precision Control System",
      subtitle: "Signal Conditioning for Accurate Temperature Sensing",
      categories: ["Electronics", "Embedded"],
      description: "A precision temperature sensing circuit that conditions a thermistor's signal through a Wheatstone bridge and amplifier before converting and displaying it, aimed at accuracy rather than a simple analog read.",
      technologies: ["LM358", "NTC103 Thermistor", "Wheatstone Bridge", "ADC", "Arduino", "I2C LCD", "Low-pass Filter"],
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "Project Experience",
      problem: "A basic thermistor reading is small, non-linear and noisy \u2014 not accurate enough to trust directly for precision monitoring.",
      solution: "The NTC103 thermistor sits in a Wheatstone bridge to convert its resistance change into a clean voltage difference, which is amplified with an LM358, filtered, then digitized and shown on an I2C LCD.",
      features: [
        "Wheatstone bridge for resistance-to-voltage conversion",
        "LM358-based amplification",
        "Low-pass filtering to remove noise",
        "ADC conversion on Arduino",
        "Live readout on I2C LCD"
      ],
      architecture: "Signal path: NTC103 in Wheatstone bridge \u2192 LM358 amplifier stage \u2192 low-pass filter \u2192 Arduino ADC \u2192 I2C LCD display.",
      futureImprovements: [
        "Add temperature logging over time",
        "Calibrate against a reference sensor",
        "Add a cloud-connected version"
      ]
    },
    {
      id: "smoke-intensity-measurement",
      title: "Smoke Intensity Measurement System",
      subtitle: "MOSFET Common-Source Amplifier for Sensor Signal Gain",
      categories: ["Electronics"],
      description: "A smoke-sensing circuit that amplifies the MQ-2 sensor's weak output using a MOSFET common-source amplifier, so small changes in smoke intensity are easier to measure and act on.",
      technologies: ["MQ-2 Sensor", "IRF540N MOSFET", "Common Source Amplifier", "Arduino"],
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "Project Experience",
      problem: "The MQ-2 gas sensor's raw output signal is small and hard to distinguish at low smoke levels.",
      solution: "An IRF540N MOSFET configured as a common-source amplifier boosts the sensor's signal before it's read and measured, improving sensitivity at low smoke intensity.",
      features: [
        "MQ-2 smoke/gas sensing",
        "MOSFET common-source amplifier stage",
        "Improved low-level signal sensitivity",
        "Arduino-based measurement"
      ],
      architecture: "MQ-2 sensor output \u2192 IRF540N common-source amplifier stage \u2192 measurement/read circuit \u2192 Arduino.",
      futureImprovements: [
        "Add buzzer/alert threshold",
        "Add data logging",
        "Move to a PCB build"
      ]
    },
    {
      id: "portable-battery-checker",
      title: "Portable Battery Health Checker",
      subtitle: "Comparator-Based GOOD / WEAK / DEAD Battery Tester",
      categories: ["Electronics"],
      description: "A portable battery tester built around the LM393 comparator that classifies a battery as GOOD, WEAK or DEAD using LED indicators, built for Resonance Transistron 2026 at KLE Tech.",
      technologies: ["LM393 Comparator", "LEDs", "Load Testing", "Battery Voltage Measurement"],
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "Competed at Resonance Transistron 2026, KLE Tech",
      problem: "Judging whether a battery is still usable by voltage alone can be misleading without a load applied.",
      solution: "The LM393 dual comparator checks the battery's voltage under load against set thresholds and lights one of three LEDs \u2014 GOOD, WEAK or DEAD \u2014 for an instant, portable readout.",
      features: [
        "Load-based battery testing",
        "Three-LED GOOD / WEAK / DEAD indication",
        "Threshold-based classification with LM393",
        "Compact, portable design"
      ],
      architecture: "Battery under test \u2192 load \u2192 LM393 comparator stages against reference thresholds \u2192 GOOD / WEAK / DEAD LED output.",
      futureImprovements: [
        "Add a numeric voltage readout",
        "Support multiple battery chemistries",
        "Add a small enclosure design"
      ]
    },
    {
      id: "fpga-rgb-led-controller",
      title: "FPGA RGB LED Controller",
      subtitle: "Verilog-Based Digital Logic for RGB Color Control",
      categories: ["FPGA"],
      description: "A digital logic design that drives an RGB LED's colour and pattern using Verilog on FPGA, as a hands-on introduction to digital design beyond microcontroller code.",
      technologies: ["Verilog", "FPGA", "Vivado", "Digital Logic"],
      github: "https://github.com/amitamitkotgi-ops",
      demo: "",
      status: "Learning Project",
      problem: "Wanted hands-on practice with digital logic design in Verilog rather than only working in embedded C.",
      solution: "A Verilog module generates PWM-style control signals for an RGB LED's red, green and blue channels, synthesized and tested on FPGA using Vivado.",
      features: [
        "Verilog RGB channel control logic",
        "PWM-based colour mixing",
        "Synthesized and tested in Vivado"
      ],
      architecture: "Verilog RTL design \u2192 synthesis and simulation in Vivado \u2192 programmed onto FPGA \u2192 RGB LED output.",
      futureImprovements: [
        "Add pattern/animation sequences",
        "Add external input control",
        "Document the Verilog modules in more depth"
      ]
    }
  ],

  journey: [
    { title: "Diploma in Electronics & Communication Engineering", description: "Built the foundation in electronics, circuits and core ECE concepts." },
    { title: "Lateral Entry into B.E.", description: "Joined the B.E. program directly into ECE through lateral entry." },
    { title: "Electronics & Communication Engineering", description: "Continuing coursework in analog electronics, digital electronics, signals & systems, and control systems." },
    { title: "Hands-on Electronics Projects", description: "Built sensor and amplifier circuits \u2014 temperature sensing, smoke measurement, battery testing." },
    { title: "Embedded Systems & IoT", description: "Moved into ESP32 and Arduino-based systems with real sensors and cloud connectivity." },
    { title: "Web Dashboards & Cloud Integration", description: "Started pairing hardware projects with live web dashboards using Firebase and Chart.js." },
    { title: "AI + Engineering Systems", description: "Exploring how AI-style insights can layer onto engineering monitoring systems." },
    { title: "Future Engineering Career", description: "Working toward an internship or entry-level role in embedded systems or IoT." }
  ],

  // Only real, editable achievements — no invented awards or numbers.
  achievements: [
    {
      category: "Technical Events",
      title: "Resonance Transistron 2026, KLE Tech",
      description: "Competed with a Portable Battery Condition Tester built around the LM393 comparator."
    },
    {
      category: "Technical Events",
      title: "Buildverse Challenge League, KLE Tech (Pleiades Fest)",
      description: "Selected a Smart Energy Monitor project for the challenge league."
    },
    {
      category: "Certifications",
      title: "PLACEHOLDER",
      description: "Add certification name, issuer and date here."
    }
  ],

  exploring: [
    "Embedded Systems",
    "IoT",
    "FPGA / Verilog",
    "VLSI",
    "AI for Engineering",
    "Smart Energy Systems"
  ]
};
