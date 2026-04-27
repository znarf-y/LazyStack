import React from "react";
import { cn } from "../../lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FeatureCardProps } from "@/types/jumbotron-component-types";

/**
 * A card component for displaying feature information
 */
export function FeatureCard({ feature, isDark }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "floating-element transition-smooth group min-h-[120px] overflow-hidden",
        isDark ? "card-dark" : "card-light",
      )}
    >
      <CardHeader className="p-5 sm:p-6">
        <CardTitle className="mb-3 text-sm font-semibold tracking-tight sm:text-base">
          {feature.title}
        </CardTitle>
        <CardDescription className="text-xs leading-relaxed sm:text-sm">
          {feature.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
