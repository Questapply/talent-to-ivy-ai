
// Roadmap data structure
const roadmapData = [
  {
    number: "01",
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    icon: "Search", // Lucide icon name
    position: "left",
    stats: [
      {
        label: "Universities",
        value: "2,500+",
        icon: "circle-dot"
      },
      {
        label: "Countries",
        value: "45+",
        icon: "circle"
      }
    ],
    additionalInfo: "Top destinations include USA, UK, Canada, Australia, and Germany"
  },
  {
    number: "02",
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    icon: "Book",
    position: "right",
    stats: [
      {
        label: "Programs",
        value: "10,000+",
        icon: "circle-dot"
      },
      {
        label: "Fields",
        value: "120+",
        icon: "circle"
      }
    ],
    additionalInfo: "From Engineering to Liberal Arts, find your perfect match"
  },
  {
    number: "03",
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    icon: "Users",
    position: "left",
    stats: [
      {
        label: "Professors",
        value: "50,000+",
        icon: "circle-dot"
      },
      {
        label: "Research Areas",
        value: "200+",
        icon: "circle"
      }
    ],
    additionalInfo: "Connect with leading researchers in your field"
  },
  {
    number: "04",
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    icon: "FileText",
    position: "right",
    stats: [
      {
        label: "Templates",
        value: "50+",
        icon: "circle-dot"
      },
      {
        label: "ATS Optimized",
        value: "100%",
        icon: "circle"
      }
    ],
    additionalInfo: "AI-powered resume builder to showcase your achievements"
  },
  {
    number: "05",
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    icon: "FileText",
    position: "left",
    stats: [
      {
        label: "Success Rate",
        value: "94%",
        icon: "circle-dot"
      },
      {
        label: "AI Assistance",
        value: "24/7",
        icon: "circle"
      }
    ],
    additionalInfo: "Personalized statements tailored to each program"
  },
  {
    number: "06",
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    icon: "FileText",
    position: "right",
    stats: [
      {
        label: "Templates",
        value: "25+",
        icon: "circle-dot"
      },
      {
        label: "Acceptance Rate",
        value: "92%",
        icon: "circle"
      }
    ],
    additionalInfo: "Customized for different academic and professional contexts"
  },
  {
    number: "07",
    title: "Apply Now",
    description: "Submit your applications with confidence.",
    icon: "CheckCircle",
    position: "left",
    stats: [
      {
        label: "Success Rate",
        value: "87%",
        icon: "circle-dot"
      },
      {
        label: "Support",
        value: "24/7",
        icon: "circle"
      }
    ],
    additionalInfo: "Complete application submission and tracking system"
  }
];

// Country flags data for circular orbit animation
const countryFlags = [
  {
    country: "USA",
    gradient: "usa-flag",
    delay: "0s"
  },
  {
    country: "UK",
    gradient: "uk-flag",
    delay: "-4s"
  },
  {
    country: "CA",
    gradient: "canada-flag",
    delay: "-8s"
  },
  {
    country: "AU",
    gradient: "australia-flag",
    delay: "-12s"
  },
  {
    country: "DE",
    gradient: "germany-flag",
    delay: "-16s"
  }
];

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Initialize the timeline
  initializeTimeline();
  
  // Initialize reveal animation on scroll
  initializeRevealAnimation();
  
  // Initialize mobile menu
  initializeMobileMenu();
});

// Create and render timeline items
function initializeTimeline() {
  const timelineContainer = document.getElementById('timeline-container');
  
  roadmapData.forEach((item, index) => {
    const timelineItem = createTimelineItem(item, index);
    timelineContainer.appendChild(timelineItem);
  });
}

