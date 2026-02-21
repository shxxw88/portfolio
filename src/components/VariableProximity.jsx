import { useRef, useEffect, useCallback } from 'react';

/**
 * VariableProximity
 * Letters get bolder/heavier the closer the cursor is.
 * Requires a variable font with a `wght` axis (Sen supports 400–800).
 *
 * Props:
 *  - label: string to render
 *  - className / style: passed to the container span
 *  - radius: px distance at which effect starts (default 120)
 *  - minWeight: font-weight when far away (default 400)
 *  - maxWeight: font-weight when cursor is on top (default 800)
 *  - falloff: 'linear' | 'quadratic' (default 'quadratic' — feels more natural)
 *  - enabled: boolean — set false to freeze at minWeight (for typewriter phase)
 */
export default function VariableProximity({
  label,
  className,
  style,
  radius = 120,
  minWeight = 400,
  maxWeight = 800,
  falloff = 'quadratic',
  enabled = true,
}) {
  const containerRef = useRef(null);
  const charRefs = useRef([]);
  const mousePos = useRef({ x: -9999, y: -9999 });
  const rafId = useRef(null);

  const updateWeights = useCallback(() => {
    if (!containerRef.current) return;
    const { x: mx, y: my } = mousePos.current;

    charRefs.current.forEach((span) => {
      if (!span) return;
      const rect = span.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);

      let weight;
      if (!enabled || dist >= radius) {
        weight = minWeight;
      } else {
        const t = 1 - dist / radius; // 0 (edge) → 1 (center)
        const eased = falloff === 'quadratic' ? t * t : t;
        weight = minWeight + eased * (maxWeight - minWeight);
      }

      span.style.fontVariationSettings = `'wght' ${Math.round(weight)}`;
    });
  }, [enabled, radius, minWeight, maxWeight, falloff]);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateWeights);
    };

    const onMouseLeave = () => {
      mousePos.current = { x: -9999, y: -9999 };
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateWeights);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateWeights]);

  // Reset all weights when disabled
  useEffect(() => {
    if (!enabled) {
      charRefs.current.forEach((span) => {
        if (span) span.style.fontVariationSettings = `'wght' ${minWeight}`;
      });
    }
  }, [enabled, minWeight]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ display: 'inline-block', ...style }}
      aria-label={label}
    >
      {label.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => (charRefs.current[i] = el)}
          style={{
            display: 'inline-block',
            fontVariationSettings: `'wght' ${minWeight}`,
            transition: 'font-variation-settings 0.1s ease',
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
}