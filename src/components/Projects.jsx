import React, { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectScreenshotCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40 group/carousel shadow-inner">
      {/* Images */}
      <img 
        src={images[currentIndex]} 
        alt={`${title} screenshot ${currentIndex + 1}`} 
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/carousel:scale-105"
      />
      
      {/* Navigation Buttons (visible on hover) */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 z-30 cursor-pointer text-sm font-bold"
            aria-label="Previous image"
          >
            &larr;
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/carousel:opacity-100 z-30 cursor-pointer text-sm font-bold"
            aria-label="Next image"
          >
            &rarr;
          </button>
          
          {/* Indicator dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 bg-black/40 px-2.5 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'bg-[#ff2a2a] w-3.5' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectPlaceholder = ({ title, id }) => {
  const gradients = {
    "groww-analyzer": "from-teal-950/70 to-emerald-950/70",
    "chatgpt-voice": "from-purple-950/70 to-indigo-950/70",
    "peppo-growth": "from-orange-950/70 to-red-950/70",
    "smart-society": "from-blue-950/70 to-slate-950/70"
  };

  const gradient = gradients[id] || "from-neutral-900/70 to-neutral-950/70";
  
  const initials = title
    .split(' ')
    .map(w => w[0])
    .join('')
    .substring(0, 3)
    .toUpperCase();

  return (
    <div className={`w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${gradient} flex items-center justify-center relative group/placeholder shadow-inner`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff08_0%,transparent_70%)]" />
      <div className="text-5xl md:text-6xl font-black tracking-widest text-white/5 font-sans select-none group-hover/placeholder:text-[#ff2a2a]/10 group-hover/placeholder:scale-105 transition-all duration-700">
        {initials}
      </div>
      <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-white/20 uppercase font-bold border border-white/5 px-2 py-0.5 rounded bg-black/20">
        Product Mockup
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const hasImages = project.images && project.images.length > 0;

  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={String((index + 1) * 100)}
      className={`relative rounded-[2.5rem] p-[1px] group transition-all duration-500 ${
        project.isFlagship 
          ? 'bg-gradient-to-br from-red-500/40 via-white/10 to-red-500/20 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60' 
          : 'bg-white/10 hover:bg-white/15'
      }`}
    >
      <div className={`rounded-[2.45rem] p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
        project.isFlagship 
          ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
          : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
      }`}>
        
        {/* Alternating Split-Screen Flex Layout */}
        <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-stretch`}>
          
          {/* Screenshot Column */}
          <div className="w-full md:w-[42%] shrink-0 flex items-center">
            {hasImages ? (
              <ProjectScreenshotCarousel images={project.images} title={project.title} />
            ) : (
              <ProjectPlaceholder title={project.title} id={project.id} />
            )}
          </div>

          {/* Details Column */}
          <div className="flex-1 flex flex-col justify-between text-left">
            <div>
              {/* Badge */}
              {project.badge && (
                <span className="inline-block text-[10px] font-black tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
                  {project.badge}
                </span>
              )}

              {/* Number + Title */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-black text-white/10 font-serif italic">{project.number}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-[#ff2a2a] transition-colors">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techTags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold text-white/60 bg-white/5 rounded-full border border-white/10 hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/30 hover:text-red-300 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                 {project.links && project.links.video && (
                  <a 
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 group/btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    Watch Demo
                  </a>
                )}

                {project.links && project.links.github && (
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 group/btn"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}

                {project.links && project.links.demo !== undefined && (
                  <a 
                    href={project.links.demo || '#'}
                    target={project.links.demo ? "_blank" : undefined}
                    rel={project.links.demo ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      project.links.demo 
                        ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)]' 
                        : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLinkIcon />
                    {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
                  </a>
                )}

                {project.links && project.links.frontendDemo && (
                  <a 
                    href={project.links.frontendDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-xs font-bold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
                  >
                    <ExternalLinkIcon />
                    Frontend Demo
                  </a>
                )}

                {project.links && project.links.backendApi && (
                  <a 
                    href={project.links.backendApi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLinkIcon />
                    Backend API
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-left">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that showcase my expertise in product planning, user research, and AI prototyping.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-20 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
