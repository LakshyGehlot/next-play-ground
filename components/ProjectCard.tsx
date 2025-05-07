import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Not Started";
};

const statusStyles: Record<
  ProjectCardProps["status"],
  { label: string; bg: string }
> = {
  Completed: { label: "Completed", bg: "bg-green-600" },
  "In Progress": { label: "In Progress", bg: "bg-yellow-500" },
  "Not Started": { label: "Not Started", bg: "bg-red-500" },
};

const ProjectCard = ({ url, title, description, status }: ProjectCardProps) => {
  return (
    <Link href={url} className="group">
      <div
        className="relative flex flex-col gap-4 rounded-2xl p-6 border border-white/5 shadow-md transition-all duration-300
        bg-gradient-to-br from-[#0a0f1c] to-[#101827]
        group-hover:from-[#020b1c] group-hover:to-[#0c34c4]
        hover:scale-[1.015]"
      >
        {/* Top Accent */}
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        {/* Status Tag */}
        <span
          className={`self-start px-3 py-1 text-xs rounded-full text-white ${statusStyles[status].bg}`}
        >
          {statusStyles[status].label}
        </span>

        {/* Content */}
        <div className="text-white flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p
            className="text-sm text-gray-300 leading-relaxed transition-all duration-300
            line-clamp-2 group-hover:line-clamp-none"
          >
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end">
          <ArrowRight
            size={34}
            className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
