
// Initialize Lucide icons
lucide.createIcons();

// Define the roadmap data
const roadmapData = [
  {
    title: "School Discovery",
    description: "Our AI helps you find the perfect universities that align with your academic profile, preferences, and career goals.",
    number: "01",
    icon: `<i data-lucide="map"></i>`,
    position: "left",
    stats: [
      {
        label: "Universities",
        value: "2,500+",
        icon: `<i data-lucide="buildings"></i>`
      },
      {
        label: "Countries",
        value: "75+",
        icon: `<i data-lucide="globe"></i>`
      }
    ],
    additionalInfo: "Personalized matches based on your unique profile"
  },
  {
    title: "Program Alignment",
    description: "Discover academic programs that perfectly match your skills, interests and long-term career aspirations.",
    number: "02",
    icon: `<i data-lucide="lightbulb"></i>`,
    position: "right",
    stats: [
      {
        label: "Programs",
        value: "12,000+",
        icon: `<i data-lucide="book-open"></i>`
      },
      {
        label: "Specializations",
        value: "350+",
        icon: `<i data-lucide="star"></i>`
      }
    ],
    additionalInfo: "AI-powered program recommendation system"
  },
  {
    title: "Expert Connection",
    description: "Connect with admissions experts, professors, and current students who can provide valuable insights and guidance.",
    number: "03",
    icon: `<i data-lucide="users"></i>`,
    position: "left",
    stats: [
      {
        label: "Experts",
        value: "500+",
        icon: `<i data-lucide="user"></i>`
      },
      {
        label: "Students",
        value: "10,000+",
        icon: `<i data-lucide="user"></i>`
      }
    ],
    additionalInfo: "Direct messaging and scheduling system included"
  },
  {
    title: "Resume Enhancement",
    description: "Our AI analyzes your resume and provides tailored suggestions to highlight your strengths and stand out to admissions committees.",
    number: "04",
    icon: `<i data-lucide="file-text"></i>`,
    position: "right",
    stats: [
      {
        label: "Success Rate",
        value: "93%",
        icon: `<i data-lucide="check"></i>`
      },
      {
        label: "ATS Optimized",
        value: "100%",
        icon: `<i data-lucide="shield"></i>`
      }
    ],
    additionalInfo: "ATS-optimized formats with customizable templates"
  },
  {
    title: "Statement Crafting",
    description: "Develop compelling personal statements and essays that tell your unique story with our guided AI writing assistance.",
    number: "05",
    icon: `<i data-lucide="pen-tool"></i>`,
    position: "left",
    stats: [
      {
        label: "Essay Templates",
        value: "50+",
        icon: `<i data-lucide="file-text"></i>`
      },
      {
        label: "AI Analysis",
        value: "Real-time",
        icon: `<i data-lucide="activity"></i>`
      }
    ],
    additionalInfo: "Advanced language optimization and feedback"
  },
  {
    title: "Recommendation Strategy",
    description: "Get strategic guidance on securing powerful letters of recommendation that strengthen your application.",
    number: "06",
    icon: `<i data-lucide="thumbs-up"></i>`,
    position: "right",
    stats: [
      {
        label: "Templates",
        value: "25+",
        icon: `<i data-lucide="file-text"></i>`
      },
      {
        label: "Success Rate",
        value: "97%",
        icon: `<i data-lucide="check"></i>`
      }
    ],
    additionalInfo: "Automated request tracking and follow-up system"
  },
  {
    title: "Application Submission",
    description: "We guide you through the final submission process, ensuring all materials are complete, polished and submitted on time.",
    number: "07",
    icon: `<i data-lucide="send"></i>`,
    position: "left",
    stats: [
      {
        label: "Deadline Tracking",
        value: "Automated",
        icon: `<i data-lucide="calendar"></i>`
      },
      {
        label: "Completion Rate",
        value: "99.8%",
        icon: `<i data-lucide="check"></i>`
      }
    ],
    additionalInfo: "Application status tracking and real-time updates"
  }
];

