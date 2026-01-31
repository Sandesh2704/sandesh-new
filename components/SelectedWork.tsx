"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github,
  Cpu,
  Code2,
  Layers,
  Database,
  Terminal,
  Layout,
  Palette,
  Globe,
  BarChart3,
  Shield,
  Zap,
  Server,
  FileCode,
  Wifi,
  Cloud,
  Smartphone,
  Network,
  Rocket,
  Box,
  Code,
  Eye,
  ShoppingBag,
  CpuIcon,
  ChevronRightSquare,
  AirVent,
  CreditCard
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

// Updated projectsData array using your existing data structure
const projectsData = [
  {
    id: 1,
    title: "Innovative Website Design for a Web Agency",
    description: "Developed a modern web agency website using React.js and Tailwind CSS, featuring smooth scrolling effects, GSAP animations, and Framer Motion for dynamic and interactive user experiences.",
    category: "Design & Development",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://codenest-portfolio.firebaseapp.com/",
    githubUrl: "#",
    image: "/project/CodeNest.png"
  },
  {
    id: 2,
    title: "CRM Portal for Company Management",
    description: "A multi-role portal with dashboards tailored for task management, attendance tracking, and performance monitoring.",
    category: "ERP & Admin Panels",
    stack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project/project-crm-portol.webp"
  },
  {
    id: 3,
    title: "Token Presale Platform",
    description: "A front-end for a token presale platform supporting multiple blockchain currencies and responsive design.",
    category: "Fintech",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Chart.js"],
    liveUrl: "https://rebel-protocol-96wiljsxr-sandesh-deshmukhs-projects.vercel.app/",
    githubUrl: "#",
    image: "/project/project-ui.webp"
  },
  {
    id: 4,
    title: "UI Design Conversion to Code",
    description: "Successfully converted a complex design into a fully functional and responsive user interface.",
    category: "UI/UX Development",
    stack: ["React.js", "Tailwind CSS"],
    liveUrl: "https://toobdog-2q49s21vb-sandesh-deshmukhs-projects.vercel.app/",
    githubUrl: "#",
    image: "/project/project-toob-dog.webp"
  },
  {
    id: 5,
    title: "Portfolio Website (Previous Design)",
    description: "A responsive portfolio built with Next.js and Tailwind CSS to showcase projects and professional achievements effectively.",
    category: "Portfolio",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://sandeshdeshmukhportfolio.vercel.app/",
    githubUrl: "#",
    image: "/project/project-ui.webp"
  },
  {
    id: 6,
    title: "Frontend & UI Development for Web Applications",
    description: "Responsive and user-centric web applications using the MERN stack and Next.js, ensuring seamless user experiences.",
    category: "Full Stack Development",
    stack: ["Next.js", "React.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project/project-ui.webp"
  },
];

// Icon mapping for different technologies
const techIcons = {
  // Frameworks & Libraries
  'react.js': <Cpu size={14} className="inline mr-1.5" />,
  'react': <Cpu size={14} className="inline mr-1.5" />,
  'next.js': <Rocket size={14} className="inline mr-1.5" />,
  'next': <Rocket size={14} className="inline mr-1.5" />,
  'node.js': <Server size={14} className="inline mr-1.5" />,
  'node': <Server size={14} className="inline mr-1.5" />,
  'express.js': <Terminal size={14} className="inline mr-1.5" />,
  'express': <Terminal size={14} className="inline mr-1.5" />,
  'framer motion': <Eye size={14} className="inline mr-1.5" />,
  'framer': <Eye size={14} className="inline mr-1.5" />,
  
  // Styling
  'tailwind css': <Palette size={14} className="inline mr-1.5" />,
  'tailwind': <Palette size={14} className="inline mr-1.5" />,
  
  // Databases
  'mongodb': <Database size={14} className="inline mr-1.5" />,
  'mongo': <Database size={14} className="inline mr-1.5" />,
  
  // Visualization & Charts
  'chart.js': <BarChart3 size={14} className="inline mr-1.5" />,
  'chart': <BarChart3 size={14} className="inline mr-1.5" />,
  
  // Animation
  'gsap': <Zap size={14} className="inline mr-1.5" />,
  
  // General
  'javascript': <Code2 size={14} className="inline mr-1.5" />,
  'typescript': <FileCode size={14} className="inline mr-1.5" />,
  'html': <Code size={14} className="inline mr-1.5" />,
  'css': <Layout size={14} className="inline mr-1.5" />,
  'webpack': <Box size={14} className="inline mr-1.5" />,
  'vite': <Zap size={14} className="inline mr-1.5" />,
  'vercel': <Cloud size={14} className="inline mr-1.5" />,
  'firebase': <CpuIcon size={14} className="inline mr-1.5" />,
  'graphql': <Network size={14} className="inline mr-1.5" />,
  'websockets': <Wifi size={14} className="inline mr-1.5" />,
  'redux': <Layers size={14} className="inline mr-1.5" />,
  'jwt': <Shield size={14} className="inline mr-1.5" />,
  'stripe': <CreditCard size={14} className="inline mr-1.5" />,
  'd3.js': <BarChart3 size={14} className="inline mr-1.5" />,
  'openai': <AirVent size={14} className="inline mr-1.5" />,
  'postgresql': <Database size={14} className="inline mr-1.5" />,
  'redis': <Database size={14} className="inline mr-1.5" />,
  
  // Default
  'default': <Code2 size={14} className="inline mr-1.5" />
};

// Category icons
const categoryIcons = {
  'Design & Development': <Palette size={12} className="inline mr-1" />,
  'ERP & Admin Panels': <ChevronRightSquare size={12} className="inline mr-1" />,
  'Fintech': <BarChart3 size={12} className="inline mr-1" />,
  'UI/UX Development': <Layout size={12} className="inline mr-1" />,
  'Portfolio': <Globe size={12} className="inline mr-1" />,
  'Full Stack Development': <Layers size={12} className="inline mr-1" />,
  'E-Commerce': <ShoppingBag size={12} className="inline mr-1" />,
  'Dashboards & CMS': <BarChart3 size={12} className="inline mr-1" />,
  'CMS & AI Tools': <CpuIcon size={12} className="inline mr-1" />,
};

export default function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        borderRadius: "800px",
      },
      {
        borderRadius: "12px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  // Function to get appropriate icon for each technology
  const getTechIcon = (tech:any) => {
    const techLower = tech.toLowerCase();
    
    // Check for exact matches first
    for (const [key, icon] of Object.entries(techIcons)) {
      if (techLower.includes(key.toLowerCase())) {
        return icon;
      }
    }
    
    // Check for partial matches
    if (techLower.includes('js')) return techIcons['javascript'];
    if (techLower.includes('ts')) return techIcons['typescript'];
    if (techLower.includes('css')) return techIcons['css'];
    if (techLower.includes('html')) return techIcons['html'];
    if (techLower.includes('api')) return <Globe size={14} className="inline mr-1.5" />;
    if (techLower.includes('auth')) return <Shield size={14} className="inline mr-1.5" />;
    if (techLower.includes('anim')) return <Zap size={14} className="inline mr-1.5" />;
    
    return techIcons['default'];
  };

  // Function to get category icon
  const getCategoryIcon = (category:any) => {
    return categoryIcons[category] || <Globe size={12} className="inline mr-1" />;
  };

  return (
    <section className="py-20">
      <div
        ref={sectionRef}
        className="bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 max-w-[1480px] py-12 mx-auto px-4 sm:px-8 rounded-[100px] overflow-hidden"
      >
        <div className="flex items-center mb-12 justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-purple-500" />
              <span className="text-sm font-semibold tracking-wider text-pink-400 uppercase">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl flex flex-col md:flex-row gap-2 md:text-6xl font-bold text-white mb-4"
            >
              <span>Featured</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              Real-world applications built with modern tech stacks,
              focusing on performance, scalability, and exceptional user experiences.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="group relative h-[520px] rounded-2xl overflow-hidden bg-[#0b0b0b] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* IMAGE SECTION */}
              <div className="relative h-[62%] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* CATEGORY BADGE with icon */}
                <span className="absolute top-4 left-4 z-10 text-xs font-medium px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-gray-200 border border-white/10 flex items-center gap-1.5">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>

                {/* ICON ACTIONS */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group/link"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={16} className="text-white group-hover/link:text-white" />
                    </a>
                  )}

                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 group/link"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} className="text-white group-hover/link:text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="relative p-6 flex flex-col justify-between h-[38%] bg-gradient-to-br from-[#111] to-[#0b0b0b]">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* TECH STACK with icons */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-pink-500/50 hover:text-pink-300 transition-all duration-300 flex items-center"
                      title={tech}
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 inline-flex items-center">
            <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all">
              View All Projects
            </span>
            <ArrowUpRight className="ml-2 w-4 h-4 text-gray-400 group-hover:text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
// "use client"
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
// import Image from "next/image";
// import { motion } from "motion/react";

// gsap.registerPlugin(ScrollTrigger);

// const projectsData = [
//   {
//     id: 1,
//     title: "ERP Dashboard Suite",
//     description: "Enterprise resource planning dashboard with multi-role access, real-time analytics, and automated workflow management.",
//     category: "ERP & Admin Panels",
//     stack: ["React", "Redux", "Node.js", "MongoDB", "JWT"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/CodeNest.png"
//   },
//   {
//     id: 2,
//     title: "E-Commerce Platform",
//     description: "Full-featured online store with advanced cart logic, payment integration, and inventory management system.",
//     category: "E-Commerce",
//     stack: ["Next.js", "Stripe", "Tailwind", "Firebase"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/project-crm-portol.webp"
//   },
//   {
//     id: 3,
//     title: "Real-Time Analytics Dashboard",
//     description: "Interactive dashboard with live data visualization, custom reporting, and team collaboration features.",
//     category: "Dashboards & CMS",
//     stack: ["React", "D3.js", "WebSockets", "Express"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/project-toob-dog.webp"
//   },
//   {
//     id: 4,
//     title: "AI Content Management System",
//     description: "Intelligent CMS with AI-powered content generation, SEO optimization, and multi-language support.",
//     category: "CMS & AI Tools",
//     stack: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
//     liveUrl: "#",
//     githubUrl: "#",
//     image: "/project/project-ui.webp"
//   },
// ];

// export default function SelectedWork() {
//    const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       {
//         borderRadius: "800px",
//       },
//       {
//         borderRadius: "12px",
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "top top",
//           scrub: true,
//         },
//       }
//     );
//   }, []);


//   return (
//     <section className="">
 

//       <div
//         ref={sectionRef}
//         className="bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 max-w-[1480px] py-12 mx-auto px-4 sm:px-8 rounded-[100px] overflow-hidden"
//       >

//         <div className="flex items-center mb-12 justify-between">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-3 mb-4"
//             >
//               <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-purple-500" />
//               <span className="text-sm font-semibold tracking-wider text-pink-400 uppercase">
//                 Selected Work
//               </span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-5xl flex gap-2 md:text-6xl font-bold text-white mb-4"
//             >
//               Featured
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
//                 Projects
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg text-gray-300 "
//             >
//               Real-world applications built with modern tech stacks,
//               focusing on performance, scalability, and exceptional user experiences.
//             </motion.p>
//           </div>

      
//         </div>

//         <div  className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {projectsData.map((project) => (
//          <motion.div
//   key={project.id}
//   className="group relative h-[520px] rounded-2xl overflow-hidden bg-[#0b0b0b] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all"
//   whileHover={{ y: -8 }}
// >
//   {/* IMAGE SECTION */}
//   <div className="relative h-[62%] overflow-hidden">
//     <Image
//       src={project.image}
//       alt={project.title}
//       fill
//       className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
//     />

//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

//     {/* CATEGORY BADGE */}
//     <span className="absolute top-4 left-4 z-10 text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur text-gray-200 border border-white/10">
//       {project.category}
//     </span>

//     {/* ICON ACTIONS */}
//     <div className="absolute top-4 right-4 z-10 flex gap-2">
//       <a
//         href={project.githubUrl}
//         target="_blank"
//         className="w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition"
//       >
//         <Github size={16} className="text-white" />
//       </a>

//       <a
//         href={project.liveUrl}
//         target="_blank"
//              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition"
//       >
//         <ExternalLink size={16} className="text-white" />
//       </a>
//     </div>
//   </div>

//   {/* CONTENT SECTION */}
//   <div className="relative p-6 flex flex-col justify-between bg-gradient-to-br from-[#111] to-[#0b0b0b]">
//     <div>
//       <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all">
//         {project.title}
//       </h3>

//       <p className="text-sm text-gray-400 line-clamp-3">
//         {project.description}
//       </p>
//     </div>

//     {/* STACK */}
//     <div className="flex flex-wrap gap-2 mt-6">
//       {project.stack.map((tech, i) => (
//         <span
//           key={i}
//           className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10"
//         >
//           {tech}
//         </span>
//       ))}
//     </div>
//   </div>
// </motion.div>


//           ))}


//         </div>

//       </div>
//     </section>
//   );
// }
