import React, { HTMLAttributes, useRef } from "react";
import { cn } from "@/lib/utils";

interface PointerGlowProps extends HTMLAttributes<HTMLDivElement> {
  as?: keyof HTMLElementTagNameMap | React.ComponentType<any>;
}

const PointerGlow: React.FC<PointerGlowProps> = ({ as: Comp = 'div', className, onMouseMove, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--pointer-x', `${x}%`);
    el.style.setProperty('--pointer-y', `${y}%`);
    onMouseMove?.(e);
  };

  const C: any = Comp;
  return <C ref={ref as any} onMouseMove={handleMouseMove} className={cn(className)} {...props} />;
};

export default PointerGlow;
