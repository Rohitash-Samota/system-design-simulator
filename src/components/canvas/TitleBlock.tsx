"use client";

import { useMemo } from "react";
import { useCanvasStore } from "@/store/canvasStore";
import { useSimulationStore } from "@/store/simulationStore";
import { useAppStore } from "@/store/appStore";
import { getProblemById } from "@/data/problems";
import { abbrev } from "@/lib/format";

/**
 * The metadata cartouche in the corner of an engineering drawing — drawing
 * title, scale, part count and revision. Here it doubles as an always-visible
 * readout of the design under construction, so the key numbers are legible
 * without opening a panel.
 */
export function TitleBlock() {
  const nodes = useCanvasStore((s) => s.nodes);
  const edges = useCanvasStore((s) => s.edges);
  const result = useSimulationStore((s) => s.result);
  const score = useSimulationStore((s) => s.scoreResult);
  const requestsPerSec = useSimulationStore((s) => s.config.requestsPerSec);
  const selectedProblemId = useAppStore((s) => s.selectedProblemId);
  const problem = getProblemById(selectedProblemId);

  // Text nodes are annotations, not infrastructure — don't count them as parts.
  const componentCount = useMemo(
    () => nodes.filter((n) => n.type === "component").length,
    [nodes]
  );

  if (componentCount === 0) return null;

  const bottlenecks = result?.bottleneckNodes.length ?? 0;

  return (
    <div className="bp-titleblock pointer-events-none absolute bottom-3 left-3 z-20 hidden select-none border border-zinc-700/80 bg-zinc-900/92 shadow-[var(--shadow-e2)] backdrop-blur md:block">
      {/* Drawing title */}
      <div className="border-b border-zinc-700/80 px-2.5 py-1.5">
        <p className="text-[8px] uppercase tracking-[0.16em] text-zinc-400">Drawing</p>
        <p className="mt-0.5 max-w-[190px] truncate text-[11px] font-semibold text-zinc-100">
          {problem?.title ?? "Untitled design"}
        </p>
      </div>

      {/* Measured fields, laid out as a drafting sheet's ruled cells */}
      <div className="grid grid-cols-3 divide-x divide-zinc-700/80">
        <Field label="Parts" value={String(componentCount)} />
        <Field label="Links" value={String(edges.length)} />
        <Field label="Scale" value={abbrev(requestsPerSec)} unit="rq/s" />
      </div>

      <div className="grid grid-cols-2 divide-x divide-zinc-700/80 border-t border-zinc-700/80">
        <Field
          label="Score"
          value={score ? String(score.total) : "——"}
          unit={score ? "/100" : undefined}
          tone={score ? scoreTone(score.total) : "muted"}
        />
        <Field
          label="Faults"
          value={result ? String(bottlenecks) : "——"}
          tone={!result ? "muted" : bottlenecks > 0 ? "bad" : "good"}
        />
      </div>
    </div>
  );
}

function scoreTone(total: number): Tone {
  if (total >= 75) return "good";
  if (total >= 50) return "warn";
  return "bad";
}

type Tone = "good" | "warn" | "bad" | "muted";

const TONE_CLASS: Record<Tone, string> = {
  good: "text-emerald-400",
  warn: "text-amber-400",
  bad: "text-rose-400",
  muted: "text-zinc-400",
};

function Field({
  label,
  value,
  unit,
  tone = "muted",
}: {
  label: string;
  value: string;
  unit?: string;
  tone?: Tone;
}) {
  return (
    <div className="px-2.5 py-1.5">
      <p className="text-[8px] uppercase tracking-[0.16em] text-zinc-400">{label}</p>
      <p className={`mt-0.5 text-[11px] font-semibold tabular-nums ${tone === "muted" ? "text-zinc-200" : TONE_CLASS[tone]}`}>
        {value}
        {unit && <span className="ml-0.5 text-[8px] font-normal text-zinc-400">{unit}</span>}
      </p>
    </div>
  );
}