// Create a single timeline item
function createTimelineItem(item, index) {
  // Main container
  const timelineItem = document.createElement('div');
  timelineItem.className = `timeline-item reveal ${item.position === "left" ? "timeline-left" : "timeline-right"}`;
  timelineItem.style.animationDelay = `${index * 0.15}s`;
  
  // Timeline dot
  const timelineDot = createTimelineDot(item);
  
  // Empty space for alignment
  const emptySpace = document.createElement('div');
  emptySpace.className = 'timeline-empty';
  
  // Content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'timeline-content';
  
  // Glass card
  const glassCard = createGlassCard(item, index);
  contentContainer.appendChild(glassCard);
  
  // Append elements based on position
  if (item.position === "left") {
    timelineItem.appendChild(contentContainer);
    timelineItem.appendChild(emptySpace);
  } else {
    timelineItem.appendChild(emptySpace);
    timelineItem.appendChild(contentContainer);
  }
  
  timelineItem.appendChild(timelineDot);
  
  return timelineItem;
}

// Create timeline dot
function createTimelineDot(item) {
  const timelineDot = document.createElement('div');
  timelineDot.className = 'timeline-dot';
  
  const numberSpan = document.createElement('span');
  numberSpan.className = 'timeline-dot-number';
  numberSpan.textContent = item.number;
  
  const pulseEffect = document.createElement('div');
  pulseEffect.className = 'timeline-dot-pulse';
  
  timelineDot.appendChild(numberSpan);
  timelineDot.appendChild(pulseEffect);
  
  return timelineDot;
}

// Create glass card for timeline item
function createGlassCard(item, index) {
  const card = document.createElement('div');
  card.className = 'timeline-card tech-border';
  
  // Card header
  const header = createCardHeader(item);
  card.appendChild(header);
  
  // Description
  const description = document.createElement('p');
  description.className = 'timeline-description';
  description.textContent = item.description;
  card.appendChild(description);
  
  // Animation area
  const animationArea = document.createElement('div');
  animationArea.className = 'timeline-animation';
  
  // Add appropriate animation based on index
  switch(index) {
    case 0:
      animationArea.appendChild(createSchoolFinderAnimation());
      break;
    case 1:
      animationArea.appendChild(createProgramFinderAnimation());
      break;
    case 2:
      animationArea.appendChild(createProfessorFinderAnimation());
      break;
    case 3:
      animationArea.appendChild(createResumeBuilderAnimation());
      break;
    case 4:
      animationArea.appendChild(createSOPBuilderAnimation());
      break;
    case 5:
      animationArea.appendChild(createLORAnimation());
      break;
    case 6:
      animationArea.appendChild(createApplicationSubmissionAnimation());
      break;
  }
  
  card.appendChild(animationArea);
  
  // Stats grid
  const statsGrid = createStatsGrid(item);
  card.appendChild(statsGrid);
  
  // Additional info
  if (item.additionalInfo) {
    const additionalInfo = document.createElement('div');
    additionalInfo.className = 'timeline-additional-info';
    additionalInfo.textContent = item.additionalInfo;
    card.appendChild(additionalInfo);
  }
  
  // Decorative elements
  const decorElement1 = document.createElement('div');
  decorElement1.className = 'timeline-decoration-1';
  
  const decorElement2 = document.createElement('div');
  decorElement2.className = 'timeline-decoration-2';
  
  card.appendChild(decorElement1);
  card.appendChild(decorElement2);
  
  return card;
}

// Create card header
function createCardHeader(item) {
  const header = document.createElement('div');
  header.className = 'timeline-header';
  
  // Icon container
  const iconContainer = document.createElement('div');
  iconContainer.className = 'timeline-icon-container';
  
  // Create the icon using Lucide
  const iconWrapper = document.createElement('i');
  iconWrapper.className = 'timeline-icon';
  iconWrapper.setAttribute('data-lucide', item.icon);
  iconContainer.appendChild(iconWrapper);
  
  // Title
  const title = document.createElement('h3');
  title.className = 'timeline-title';
  title.textContent = item.title;
  
  header.appendChild(iconContainer);
  header.appendChild(title);
  
  return header;
}

