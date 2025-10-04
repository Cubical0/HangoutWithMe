import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento transition duration-200 overflow-hidden",
        "flex flex-col h-full",
        "backdrop-blur-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200",
        "shadow-xl hover:shadow-2xl",
        className
      )}
    >
      {/* Header/Image section - fixed height */}
      <div className="flex-shrink-0 w-full">
        {header}
      </div>
      
      {/* Content section - flexible with padding */}
      <div className="flex flex-col flex-grow p-6">
        {/* Icon/Role label */}
        <div className="mb-3">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="font-sans font-bold text-gray-900 text-xl mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-sans font-normal text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};