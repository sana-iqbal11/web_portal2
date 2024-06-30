import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  component?: React.ElementType;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  align?: "center" | "left" | "right";
  color?: string;
  gutterBottom?: boolean;
  paragraph?: boolean;
  variantMapping?: {
    h1: "h1";
    h2: "h2";
    h3: "h3";
    h4: "h4";
    h5: "h5";
    h6: "h6";
    p: "p";
  };
};

export default function Typography({
  children,
  className,
  component,
  variant,
  align,
  color,
  gutterBottom,
  paragraph,
  variantMapping,
  style,
}: Props) {
  const Component = component || "div";
  variantMapping = variantMapping || {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
  };

  const defaultStyle = {
    lineHeight: 1.5,
    marginBottom: paragraph ? "1rem" : 0,
  };

  const styleProp = {
    ...defaultStyle,
    ...style,
  };

  const variantClass = variantMapping[variant];
  const classes = [
    variantClass,
    className,
    `text-${align}`,
    `text-${color}`,
    gutterBottom && "gutter-bottom",
    paragraph && "paragraph",
  ];
  return (
    <Component className={classes.filter(Boolean).join(" ")} style={styleProp}>
      {children}
    </Component>
  );
}
