"use client";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Play, Loader2 } from "lucide-react";
import { useSimulationStore } from "@/store/simulationStore";

const PRESETS = [
  { label: "Light", value: 1000, hint: "1K requests/sec — a small app" },
  { label: "Medium", value: 10000, hint: "10K requests/sec — a growing product" },
  { label: "Heavy", value: 100000, hint: "100K requests/sec — production scale" },
  { label: "Stress", value: 500000, hint: "500K requests/sec — find the breaking point" },
];

interface SimulationControlsProps {
  onSimulate: () => void;
}

export function SimulationControls({ onSimulate }: SimulationControlsProps) {
  const config = useSimulationStore((s) => s.config);
  const setConfig = useSimulationStore((s) => s.setConfig);
  const isRunning = useSimulationStore((s) => s.isRunning);

  return (
    <div className="space-y-4">
      <div>
        <p className="bp-section">Traffic to send</p>
        <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
          Pick how much load to push through your design, then run it to see which components hold up.
        </p>
      </div>

      {/* Presets */}
      <div className="flex gap-1.5">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => setConfig({ requestsPerSec: preset.value })}
            title={preset.hint}
            className={`rounded-sm border px-2.5 py-1 text-xs font-medium transition-colors ${
              config.requestsPerSec === preset.value
                ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-500"
                : "border-zinc-700/70 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-xs text-zinc-400">Requests/sec</label>
            <span className="font-mono text-xs text-cyan-500">
              {new Intl.NumberFormat("en-US").format(config.requestsPerSec)}
            </span>
          </div>
          <Slider
            value={[config.requestsPerSec]}
            onValueChange={(v) => setConfig({ requestsPerSec: Array.isArray(v) ? v[0] : v })}
            min={100}
            max={500000}
            step={100}
            className=""
          />
        </div>

        {/* Duration slider removed: the simulation engine performs a single-snapshot
            calculation (not a time-series simulation), so durationSec has no effect. */}
      </div>

      <Separator className="bg-zinc-800" />

      <Button
        onClick={onSimulate}
        disabled={isRunning}
        className="w-full gap-2 bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50"
        size="sm"
      >
        {isRunning ? (
          <>
            <Loader2 className="h-3 w-3 animate-spin" />
            Simulating...
          </>
        ) : (
          <>
            <Play className="h-3 w-3" />
            Run Simulation
          </>
        )}
      </Button>
    </div>
  );
}
