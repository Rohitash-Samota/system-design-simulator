/**
 * Shared number/unit formatting so capacity and traffic read the same way in
 * every surface (palette, nodes, metrics, capacity tab).
 */

/** Compact K/M/B abbreviation for large counts (Grafana-style). */
export function abbrev(n: number): string {
  if (!Number.isFinite(n)) return "∞";
  if (n >= 1e9) return (n / 1e9).toFixed(n % 1e9 === 0 ? 0 : 1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(n % 1e3 === 0 ? 0 : 1) + "K";
  return String(Math.round(n));
}

/**
 * Throughput without a unit — "1M", "500K", "5K", "∞".
 * Prefer this over hand-rolled `/1000 + "k"`, which renders 1,000,000 as the
 * unreadable "1000k".
 */
export function formatRate(n: number): string {
  return abbrev(n);
}

/** Throughput with the unit spelled out — "1M req/sec". */
export function formatRateWithUnit(n: number): string {
  if (!Number.isFinite(n)) return "unlimited";
  return `${abbrev(n)} req/sec`;
}

/**
 * Plain-language capacity sentence used in tooltips, e.g.
 * "Handles up to 1M requests/sec before it becomes a bottleneck."
 */
export function capacitySentence(maxQPS: number): string {
  if (!Number.isFinite(maxQPS)) {
    return "Handles unlimited traffic — it will never be the bottleneck.";
  }
  return `Handles up to ${abbrev(maxQPS)} requests/sec before it becomes a bottleneck.`;
}

/** Load level for a utilization ratio (1 = exactly at capacity). */
export type LoadLevel = "healthy" | "warning" | "critical";

export function loadLevel(utilization: number): LoadLevel {
  if (utilization > 0.8) return "critical";
  if (utilization > 0.5) return "warning";
  return "healthy";
}

/** Short human label for a load level, for badges and legends. */
export const LOAD_LABEL: Record<LoadLevel, string> = {
  healthy: "Healthy",
  warning: "Near limit",
  critical: "Overloaded",
};

/** What a utilization number actually means, in words. */
export function utilizationSentence(utilization: number): string {
  const pct = Math.round(utilization * 100);
  if (pct > 100) {
    return `Receiving ${pct}% of what it can handle — traffic beyond 100% is dropped.`;
  }
  return `Using ${pct}% of its capacity.`;
}