// Wait for DOM content to be loaded before running code
document.addEventListener('DOMContentLoaded', function() {
  // Populate timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    roadmapData.forEach((item, index) => {
      const timelineItem = createTimelineItem(item, index);
      timelineContainer.appendChild(timelineItem);
    });
  }

  // Initialize reveal animation
  initRevealAnimation();
});

// Function to create a timeline item element
function createTimelineItem(item, index) {
  const timelineItem = document.createElement('div');
  timelineItem.className = `relative z-10 flex mb-32 last-mb-0 reveal ${
    item.position === "left" ? "flex-row" : "flex-row-reverse"
  }`;
  timelineItem.style.animationDelay = `${index * 0.15}s`;
  
  // Timeline dot with glowing effect
  const timelineDot = document.createElement('div');
  timelineDot.className = 'absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-cyan-400 bg-black z-20 flex items-center justify-center';
  timelineDot.innerHTML = `
    <span class="text-cyan-400 font-bold text-lg">${item.number}</span>
    <div class="absolute w-full h-full rounded-full animate-pulse-gentle opacity-50 border border-cyan-400"></div>
  `;
  
  // Left and right content containers
  const leftContent = document.createElement('div');
  leftContent.className = `w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`;
  
  const rightContent = document.createElement('div');
  rightContent.className = `w-1/2 ${item.position === "left" ? "pl-12" : "pr-12"}`;
  
  // Create glass card
  const glassCard = document.createElement('div');
  glassCard.className = 'rounded-xl p-6 border border-cyan-400-30 shadow-xl relative overflow-hidden backdrop-blur-md bg-black-40 tech-border';
  
  // Create card header
  const cardHeader = document.createElement('div');
  cardHeader.className = 'flex items-center mb-6';
  cardHeader.innerHTML = `
    <div class="w-12 h-12 rounded-full bg-black-60 flex items-center justify-center border border-cyan-400-40 mr-4">
      ${item.icon}
    </div>
    <h3 class="text-2xl font-bold text-white">${item.title}</h3>
  `;
  
  // Create card description
  const cardDescription = document.createElement('p');
  cardDescription.className = 'text-white-80 mb-6';
  cardDescription.textContent = item.description;
  
  // Create animation area
  const animationArea = document.createElement('div');
  animationArea.className = 'h-32 bg-black-30 rounded-lg mb-6 flex items-center justify-center p-2 overflow-hidden';
  
  // Create animation content based on index
  animationArea.appendChild(createAnimationContent(index, item));
  
  // Create stats section
  const statsSection = document.createElement('div');
  statsSection.className = 'grid grid-cols-2 gap-3';
  
  // Add stats
  item.stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'bg-black-30 rounded-lg p-3 backdrop-blur-sm';
    statItem.innerHTML = `
      <div class="flex items-center mb-2">
        ${stat.icon}
        <span class="text-xs text-white-70 ml-2">${stat.label}</span>
      </div>
      <div class="text-cyan-400 text-xl font-bold">${stat.value}</div>
    `;
    statsSection.appendChild(statItem);
  });
  
  // Add additional info if it exists
  if (item.additionalInfo) {
    const additionalInfo = document.createElement('div');
    additionalInfo.className = 'mt-3 text-xs text-white-60';
    additionalInfo.textContent = item.additionalInfo;
    glassCard.appendChild(additionalInfo);
  }
  
  // Add decorative elements
  const decorativeElement1 = document.createElement('div');
  decorativeElement1.className = 'absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400-5 to-purple-400-5 blur-xl';
  
  const decorativeElement2 = document.createElement('div');
  decorativeElement2.className = 'absolute bottom-2 left-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400-5 to-cyan-400-5 blur-md';
  
  // Assemble the glass card
  glassCard.appendChild(cardHeader);
  glassCard.appendChild(cardDescription);
  glassCard.appendChild(animationArea);
  glassCard.appendChild(statsSection);
  glassCard.appendChild(decorativeElement1);
  glassCard.appendChild(decorativeElement2);
  
  // Place the glass card in the correct content container based on position
  if (item.position === "left") {
    rightContent.appendChild(glassCard);
  } else {
    leftContent.appendChild(glassCard);
  }
  
  // Assemble the timeline item
  timelineItem.appendChild(timelineDot);
  timelineItem.appendChild(leftContent);
  timelineItem.appendChild(rightContent);
  
  return timelineItem;
}

