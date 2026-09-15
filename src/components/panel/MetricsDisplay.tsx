"use client";

import { useSimulationStore } from "@/store/simulationStore";
import { useCanvasStore } from "@/store/canvasStore";
import { Activity } from "lucide-react";
import { abbrev, utilizationSentence } from "@/lib/format";

const STATUS_COLOR: Record<string, string> = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-rose-500",
  idle: "bg-zinc-600",
};

export function MetricsDisplay() {
  const result = useSimulationStore((s) => s.result);
  const nodes = useCanvasStore((s) => s.nodes);

  if (!result || !(result.nodeMetrics instanceof Map)) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700">
          <Activity className="h-4 w-4 text-zinc-500" />
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-300">No simulation data</p>
          <p className="mt-1 max-w-[200px] text-xs text-zinc-500">
            Configure load above and click <span className="text-cyan-500">Run Simulation</span> to see metrics
          </p>
        </div>
      </div>
    );
  }

  const sortedMetrics = [...result.nodeMetrics.values()].sort(
    (a, b) => b.utilization - a.utilization
  );

  return (
    <div className="space-y-3">
      {/* Summary — big tabular value, dimmed inline unit, muted uppercase label */}
      <div className="grid grid-cols-2 gap-2">
        <div
          className="rounded-lg bg-zinc-800/70 px-3 py-2.5"
          title="Requests your design actually serves each second. Anything the system can't absorb is dropped."
        >
          <p className="metric-label text-[10px]">Throughput</p>
          <p className="metric-value mt-1 font-mono text-2xl font-semibold leading-none text-zinc-50">
            {abbrev(result.throughput)}
            <span className="ml-1 align-baseline text-xs font-normal text-zinc-500">req/s</span>
          </p>
          <p className="mt-1 text-[10px] text-zinc-400">requests served</p>
        </div>
        <div
          className="rounded-lg bg-zinc-800/70 px-3 py-2.5"
          title="Time for one request to travel the slowest route through your design. Async links are excluded — the user doesn't wait on them."
        >
          <p className="metric-label text-[10px]">Total Latency</p>
          <p className="metric-value mt-1 font-mono text-2xl font-semibold leading-none text-zinc-50">
            {result.totalLatencyMs.toFixed(0)}
            <span className="ml-1 align-baseline text-xs font-normal text-zinc-500">ms</span>
          </p>
          <p className="mt-1 text-[10px] text-zinc-400">slowest path a user waits on</p>
        </div>
      </div>

      {result.bottleneckNodes.length > 0 && (
        <div className="rounded-md border border-rose-500/20 bg-rose-950/30 px-2.5 py-2">
          <p className="text-xs font-medium text-rose-400">
            {result.bottleneckNodes.length} bottleneck{result.bottleneckNodes.length > 1 ? "s" : ""} detected
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-rose-300/80">
            {result.bottleneckNodes.length > 1 ? "These components are" : "This component is"} receiving more
            traffic than {result.bottleneckNodes.length > 1 ? "they" : "it"} can handle. Add replicas, or put a
            cache or load balancer in front.
          </p>
        </div>
      )}

      {/* Per-node metrics */}
      <p className="bp-section">
        Per-Node Metrics
      </p>

      {/* Plain overflow container: the base-ui ScrollArea viewport needs a
          definite height, so max-h on the root never actually scrolled. */}
      <div className="max-h-[300px] overflow-y-auto">
        <div className="space-y-1.5">
          {sortedMetrics.map((m) => {
            const node = nodes.find((n) => n.id === m.nodeId);
            const label = (node?.data as Record<string, unknown>)?.label as string ?? m.nodeId;
            return (
              <div
                key={m.nodeId}
                className="rounded-md bg-zinc-800 px-2.5 py-2"
              >
                <div className="mb-1 flex items-center gap-1.5">
                  <div className={`h-1.5 w-1.5 rounded-full ${STATUS_COLOR[m.status]}`} />
                  <span className="text-xs font-medium text-zinc-300">
                    {label}
                  </span>
                  {m.isBottleneck && (
                    <span className="ml-auto text-[11px] font-medium text-rose-400" style={{ animation: 'status-pulse 2s infinite' }}>
                      BOTTLENECK
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div title="Requests per second arriving at this component">
                    <p className="metric-label text-[9px]">Traffic in</p>
                    <p className="font-mono text-xs tabular-nums text-zinc-200">
                      {abbrev(m.incomingQPS)}
                      <span className="ml-0.5 text-[9px] font-normal text-zinc-400">/s</span>
                    </p>
                  </div>
                  <div title={utilizationSentence(m.utilization)}>
                    <p className="metric-label text-[9px]">Capacity used</p>
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-8 overflow-hidden rounded-full bg-zinc-700">
                        <div
                          className={`h-full rounded-full ${
                            m.utilization > 0.8 ? "bg-rose-500" :
                            m.utilization > 0.5 ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${Math.min(m.utilization * 100, 100)}%` }}
                        />
                      </div>
                      <p className={`font-mono text-xs ${
                        m.utilization > 0.8 ? "text-rose-400" :
                        m.utilization > 0.5 ? "text-amber-400" : "text-emerald-400"
                      }`}>
                        {(m.utilization * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="metric-label text-[9px]">Latency</p>
                    <p className="font-mono text-xs tabular-nums text-zinc-200">
                      {m.latencyMs.toFixed(0)}ms
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
