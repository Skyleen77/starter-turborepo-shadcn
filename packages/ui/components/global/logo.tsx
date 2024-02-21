import { cn } from "@ui/lib/utils";

export const logoSizes = {
  xs: "h-4",
  xsm: "h-5",
  sm: "h-6",
  smd: "h-7",
  md: "h-8",
  lg: "h-10",
  xl: "h-12",
  full: "w-full aspect-square",
};

interface LogoProps {
  size?: keyof typeof logoSizes;
  className?: string;
  theme?: "light" | "dark";
}

export const Logo = ({
  className,
  size = "sm",
  theme,
  ...props
}: LogoProps) => {
  return (
    <img
      src={`/assets/${theme === "dark" ? "logo-white" : "logo"}.png`}
      alt="FlowForm"
      {...props}
      className={cn(logoSizes[size], className)}
    />
  );
};
