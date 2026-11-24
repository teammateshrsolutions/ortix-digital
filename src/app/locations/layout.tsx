import type { ReactNode } from "react";
import "./locations.css";

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return <div className="locations-page">{children}</div>;
}
