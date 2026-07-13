import { Projects } from "@/types";

export const projects: Projects[] = [
  // ---------------- FEATURED (in exact priority order) ----------------
  {
    title: "AI Internship Hunter",
    shortDescription:
      "Full-stack AI job search assistant — scrapes internships, scores each one against your resume with Gemini, and tracks your application pipeline end to end.",
    detailedDescription:
      "A single-user job search tool that removes the manual grind of internship hunting. It pulls listings from RemoteOK and YC's Work at a Startup, extracts skills from an uploaded resume PDF, and scores every job 0-100 against that resume using Gemini — with missing skills and a plain-language rationale. Scores are cached and only recomputed when the resume changes. A separate Resume Gap Analyzer lets you paste any job description and get match score, missing skills, resume improvement suggestions, and ATS tips for that specific role.",
    keyFeatures: [
      "One-click sync from RemoteOK (API) + YC Jobs (Playwright), with duplicate detection and per-source error isolation",
      "AI job scoring: 0-100 fit score, up to 5 missing skills, 2-sentence summary — auto-runs after every sync",
      "Resume Gap Analyzer for any pasted job description, with ATS optimization tips",
      "Application pipeline tracking: saved → applied → interview → offer/rejected, with notes",
      "Recommendation dashboard: top matches, score distribution, match-quality breakdown",
      "104 passing pytest tests across the service layer, Gemini mocked out",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy 2.x",
      "Alembic",
      "Playwright",
      "Gemini AI",
      "Docker",
      "Pytest",
    ],
    architectureHighlights:
      "Strict backend layering — routers handle HTTP only, all business logic lives in services, every error normalized into one {data, error} envelope. Three-table Postgres schema (jobs, resumes, scrape_runs) with JSONB for skills. Gemini calls run with retry + exponential backoff. Scoring runs as a FastAPI BackgroundTask after the sync response is already returned.",
    githubLink: "https://github.com/AbhiJeetSoni22/Job_Hunter",
    demoLink: "https://job-hunter-blond-one.vercel.app/",
    image: "/projects/ai-internship-hunter.png",
    featured: true,
  },
  {
    title: "AI Agent — MCP System",
    shortDescription:
      "Hybrid AI agent platform: fast GROQ-powered chat with MCP tool execution, plus a LangChain deep-research agent — behind Google OAuth and JWT sessions.",
    detailedDescription:
      "A Node.js backend (with a dedicated React + Vite frontend) powering two AI paths: a fast chat agent that selects and executes MCP tools (web, GitHub, calendar, Gmail workflows) via GROQ's llama-3.3-70b-versatile, and a slower, more thorough LangChain deep-research agent that searches with Tavily, scrapes pages with Cheerio, and returns sourced answers. Auth is Google OAuth with JWT cookies; GitHub tokens shared in chat are detected and stored encrypted (AES-256).",
    keyFeatures: [
      "Google OAuth login + JWT cookie sessions",
      "MCP tool execution across web / GitHub / calendar / Gmail workflows",
      "GROQ-backed chat agent (llama-3.3-70b-versatile) with dynamic tool selection",
      "LangChain deep-search agent: Tavily web search + Cheerio scraping, sourced summaries",
      "Redis-based per-session conversation memory (last 10 messages)",
      "MongoDB user persistence; GitHub tokens auto-detected and stored AES-256 encrypted",
      "React + Vite frontend with protected routes and markdown-rendered chat UI",
    ],
    technologies: [
      "Node.js",
      "MCP",
      "GROQ",
      "LangChain",
      "Google OAuth",
      "JWT",
      "MongoDB",
      "Redis",
      "Tavily",
      "React 19",
      "Vite",
      "Tailwind CSS",
    ],
    architectureHighlights:
      "Layered src/ structure — agent/, ai/, config/, controllers/, middleware/, models/, routes/, services/. Local MCP server spawned via config/mcpClient.js. Chat flow: JWT auth → GROQ tool selection → MCP tool execution → response. Deep-search flow runs independently through the LangChain agent, decoupled from the chat path.",
    githubLink: "https://github.com/AbhiJeetSoni22/ai-agent-mcp",
    demoLink: "",
    image: "/projects/ai_agent_mcp.png",
    featured: true,
  },
  {
    title: "AI Evidence Review System",
    shortDescription:
      "Multi-modal AI pipeline that reviews submitted evidence using Gemini Vision and a rule engine to flag fraud, with checkpointed batch processing.",
    detailedDescription:
      "An evaluation pipeline combining Gemini Vision (multi-modal analysis) with a deterministic rule engine to review and flag claims for fraud indicators. Built with caching to avoid redundant AI calls and checkpoint recovery so long batch runs can resume instead of restarting. Validated against a batch of 44/44 test claims processed successfully.",
    keyFeatures: [
      "Multi-modal evidence analysis via Gemini Vision",
      "Rule engine layered on top of AI output for deterministic fraud checks",
      "Caching to avoid redundant AI evaluation calls",
      "Checkpoint recovery for resilient long-running batch processing",
      "Validated end-to-end on a 44/44 claim test batch",
    ],
    technologies: [
      "Gemini Vision",
      "Python",
      "Rule Engine",
      "Caching",
      "Checkpoint Recovery",
    ],
    architectureHighlights:
      "NOTE: only summary bullets were provided for this project, not a full README — architecture section intentionally left thin until fuller docs are supplied.",
    githubLink:
      "https://github.com/AbhiJeetSoni22/hackerrank-orchestrate-june26",
    demoLink: "",
    image: "/projects/ai-evidence-review.png",
    featured: true,
  },
  {
    title: "Grocify — Order Your Grocery",
    shortDescription:
      "A full-stack grocery shopping web app with product listing, cart, and checkout.",
    detailedDescription:
      "User-facing grocery ordering platform covering product browsing, cart management, and checkout, backed by MongoDB.",
    keyFeatures: [
      "Product listing with cart and checkout flow",
      "MongoDB-backed product and order data",
      "Animated, responsive UI built with Framer Motion",
    ],
    technologies: ["ReactJs", "Tailwind CSS", "Framer Motion", "MongoDB"],
    architectureHighlights:
      "NOTE: original project data doesn't list Node.js/Express/CI-CD — not added here since unconfirmed. Send backend/deploy details if you want those claims included.",
    githubLink: "https://github.com/AbhiJeetSoni22/Grocify",
    demoLink: "https://grocify-sooty.vercel.app/",
    image: "/projects/Grocify.png",
    featured: true,
  },

  // ---------------- KEEP (solid, not featured) ----------------
  {
    title: "Maargi - A ride booking platform",
    shortDescription:
      "Full-stack ride booking platform connecting users with nearby Saarthi in real time.",
    technologies: ["ReactJs", "Tailwind CSS", "NodeJs", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/AbhiJeetSoni22/Maargi",
    demoLink: "https://maargi.onrender.com",
    image: "/projects/Maargi.jpg",
  },
  {
    title: "PathTrim - Short Your Url",
    shortDescription:
      "URL shortening app with user auth, link generation, and history tracking.",
    technologies: ["ReactJs", "Tailwind CSS", "Framer Motion", "MongoDB"],
    githubLink: "https://github.com/AbhiJeetSoni22/PathTrim",
    demoLink: "https://pathtrim-frontend.onrender.com",
    image: "/projects/urlshortner.png",
  },
  {
    title: "Task Management App",
    shortDescription:
      "Collaborative task management application with real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/AbhiJeetSoni22/Task-Tracker",
    demoLink: "https://taskmanager-iota-two.vercel.app",
    image: "/projects/task-manager.png",
  },

  // ---------------- MOVED DOWN (kept, lower priority) ----------------
  {
    title: "ItemHub",
    shortDescription:
      "Product listing platform for showcasing and managing items with search and filter.",
    technologies: ["NextJs", "TypeScript", "MongoDB"],
    githubLink: "https://github.com/AbhiJeetSoni22/itemhub",
    demoLink: "https://itemhub-8j90.onrender.com/",
    image: "/projects/itemHub.jpg",
  },
  {
    title: "ImageKit",
    shortDescription:
      "Video upload platform where users can upload and manage their videos securely.",
    technologies: ["NextJs", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/AbhiJeetSoni22/imagekit",
    demoLink: "https://imagekit-ecru.vercel.app/",
    image: "/projects/Image.webp",
  },
  {
    title: "Travel App",
    shortDescription:
      "Travel application that provides real-time travel updates.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/AbhiJeetSoni22/travel_app",
    demoLink: "https://travel-jfvcun79f-abhijeet-sonis-projects.vercel.app/",
    image: "/projects/TravelApp.png",
  },
];