// Create stats grid
function createStatsGrid(item) {
  const statsGrid = document.createElement('div');
  statsGrid.className = 'timeline-stats';
  
  item.stats.forEach(stat => {
    const statContainer = document.createElement('div');
    statContainer.className = 'timeline-stat';
    
    const statHeader = document.createElement('div');
    statHeader.className = 'timeline-stat-header';
    
    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = `timeline-stat-icon ${stat.icon}`;
    
    const statLabel = document.createElement('span');
    statLabel.className = 'timeline-stat-label';
    statLabel.textContent = stat.label;
    
    statHeader.appendChild(iconWrapper);
    statHeader.appendChild(statLabel);
    
    const statValue = document.createElement('div');
    statValue.className = 'timeline-stat-value';
    statValue.textContent = stat.value;
    
    statContainer.appendChild(statHeader);
    statContainer.appendChild(statValue);
    
    statsGrid.appendChild(statContainer);
  });
  
  return statsGrid;
}

// Create School Finder Animation with circular orbiting flags
function createSchoolFinderAnimation() {
  const container = document.createElement('div');
  container.className = 'country-finder';
  
  const orbitContainer = document.createElement('div');
  orbitContainer.className = 'orbit-container';
  
  const orbitCircle = document.createElement('div');
  orbitCircle.className = 'orbit-circle';
  
  // Dotted border circle
  const dottedCircle = document.createElement('div');
  dottedCircle.className = 'orbit-border';
  orbitCircle.appendChild(dottedCircle);
  
  // Create each flag in orbit
  countryFlags.forEach((flag, index) => {
    const flagContainer = document.createElement('div');
    flagContainer.className = `country-flag country-flag-${index + 1}`;
    flagContainer.style.animationDelay = flag.delay;
    
    const flagContent = document.createElement('div');
    flagContent.className = `flag-content ${flag.gradient}`;
    
    const flagText = document.createElement('span');
    flagText.className = 'flag-text';
    flagText.textContent = flag.country;
    flagContent.appendChild(flagText);
    
    flagContainer.appendChild(flagContent);
    orbitCircle.appendChild(flagContainer);
  });
  
  // Central Icon
  const centralIcon = document.createElement('div');
  centralIcon.className = 'central-icon';
  
  const iconWrapper = document.createElement('i');
  iconWrapper.className = 'central-icon-svg';
  iconWrapper.setAttribute('data-lucide', 'Search');
  centralIcon.appendChild(iconWrapper);
  
  orbitCircle.appendChild(centralIcon);
  orbitContainer.appendChild(orbitCircle);
  container.appendChild(orbitContainer);
  
  return container;
}

// Create program finder animation
function createProgramFinderAnimation() {
  const container = document.createElement('div');
  container.className = 'program-finder';
  
  const grid = document.createElement('div');
  grid.className = 'program-grid';
  
  const programs = ['CS', 'BIO', 'ENG', 'MED', 'ART', 'LAW', 'BUS', 'ECO', 'PSY'];
  
  programs.forEach((program, i) => {
    const programBox = document.createElement('div');
    programBox.className = 'program-box';
    programBox.style.animationDelay = `${i * 0.2}s`;
    
    const programText = document.createElement('div');
    programText.className = 'program-text';
    programText.textContent = program;
    
    programBox.appendChild(programText);
    grid.appendChild(programBox);
  });
  
  container.appendChild(grid);
  
  // Central element that sits above the grid
  const centralElement = document.createElement('div');
  centralElement.className = 'central-element';
  
  const pulseCircle = document.createElement('div');
  pulseCircle.className = 'pulse-circle';
  
  const innerCircle = document.createElement('div');
  innerCircle.className = 'inner-circle';
  
  const iconWrapper = document.createElement('i');
  iconWrapper.className = 'central-icon-svg';
  iconWrapper.setAttribute('data-lucide', 'Book');
  
  innerCircle.appendChild(iconWrapper);
  pulseCircle.appendChild(innerCircle);
  centralElement.appendChild(pulseCircle);
  container.appendChild(centralElement);
  
  return container;
}

