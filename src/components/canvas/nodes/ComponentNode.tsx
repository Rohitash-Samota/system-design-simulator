"use client";

import { memo, useState, useCallback, useRef, useEffect } from "react";
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import { motion } from "framer-motion";
import type { ComponentNodeData } from "@/store/canvasStore";
import { useCanvasStore } from "@/store/canvasStore";
import { Server } from "lucide-react";
import { ICON_MAP } from "@/lib/icons";
import { useIsCoarsePointer } from "@/hooks/useBreakpoint";
import {
  LOAD_LABEL,
  capacitySentence,
  formatRate,
  loadLevel,
  utilizationSentence,
  type LoadLevel,
} from "@/lib/format";

type ComponentNode = Node<ComponentNodeData, "component">;

// Each category gets a crisp, tinted icon "chip" so node types are
// distinguishable at a glance — the identity lives in the chip, not a heavy
// border, keeping the canvas calm (Linear/Railway-style).
const CATEGORY_COLORS: Record<string, { chip: string; icon: string; ring: string }> = {
  networking: { chip: "bg-blue-500/10", icon: "text-blue-400", ring: "ring-blue-500/25" },
  compute: { chip: "bg-violet-500/10", icon: "text-violet-400", ring: "ring-violet-500/25" },
  storage: { chip: "bg-amber-500/10", icon: "text-amber-400", ring: "ring-amber-500/25" },
  messaging: { chip: "bg-emerald-500/10", icon: "text-emerald-400", ring: "ring-emerald-500/25" },
  infrastructure: { chip: "bg-cyan-500/10", icon: "text-cyan-400", ring: "ring-cyan-500/25" },
};

const STATUS_DOT: Record<string, string> = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-rose-500",
  idle: "bg-zinc-600",
};

const LOAD_BAR: Record<LoadLevel, string> = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-rose-500",
};

const LOAD_TEXT: Record<LoadLevel, string> = {
  healthy: "text-emerald-400",
  warning: "text-amber-400",
  critical: "text-rose-400",
};