// Function to create animation content for each timeline item
function createAnimationContent(index, item) {
  const animationContainer = document.createElement('div');
  animationContainer.className = 'relative w-full h-full';
  
  // Different animation for each timeline item
  switch(index) {
    case 0: // School Discovery
      animationContainer.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative w-28 h-28">
            <div class="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400-50" style="animation: none"></div>
            
            <!-- USA Flag -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden animate-circular-orbit" style="animation-duration: 15s; animation-delay: 0s">
              <div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span class="text-white text-xs font-bold">USA</span>
              </div>
            </div>
            
            <!-- UK Flag -->
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full overflow-hidden animate-circular-orbit" style="animation-duration: 15s; animation-delay: 2s">
              <div class="w-full h-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center">
                <span class="text-white text-xs font-bold">UK</span>
              </div>
            </div>
            
            <!-- Canada Flag -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full overflow-hidden animate-circular-orbit" style="animation-duration: 15s; animation-delay: 4s">
              <div class="w-full h-full bg-gradient-to-br from-red-600 to-white flex items-center justify-center">
                <span class="text-red-600 text-xs font-bold">CA</span>
              </div>
            </div>
            
            <!-- Australia Flag -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full overflow-hidden animate-circular-orbit" style="animation-duration: 15s; animation-delay: 6s">
              <div class="w-full h-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                <span class="text-white text-xs font-bold">AU</span>
              </div>
            </div>
            
            <!-- Germany Flag -->
            <div class="absolute top-1/4 right-1/4 w-8 h-8 rounded-full overflow-hidden animate-circular-orbit" style="animation-duration: 15s; animation-delay: 8s">
              <div class="w-full h-full bg-gradient-to-b from-black via-red-600 to-yellow-400 flex items-center justify-center">
                <span class="text-white text-xs font-bold">DE</span>
              </div>
            </div>
            
            <!-- Central Icon -->
            <div class="w-12 h-12 bg-black-80 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div class="w-6 h-6 text-cyan-400">
                ${item.icon}
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    
    case 1: // Program Alignment
      animationContainer.innerHTML = `
        <div class="relative w-full h-full flex items-center justify-center">
          <div class="grid grid-cols-3 gap-2 w-full h-full">
            ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `
              <div 
                class="bg-gradient-to-br from-blue-500-20 to-green-500-20 rounded-md flex items-center justify-center p-1 backdrop-blur-sm animate-float"
                style="animation-delay: ${i * 0.2}s"
              >
                <div class="text-xs text-cyan-400 opacity-80">
                  ${['CS', 'BIO', 'ENG', 'MED', 'ART', 'LAW', 'BUS', 'ECO', 'PSY'][i]}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-400-10 to-purple-400-10 rounded-full animate-pulse-gentle flex items-center justify-center">
              <div class="w-10 h-10 bg-black-80 rounded-full flex items-center justify-center">
                <div class="w-6 h-6 text-cyan-400">
                  ${item.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    
    // Add other animations for the remaining cases
    case 2: // Expert Connection
      animationContainer.innerHTML = `
        <div class="relative w-full h-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex space-x-4">
              ${[0, 1, 2].map(i => `
                <div class="relative w-12 h-12 rounded-full bg-gradient-to-b from-cyan-400-20 to-transparent flex items-center justify-center animate-float" style="animation-delay: ${i * 0.3}s">
                  <div class="w-10 h-10 rounded-full bg-black-30 backdrop-blur-md flex items-center justify-center overflow-hidden border border-cyan-400-30">
                    <div class="w-full h-full bg-gradient-to-br from-blue-500-30 to-purple-500-30 flex items-center justify-center text-white text-xs font-medium">
                      ${i === 0 ? '<span>Dr.J</span>' : ''}
                      ${i === 1 ? '<span>Prof.S</span>' : ''}
                      ${i === 2 ? '<span>Dr.M</span>' : ''}
                    </div>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border border-white"></div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="absolute bottom-2 w-full text-center text-xs text-cyan-400-80">
            Connect with leading professors
          </div>
        </div>
      `;
      break;
    
    case 3: // Resume Enhancement
      animationContainer.innerHTML = `
        <div class="relative w-full h-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative">
              <div class="absolute -left-8 -top-2 w-16 h-20 rounded border border-cyan-400-30 bg-black-40 p-1 rotate-[-5deg] z-10">
                <div class="w-full h-full bg-black-30 flex flex-col justify-center items-center">
                  <div class="w-8 h-8 rounded-full bg-gray-500-20 mb-1"></div>
                  <div class="w-10 h-1 bg-white-20 rounded-sm mb-1"></div>
                  <div class="w-8 h-1 bg-white-20 rounded-sm mb-1"></div>
                  <div class="w-10 h-1 bg-white-20 rounded-sm"></div>
                </div>
              </div>

              <div class="w-32 h-24 border-2 border-cyan-400-60 rounded-md bg-black-40 p-2 flex flex-col z-20 animate-pulse-gentle" style="animation-duration: 3s">
                <div class="w-1/2 h-2 bg-cyan-400-60 rounded-sm mb-1"></div>
                <div class="w-full h-2 bg-white-20 rounded-sm mb-2"></div>
                <div class="w-full h-2 bg-white-20 rounded-sm mb-1"></div>
                <div class="w-4/5 h-2 bg-white-20 rounded-sm mb-2"></div>
                <div class="w-full h-2 bg-white-20 rounded-sm"></div>
                <div class="absolute top-0 right-0 w-1 h-full bg-cyan-400-60 animate-scan"></div>
              </div>

              <div class="absolute top-3 right-3 w-6 h-6 rounded-full bg-cyan-400-20 animate-ping"></div>
              <div class="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-purple-400-20 animate-ping" style="animation-delay: 1s"></div>
            </div>
          </div>
        </div>
      `;
      break;
    
    case 4: // Statement Crafting
      animationContainer.innerHTML = `
        <div class="relative w-full h-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-32 h-24 border border-cyan-400-30 rounded-md bg-black-40 p-3 relative">
              <div class="typing-effect w-full overflow-hidden whitespace-nowrap" style="animation-iteration-count: infinite; animation-duration: 4s">
                <div class="h-2 w-full bg-cyan-400-40 rounded mb-1"></div>
                <div class="h-2 w-4/5 bg-cyan-400-40 rounded mb-1"></div>
                <div class="h-2 w-full bg-cyan-400-40 rounded"></div>
              </div>
              <div class="absolute bottom-3 left-3 w-2 h-4 bg-cyan-400-80 animate-pulse"></div>
              
              ${[0, 1, 2, 3].map(i => `
                <div 
                  class="absolute w-1.5 h-1.5 rounded-full bg-cyan-400-80 animate-float"
                  style="
                    top: ${Math.random() * 80 + 10}%; 
                    left: ${Math.random() * 80 + 10}%;
                    animation-duration: ${3 + Math.random() * 2}s;
                    animation-delay: ${i * 0.5}s
                  "
                ></div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      break;
    
    case 5: // Recommendation Strategy
      animationContainer.innerHTML = `
        <div class="relative w-full h-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex space-x-4">
              <div class="w-20 h-24 border border-cyan-400-60 rounded-md bg-black-40 p-3 relative rotate-[-8deg] animate-float" style="animation-duration: 3s">
                <div class="h-2 w-full bg-white-20 rounded mb-1"></div>
                <div class="h-2 w-4/5 bg-white-20 rounded mb-3"></div>
                <div class="h-2 w-full bg-white-20 rounded mb-1"></div>
                <div class="h-2 w-4/5 bg-white-20 rounded mb-3"></div>
                <div class="absolute bottom-3 right-3 w-8 h-5 border-b border-cyan-400-70">
                  <div class="w-full h-full flex items-end">
                    <div class="w-full h-0.5 bg-cyan-400-70 animate-pulse" style="animation-duration: 1.5s"></div>
                  </div>
                </div>
                <div class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-400-30 flex items-center justify-center text-[8px] text-white border border-cyan-400-50">
                  A+
                </div>
              </div>
              
              <div class="w-20 h-24 border border-purple-400-60 rounded-md bg-black-40 p-3 relative rotate-[8deg] animate-float" style="animation-duration: 4s; animation-delay: 0.5s">
                <div class="h-2 w-full bg-white-20 rounded mb-1"></div>
                <div class="h-2 w-4/5 bg-white-20 rounded mb-3"></div>
                <div class="h-2 w-full bg-white-20 rounded mb-1"></div>
                <div class="h-2 w-4/5 bg-white-20 rounded mb-3"></div>
                <div class="absolute bottom-3 right-3 w-8 h-5 border-b border-purple-400-50">
                  <div class="w-full h-full flex items-end">
                    <div class="w-full h-0.5 bg-purple-400-60 animate-pulse" style="animation-duration: 1.7s"></div>
                  </div>
                </div>
                <div class="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-purple-400-20 flex items-center justify-center text-[8px] text-white border border-purple-400-50">
                  A+
                </div>
              </div>
              
              <!-- Add floating seal/stamp -->
              <div class="absolute top-1/4 right-1/4 w-10 h-10 rounded-full border-2 border-dashed border-yellow-400-60 animate-spin" style="animation-duration: 10s">
                <div class="w-8 h-8 rounded-full bg-yellow-400-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span class="text-yellow-300 text-[8px] font-bold">APPROVED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    
    case 6: // Application Submission
      animationContainer.innerHTML = `
        <div class="relative w-full h-full">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-32 h-16">
              <div class="w-24 h-24 border border-cyan-400-30 rounded-md bg-black-40 absolute left-0 -top-4 rotate-[-5deg] z-10 animate-float" style="animation-duration: 3s"></div>
              <div class="w-24 h-24 border border-purple-400-50 rounded-md bg-black-40 absolute right-0 -top-6 rotate-[5deg] z-20 animate-float" style="animation-duration: 4s; animation-delay: 0.3s"></div>
              
              <div class="w-24 h-24 border-2 border-cyan-400-50 rounded-md bg-black-40 absolute left-4 -top-3 z-30 flex items-center justify-center animate-pulse-gentle" style="animation-duration: 2s">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400-30 via-purple-500-30 to-cyan-400-30 animate-pulse-gentle flex items-center justify-center" style="animation-duration: 3s">
                  <i data-lucide="check" class="h-6 w-6 text-cyan-400"></i>
                </div>
                
                <!-- Add flying paper animations -->
                <div class="absolute -top-4 -right-2 w-6 h-8 bg-white-10 rounded-sm rotate-[-15deg] animate-float" style="animation-duration: 5s; animation-delay: 0.2s"></div>
                <div class="absolute -bottom-4 -left-2 w-6 h-8 bg-white-10 rounded-sm rotate-[15deg] animate-float" style="animation-duration: 4.5s; animation-delay: 0.8s"></div>
              </div>
              
              <div class="absolute z-40 top-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0s"></div>
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0.3s"></div>
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-gentle" style="animation-delay: 0.6s"></div>
              </div>
              
              <!-- Progress indication -->
              <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-black-50 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-data-stream" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
    
    default:
      animationContainer.innerHTML = '<div class="w-full h-full flex items-center justify-center">Animation</div>';
  }
  
  return animationContainer;
}

// Function to initialize reveal animation
function initRevealAnimation() {
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
  revealOnScroll(); // Initial check on load
}

// Initialize mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }
});

