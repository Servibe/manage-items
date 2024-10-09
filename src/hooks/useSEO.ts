import { useEffect } from "react";

// Hook to set the document title and meta description
export function useSEO({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  // Set the document title and meta description when its different
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"')
      ?.setAttribute("content", description);
  }, [title, description]);
}
