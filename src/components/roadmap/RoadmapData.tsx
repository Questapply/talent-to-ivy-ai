
import { ReactNode } from 'react';
import { Search, School, GraduationCap, FileText, Send, Book, Award, Users, Check } from 'lucide-react';

export interface RoadmapItemProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  position: 'left' | 'right';
  stats: {
    label: string;
    value: string;
    icon?: ReactNode;
  }[];
  additionalInfo?: string;
}

const createIcon = (IconComponent: any) => <IconComponent className="h-6 w-6 text-cyan-400" />;

export const roadmapData: RoadmapItemProps[] = [
  {
    number: "01",
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    icon: createIcon(Search),
    position: "left",
    stats: [
      {
        label: "Universities",
        value: "2,500+",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "Countries",
        value: "45+",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "Top destinations include USA, UK, Canada, Australia, and Germany"
  },
  {
    number: "02",
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    icon: createIcon(Book),
    position: "right",
    stats: [
      {
        label: "Programs",
        value: "10,000+",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "Fields",
        value: "120+",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "From Engineering to Liberal Arts, find your perfect match"
  },
  {
    number: "03",
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    icon: createIcon(Users),
    position: "left",
    stats: [
      {
        label: "Professors",
        value: "50,000+",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "Research Areas",
        value: "200+",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "Connect with leading researchers in your field"
  },
  {
    number: "04",
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    icon: createIcon(FileText),
    position: "right",
    stats: [
      {
        label: "Templates",
        value: "50+",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "ATS Optimized",
        value: "100%",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "AI-powered resume builder to showcase your achievements"
  },
  {
    number: "05",
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    icon: createIcon(FileText),
    position: "left",
    stats: [
      {
        label: "Success Rate",
        value: "94%",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "AI Assistance",
        value: "24/7",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "Personalized statements tailored to each program"
  },
  {
    number: "06",
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    icon: createIcon(FileText),
    position: "right",
    stats: [
      {
        label: "Templates",
        value: "25+",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "Acceptance Rate",
        value: "92%",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "Customized for different academic and professional contexts"
  },
  {
    number: "07",
    title: "Apply Now",
    description: "Submit your applications with confidence.",
    icon: createIcon(Check),
    position: "left",
    stats: [
      {
        label: "Success Rate",
        value: "87%",
        icon: <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
      },
      {
        label: "Support",
        value: "24/7",
        icon: <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      }
    ],
    additionalInfo: "Complete application submission and tracking system"
  }
];
