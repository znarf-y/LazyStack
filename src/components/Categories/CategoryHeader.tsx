import { useTheme } from "next-themes";
import { CategoryHeaderProps } from "@/types/category-component-types";

/**
 * Section header for tool categories with title and description
 */
export function CategoryHeader({ title, description }: CategoryHeaderProps) {
  const { theme } = useTheme();

  return (
    <div className="relative mb-12 md:mb-16">
      {/* Decorative elements */}
      <div className="absolute -left-6 -top-10 h-20 w-20 rounded-full bg-purple-500 opacity-20 blur-2xl dark:opacity-10"></div>
      <div className="absolute -bottom-10 -right-6 h-20 w-20 rounded-full bg-purple-500 opacity-20 blur-2xl dark:opacity-10"></div>

      <div className="text-center">
        {/* Category label */}
        <div className="mb-3 inline-flex items-center justify-center md:mb-4">
          <div className="h-[1px] w-4 bg-gradient-to-r from-transparent to-purple-500 md:w-6"></div>
          <span className="mx-2 text-xs font-medium uppercase tracking-widest text-purple-600 dark:text-purple-400 md:mx-3">
            Category
          </span>
          <div className="h-[1px] w-4 bg-gradient-to-l from-transparent to-purple-500 md:w-6"></div>
        </div>

        {/* Title with gradient and shadow effect - Responsive font size */}
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:mb-5 md:text-4xl lg:text-5xl xl:text-6xl">
          <span
            className={
              theme === "dark"
                ? "bg-gradient-to-r from-white via-white to-purple-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-800 via-gray-900 to-purple-900 bg-clip-text text-transparent"
            }
          >
            {title}
          </span>
        </h2>

        {/* Underline accent */}
        <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 md:mb-5 md:w-20"></div>

        {/* Description with improved typography - Reduced padding on mobile */}
        <p className="mx-auto max-w-2xl px-2 text-base text-muted-foreground md:px-0 md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
