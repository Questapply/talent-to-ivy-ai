
// Roadmap data structure similar to the React component's data
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

// Flag data for circular orbit animation
const countryFlags = [
  {
    country: "USA",
    src: "/lovable-uploads/d9b42a15-bb67-4584-b8e6-206df0361c99.png",
    gradient: "from-blue-600 to-blue-800",
    delay: "0s"
  },
  {
    country: "UK",
    src: "/lovable-uploads/36c235b4-facc-46f0-8ab2-33b4cd669f30.png",
    gradient: "from-red-600 to-blue-800",
    delay: "-4s"
  },
  {
    country: "Canada",
    src: "/lovable-uploads/a50c144f-d06e-4e25-8ab1-e84a96d28f32.png",
    gradient: "from-red-600 to-white",
    delay: "-8s"
  },
  {
    country: "Australia",
    src: "/lovable-uploads/b520072a-8afa-4808-b165-b800732249de.png",
    gradient: "from-blue-600 to-blue-800",
    delay: "-12s"
  },
  {
    country: "Germany",
    src: "/lovable-uploads/d4b978f3-6fff-4560-82aa-47871390515d.png",
    gradient: "from-black via-red-600 to-yellow-400",
    delay: "-16s"
  }
];

// Initialize lucide icons when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Initialize the timeline
  initializeTimeline();
  
  // Initialize reveal animation on scroll
  initializeRevealAnimation();
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
  timelineItem.className = `relative z-10 flex mb-32 last:mb-0 reveal`;
  timelineItem.classList.add(item.position === "left" ? "flex-row" : "flex-row-reverse");
  timelineItem.style.animationDelay = `${index * 0.15}s`;
  
  // Timeline dot
  const timelineDot = createTimelineDot(item);
  timelineItem.appendChild(timelineDot);
  
  // Empty space for alignment
  const emptySpace = document.createElement('div');
  emptySpace.className = `w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`;
  timelineItem.appendChild(emptySpace);
  
  // Content container
  const contentContainer = document.createElement('div');
  contentContainer.className = `w-1/2 ${item.position === "left" ? "pl-12" : "pr-12"}`;
  
  // Glass card
  const glassCard = createGlassCard(item, index);
  contentContainer.appendChild(glassCard);
  
  timelineItem.appendChild(contentContainer);
  
  return timelineItem;
}

// Create timeline dot
function createTimelineDot(item) {
  const timelineDot = document.createElement('div');
  timelineDot.className = 'absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-cyan-400 bg-black z-20 flex items-center justify-center';
  
  const numberSpan = document.createElement('span');
  numberSpan.className = 'text-cyan-400 font-bold text-lg';
  numberSpan.textContent = item.number;
  
  const pulseEffect = document.createElement('div');
  pulseEffect.className = 'absolute w-full h-full rounded-full animate-pulse-gentle opacity-50 border border-cyan-400';
  
  timelineDot.appendChild(numberSpan);
  timelineDot.appendChild(pulseEffect);
  
  return timelineDot;
}

// Create glass card for timeline item
function createGlassCard(item, index) {
  const card = document.createElement('div');
  card.className = 'rounded-xl p-6 border border-cyan-400-30 shadow-xl relative overflow-hidden backdrop-blur-md bg-black-40 tech-border';
  
  // Card header
  const header = createCardHeader(item);
  card.appendChild(header);
  
  // Description
  const description = document.createElement('p');
  description.className = 'text-white-80 mb-6';
  description.textContent = item.description;
  card.appendChild(description);
  
  // Animation area
  const animationArea = document.createElement('div');
  animationArea.className = 'h-32 bg-black-30 rounded-lg mb-6 flex items-center justify-center p-2 overflow-hidden';
  
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
    additionalInfo.className = 'mt-3 text-xs text-white-60';
    additionalInfo.textContent = item.additionalInfo;
    card.appendChild(additionalInfo);
  }
  
  // Decorative elements
  const decorElement1 = document.createElement('div');
  decorElement1.className = 'absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400-5 to-purple-400-5 blur-xl';
  
  const decorElement2 = document.createElement('div');
  decorElement2.className = 'absolute bottom-2 left-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400-5 to-cyan-400-5 blur-md';
  
  card.appendChild(decorElement1);
  card.appendChild(decorElement2);
  
  return card;
}

