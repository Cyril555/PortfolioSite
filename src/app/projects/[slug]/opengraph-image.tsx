import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Case study";
  const tag = project?.tag ?? "Work";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0e0f11",
          color: "#eceded",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8d9197",
          }}
        >
          {tag}
        </div>
        <div style={{ fontSize: 56, fontWeight: 300, letterSpacing: "-0.03em", maxWidth: 900, lineHeight: 1.05 }}>
          {title}
        </div>
        <div style={{ fontSize: 20, color: "#8d9197" }}>Cyril Vijayakumar · cyrilv.com</div>
      </div>
    ),
    { ...size },
  );
}
