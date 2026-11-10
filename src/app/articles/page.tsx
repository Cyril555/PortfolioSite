import { permanentRedirect } from "next/navigation";

/** Permanent move: /articles → /work. */
export default function ArticlesRedirect() {
  permanentRedirect("/work");
}