// Create card header
function createCardHeader(item) {
  const header = document.createElement('div');
  header.className = 'flex items-center mb-6';
  
  // Icon container
  const iconContainer = document.createElement('div');
  iconContainer.className = 'w-12 h-12 rounded-full bg-black-60 flex items-center justify-center border border-cyan-400-40 mr-4';
  
  // Create the icon using Lucide
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'w-6 h-6 text-cyan-400';
  iconWrapper.dataset.lucide = item.icon;
  iconContainer.appendChild(iconWrapper);
  
  // Title
  const title = document.createElement('h3');
  title.className = 'text-2xl font-bold text-white';
  title.textContent = item.title;
  
  header.appendChild(iconContainer);
  header.appendChild(title);
  
  return header;
}

// Create stats grid
function createStatsGrid(item) {
  const statsGrid = document.createElement('div');
  statsGrid.className = 'grid grid-cols-2 gap-3';
  
  item.stats.forEach(stat => {
    const statContainer = document.createElement('div');
    statContainer.className = 'bg-black-30 rounded-lg p-3 backdrop-blur-sm';
    
    const statHeader = document.createElement('div');
    statHeader.className = 'flex items-center mb-2';
    
    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'w-3 h-3 rounded-full bg-cyan-400';
    if (stat.icon === "circle") {
      iconWrapper.className = 'w-3 h-3 rounded-full bg-purple-400';
    }
    
    const statLabel = document.createElement('span');
    statLabel.className = 'text-xs text-white-70 ml-2';
    statLabel.textContent = stat.label;
    
    statHeader.appendChild(iconWrapper);
    statHeader.appendChild(statLabel);
    
    const statValue = document.createElement('div');
    statValue.className = 'text-cyan-400 text-xl font-bold';
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
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const orbitContainer = document.createElement('div');
  orbitContainer.className = 'relative w-28 h-28';
  
  // Dotted border circle
  const dottedCircle = document.createElement('div');
  dottedCircle.className = 'absolute inset-0 rounded-full border-2 border-dashed border-cyan-400-50';
  orbitContainer.appendChild(dottedCircle);
  
  // Create each flag in orbit
  countryFlags.forEach((flag, index) => {
    const flagContainer = document.createElement('div');
    flagContainer.className = 'country-flag animate-circular-orbit';
    flagContainer.style.animationDelay = flag.delay;
    
    const flagContent = document.createElement('div');
    flagContent.className = `w-full h-full bg-gradient-to-br ${flag.gradient} flex items-center justify-center`;
    
    // If we have an image source, use it, otherwise use the text
    if (flag.src) {
      const flagImage = document.createElement('img');
      flagImage.src = flag.src;
      flagImage.alt = `${flag.country} Flag`;
      flagImage.className = 'w-full h-full object-cover';
      flagContent.appendChild(flagImage);
    } else {
      const flagText = document.createElement('span');
      flagText.className = 'text-white text-xs font-bold';
      flagText.textContent = flag.country.substring(0, 2);
      flagContent.appendChild(flagText);
    }
    
    flagContainer.appendChild(flagContent);
    orbitContainer.appendChild(flagContainer);
  });
  
  // Central Icon
  const centralIcon = document.createElement('div');
  centralIcon.className = 'central-icon';
  
  const iconWrapper = document.createElement('div');
  iconWrapper.dataset.lucide = 'Search';
  centralIcon.appendChild(iconWrapper);
  
  orbitContainer.appendChild(centralIcon);
  innerContainer.appendChild(orbitContainer);
  container.appendChild(innerContainer);
  
  return container;
}

// Create program finder animation
function createProgramFinderAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full flex items-center justify-center';
  
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-3 gap-2 w-full h-full';
  
  const programs = ['CS', 'BIO', 'ENG', 'MED', 'ART', 'LAW', 'BUS', 'ECO', 'PSY'];
  
  programs.forEach((program, i) => {
    const programBox = document.createElement('div');
    programBox.className = 'bg-gradient-to-br from-blue-500-20 to-green-500-20 rounded-md flex items-center justify-center p-1 backdrop-blur-sm animate-float';
    programBox.style.animationDelay = `${i * 0.2}s`;
    
    const programText = document.createElement('div');
    programText.className = 'text-xs text-cyan-400 opacity-80';
    programText.textContent = program;
    
    programBox.appendChild(programText);
    grid.appendChild(programBox);
  });
  
  container.appendChild(grid);
  
  // Central element that sits above the grid
  const centralElement = document.createElement('div');
  centralElement.className = 'absolute inset-0 flex items-center justify-center pointer-events-none';
  
  const pulseCircle = document.createElement('div');
  pulseCircle.className = 'w-16 h-16 bg-gradient-to-br from-cyan-400-10 to-purple-400-10 rounded-full animate-pulse-gentle flex items-center justify-center';
  
  const innerCircle = document.createElement('div');
  innerCircle.className = 'w-10 h-10 bg-black-80 rounded-full flex items-center justify-center';
  
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'w-6 h-6 text-cyan-400';
  iconWrapper.dataset.lucide = 'Book';
  
  innerCircle.appendChild(iconWrapper);
  pulseCircle.appendChild(innerCircle);
  centralElement.appendChild(pulseCircle);
  container.appendChild(centralElement);
  
  return container;
}

// Create professor finder animation
function createProfessorFinderAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const profContainer = document.createElement('div');
  profContainer.className = 'flex space-x-4';
  
  // Create professor avatars
  const professors = ['Dr.J', 'Prof.S', 'Dr.M'];
  professors.forEach((prof, i) => {
    const profWrapper = document.createElement('div');
    profWrapper.className = 'relative w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400-20 to-transparent flex items-center justify-center animate-float';
    profWrapper.style.animationDelay = `${i * 0.3}s`;
    
    const profInner = document.createElement('div');
    profInner.className = 'w-10 h-10 rounded-full bg-black-30 backdrop-blur-md flex items-center justify-center overflow-hidden border border-cyan-400-30';
    
    const profContent = document.createElement('div');
    profContent.className = 'w-full h-full bg-gradient-to-br from-blue-500-30 to-purple-500-30 flex items-center justify-center text-white text-xs font-medium';
    
    const profText = document.createElement('span');
    profText.textContent = prof;
    
    profContent.appendChild(profText);
    profInner.appendChild(profContent);
    profWrapper.appendChild(profInner);
    
    // Online status indicator
    const statusDot = document.createElement('div');
    statusDot.className = 'absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-white';
    profWrapper.appendChild(statusDot);
    
    profContainer.appendChild(profWrapper);
  });
  
  innerContainer.appendChild(profContainer);
  container.appendChild(innerContainer);
  
  // Add caption text
  const caption = document.createElement('div');
  caption.className = 'absolute bottom-2 w-full text-center text-xs text-cyan-400-80';
  caption.textContent = 'Connect with leading professors';
  container.appendChild(caption);
  
  return container;
}

