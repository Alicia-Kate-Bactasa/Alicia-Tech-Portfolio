import { useSyncExternalStore } from "react";

export type Route = "/" | "/about" | "/projects" | "/tech" | "/work";
const routes: Route[] = ["/", "/about", "/projects", "/tech", "/work"];

function read(): Route {
  const h = window.location.hash.replace(/^#/, "") || "/";
  return (routes.includes(h as Route) ? h : "/") as Route;
}

function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function useRoute(): Route {
  return useSyncExternalStore(subscribe, read, () => "/");
}

export function navigate(to: Route) {
  window.location.hash = to;
  window.scrollTo(0, 0);
}
