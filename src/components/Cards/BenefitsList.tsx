import { BenefitsListProps } from "@/types/card-component-types";

/**
 * Displays a list of benefit tags for a tool
 */
export function BenefitsList({ benefits, theme }: BenefitsListProps) {
  return (
    <div className="mt-2 space-y-2">
      {benefits.map((benefit, i) => (
        <div
          key={i}
          className={`mb-2 flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-medium ${
            theme === "dark" ? "text-purple-300" : "text-purple-700"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`}
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{benefit}</span>
        </div>
      ))}
    </div>
  );
}