// Create resume builder animation
function createResumeBuilderAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const resumeContainer = document.createElement('div');
  resumeContainer.className = 'relative';
  
  // Background resume
  const backgroundResume = document.createElement('div');
  backgroundResume.className = 'absolute -left-8 -top-2 w-16 h-20 rounded border border-cyan-400-30 bg-black-40 p-1 rotate-[-5deg] z-10';
  
  const bgResumeContent = document.createElement('div');
  bgResumeContent.className = 'w-full h-full bg-black-30 flex flex-col justify-center items-center';
  
  // Resume elements
  const photoPlaceholder = document.createElement('div');
  photoPlaceholder.className = 'w-8 h-8 rounded-full bg-gray-500-20 mb-1';
  
  // Resume lines
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    line.className = 'w-10 h-1 bg-white-20 rounded-sm mb-1';
    bgResumeContent.appendChild(line);
  }
  
  bgResumeContent.prepend(photoPlaceholder);
  backgroundResume.appendChild(bgResumeContent);
  
  // Main resume with scan effect
  const mainResume = document.createElement('div');
  mainResume.className = 'w-32 h-24 border-2 border-cyan-400-60 rounded-md bg-black-40 p-2 flex flex-col z-20 animate-pulse-gentle';
  mainResume.style.animationDuration = '3s';
  
  // Resume content lines
  const titleLine = document.createElement('div');
  titleLine.className = 'w-1/2 h-2 bg-cyan-400-60 rounded-sm mb-1';
  
  // Regular lines
  for (let i = 0; i < 4; i++) {
    const line = document.createElement('div');
    line.className = `w-${i % 2 === 0 ? 'full' : '4/5'} h-2 bg-white-20 rounded-sm mb-${i < 3 ? '1' : '2'}`;
    mainResume.appendChild(line);
  }
  
  mainResume.prepend(titleLine);
  
  // Scanning line effect
  const scanLine = document.createElement('div');
  scanLine.className = 'absolute top-0 right-0 w-1 h-full bg-cyan-400-60 animate-scan';
  mainResume.appendChild(scanLine);
  
  // Floating elements
  const topDot = document.createElement('div');
  topDot.className = 'absolute top-3 right-3 w-6 h-6 rounded-full bg-cyan-400-20 animate-ping';
  
  const bottomDot = document.createElement('div');
  bottomDot.className = 'absolute bottom-3 left-3 w-4 h-4 rounded-full bg-purple-400-20 animate-ping';
  bottomDot.style.animationDelay = '1s';
  
  resumeContainer.appendChild(backgroundResume);
  resumeContainer.appendChild(mainResume);
  resumeContainer.appendChild(topDot);
  resumeContainer.appendChild(bottomDot);
  
  innerContainer.appendChild(resumeContainer);
  container.appendChild(innerContainer);
  
  return container;
}