// Create professor finder animation
function createProfessorFinderAnimation() {
  // Implement the professor finder animation similar to the React version
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  container.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex space-x-4">
        <div class="relative w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400/20 to-transparent flex items-center justify-center animate-float" style="animation-delay: 0s;">
          <div class="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center overflow-hidden border border-cyan-400/30">
            <div class="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white text-xs font-medium">
              <span>Dr.J</span>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-white"></div>
        </div>
        
        <div class="relative w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400/20 to-transparent flex items-center justify-center animate-float" style="animation-delay: 0.3s;">
          <div class="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center overflow-hidden border border-cyan-400/30">
            <div class="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white text-xs font-medium">
              <span>Prof.S</span>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-white"></div>
        </div>
        
        <div class="relative w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400/20 to-transparent flex items-center justify-center animate-float" style="animation-delay: 0.6s;">
          <div class="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center overflow-hidden border border-cyan-400/30">
            <div class="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white text-xs font-medium">
              <span>Dr.M</span>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-white"></div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-2 w-full text-center text-xs text-cyan-400/80">
      Connect with leading professors
    </div>
  `;
  
  return container;
}

// Create resume builder animation
function createResumeBuilderAnimation() {
  // Implement the resume builder animation similar to the React version
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  container.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative">
        <div class="absolute -left-8 -top-2 w-16 h-20 rounded border border-cyan-400/30 bg-black/40 p-1 rotate-[-5deg] z-10">
          <div class="w-full h-full bg-black/30 flex flex-col justify-center items-center">
            <div class="w-8 h-8 rounded-full bg-gray-500/20 mb-1"></div>
            <div class="w-10 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div class="w-8 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div class="w-10 h-1 bg-white/20 rounded-sm"></div>
          </div>
        </div>

        <div class="w-32 h-24 border-2 border-cyan-400/60 rounded-md bg-black/40 p-2 flex flex-col z-20 animate-pulse-gentle" style="animation-duration: 3s;">
          <div class="w-1/2 h-2 bg-cyan-400/60 rounded-sm mb-1"></div>
          <div class="w-full h-2 bg-white/20 rounded-sm mb-2"></div>
          <div class="w-full h-2 bg-white/20 rounded-sm mb-1"></div>
          <div class="w-4/5 h-2 bg-white/20 rounded-sm mb-2"></div>
          <div class="w-full h-2 bg-white/20 rounded-sm"></div>
          <div class="absolute top-0 right-0 w-1 h-full bg-cyan-400/60 animate-scan"></div>
        </div>

        <div class="absolute top-3 right-3 w-6 h-6 rounded-full bg-cyan-400/20 animate-ping"></div>
        <div class="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-purple-400/20 animate-ping" style="animation-delay: 1s;"></div>
      </div>
    </div>
  `;
  
  return container;
}

