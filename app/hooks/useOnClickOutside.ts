// ...existing code...
import { RefObject, useEffect } from "react";

export default function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const element = ref.current;
      if (!element) return;
      if (event.target instanceof Node && !element.contains(event.target)) {
        onOutsideClick(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}