export const projects = [
  {
    slug: "proctorx",
    name: "ProctorX",
    category: "Full Stack System",
    summary: "A secure examination platform for managing assessments, candidate sessions, and automated evaluation.",
    image: "/Proctorx.png",
    stack: ["React", "Spring Boot", "MySQL", "REST APIs"],
    overview:
      "ProctorX brings exam creation, candidate sessions, automated evaluation, and result management into one dependable assessment workflow.",
    problem:
      "Digital examinations require controlled access, predictable session flows, accurate evaluation, and a data model that can connect exams, questions, attempts, and results without ambiguity.",
    architecture: [
      "React client for examination and administration workflows",
      "Spring Boot service layer for domain rules and evaluation",
      "REST APIs defining predictable frontend-backend contracts",
      "MySQL relational model for users, exams, questions, attempts, and results",
    ],
    challenges: [
      "Modeling multi-step examination workflows without tightly coupling each stage",
      "Keeping candidate and administrator responsibilities clearly separated",
      "Designing reliable automated evaluation and result-processing logic",
    ],
    learnings: [
      "Domain modeling for multi-step workflows",
      "Maintaining predictable API contracts",
      "Structuring relational data around real application behavior",
    ],
    improvements: [
      "Add stronger session monitoring and audit trails",
      "Move long-running evaluation tasks to asynchronous workers",
      "Introduce richer analytics for assessment performance",
    ],
    systemDesign: [
      "Cache frequently accessed exam metadata during active sessions",
      "Scale evaluation workers independently from the core API",
      "Use read replicas for analytics-heavy result queries",
      "Add rate limiting and idempotency around submission endpoints",
    ],
    githubUrl: "https://github.com/Bavithran100/ProctorXFrontend",
    liveUrl: "https://proctor-x-frontend.vercel.app/",
  },
  {
    slug: "health-consultation",
    name: "Online Health Consultation System",
    category: "Backend Engineering",
    summary: "A role-aware healthcare platform for appointments, consultations, and secure medical records.",
    image:
      "https://images.unsplash.com/photo-1618902345200-8c3fe6106608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwbGlnaHRzfGVufDF8fHx8MTc3MDQ0NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Spring Boot", "Thymeleaf", "MySQL", "REST APIs"],
    overview:
      "A healthcare workflow system that coordinates patients, doctors, appointments, consultations, and medical records through role-aware application flows.",
    problem:
      "Healthcare workflows involve multiple actors and sensitive records. The system needed to keep access responsibilities separate while preserving consistent scheduling and consultation data.",
    architecture: [
      "Spring Boot application organized around healthcare workflows",
      "Thymeleaf interface connected to server-side application logic",
      "MySQL relational model for users, appointments, and medical records",
      "Role-aware access controls around protected workflows",
    ],
    challenges: [
      "Keeping patient and doctor permissions separate",
      "Maintaining consistent state across booking and consultation stages",
      "Modeling connected healthcare records in a relational database",
    ],
    learnings: [
      "Authorization boundaries",
      "Relational workflow modeling",
      "Designing backend logic around user responsibilities",
    ],
    improvements: [
      "Add notification and appointment reminder services",
      "Introduce audit logs for sensitive record access",
      "Separate scheduling into an independently scalable service",
    ],
    systemDesign: [
      "Use database indexes for doctor, patient, and appointment-time queries",
      "Add a queue for reminders and asynchronous notifications",
      "Cache doctor availability with short expiration windows",
    ],
    githubUrl: "https://github.com/Bavithran100/Online-Meeting-App",
    liveUrl: "https://online-meeting-app-2.onrender.com/",
  },
  {
    slug: "mindpilot",
    name: "MindPilot",
    category: "AI Application",
    summary: "An AI learning assistant for concept explanations, guided tutoring, and question generation.",
    image:
      "https://images.unsplash.com/photo-1760842543713-108c3cadbba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MDQ0NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["React", "Groq API", "LLaMA 3.1", "Prompt Engineering"],
    overview:
      "MindPilot turns a general-purpose language model into a focused learning experience for explanations, tutoring conversations, and exam-question generation.",
    problem:
      "General model responses can be inconsistent or unfocused for learning. The application needed structured interactions that produce useful educational output.",
    architecture: [
      "React interface for guided learning conversations",
      "Groq API integration for low-latency model inference",
      "Prompt templates tailored to explanation and question-generation tasks",
      "Response handling that presents generated content predictably",
    ],
    challenges: [
      "Keeping generated educational content relevant and clear",
      "Designing prompts that work across multiple learning tasks",
      "Managing model response states and failures in the interface",
    ],
    learnings: [
      "LLM application design",
      "Prompt and response orchestration",
      "Designing user experiences around probabilistic output",
    ],
    improvements: [
      "Add retrieval-augmented generation for grounded answers",
      "Store learning history and personalize future explanations",
      "Introduce structured output validation and evaluation",
    ],
    systemDesign: [
      "Cache repeated educational queries where appropriate",
      "Add request quotas and model-provider fallbacks",
      "Use a vector database for retrieval-augmented generation",
    ],
    githubUrl: "https://github.com/Bavithran100/ChatBot",
    liveUrl: "https://chat-bot-six-ochre.vercel.app/",
  },
  {
    slug: "stocktrack",
    name: "Stock Track Pro",
    category: "Inventory Management",
    summary: "An authenticated inventory system for tracking stock changes and surfacing low-stock conditions.",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzAzNjMxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Django", "MongoDB", "REST APIs", "JWT"],
    overview:
      "Stock Track Pro gives teams an authenticated view of inventory state, product changes, and low-stock conditions through a focused management dashboard.",
    problem:
      "Inventory data must remain consistent as products are created, updated, and consumed, while protected operations stay available only to authenticated users.",
    architecture: [
      "Django backend exposing inventory REST APIs",
      "MongoDB persistence for product and stock records",
      "JWT-based authentication for protected operations",
      "Dashboard workflows for CRUD operations and stock alerts",
    ],
    challenges: [
      "Keeping stock state consistent across CRUD operations",
      "Protecting inventory actions with token-based authentication",
      "Surfacing low-stock conditions from changing data",
    ],
    learnings: [
      "Token-based authentication",
      "Inventory state modeling",
      "Connecting API behavior to operational dashboard needs",
    ],
    improvements: [
      "Add immutable stock-movement history",
      "Introduce supplier and purchase-order workflows",
      "Build configurable alert thresholds and notifications",
    ],
    systemDesign: [
      "Use atomic updates to protect stock counts under concurrency",
      "Add indexes for product and low-stock queries",
      "Publish stock events for alerts and reporting",
    ],
    githubUrl: "https://github.com/Bavithran100/stockapp",
    liveUrl: "https://stockapp-5.onrender.com/",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
