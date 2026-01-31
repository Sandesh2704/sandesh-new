'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const cardsData = [
  {
    id: '01',
    title: 'CUSTOM WEBSITES',
    desc: 'SEO-optimized, high-performance websites built with Next.js and Tailwind CSS.            Focused on speed, accessibility, and conversion-driven UI.  Core skills here are transferable to AI dashboards, Blockchain interfaces, and SaaS products.',
    stack: 'Next.js · React · Tailwind CSS · SEO · Performance · Scalable Architecture',
  },
  {
    id: '02',
    title: 'ERP & ADMIN PANELS',
    desc: 'Enterprise-grade ERP systems with multi-role dashboards, secure authentication,            and real-time data handling. Designed to simplify complex operations,            and applicable to AI management tools, Blockchain admin panels, and SaaS apps.',
    stack: 'React · Redux Toolkit · JWT · Firebase · Role-based Access · Real-time Systems',
  },
  {
    id: '03',
    title: 'E-COMMERCE PLATFORMS',
    desc: 'Scalable eCommerce platforms with advanced cart logic, pricing rules, and optimized checkout flows.            Reliable under high traffic and adaptable to subscription systems, SaaS marketplaces, and AI-driven stores.',    stack: 'Next.js · Redux · REST APIs · Payments · Optimization · High Traffic',
  },
  {
    id: '04',
    title: 'DASHBOARDS & CMS',
    desc: 'Clean, data-driven dashboards and CMS tools with intuitive UX and granular permissions.            Skills used here extend to AI analytics panels, Blockchain monitoring, and SaaS dashboards.',
    stack: 'React · Charts · REST APIs · Admin Systems · UX Design',
  },
  {
    id: '05',
    title: 'REAL-TIME APPLICATIONS',
    desc: 'Applications with live updates, secure authentication, and synchronized data across users.            Reliable for chat apps, collaborative SaaS tools, and real-time AI monitoring platforms.',
    stack: 'Firebase · Firestore · Auth · Real-time Sync · WebSockets',
  },
  {
    id: '06',
    title: 'INTERACTIVE UI & MOTION',
    desc: 'Smooth animations, micro-interactions, and immersive motion using GSAP and Framer Motion.            Skills here improve user engagement for any modern UI, including AI dashboards, SaaS apps, or Blockchain products.',
    stack: 'GSAP · Framer Motion · UI Motion · UX Polish · Interaction Design',
  },
];




export default function StickyCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    gsap.ticker.lagSmoothing(0);

    const cards = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll('.card')
    );

    const container = containerRef.current;

    const setInitialState = () => {
      cards.forEach((card) => {
        gsap.set(card, {
          x: 0,
          y: window.innerHeight,
          opacity: 0,
        });
      });
    };

    setInitialState();

    const HOLD_AFTER_LAST = window.innerHeight * 0.6;
    const totalHeight = window.innerHeight * 3.5 + HOLD_AFTER_LAST;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${totalHeight}`,
      pin: true,
      scrub: 1,

      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        const TOP_GAP = 40;
        const LEFT_GAP = 0;
        const VERTICAL_STACK_OFFSET = 28;

        const containerWidth = container.offsetWidth;
        const RIGHT_SAFE_GAP = containerWidth * 0.25;

        // HORIZONTAL DISTRIBUTION
        const cardWidth = cards[0].offsetWidth;
        const STACK_START_X = LEFT_GAP;
        const STACK_END_X =
          containerWidth - RIGHT_SAFE_GAP - cardWidth;

        const STACK_WIDTH = STACK_END_X - STACK_START_X;
        const HORIZONTAL_GAP =
          totalCards > 1
            ? STACK_WIDTH / (totalCards - 1)
            : 0;

        // 🔑 Delay only for cards 2+
        const cardAnimationStart = 0.18;
        const adjustedProgress =
          progress > cardAnimationStart
            ? (progress - cardAnimationStart) /
              (1 - cardAnimationStart)
            : 0;

        cards.forEach((card, index) => {
          // ✅ FIRST CARD STARTS IMMEDIATELY
          const effectiveProgress =
            index === 0 ? progress : adjustedProgress;

          if (effectiveProgress <= 0) {
            gsap.set(card, { opacity: 0 });
            return;
          }

          const cardStart = index * progressPerCard;
          let cardProgress =
            (effectiveProgress - cardStart) / progressPerCard;

          cardProgress = gsap.utils.clamp(0, 1, cardProgress);

          const targetX =
            STACK_START_X + index * HORIZONTAL_GAP;

          const y =
            window.innerHeight -
            cardProgress *
              (window.innerHeight -
                TOP_GAP -
                index * VERTICAL_STACK_OFFSET);

          gsap.set(card, {
            x: cardProgress * targetX,
            y:
              cardProgress === 1
                ? TOP_GAP + index * VERTICAL_STACK_OFFSET
                : y,
            opacity: cardProgress,
          });
        });
      },
    });

    const onResize = () => {
      setInitialState();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        ref={containerRef}
        className="relative h-full max-w-[1480px] mx-auto"
      >
        {/* HEADER */}
        <div className="absolute top-0 right-0 pt-12 text-right max-w-[520px]">
<h2 className="text-6xl font-extrabold leading-tight text-gray-300">
  WHAT I
  <br />
  <span className="text-pink-400">BUILD</span>
</h2>

<p className="mt-4 text-gray-300 text-lg">
  High-impact digital products crafted with performance, scalability, and adaptability. 
  From websites to dashboards, eCommerce to real-time applications, my skills apply 
  across domains including AI, Blockchain, SaaS, and enterprise systems.
</p>

        </div>

        {/* CARDS */}
        {cardsData.map((card) => (
  <div
    key={card.id}
    className="card absolute top-0 left-0 h-[60vh] w-[30vw]
      border border-white/10
      bg-gradient-to-br from-[#111] to-[#0b0b0b]
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      p-8 opacity-0 flex flex-col justify-between"
  >
    {/* TOP */}
    <div>
      <div className="text-6xl font-bold text-pink-400">
        {card.id}
      </div>

      <h3 className="mt-6 text-3xl font-bold text-gray-200 leading-tight">
        {card.title}
      </h3>

      <p className="mt-4 text-gray-400 text-base leading-relaxed max-w-[90%]">
        {card.desc}
      </p>
    </div>

    {/* BOTTOM */}
    <div className="pt-6 border-t border-white/10">
      <p className="text-sm text-gray-500 tracking-wide uppercase">
        {card.stack}
      </p>
    </div>
  </div>
))}

      </div>
    </section>
  );
}