// Create SOP builder animation
function createSOPBuilderAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const sopDocument = document.createElement('div');
  sopDocument.className = 'w-32 h-24 border border-cyan-400-30 rounded-md bg-black-40 p-3 relative';
  
  // Typing effect container
  const typingContainer = document.createElement('div');
  typingContainer.className = 'typing-effect w-full overflow-hidden whitespace-nowrap';
  typingContainer.style.animationIterationCount = 'infinite';
  typingContainer.style.animationDuration = '4s';
  
  // Add typing lines
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    line.className = `h-2 w-${i % 2 === 0 ? 'full' : '4/5'} bg-cyan-400-40 rounded mb-1`;
    typingContainer.appendChild(line);
  }
  
  // Add cursor
  const cursor = document.createElement('div');
  cursor.className = 'absolute bottom-3 left-3 w-2 h-4 bg-cyan-400-80 animate-pulse';
  
  sopDocument.appendChild(typingContainer);
  sopDocument.appendChild(cursor);
  
  // Add floating particles
  for (let i = 0; i < 4; i++) {
    const particle = document.createElement('div');
    particle.className = 'absolute w-1.5 h-1.5 rounded-full bg-cyan-400-80 animate-float';
    particle.style.top = `${Math.random() * 80 + 10}%`;
    particle.style.left = `${Math.random() * 80 + 10}%`;
    particle.style.animationDuration = `${3 + Math.random() * 2}s`;
    particle.style.animationDelay = `${i * 0.5}s`;
    sopDocument.appendChild(particle);
  }
  
  innerContainer.appendChild(sopDocument);
  container.appendChild(innerContainer);
  
  return container;
}

// Create LOR animation
function createLORAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const lorContainer = document.createElement('div');
  lorContainer.className = 'flex space-x-4';
  
  // First document
  const doc1 = createLORDocument(
    'cyan-400-60', 
    'rotate-[-8deg]', 
    '3s', 
    'A+', 
    '-top-2 -right-2',
    'cyan-400-30',
    'cyan-400-50',
    'cyan-400-70',
    '1.5s'
  );
  
  // Second document
  const doc2 = createLORDocument(
    'purple-400-60', 
    'rotate-[8deg]', 
    '4s', 
    'A+', 
    '-top-2 -left-2',
    'purple-400-30',
    'purple-400-50',
    'purple-400-70',
    '1.7s',
    '0.5s'
  );
  
  // Add floating seal/stamp
  const sealContainer = document.createElement('div');
  sealContainer.className = 'absolute top-1/4 right-1/4 w-10 h-10 rounded-full border-2 border-dashed border-yellow-400-60 animate-spin';
  sealContainer.style.animationDuration = '10s';
  
  const sealInner = document.createElement('div');
  sealInner.className = 'w-8 h-8 rounded-full bg-yellow-400-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center';
  
  const sealText = document.createElement('span');
  sealText.className = 'text-yellow-300 text-[8px] font-bold';
  sealText.textContent = 'APPROVED';
  
  sealInner.appendChild(sealText);
  sealContainer.appendChild(sealInner);
  
  lorContainer.appendChild(doc1);
  lorContainer.appendChild(doc2);
  lorContainer.appendChild(sealContainer);
  
  innerContainer.appendChild(lorContainer);
  container.appendChild(innerContainer);
  
  return container;
}

