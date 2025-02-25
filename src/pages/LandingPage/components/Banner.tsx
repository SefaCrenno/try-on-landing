"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../../lib/utils";

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = React.useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-gray-300",
        className
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  );
}

interface BannerProps {
  show: boolean;
  onHide: () => void;
  icon?: React.ReactNode;
  title: React.ReactNode;
  action: {
    label: string;
    onClick: () => void;
  };
  learnMoreUrl?: string;
}

export function Banner({
  show,
  onHide,
  icon,
  title,
  action,
  learnMoreUrl,
}: BannerProps) {
  if (!show) return null;

  return (
    <div className="relative isolate flex flex-col justify-between gap-3 overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-50 py-4 pl-5 pr-14 shadow-md sm:flex-row sm:items-center sm:py-3">
      <Grid
        cellSize={14}
        patternOffset={[0, -1]}
        className="text-gray-400 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
      />

      <div className="flex items-center gap-3">
        {icon && (
          <div className="hidden rounded-full border border-gray-400 bg-white p-2 shadow-sm sm:block">
            {icon}
          </div>
        )}
        <p className="text-sm font-medium text-gray-800">
          {title}
          {learnMoreUrl && (
            <>
              {" "}
              <a
                href={learnMoreUrl}
                target="_self"
                className="text-purple-600 underline transition-colors hover:text-purple-800"
              >
                Learn More
              </a>
            </>
          )}
        </p>
      </div>

      <div className="flex items-center sm:-my-1">
        <button
          type="button"
          className="whitespace-nowrap rounded-md border border-purple-600 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 transition-all hover:bg-purple-100 hover:text-purple-900 cursor-pointer"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      </div>

      <button
        type="button"
        className="absolute inset-y-0 right-3 p-1 text-gray-500 transition-colors hover:text-purple-600 cursor-pointer"
        onClick={onHide}
      >
        <X className="h-[20px] w-[20px]" />
      </button>
    </div>
  );
}
