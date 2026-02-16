import * as React from "react";

export function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function useDocumentHead(title?: string) {
  React.useEffect(() => {
    const prevTitle = document.title;

    if (title) {
      const full = `${title} - Mr.Ulloa Silva`;

      document.title = full;
      setMetaByName("twitter:title", full);
      setMetaByProperty("og:title", full);
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
