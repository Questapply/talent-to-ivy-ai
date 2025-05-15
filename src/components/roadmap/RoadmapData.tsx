
import { ReactNode } from 'react';
import { Search, School, GraduationCap, FileText, Send } from 'lucide-react';

export interface RoadmapItemProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  position: 'left' | 'right';
  progressValue: number;
}

const createIcon = (IconComponent: any) => <IconComponent className="h-6 w-6 text-white" />;

export const roadmapData: RoadmapItemProps[] = [
  {
    number: "01",
    title: "Find Schools",
    description: "Discover schools that match your talents and aspirations.",
    icon: createIcon(Search),
    position: "left",
    progressValue: 70
  },
  {
    number: "02",
    title: "Find Programs",
    description: "Explore programs aligned with your unique strengths.",
    icon: createIcon(School),
    position: "right",
    progressValue: 65
  },
  {
    number: "03",
    title: "Find Professors",
    description: "Connect with professors in your field of interest.",
    icon: createIcon(GraduationCap),
    position: "left",
    progressValue: 55
  },
  {
    number: "04",
    title: "Create Resume",
    description: "Build a compelling resume highlighting your talents.",
    icon: createIcon(FileText),
    position: "right",
    progressValue: 75
  },
  {
    number: "05",
    title: "Create SOP",
    description: "Craft a powerful statement of purpose that stands out.",
    icon: createIcon(FileText),
    position: "left",
    progressValue: 60
  },
  {
    number: "06",
    title: "Create LOR",
    description: "Generate impactful letters of recommendation.",
    icon: createIcon(FileText),
    position: "right",
    progressValue: 45
  },
  {
    number: "07",
    title: "Apply Now",
    description: "Submit your applications with confidence.",
    icon: createIcon(Send),
    position: "left",
    progressValue: 80
  }
];
