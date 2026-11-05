import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: "primary" | "secondary" | "outline" | "ghost";
  readonly size?: "sm" | "md" | "lg";
}

/**
 * Minimal Presentation Atom: Accessible Button
 * Demonstrates:
 * 1. Tailwind v4 @theme design tokens (bg-brand-primary, text-content-primary)
 * 2. Mandatory CSS Logical Properties for bi-directional LTR/RTL (ps-*, pe-*)
 * 3. WCAG AA visible focus indicators (focus-visible:ring-2)
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-brand-primary text-content-inverse hover:bg-brand-hover active:bg-brand-primary",
      secondary:
        "bg-surface-sunken text-content-primary hover:bg-border-subtle",
      outline:
        "border border-border-strong bg-surface-elevated text-content-primary hover:bg-surface-sunken",
      ghost:
        "bg-transparent text-content-primary hover:bg-surface-panel",
    }[variant];

    const sizeStyles = {
      sm: "ps-3 pe-3 py-1.5 text-caption",
      md: "ps-5 pe-5 py-2.5 text-body-sm",
      lg: "ps-6 pe-6 py-3.5 text-body",
    }[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

