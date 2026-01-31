'use client';



import {
  Atom,
  Layout,
  Code,
  Palette,
  Server,
  GitBranch,
  Database,
  Terminal,
  Shield,
  Cloud,
  Figma,
  Cpu,
  Globe,
  Zap,
  Monitor,
  Boxes,
  Sparkles,
  Key,
  Play,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'motion/react';

/* ------------------ Lenis Setup ------------------ */
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}

/* ------------------ Reveal Wrapper ------------------ */
function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPage() {
  useLenis();
  const [hoveredMusic, setHoveredMusic] = useState<string | null>(null);

const experiences = [
  {
    period: 'Feb 2025 — Present',
    title: 'Frontend Developer',
    company: 'Jithvar Consultancy Services',
    location: 'Lucknow, India',
    accent: 'from-pink-500 to-purple-500',
  },
  {
    period: 'Jan 2024 — Jan 2025',
    title: 'MERN Stack Developer',
    company: 'Eliora Technology Pvt. Ltd.',
    location: 'Nagpur, India',
    accent: 'from-orange-500 to-red-500',
  },
  {
    period: 'Oct 2023 — Jan 2024',
    title: 'Software Engineering Intern',
    company: 'Riple Technologies Ltd.',
    location: 'Remote',
    accent: 'from-blue-500 to-cyan-500',
  },
];


const education = [
  {
    period: '2018 — 2022',
    title: 'Bachelor of Engineering',
    field: 'Mechanical Engineering',
    institute: 'RTMNU, Nagpur',
  },
  {
    period: '2022',
    title: 'Master in Blockchain Development',
    field: 'Certification Program',
    institute: 'Jetking, Nagpur',
  },
];

  const skills = [
    // Frontend Core
    { name: 'React.js', icon: Atom },
    { name: 'Next.js', icon: Layout },
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: Code },

    // State Management
    { name: 'Redux Toolkit', icon: Cpu },
    { name: 'Zustand', icon: Boxes },

    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Terminal },
    { name: 'REST APIs', icon: Globe },
    { name: 'JWT Auth', icon: Shield },

    { name: 'Responsive Design', icon: Monitor },
    // UI & Styling
    { name: 'ShadCN UI', icon: Palette },
    { name: 'Tailwind CSS', icon: Palette },

    { name: 'Material UI', icon: Palette },
    { name: 'Bootstrap', icon: Palette },


    // // Motion & UX
    { name: 'Framer Motion', icon: Sparkles },

    // // Backend


    // // Databases
    { name: 'MongoDB', icon: Database },
    { name: 'Firestore', icon: Database },

    // Tools
    { name: 'Firebase', icon: Cloud },
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: GitBranch },
    { name: 'Postman', icon: Zap },
    { name: 'Figma', icon: Figma },

    // Performance & SEO
    { name: 'Performance Optimization', icon: Zap },
    { name: 'SEO', icon: Globe },

    // Web3 (Basics)
    { name: 'Solidity (Basics)', icon: Key },
    { name: 'Web3.js', icon: Globe },
    { name: 'Smart Contracts', icon: Shield },
  ];


  const musicTracks = [
    { id: 1, title: 'Neon Dreams', artist: 'Synth Wave Studios', image: '/music-1.jpg', duration: '3:45' },
    { id: 2, title: 'Urban Pulse', artist: 'Beat Masters', image: '/music-2.jpg', duration: '4:12' },
    { id: 3, title: 'Electric Vibes', artist: 'Sound Collective', image: '/music-3.jpg', duration: '3:28' },
  ];

  return (
    <main className="">
      <div className="max-w-[1480px] mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


          <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6'>

            <div className=" space-y-6">

              <div className="bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit">
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Frontend Developer with <span className="text-pink-300 font-medium">2+ years of hands-on experience</span> building
                  visually refined, high-performance web applications. I specialize in crafting
                  <span className="text-pink-300 font-medium"> clean UI, smooth interactions, and scalable frontend architectures</span>
                  using modern technologies like Next.js and React. Passionate about performance,
                  accessibility, and creating interfaces that feel intuitive, fast, and delightful
                  across all devices.
                </p>


                <div className="flex gap-4 ">
                  {[Mail, Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 bg-white/5 rounded-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105"
                    >
                      <Icon size={18} />
                    </a>
                  ))}

                  <button className="w-fit px-3 py-1.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]  text-sm font-medium">
                    <ExternalLink size={16} /> Download Resume
                  </button>
                </div>


              </div>

              <div className="bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-pink-400">
                  MY BACKGROUND
                </h3>
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-gray-300">
                    Growing up in India, I was constantly surrounded by a blend of creativity,
                    problem-solving, and curiosity. From an early age, I found myself drawn to how
                    things work, which naturally evolved into a deep interest in
                    <span className="text-pink-300 font-medium"> technology and digital experiences</span>.
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    This curiosity turned into a strong <span className="text-pink-300 font-medium">passion for frontend development</span>,
                    where logic meets design. Pursuing Computer Science allowed me to explore how
                    thoughtful interfaces and well-engineered systems can significantly improve
                    user experiences.
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    Today, I focus on building products that are not only functional, but memorable.
                    By combining <span className="text-pink-300 font-medium">design sensibility, performance optimization,
                      and clean code</span>, I aim to transform complex ideas into elegant,
                    user-friendly solutions that people genuinely enjoy using.
                  </p>

                </div>

              </div>
            </div>



            <div className="bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-0 border border-white/10 overflow-hidden">
              <div className="relative h-full">
                <Image
                  src="/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>


            <div className="col-span-2 bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-full overflow-hidden">
              <h3 className="text-sm font-bold uppercase mb-6 text-pink-400">Skills & Technologies</h3>
              <div className="h-[calc(100%-2rem)] overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center  gap-2 px-4 py-3  rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <skill.icon size={22} className="text-pink-400 " />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>






          <div className="lg:col-span-1 space-y-6">

         <div className="bg-gradient-to-br from-[#0f0f0f] to-[#080808] rounded-2xl p-6 border border-white/10 relative overflow-hidden">
  <h3 className="text-sm font-bold uppercase mb-6 text-pink-400 tracking-wider">
    Experience
  </h3>

  <div className="space-y-5">
    {experiences.map((exp, i) => (
      <div key={i} className="relative pl-10    group">
        {/* timeline line */}
        <span className="absolute left-[5px] top-0 h-full w-px bg-pink-400/20" />

        {/* glowing dot */}
        <span
          className={`absolute left-0 top-1.5 w-3 h-3 rounded-full bg-pink-400 shadow-lg`}
        />

        <p className="text-xs text-gray-400 mb-1">{exp.period}</p>
        <p className="text-sm font-semibold text-white mb-1">
          {exp.title}
        </p>
        <p className="text-xs text-gray-300">{exp.company}</p>
        <p className="text-xs text-gray-500">{exp.location}</p>

        {/* hover glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
      </div>
    ))}
  </div>
</div>


         <div className="bg-gradient-to-br from-[#0f0f0f] to-[#080808] rounded-2xl p-6 border border-white/10">
  <h3 className="text-sm font-bold uppercase mb-6 text-pink-400 tracking-wider">
    Education
  </h3>

  <div className="space-y-6">
    {education.map((edu, i) => (
      <div
        key={i}
        className="relative group    pl-10 transition"
      >
        {/* accent bar */}
             <span className="absolute left-[5px] top-0 h-full w-px bg-pink-400/20" />

        {/* glowing dot */}
        <span
          className={`absolute left-0 top-1.5 w-3 h-3 rounded-full bg-pink-400 shadow-lg`}
        />

        <p className="text-xs text-gray-400 mb-1">{edu.period}</p>
        <p className="text-sm font-semibold text-white">{edu.title}</p>
        <p className="text-xs text-gray-300">{edu.field}</p>
        <p className="text-xs text-gray-500 mt-1">{edu.institute}</p>

         <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-pink-500/5 to-purple-500/5" />
      
      </div>
    ))}
  </div>
</div>

            <div className="bg-gradient-to-br from-[#111] to-[#0b0b0b] rounded-xl p-6 border border-white/10 h-fit">
              <h3 className="text-sm font-bold uppercase mb-6 text-pink-400">Favorite Tracks</h3>
              <div className="space-y-3">
                {musicTracks.map(track => (
                  <div
                    key={track.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    onMouseEnter={() => setHoveredMusic(String(track.id))}
                    onMouseLeave={() => setHoveredMusic(null)}
                  >
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <Play size={20} className="text-gray-400 group-hover:text-pink-400 transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-pink-300 transition-colors">{track.title}</p>
                      <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #7c3aed);
        }
      `}</style>
    </main>
  );
}