// Create SOP builder animation
function createSOPBuilderAnimation() {
  // Implement the SOP builder animation similar to the React version
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  container.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-32 h-24 border border-cyan-400/30 rounded-md bg-black/40 p-3 relative">
        <div class="typing-effect w-full overflow-hidden whitespace-nowrap" style="animation-iteration-count: infinite; animation-duration: 4s;">
          <div class="h-2 w-full bg-cyan-400/40 rounded mb-1"></div>
          <div class="h-2 w-4/5 bg-cyan-400/40 rounded mb-1"></div>
          <div class="h-2 w-full bg-cyan-400/40 rounded"></div>
        </div>
        <div class="absolute bottom-3 left-3 w-2 h-4 bg-cyan-400/80 animate-pulse"></div>
        
        <div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-float" style="top: 20%; left: 20%; animation-duration: 3.5s; animation-delay: 0s;"></div>
        <div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-float" style="top: 70%; left: 80%; animation-duration: 4s; animation-delay: 0.5s;"></div>
        <div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-float" style="top: 40%; left: 60%; animation-duration: 3s; animation-delay: 1s;"></div>
        <div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-float" style="top: 80%; left: 30%; animation-duration: 4.5s; animation-delay: 1.5s;"></div>
      </div>
    </div>
  `;
  
  return container;
}

// Create LOR animation
function createLORAnimation() {
  // Implement the LOR animation similar to the React version
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  container.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex space-x-4">
        <div class="w-20 h-24 border border-cyan-400/60 rounded-md bg-black/40 p-3 relative rotate-[-8deg] animate-float" style="animation-duration: 3s;">
          <div class="h-2 w-full bg-white/20 rounded mb-1"></div>
          <div class="h-2 w-4/5 bg-white/20 rounded mb-3"></div>
          <div class="h-2 w-full bg-white/20 rounded mb-1"></div>
          <div class="h-2 w-4/5 bg-white/20 rounded mb-3"></div>
          <div class="absolute bottom-3 right-3 w-8 h-5 border-b border-cyan-400/70">
            <div class="w-full h-full flex items-end">
              <div class="w-full h-0.5 bg-cyan-400/70 animate-pulse" style="animation-duration: 1.5s;"></div>
            </div>
          </div>
          <div class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-400/30 flex items-center justify-center text-[8px] text-white border border-cyan-400/50">
            A+
          </div>
        </div>
        
        <div class="w-20 h-24 border border-purple-400/60 rounded-md bg-black/40 p-3 relative rotate-[8deg] animate-float" style="animation-duration: 4s; animation-delay: 0.5s;">
          <div class="h-2 w-full bg-white/20 rounded mb-1"></div>
          <div class="h-2 w-4/5 bg-white/20 rounded mb-3"></div>
          <div class="h-2 w-full bg-white/20 rounded mb-1"></div>
          <div class="h-2 w-4/5 bg-white/20 rounded mb-3"></div>
          <div class="absolute bottom-3 right-3 w-8 h-5 border-b border-purple-400/70">
            <div class="w-full h-full flex items-end">
              <div class="w-full h-0.5 bg-purple-400/70 animate-pulse" style="animation-duration: 1.7s;"></div>
            </div>
          </div>
          <div class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-purple-400/30 flex items-center justify-center text-[8px] text-white border border-purple-400/50">
            A+
          </div>
        </div>
        
        <div class="absolute top-1/4 right-1/4 w-10 h-10 rounded-full border-2 border-dashed border-yellow-400/60 animate-spin" style="animation-duration: 10s;">
          <div class="w-8 h-8 rounded-full bg-yellow-400/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span class="text-yellow-300 text-[8px] font-bold">APPROVED</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

// Create application submission animation
function createApplicationSubmissionAnimation() {
  // Implement the application submission animation similar to the React version
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  container.innerHTML = `
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative w-32 h-16">
        <div class="w-24 h-24 border border-cyan-400/30 rounded-md bg-black/40 absolute left-0 -top-4 rotate-[-5deg] z-10 animate-float" style="animation-duration: 3s;"></div>
        <div class="w-24 h-24 border border-purple-400/30 rounded-md bg-black/40 absolute right-0 -top-6 rotate-[5deg] z-20 animate-float" style="animation-duration: 4s; animation-delay: 0.3s;"></div>
        
        <div class="w-24 h-24 border-2 border-cyan-400/50 rounded-md bg-black/40 absolute left-4 -top-3 z-30 flex items-center justify-center animate-pulse-gentle" style="animation-duration: 2s;">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-500/30 to-cyan-400/30 animate-pulse-gentle flex items-center justify-center" style="animation-duration: 3s;">
            <i class="h-6 w-6 text-cyan-400" data-lucide="CheckCircle"></i>
          </div>
          
          <div class="absolute -top-4 -right-2 w-6 h-8 bg-white/10 rounded-sm rotate-[-15deg] animate-float" style="animation-duration: 5s; animation-delay: 0.2s;"></div>
          <div class="absolute -bottom-4 -left-2 w-6 h-8 bg-white/10 rounded-sm rotate-[15deg] animate-float" style="animation-duration: 4.5s; animation-delay: 0.8s;"></div>
        </div>
        
        <div class="absolute z-40 top-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0s;"></div>
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0.3s;"></div>
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0.6s;"></div>
        </div>
        
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-black/50 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-data-stream" style="width: 100%;"></div>
        </div>
      </div>
    </div>
  `;
  
  return container;
}

// Initialize reveal animation on scroll
function initializeRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check when page loads
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      // Implement mobile menu functionality
      console.log('Mobile menu clicked');
      // This could show/hide a mobile menu
    });
  }
}