// Helper function to create LOR document
function createLORDocument(borderColor, rotate, animDuration, grade, badgePosition, badgeBg, badgeBorder, signatureColor, signatureDuration, animDelay = '0s') {
  const doc = document.createElement('div');
  doc.className = `w-20 h-24 border border-${borderColor} rounded-md bg-black-40 p-3 relative ${rotate} animate-float`;
  doc.style.animationDuration = animDuration;
  if (animDelay !== '0s') {
    doc.style.animationDelay = animDelay;
  }
  
  // Document lines
  for (let i = 0; i < 4; i++) {
    const line = document.createElement('div');
    line.className = `h-2 w-${i % 2 === 0 ? 'full' : '4/5'} bg-white-20 rounded mb-${i % 2 === 0 ? '1' : '3'}`;
    doc.appendChild(line);
  }
  
  // Signature
  const signature = document.createElement('div');
  signature.className = `absolute bottom-3 right-3 w-8 h-5 border-b border-${signatureColor}`;
  
  const signatureLine = document.createElement('div');
  signatureLine.className = 'w-full h-full flex items-end';
  
  const signatureAnim = document.createElement('div');
  signatureAnim.className = `w-full h-0.5 bg-${signatureColor} animate-pulse`;
  signatureAnim.style.animationDuration = signatureDuration;
  
  signatureLine.appendChild(signatureAnim);
  signature.appendChild(signatureLine);
  doc.appendChild(signature);
  
  // Grade badge
  const badge = document.createElement('div');
  badge.className = `absolute ${badgePosition} w-5 h-5 rounded-full bg-${badgeBg} flex items-center justify-center text-[8px] text-white border border-${badgeBorder}`;
  badge.textContent = grade;
  doc.appendChild(badge);
  
  return doc;
}

// Create application submission animation
function createApplicationSubmissionAnimation() {
  const container = document.createElement('div');
  container.className = 'relative w-full h-full';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'absolute inset-0 flex items-center justify-center';
  
  const animContainer = document.createElement('div');
  animContainer.className = 'relative w-32 h-16';
  
  // Background papers
  const paper1 = document.createElement('div');
  paper1.className = 'w-24 h-24 border border-cyan-400-30 rounded-md bg-black-40 absolute left-0 -top-4 rotate-[-5deg] z-10 animate-float';
  paper1.style.animationDuration = '3s';
  
  const paper2 = document.createElement('div');
  paper2.className = 'w-24 h-24 border border-purple-400-30 rounded-md bg-black-40 absolute right-0 -top-6 rotate-[5deg] z-20 animate-float';
  paper2.style.animationDuration = '4s';
  paper2.style.animationDelay = '0.3s';
  
  // Main document with checkmark
  const mainDoc = document.createElement('div');
  mainDoc.className = 'w-24 h-24 border-2 border-cyan-400-50 rounded-md bg-black-40 absolute left-4 -top-3 z-30 flex items-center justify-center animate-pulse-gentle';
  mainDoc.style.animationDuration = '2s';
  
  const checkCircle = document.createElement('div');
  checkCircle.className = 'w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400-30 via-purple-500-30 to-cyan-400-30 animate-pulse-gentle flex items-center justify-center';
  checkCircle.style.animationDuration = '3s';
  
  const checkIcon = document.createElement('div');
  checkIcon.className = 'h-6 w-6 text-cyan-400';
  checkIcon.dataset.lucide = 'Check';
  checkCircle.appendChild(checkIcon);
  mainDoc.appendChild(checkCircle);
  
  // Flying papers
  const flyingPaper1 = document.createElement('div');
  flyingPaper1.className = 'absolute -top-4 -right-2 w-6 h-8 bg-white-10 rounded-sm rotate-[-15deg] animate-float';
  flyingPaper1.style.animationDuration = '5s';
  flyingPaper1.style.animationDelay = '0.2s';
  mainDoc.appendChild(flyingPaper1);
  
  const flyingPaper2 = document.createElement('div');
  flyingPaper2.className = 'absolute -bottom-4 -left-2 w-6 h-8 bg-white-10 rounded-sm rotate-[15deg] animate-float';
  flyingPaper2.style.animationDuration = '4.5s';
  flyingPaper2.style.animationDelay = '0.8s';
  mainDoc.appendChild(flyingPaper2);
  
  // Progress dots
  const progressDots = document.createElement('div');
  progressDots.className = 'absolute z-40 top-16 left-1/2 transform -translate-x-1/2 flex space-x-1';
  
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('div');
    dot.className = 'w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle';
    dot.style.animationDelay = `${i * 0.3}s`;
    progressDots.appendChild(dot);
  }
  
  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-black-50 rounded-full overflow-hidden';
  
  const progressFill = document.createElement('div');
  progressFill.className = 'h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-data-stream';
  progressFill.style.width = '100%';
  
  progressBar.appendChild(progressFill);
  
  animContainer.appendChild(paper1);
  animContainer.appendChild(paper2);
  animContainer.appendChild(mainDoc);
  animContainer.appendChild(progressDots);
  animContainer.appendChild(progressBar);
  
  innerContainer.appendChild(animContainer);
  container.appendChild(innerContainer);
  
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
  
  // Cleanup function (browser won't need this, but it's good practice)
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', revealOnScroll);
  });
}
