'use client';
import { useEffect, useRef } from 'react';

export default function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const horizontalScrollRef = useRef(false);

  useEffect(() => {
    let scrollIndex = 0;

    const handleScroll = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (isVisible && !horizontalScrollRef.current) {
        horizontalScrollRef.current = true;
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      }

      if (horizontalScrollRef.current) {
        e.preventDefault();
        if (e.deltaY > 0 && scrollIndex < itemsRef.current.length - 1) {
          scrollIndex++;
        } else if (e.deltaY < 0 && scrollIndex > 0) {
          scrollIndex--;
        }
        itemsRef.current[scrollIndex]?.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }

      if (!isVisible && horizontalScrollRef.current) {
        horizontalScrollRef.current = false;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="horizontal-scroll-section">
      <div
        ref={(el) => {
          itemsRef.current[0] = el;
        }}
        className="scroll-item"
        style={{ backgroundColor: 'lightblue' }}
      >
        Item 1
      </div>
      <div
        ref={(el) => {
          itemsRef.current[1] = el;
        }}
        className="scroll-item"
        style={{ backgroundColor: 'lightcoral' }}
      >
        Item 2
      </div>
    </div>
  );
}