function ComponentNodeInner({ id, data, selected }: NodeProps<ComponentNode>) {
  const nodeData = data;
  const Icon = ICON_MAP[nodeData.icon] ?? Server;
  const colors = CATEGORY_COLORS[nodeData.category] ?? CATEGORY_COLORS.compute;
  const status = (nodeData.status as string) ?? "idle";
  const statusDot = STATUS_DOT[status] ?? STATUS_DOT.idle;
  const isBottleneck = nodeData.isBottleneck ?? false;
  const replicas = nodeData.replicas ?? 1;
  const utilization = nodeData.utilization ?? 0;
  const level = loadLevel(utilization);

  const isCustom = nodeData.componentId === "custom";
  const [editing, setEditing] = useState(false);
  const [editLabel, setEditLabel] = useState(nodeData.label);
  const inputRef = useRef<HTMLInputElement>(null);
  const updateNodeData = useCanvasStore((s) => s.updateNodeData);
  const isCoarse = useIsCoarsePointer();

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const commitLabel = useCallback(() => {
    const trimmed = editLabel.trim();
    if (trimmed && trimmed !== nodeData.label) {
      updateNodeData(id, { label: trimmed });
    } else {
      setEditLabel(nodeData.label);
    }
    setEditing(false);
  }, [editLabel, nodeData.label, id, updateNodeData]);

  const handleDoubleClick = useCallback(() => {
    if (!isCustom) return;
    setEditLabel(nodeData.label);
    setEditing(true);
  }, [isCustom, nodeData.label]);

  // Touch devices have no double-click: a tap on the label of an
  // already-selected custom node enters rename mode.
  const handleLabelClick = useCallback(() => {
    if (!isCoarse || !selected || !isCustom || editing) return;
    setEditLabel(nodeData.label);
    setEditing(true);
  }, [isCoarse, selected, isCustom, editing, nodeData.label]);

  return (
    <div
      className={`
        bp-ticks group relative flex flex-col items-center gap-1 rounded-sm border bg-zinc-900 px-3.5 py-2.5
        shadow-[var(--shadow-e2)] transition-[border-color,box-shadow] duration-150
        ${isBottleneck
          ? "border-rose-500/70 ring-1 ring-rose-500/25"
          : selected
            ? "border-cyan-500/85 ring-1 ring-cyan-500/35"
            : "border-zinc-700/80 hover:border-zinc-600"}
      `}
    >
      {/* Status indicator dot */}
      <div
        className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-2 ring-zinc-900 ${statusDot}`}
        style={{ animation: status !== 'idle' ? 'status-pulse 2s infinite' : 'none' }}
      />

      {/* Icon + Label row */}
      <div className="flex items-center gap-2">
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[3px] ring-1 ${colors.chip} ${colors.icon} ${colors.ring}`}>
          <Icon className="h-4 w-4" />
        </div>
        {editing ? (
          <input
            ref={inputRef}
            value={editLabel}
            onChange={(e) => setEditLabel(e.target.value)}
            onBlur={commitLabel}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitLabel();
              if (e.key === "Escape") {
                setEditLabel(nodeData.label);
                setEditing(false);
              }
            }}
            className="nodrag max-w-[80px] bg-transparent text-[11px] font-medium text-zinc-200 outline-none border-b border-cyan-500"
          />
        ) : (
          <span
            className={`max-w-[96px] whitespace-normal break-words text-center text-[11px] font-medium leading-tight text-zinc-200 ${isCustom ? "cursor-text" : ""}`}
            onDoubleClick={handleDoubleClick}
            onClick={handleLabelClick}
          >
            {nodeData.label}
          </span>
        )}
      </div>

      {/* Ruled separator, then the capacity spec \u2014 the dimension callout */}
      <div className="mt-0.5 h-px w-full bg-zinc-700/70" />
      <span
        className="font-mono text-[9px] tracking-[0.04em] text-zinc-400"
        title={capacitySentence(nodeData.maxQPS ?? 0)}
      >
        {formatRate(nodeData.maxQPS ?? 0)} req/sec
      </span>

      {/* Replicas badge */}
      {replicas > 1 && (
        <span className="absolute -left-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-[2px] bg-cyan-600 px-1 font-mono text-[8px] font-bold tabular-nums text-white">
          ×{replicas}
        </span>
      )}

      {/* Load bar (shown during simulation) */}
      {utilization > 0 && (
        <div className="mt-0.5 w-full" title={utilizationSentence(utilization)}>
          <div className="flex w-full items-center gap-1">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className={`h-full rounded-full ${LOAD_BAR[level]}`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(utilization * 100, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className={`font-mono text-[8px] ${LOAD_TEXT[level]}`}>
              {(utilization * 100).toFixed(0)}%
            </span>
          </div>
          {/* Name the state — a bare "200%" doesn't say what went wrong */}
          {level !== "healthy" && (
            <span className={`mt-0.5 block text-center text-[8px] font-medium ${LOAD_TEXT[level]}`}>
              {LOAD_LABEL[level]}
            </span>
          )}
        </div>
      )}

      {/* Handles — larger visual size on touch devices (44px hit area via CSS ::after) */}
      <Handle
        type="target"
        position={Position.Left}
        className={`${isCoarse ? "!h-5 !w-5" : "!h-2 !w-2"} !rounded-[1px] !border !border-zinc-600 !bg-zinc-400`}
      />
      <Handle
        type="source"
        position={Position.Right}
        className={`${isCoarse ? "!h-5 !w-5" : "!h-2 !w-2"} !rounded-[1px] !border !border-zinc-600 !bg-zinc-400`}
      />
    </div>
  );
}

function areComponentNodePropsEqual(
  prev: NodeProps<ComponentNode>,
  next: NodeProps<ComponentNode>
): boolean {
  if (prev.selected !== next.selected) return false;
  const p = prev.data;
  const n = next.data;
  return (
    p.componentId === n.componentId &&
    p.label === n.label &&
    p.status === n.status &&
    p.replicas === n.replicas &&
    p.utilization === n.utilization &&
    p.maxQPS === n.maxQPS &&
    p.latencyMs === n.latencyMs &&
    p.category === n.category &&
    p.icon === n.icon &&
    p.isBottleneck === n.isBottleneck
  );
}

export const ComponentNode = memo(ComponentNodeInner, areComponentNodePropsEqual);
