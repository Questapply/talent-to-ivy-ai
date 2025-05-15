
import React, { useState, useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
    content: "QuestApply's AI talent assessment accurately identified my strengths in data analysis and connected me with universities that perfectly matched my profile. I got accepted to my dream program!"
  },
  {
    name: "Sophia Chen",
    role: "MBA Candidate",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961",
    content: "The 7-stage process simplified what would have been months of research and preparation. The AI assistant guided me through every step, from finding the right business schools to crafting a compelling personal statement."
  },
  {
    name: "Marcus Taylor",
    role: "Computer Science Major",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
    content: "I was lost in the maze of university applications until I found QuestApply. The AI not only helped me discover my passion for AI development but also streamlined my applications to top tech universities."
  },
  {
    name: "Emily Rodriguez",
    role: "Medicine Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1974",
    content: "QuestApply helped me identify my strengths in research and patient care, then matched me with medical schools that aligned with these skills. The personalized guidance throughout the application process was invaluable."
  },
  {
    name: "Jason Wu",
    role: "Engineering Graduate",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1974",
    content: "The personalized university matching algorithm found programs I hadn't even considered but that aligned perfectly with my career goals. I'm now attending my top-choice engineering school thanks to QuestApply."
  },
  {
    name: "Aisha Patel",
    role: "Law School Applicant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
    content: "QuestApply's AI assistant helped me craft a compelling personal statement that highlighted my unique experiences. The detailed guidance through each step of the application process was beyond valuable."
  }
];

// Split testimonials into columns for the staggered effect
const firstColumnTestimonials = [testimonials[0], testimonials[3], testimonials[5]];
const secondColumnTestimonials = [testimonials[1], testimonials[4]];
const thirdColumnTestimonials = [testimonials[2]];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);
  const secondColumnRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, 
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Scroll animation for columns
  useEffect(() => {
    if (!isVisible) return;

    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth' as ScrollBehavior
    };

    // Scroll first and third columns up (negative values)
    const scrollFirstColumn = () => {
      if (firstColumnRef.current) {
        const scrollDistance = firstColumnRef.current.scrollHeight - firstColumnRef.current.clientHeight;
        firstColumnRef.current.scrollTo({
          ...scrollOptions,
          top: scrollDistance
        });
      }
      
      if (thirdColumnRef.current) {
        const scrollDistance = thirdColumnRef.current.scrollHeight - thirdColumnRef.current.clientHeight;
        thirdColumnRef.current.scrollTo({
          ...scrollOptions,
          top: scrollDistance
        });
      }
    };
    
    // Scroll second column down (positive values)
    const scrollSecondColumn = () => {
      if (secondColumnRef.current) {
        secondColumnRef.current.scrollTo({
          ...scrollOptions,
          top: 0
        });
      }
    };
    
    // Initial delay to let the columns render properly
    const timeoutId = setTimeout(() => {
      scrollFirstColumn();
      scrollSecondColumn();
      
      // Set up alternating scroll direction for continuous animation
      const intervalId = setInterval(() => {
        if (firstColumnRef.current && firstColumnRef.current.scrollTop > 0) {
          firstColumnRef.current.scrollTo({
            ...scrollOptions,
            top: 0
          });
          
          if (thirdColumnRef.current) {
            thirdColumnRef.current.scrollTo({
              ...scrollOptions,
              top: 0
            });
          }
          
          if (secondColumnRef.current) {
            const scrollDistance = secondColumnRef.current.scrollHeight - secondColumnRef.current.clientHeight;
            secondColumnRef.current.scrollTo({
              ...scrollOptions,
              top: scrollDistance
            });
          }
        } else {
          scrollFirstColumn();
          scrollSecondColumn();
        }
      }, 10000); // Change direction every 10 seconds
      
      return () => clearInterval(intervalId);
    }, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,86,255,0.2),transparent_70%)] animate-pulse-gentle"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            <span className="text-glow-primary">Student Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-text text-shadow-lg">Success Stories</h2>
          <p className="text-xl text-white/90 font-medium text-shadow-sm">
            Don't just take our word for it. Hear from students who transformed their university application journey with QuestApply.
          </p>
        </div>
        
        {/* Staggered testimonials grid with scrolling effect inspired by Cursor.com */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* First column - scrolls up */}
          <ScrollArea 
            className="h-[600px] md:h-[700px] overflow-hidden"
            ref={firstColumnRef}
          >
            <div className="space-y-8 pr-4">
              {firstColumnTestimonials.map((testimonial, idx) => (
                <TestimonialCard 
                  key={`first-${idx}`}
                  testimonial={testimonial}
                  isVisible={isVisible}
                  delay={idx * 0.2}
                />
              ))}
            </div>
          </ScrollArea>
          
          {/* Second column - scrolls down */}
          <ScrollArea 
            className="h-[600px] md:h-[700px] overflow-hidden md:mt-32"
            ref={secondColumnRef}
          >
            <div className="space-y-8 pr-4">
              {secondColumnTestimonials.map((testimonial, idx) => (
                <TestimonialCard 
                  key={`second-${idx}`}
                  testimonial={testimonial}
                  isVisible={isVisible}
                  delay={idx * 0.2 + 0.3}
                />
              ))}
            </div>
          </ScrollArea>
          
          {/* Third column - scrolls up */}
          <ScrollArea 
            className="h-[600px] md:h-[700px] overflow-hidden"
            ref={thirdColumnRef}
          >
            <div className="space-y-8 pr-4">
              {thirdColumnTestimonials.map((testimonial, idx) => (
                <TestimonialCard 
                  key={`third-${idx}`}
                  testimonial={testimonial}
                  isVisible={isVisible}
                  delay={idx * 0.2 + 0.4}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

// Testimonial card component with improved text clarity
const TestimonialCard = ({ 
  testimonial, 
  isVisible, 
  delay 
}: { 
  testimonial: typeof testimonials[0], 
  isVisible: boolean,
  delay: number 
}) => {
  return (
    <div 
      className={`card-glass rounded-xl p-8 transition-all duration-700 hover:shadow-lg flex flex-col h-full border border-white/10 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="mb-6">
        <p className="text-white text-lg leading-relaxed font-medium text-shadow-sm">"{testimonial.content}"</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary/40">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-shadow-sm">{testimonial.name}</h4>
          <p className="text-cyan-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
