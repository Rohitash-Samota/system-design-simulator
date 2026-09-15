(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentNode",
    ()=>ComponentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/hooks/useBreakpoint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Each category gets a crisp, tinted icon "chip" so node types are
// distinguishable at a glance — the identity lives in the chip, not a heavy
// border, keeping the canvas calm (Linear/Railway-style).
const CATEGORY_COLORS = {
    networking: {
        chip: "bg-blue-500/10",
        icon: "text-blue-400",
        ring: "ring-blue-500/25"
    },
    compute: {
        chip: "bg-violet-500/10",
        icon: "text-violet-400",
        ring: "ring-violet-500/25"
    },
    storage: {
        chip: "bg-amber-500/10",
        icon: "text-amber-400",
        ring: "ring-amber-500/25"
    },
    messaging: {
        chip: "bg-emerald-500/10",
        icon: "text-emerald-400",
        ring: "ring-emerald-500/25"
    },
    infrastructure: {
        chip: "bg-cyan-500/10",
        icon: "text-cyan-400",
        ring: "ring-cyan-500/25"
    }
};
const STATUS_DOT = {
    healthy: "bg-emerald-500",
    warning: "bg-amber-500",
    critical: "bg-rose-500",
    idle: "bg-zinc-600"
};
const LOAD_BAR = {
    healthy: "bg-emerald-500",
    warning: "bg-amber-500",
    critical: "bg-rose-500"
};
const LOAD_TEXT = {
    healthy: "text-emerald-400",
    warning: "text-amber-400",
    critical: "text-rose-400"
};
function ComponentNodeInner({ id, data, selected }) {
    _s();
    const nodeData = data;
    const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICON_MAP"][nodeData.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"];
    const colors = CATEGORY_COLORS[nodeData.category] ?? CATEGORY_COLORS.compute;
    const status = nodeData.status ?? "idle";
    const statusDot = STATUS_DOT[status] ?? STATUS_DOT.idle;
    const isBottleneck = nodeData.isBottleneck ?? false;
    const replicas = nodeData.replicas ?? 1;
    const utilization = nodeData.utilization ?? 0;
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLevel"])(utilization);
    const isCustom = nodeData.componentId === "custom";
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editLabel, setEditLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(nodeData.label);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const updateNodeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "ComponentNodeInner.useCanvasStore[updateNodeData]": (s)=>s.updateNodeData
    }["ComponentNodeInner.useCanvasStore[updateNodeData]"]);
    const isCoarse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCoarsePointer"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComponentNodeInner.useEffect": ()=>{
            if (editing && inputRef.current) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }["ComponentNodeInner.useEffect"], [
        editing
    ]);
    const commitLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComponentNodeInner.useCallback[commitLabel]": ()=>{
            const trimmed = editLabel.trim();
            if (trimmed && trimmed !== nodeData.label) {
                updateNodeData(id, {
                    label: trimmed
                });
            } else {
                setEditLabel(nodeData.label);
            }
            setEditing(false);
        }
    }["ComponentNodeInner.useCallback[commitLabel]"], [
        editLabel,
        nodeData.label,
        id,
        updateNodeData
    ]);
    const handleDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComponentNodeInner.useCallback[handleDoubleClick]": ()=>{
            if (!isCustom) return;
            setEditLabel(nodeData.label);
            setEditing(true);
        }
    }["ComponentNodeInner.useCallback[handleDoubleClick]"], [
        isCustom,
        nodeData.label
    ]);
    // Touch devices have no double-click: a tap on the label of an
    // already-selected custom node enters rename mode.
    const handleLabelClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComponentNodeInner.useCallback[handleLabelClick]": ()=>{
            if (!isCoarse || !selected || !isCustom || editing) return;
            setEditLabel(nodeData.label);
            setEditing(true);
        }
    }["ComponentNodeInner.useCallback[handleLabelClick]"], [
        isCoarse,
        selected,
        isCustom,
        editing,
        nodeData.label
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        bp-ticks group relative flex flex-col items-center gap-1 rounded-sm border bg-zinc-900 px-3.5 py-2.5
        shadow-[var(--shadow-e2)] transition-[border-color,box-shadow] duration-150
        ${isBottleneck ? "border-rose-500/70 ring-1 ring-rose-500/25" : selected ? "border-cyan-500/85 ring-1 ring-cyan-500/35" : "border-zinc-700/80 hover:border-zinc-600"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-2 ring-zinc-900 ${statusDot}`,
                style: {
                    animation: status !== 'idle' ? 'status-pulse 2s infinite' : 'none'
                }
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-[3px] ring-1 ${colors.chip} ${colors.icon} ${colors.ring}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        value: editLabel,
                        onChange: (e)=>setEditLabel(e.target.value),
                        onBlur: commitLabel,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") commitLabel();
                            if (e.key === "Escape") {
                                setEditLabel(nodeData.label);
                                setEditing(false);
                            }
                        },
                        className: "nodrag max-w-[80px] bg-transparent text-[11px] font-medium text-zinc-200 outline-none border-b border-cyan-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `max-w-[96px] whitespace-normal break-words text-center text-[11px] font-medium leading-tight text-zinc-200 ${isCustom ? "cursor-text" : ""}`,
                        onDoubleClick: handleDoubleClick,
                        onClick: handleLabelClick,
                        children: nodeData.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0.5 h-px w-full bg-zinc-700/70"
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-[9px] tracking-[0.04em] text-zinc-400",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capacitySentence"])(nodeData.maxQPS ?? 0),
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRate"])(nodeData.maxQPS ?? 0),
                    " req/sec"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            replicas > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -left-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-[2px] bg-cyan-600 px-1 font-mono text-[8px] font-bold tabular-nums text-white",
                children: [
                    "×",
                    replicas
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            utilization > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0.5 w-full",
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utilizationSentence"])(utilization),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 flex-1 overflow-hidden rounded-full bg-zinc-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `h-full rounded-full ${LOAD_BAR[level]}`,
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${Math.min(utilization * 100, 100)}%`
                                    },
                                    transition: {
                                        duration: 0.3
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-mono text-[8px] ${LOAD_TEXT[level]}`,
                                children: [
                                    (utilization * 100).toFixed(0),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    level !== "healthy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mt-0.5 block text-center text-[8px] font-medium ${LOAD_TEXT[level]}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOAD_LABEL"][level]
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                className: `${isCoarse ? "!h-5 !w-5" : "!h-2 !w-2"} !rounded-[1px] !border !border-zinc-600 !bg-zinc-400`
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                className: `${isCoarse ? "!h-5 !w-5" : "!h-2 !w-2"} !rounded-[1px] !border !border-zinc-600 !bg-zinc-400`
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ComponentNodeInner, "4gnNw/ynVijmSm5hfLk1HMiOfnE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCoarsePointer"]
    ];
});
_c = ComponentNodeInner;
function areComponentNodePropsEqual(prev, next) {
    if (prev.selected !== next.selected) return false;
    const p = prev.data;
    const n = next.data;
    return p.componentId === n.componentId && p.label === n.label && p.status === n.status && p.replicas === n.replicas && p.utilization === n.utilization && p.maxQPS === n.maxQPS && p.latencyMs === n.latencyMs && p.category === n.category && p.icon === n.icon && p.isBottleneck === n.isBottleneck;
}
const ComponentNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ComponentNodeInner, areComponentNodePropsEqual);
_c1 = ComponentNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "ComponentNodeInner");
__turbopack_context__.k.register(_c1, "ComponentNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextNode",
    ()=>TextNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/hooks/useBreakpoint.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FONT_SIZE_CLASS = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg"
};
const PLACEHOLDER = "Double-click (or tap) to edit";
function TextNodeInner({ data, selected, id }) {
    _s();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.text || "");
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isCoarse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCoarsePointer"])();
    const fontClass = FONT_SIZE_CLASS[data.fontSize ?? "sm"] ?? "text-sm";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextNodeInner.useEffect": ()=>{
            if (editing && textareaRef.current) {
                textareaRef.current.focus();
                textareaRef.current.select();
            }
        }
    }["TextNodeInner.useEffect"], [
        editing
    ]);
    // Placeholder is purely presentational — never committed into data.text
    const displayText = editing ? text : data.text || PLACEHOLDER;
    const isPlaceholder = !editing && !data.text;
    // Set when Escape reverts an edit so a trailing blur doesn't commit anyway
    const cancelledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const commitEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextNodeInner.useCallback[commitEdit]": ()=>{
            if (cancelledRef.current) {
                cancelledRef.current = false;
                return;
            }
            setEditing(false);
            const next = text.trim() === "" ? "" : text;
            const event = new CustomEvent("textnode:update", {
                detail: {
                    id,
                    text: next
                }
            });
            window.dispatchEvent(event);
        }
    }["TextNodeInner.useCallback[commitEdit]"], [
        text,
        id
    ]);
    const startEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextNodeInner.useCallback[startEditing]": ()=>{
            setText(data.text || "");
            setEditing(true);
        }
    }["TextNodeInner.useCallback[startEditing]"], [
        data.text
    ]);
    const handleDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextNodeInner.useCallback[handleDoubleClick]": (e)=>{
            e.stopPropagation();
            startEditing();
        }
    }["TextNodeInner.useCallback[handleDoubleClick]"], [
        startEditing
    ]);
    // Touch devices have no double-click: tapping an already-selected note
    // enters edit mode.
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextNodeInner.useCallback[handleClick]": ()=>{
            if (!isCoarse || !selected || editing) return;
            startEditing();
        }
    }["TextNodeInner.useCallback[handleClick]"], [
        isCoarse,
        selected,
        editing,
        startEditing
    ]);
    // Allow external "Edit text" buttons (e.g. the properties panel) to open
    // the editor for this node.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextNodeInner.useEffect": ()=>{
            function onEditRequest(e) {
                if (e.detail?.id === id) startEditing();
            }
            window.addEventListener("textnode:edit", onEditRequest);
            return ({
                "TextNodeInner.useEffect": ()=>window.removeEventListener("textnode:edit", onEditRequest)
            })["TextNodeInner.useEffect"];
        }
    }["TextNodeInner.useEffect"], [
        id,
        startEditing
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextNodeInner.useCallback[handleKeyDown]": (e)=>{
            if (e.key === "Escape") {
                // Revert — discard the in-progress edit without committing
                e.stopPropagation();
                cancelledRef.current = true;
                setText(data.text || "");
                setEditing(false);
            }
        }
    }["TextNodeInner.useCallback[handleKeyDown]"], [
        data.text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NodeResizer"], {
                isVisible: selected,
                minWidth: 140,
                minHeight: 48,
                lineClassName: "!border-cyan-500/40",
                handleClassName: `${isCoarse ? "!h-5 !w-5" : "!h-2 !w-2"} !rounded-sm !border !border-cyan-500 !bg-cyan-500/80`
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          flex h-full w-full min-h-[48px] min-w-[140px] flex-col overflow-hidden rounded-md transition-colors duration-150
          ${selected ? "border border-dashed border-zinc-600 bg-zinc-900/60" : "border border-transparent"}
          ${!selected && !editing ? "hover:bg-zinc-900/50" : ""}
          ${editing ? "border border-dashed border-zinc-500 bg-zinc-900/70" : ""}
        `,
                onDoubleClick: handleDoubleClick,
                onClick: handleClick,
                children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ref: textareaRef,
                    value: text,
                    onChange: (e)=>setText(e.target.value),
                    onBlur: commitEdit,
                    onKeyDown: handleKeyDown,
                    spellCheck: false,
                    wrap: "soft",
                    className: `nodrag nowheel h-full w-full flex-1 resize-none whitespace-pre-wrap break-words bg-transparent px-3 py-2 font-mono text-zinc-300 outline-none placeholder:text-zinc-500 ${fontClass}`,
                    style: {
                        overflowWrap: "anywhere",
                        wordBreak: "break-word"
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nowheel h-full w-full flex-1 overflow-auto px-3 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: `m-0 whitespace-pre-wrap break-words font-mono text-zinc-300 ${fontClass} ${isPlaceholder ? "italic text-zinc-500" : ""}`,
                        style: {
                            overflowWrap: "anywhere",
                            wordBreak: "break-word"
                        },
                        children: displayText
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TextNodeInner, "LnVfF9n7cz8sfQ6Y0YNwwOtu9qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsCoarsePointer"]
    ];
});
_c = TextNodeInner;
function areTextNodePropsEqual(prev, next) {
    return prev.selected === next.selected && prev.data.text === next.data.text && prev.data.fontSize === next.data.fontSize;
}
const TextNode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(TextNodeInner, areTextNodePropsEqual);
_c1 = TextNode;
var _c, _c1;
__turbopack_context__.k.register(_c, "TextNodeInner");
__turbopack_context__.k.register(_c1, "TextNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/nodes/nodeTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeTypes",
    ()=>nodeTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$ComponentNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/nodes/ComponentNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$TextNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/nodes/TextNode.tsx [app-client] (ecmascript)");
;
;
const nodeTypes = {
    component: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$ComponentNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentNode"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$TextNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextNode"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedEdge",
    ()=>AnimatedEdge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const protocolBadge = {
    http: null,
    grpc: {
        text: "gRPC",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    websocket: {
        text: "WS",
        color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    pubsub: {
        text: "pub/sub",
        color: "bg-amber-500/20 text-amber-400 border-amber-500/30"
    },
    tcp: {
        text: "TCP",
        color: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
    },
    custom: null
};
function AnimatedEdgeInner({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, markerEnd, data }) {
    _s();
    const isRunning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "AnimatedEdgeInner.useSimulationStore[isRunning]": (s)=>s.isRunning
    }["AnimatedEdgeInner.useSimulationStore[isRunning]"]);
    const hasResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "AnimatedEdgeInner.useSimulationStore[hasResult]": (s)=>s.result !== null
    }["AnimatedEdgeInner.useSimulationStore[hasResult]"]);
    // Traffic keeps flowing once a simulation has run (not just during the brief
    // compute window), so the canvas visibly "comes alive" after you Simulate.
    const flowing = isRunning || hasResult;
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "AnimatedEdgeInner.useAppStore": (s)=>s.theme
    }["AnimatedEdgeInner.useAppStore"]) === "dark";
    const idleStroke = isDark ? "rgba(150, 165, 195, 0.32)" : "rgba(90, 105, 130, 0.45)";
    const edgeData = data ?? {};
    const isAsync = edgeData.async === true;
    const protocol = edgeData.protocol;
    const label = edgeData.label;
    const [edgePath, labelX, labelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBezierPath"])({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition
    });
    const badge = protocol ? protocolBadge[protocol] : null;
    const showLabel = label || badge;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BaseEdge"], {
                id: id,
                path: edgePath,
                markerEnd: markerEnd,
                style: {
                    ...style,
                    stroke: flowing ? "rgba(52, 211, 230, 0.55)" : idleStroke,
                    strokeWidth: flowing ? 1.75 : 1.5,
                    ...isAsync ? {
                        strokeDasharray: "6 4"
                    } : {}
                }
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            flowing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "2.4",
                        fill: "#3ad6e6",
                        opacity: "0.95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                            dur: "1.6s",
                            repeatCount: "indefinite",
                            path: edgePath
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "2",
                        fill: "#3ad6e6",
                        opacity: "0.6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                            dur: "1.6s",
                            repeatCount: "indefinite",
                            path: edgePath,
                            begin: "0.53s"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        r: "1.6",
                        fill: "#3ad6e6",
                        opacity: "0.35",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                            dur: "1.6s",
                            repeatCount: "indefinite",
                            path: edgePath,
                            begin: "1.06s"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EdgeLabelRenderer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                        pointerEvents: "all"
                    },
                    className: "nodrag nopan flex items-center gap-1",
                    children: [
                        label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-400 leading-none",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this),
                        badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `rounded border px-1 py-0.5 text-[9px] font-medium leading-none ${badge.color}`,
                            children: badge.text
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(AnimatedEdgeInner, "H1L4EJTAoZ9DwG6rB3XnKdvxIzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = AnimatedEdgeInner;
const AnimatedEdge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(AnimatedEdgeInner);
_c1 = AnimatedEdge;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedEdgeInner");
__turbopack_context__.k.register(_c1, "AnimatedEdge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/edges/edgeTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "edgeTypes",
    ()=>edgeTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$edges$2f$AnimatedEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/edges/AnimatedEdge.tsx [app-client] (ecmascript)");
;
const edgeTypes = {
    animated: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$edges$2f$AnimatedEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedEdge"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasTabBar",
    ()=>CanvasTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CanvasTabBar() {
    _s();
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "CanvasTabBar.useCanvasStore[tabs]": (s)=>s.tabs
    }["CanvasTabBar.useCanvasStore[tabs]"]);
    const activeTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "CanvasTabBar.useCanvasStore[activeTabId]": (s)=>s.activeTabId
    }["CanvasTabBar.useCanvasStore[activeTabId]"]);
    const switchTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "CanvasTabBar.useCanvasStore[switchTab]": (s)=>s.switchTab
    }["CanvasTabBar.useCanvasStore[switchTab]"]);
    const closeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "CanvasTabBar.useCanvasStore[closeTab]": (s)=>s.closeTab
    }["CanvasTabBar.useCanvasStore[closeTab]"]);
    // Don't render if only 1 tab (default "My Design")
    if (tabs.length <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-8 shrink-0 items-center gap-0.5 border-b border-zinc-800 bg-zinc-950 px-2 overflow-x-auto",
        children: tabs.map((tab)=>// div[role=button] so the close X can be a real, focusable <button>
            // (nesting a button inside a button is invalid HTML)
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                onClick: ()=>switchTab(tab.id),
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        switchTab(tab.id);
                    }
                },
                className: `group flex h-6 cursor-pointer items-center gap-1 rounded-md px-2.5 text-[11px] transition-colors ${tab.id === activeTabId ? "bg-zinc-800 text-zinc-100" : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate max-w-[140px]",
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    tab.readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded bg-cyan-500/10 px-1 py-0.5 text-[8px] font-medium text-cyan-400",
                        children: "REF"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    tab.id !== "my-design" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        tabIndex: 0,
                        "aria-label": `Close ${tab.label} tab`,
                        onClick: (e)=>{
                            e.stopPropagation();
                            closeTab(tab.id);
                        },
                        onKeyDown: (e)=>{
                            // Don't let Enter/Space bubble up and switch the tab
                            if (e.key === "Enter" || e.key === " ") e.stopPropagation();
                        },
                        className: "ml-0.5 flex h-3.5 w-3.5 items-center justify-center rounded opacity-60 transition-opacity hover:bg-zinc-700 focus-visible:opacity-100 group-focus-within:opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-2.5 w-2.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CanvasTabBar, "jpAviou7NPt+QhAdhKGzAT0r9vk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"]
    ];
});
_c = CanvasTabBar;
var _c;
__turbopack_context__.k.register(_c, "CanvasTabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PenOverlay",
    ()=>PenOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/perfect-freehand/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- cursor helpers ---------- */ function buildPenCursor(color) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
    <path d='M2 2 L8 4 L24 20 L20 24 L4 8 Z' fill='${color}' stroke='white' stroke-width='1.5' stroke-linejoin='round'/>
    <path d='M18 18 L24 24' stroke='white' stroke-width='1.5' stroke-linecap='round'/>
    <circle cx='2.5' cy='2.5' r='1.6' fill='white' stroke='${color}' stroke-width='1'/>
  </svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 2 2, crosshair`;
}
function buildEraserCursor() {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
    <rect x='3' y='12' width='18' height='10' rx='2' transform='rotate(-35 12 17)' fill='#fda4af' stroke='white' stroke-width='1.5'/>
    <line x1='10' y1='8' x2='18' y2='16' stroke='white' stroke-width='1.5'/>
  </svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}") 4 22, cell`;
}
/* ---------- perfect-freehand wrappers ---------- */ function outlineToPath(outline) {
    if (outline.length === 0) return "";
    const d = [
        "M",
        outline[0][0],
        outline[0][1],
        "Q"
    ];
    for(let i = 0; i < outline.length; i++){
        const [x0, y0] = outline[i];
        const [x1, y1] = outline[(i + 1) % outline.length];
        d.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
    }
    d.push("Z");
    return d.join(" ");
}
function strokeToPath(points, size) {
    const outline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroke"])(points, {
        size,
        thinning: 0.5,
        smoothing: 0.55,
        streamline: 0.55,
        simulatePressure: true,
        last: true
    });
    return outlineToPath(outline);
}
/** Same as strokeToPath but with `last: false` — for the live stroke while drawing. */ function livePathFromPoints(points, size) {
    const outline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStroke"])(points, {
        size,
        thinning: 0.5,
        smoothing: 0.55,
        streamline: 0.55,
        simulatePressure: true,
        last: false
    });
    return outlineToPath(outline);
}
/* ---------- eraser radius ---------- */ const ERASER_RADIUS_SCREEN = 14;
function PenOverlay() {
    _s();
    const { screenToFlowPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const { x: vx, y: vy, zoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useViewport"])();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[mode]": (s)=>s.mode
    }["PenOverlay.usePenStore[mode]"]);
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[color]": (s)=>s.color
    }["PenOverlay.usePenStore[color]"]);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[width]": (s)=>s.width
    }["PenOverlay.usePenStore[width]"]);
    const strokes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[strokes]": (s)=>s.strokes
    }["PenOverlay.usePenStore[strokes]"]);
    const addStroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[addStroke]": (s)=>s.addStroke
    }["PenOverlay.usePenStore[addStroke]"]);
    const eraseAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenOverlay.usePenStore[eraseAt]": (s)=>s.eraseAt
    }["PenOverlay.usePenStore[eraseAt]"]);
    const [livePoints, setLivePoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const drawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const eraserRadiusFlow = ERASER_RADIUS_SCREEN / Math.max(zoom, 0.1);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PenOverlay.useCallback[onPointerDown]": (e)=>{
            if (mode === "off") return;
            if (e.button !== 0) return;
            e.preventDefault();
            e.currentTarget.setPointerCapture?.(e.pointerId);
            drawingRef.current = true;
            const pt = screenToFlowPosition({
                x: e.clientX,
                y: e.clientY
            });
            if (mode === "pen") {
                setLivePoints([
                    [
                        pt.x,
                        pt.y
                    ]
                ]);
            } else {
                eraseAt(pt.x, pt.y, eraserRadiusFlow);
            }
        }
    }["PenOverlay.useCallback[onPointerDown]"], [
        mode,
        screenToFlowPosition,
        eraseAt,
        eraserRadiusFlow
    ]);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PenOverlay.useCallback[onPointerMove]": (e)=>{
            if (!drawingRef.current) return;
            // Use coalesced events so fast flicks don't lose intermediate samples.
            const native = e.nativeEvent;
            const raws = typeof native.getCoalescedEvents === "function" ? native.getCoalescedEvents() : null;
            const events = raws && raws.length > 0 ? raws : [
                {
                    clientX: e.clientX,
                    clientY: e.clientY
                }
            ];
            if (mode === "pen") {
                const newPts = events.map({
                    "PenOverlay.useCallback[onPointerMove].newPts": (ev)=>{
                        const p = screenToFlowPosition({
                            x: ev.clientX,
                            y: ev.clientY
                        });
                        return [
                            p.x,
                            p.y
                        ];
                    }
                }["PenOverlay.useCallback[onPointerMove].newPts"]);
                setLivePoints({
                    "PenOverlay.useCallback[onPointerMove]": (pts)=>[
                            ...pts,
                            ...newPts
                        ]
                }["PenOverlay.useCallback[onPointerMove]"]);
            } else if (mode === "eraser") {
                for (const ev of events){
                    const p = screenToFlowPosition({
                        x: ev.clientX,
                        y: ev.clientY
                    });
                    eraseAt(p.x, p.y, eraserRadiusFlow);
                }
            }
        }
    }["PenOverlay.useCallback[onPointerMove]"], [
        mode,
        screenToFlowPosition,
        eraseAt,
        eraserRadiusFlow
    ]);
    const finishStroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PenOverlay.useCallback[finishStroke]": ()=>{
            if (!drawingRef.current) return;
            drawingRef.current = false;
            if (mode === "pen" && livePoints.length > 1) {
                const stroke = {
                    id: `stroke-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
                    points: livePoints,
                    color,
                    width
                };
                addStroke(stroke);
            }
            setLivePoints([]);
        }
    }["PenOverlay.useCallback[finishStroke]"], [
        mode,
        livePoints,
        color,
        width,
        addStroke
    ]);
    const interactive = mode !== "off";
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PenOverlay.useMemo[cursor]": ()=>{
            if (mode === "pen") return buildPenCursor(color);
            if (mode === "eraser") return buildEraserCursor();
            return "auto";
        }
    }["PenOverlay.useMemo[cursor]"], [
        mode,
        color
    ]);
    // Memoized committed-stroke paths (only recompute when strokes change).
    const committedPaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PenOverlay.useMemo[committedPaths]": ()=>strokes.map({
                "PenOverlay.useMemo[committedPaths]": (s)=>({
                        id: s.id,
                        d: strokeToPath(s.points, s.width),
                        color: s.color
                    })
            }["PenOverlay.useMemo[committedPaths]"])
    }["PenOverlay.useMemo[committedPaths]"], [
        strokes
    ]);
    const livePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PenOverlay.useMemo[livePath]": ()=>livePoints.length > 0 ? livePathFromPoints(livePoints, width) : ""
    }["PenOverlay.useMemo[livePath]"], [
        livePoints,
        width
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute inset-0 h-full w-full",
        style: {
            pointerEvents: interactive ? "auto" : "none",
            cursor,
            zIndex: 5,
            touchAction: interactive ? "none" : "auto"
        },
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: finishStroke,
        // No onPointerLeave: pointer capture keeps the stroke alive when the
        // pointer briefly exits the svg — ending it there cut strokes short.
        onPointerCancel: finishStroke,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: `translate(${vx}, ${vy}) scale(${zoom})`,
            children: [
                committedPaths.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: p.d,
                        fill: p.color
                    }, p.id, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)),
                livePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: livePath,
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx",
                    lineNumber: 194,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(PenOverlay, "HoGTNbbhDaZ3WDH2fF5tznWpVm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useViewport"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"]
    ];
});
_c = PenOverlay;
var _c;
__turbopack_context__.k.register(_c, "PenOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PenToolbar",
    ()=>PenToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Pen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/ConfirmDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PenToolbar() {
    _s();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[mode]": (s)=>s.mode
    }["PenToolbar.usePenStore[mode]"]);
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[color]": (s)=>s.color
    }["PenToolbar.usePenStore[color]"]);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[width]": (s)=>s.width
    }["PenToolbar.usePenStore[width]"]);
    const strokes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[strokes]": (s)=>s.strokes
    }["PenToolbar.usePenStore[strokes]"]);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[setMode]": (s)=>s.setMode
    }["PenToolbar.usePenStore[setMode]"]);
    const setColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[setColor]": (s)=>s.setColor
    }["PenToolbar.usePenStore[setColor]"]);
    const setWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[setWidth]": (s)=>s.setWidth
    }["PenToolbar.usePenStore[setWidth]"]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "PenToolbar.usePenStore[clearAll]": (s)=>s.clearAll
    }["PenToolbar.usePenStore[clearAll]"]);
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto absolute right-3 top-3 z-20 flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/90 p-1 shadow-lg backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(mode === "pen" ? "off" : "pen"),
                        className: `flex h-7 w-7 [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10 items-center justify-center rounded transition-colors ${mode === "pen" ? "bg-cyan-500/20 text-cyan-400" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"}`,
                        title: "Pen (draw on canvas)",
                        "aria-label": "Pen tool",
                        "aria-pressed": mode === "pen",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode(mode === "eraser" ? "off" : "eraser"),
                        className: `flex h-7 w-7 [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10 items-center justify-center rounded transition-colors ${mode === "eraser" ? "bg-rose-500/20 text-rose-400" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"}`,
                        title: "Eraser",
                        "aria-label": "Eraser tool",
                        "aria-pressed": mode === "eraser",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, this),
                    mode !== "off" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 h-4 w-px bg-zinc-800"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PEN_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setColor(c),
                                        className: `h-5 w-5 rounded-full border transition-transform [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10 ${color === c ? "scale-110 border-white" : "border-zinc-700 hover:scale-105"}`,
                                        style: {
                                            backgroundColor: c
                                        },
                                        title: c,
                                        "aria-label": `Pen color ${c}`
                                    }, c, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 h-4 w-px bg-zinc-800"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PEN_WIDTHS"].map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setWidth(w),
                                        className: `flex h-5 w-5 items-center justify-center rounded transition-colors [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10 ${width === w ? "bg-zinc-700" : "hover:bg-zinc-800"}`,
                                        title: `${w}px stroke width`,
                                        "aria-label": `Stroke width ${w}px`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full bg-zinc-300",
                                            style: {
                                                width: `${Math.min(w / 2 + 2, 14)}px`,
                                                height: `${Math.min(w / 2 + 2, 14)}px`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    }, w, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true),
                    strokes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 h-4 w-px bg-zinc-800"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setConfirmOpen(true),
                                className: "flex h-7 w-7 items-center justify-center rounded text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-rose-400 [@media(pointer:coarse)]:h-10 [@media(pointer:coarse)]:w-10",
                                title: "Clear all drawings",
                                "aria-label": "Clear all drawings",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                open: confirmOpen,
                title: "Clear all drawings?",
                message: `This will remove ${strokes.length} drawing${strokes.length === 1 ? "" : "s"} from the canvas. This can't be undone.`,
                confirmText: "Clear all",
                danger: true,
                onConfirm: clearAll,
                onClose: ()=>setConfirmOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(PenToolbar, "BbgE6wy6d7pUtvlyg1uDjZz/oDU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"]
    ];
});
_c = PenToolbar;
var _c;
__turbopack_context__.k.register(_c, "PenToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitleBlock",
    ()=>TitleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/problems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function TitleBlock() {
    _s();
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TitleBlock.useCanvasStore[nodes]": (s)=>s.nodes
    }["TitleBlock.useCanvasStore[nodes]"]);
    const edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TitleBlock.useCanvasStore[edges]": (s)=>s.edges
    }["TitleBlock.useCanvasStore[edges]"]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "TitleBlock.useSimulationStore[result]": (s)=>s.result
    }["TitleBlock.useSimulationStore[result]"]);
    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "TitleBlock.useSimulationStore[score]": (s)=>s.scoreResult
    }["TitleBlock.useSimulationStore[score]"]);
    const requestsPerSec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "TitleBlock.useSimulationStore[requestsPerSec]": (s)=>s.config.requestsPerSec
    }["TitleBlock.useSimulationStore[requestsPerSec]"]);
    const selectedProblemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TitleBlock.useAppStore[selectedProblemId]": (s)=>s.selectedProblemId
    }["TitleBlock.useAppStore[selectedProblemId]"]);
    const problem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProblemById"])(selectedProblemId);
    // Text nodes are annotations, not infrastructure — don't count them as parts.
    const componentCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TitleBlock.useMemo[componentCount]": ()=>nodes.filter({
                "TitleBlock.useMemo[componentCount]": (n)=>n.type === "component"
            }["TitleBlock.useMemo[componentCount]"]).length
    }["TitleBlock.useMemo[componentCount]"], [
        nodes
    ]);
    if (componentCount === 0) return null;
    const bottlenecks = result?.bottleneckNodes.length ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bp-titleblock pointer-events-none absolute bottom-3 left-3 z-20 hidden select-none border border-zinc-700/80 bg-zinc-900/92 shadow-[var(--shadow-e2)] backdrop-blur md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-zinc-700/80 px-2.5 py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[8px] uppercase tracking-[0.16em] text-zinc-400",
                        children: "Drawing"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 max-w-[190px] truncate text-[11px] font-semibold text-zinc-100",
                        children: problem?.title ?? "Untitled design"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 divide-x divide-zinc-700/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Parts",
                        value: String(componentCount)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Links",
                        value: String(edges.length)
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Scale",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abbrev"])(requestsPerSec),
                        unit: "rq/s"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 divide-x divide-zinc-700/80 border-t border-zinc-700/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Score",
                        value: score ? String(score.total) : "——",
                        unit: score ? "/100" : undefined,
                        tone: score ? scoreTone(score.total) : "muted"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Faults",
                        value: result ? String(bottlenecks) : "——",
                        tone: !result ? "muted" : bottlenecks > 0 ? "bad" : "good"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(TitleBlock, "mAAzb5BIU/gc7E8rCsDWcceVYRI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = TitleBlock;
function scoreTone(total) {
    if (total >= 75) return "good";
    if (total >= 50) return "warn";
    return "bad";
}
const TONE_CLASS = {
    good: "text-emerald-400",
    warn: "text-amber-400",
    bad: "text-rose-400",
    muted: "text-zinc-400"
};
function Field({ label, value, unit, tone = "muted" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2.5 py-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[8px] uppercase tracking-[0.16em] text-zinc-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-0.5 text-[11px] font-semibold tabular-nums ${tone === "muted" ? "text-zinc-200" : TONE_CLASS[tone]}`,
                children: [
                    value,
                    unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-0.5 text-[8px] font-normal text-zinc-400",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                        lineNumber: 100,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "TitleBlock");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignCanvas",
    ()=>DesignCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$nodeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/nodes/nodeTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$edges$2f$edgeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/edges/edgeTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$components$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/components.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$CanvasTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/CanvasTabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$PenOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/PenOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$PenToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/PenToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$TitleBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/TitleBlock.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
// Orchestrated staggered reveal for the empty state — one deliberate page-load
// moment rather than scattered micro-animations.
const emptyContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.04
        }
    }
};
const emptyItem = {
    hidden: {
        opacity: 0,
        y: 12
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
;
;
;
;
function DesignCanvas({ onPickProblem, onLoadReference, onStartInterview, onShowGuide } = {}) {
    _s();
    const reactFlowWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { screenToFlowPosition, fitView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[nodes]": (s)=>s.nodes
    }["DesignCanvas.useCanvasStore[nodes]"]);
    const edges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[edges]": (s)=>s.edges
    }["DesignCanvas.useCanvasStore[edges]"]);
    const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[onNodesChange]": (s)=>s.onNodesChange
    }["DesignCanvas.useCanvasStore[onNodesChange]"]);
    const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[onEdgesChange]": (s)=>s.onEdgesChange
    }["DesignCanvas.useCanvasStore[onEdgesChange]"]);
    const onConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[onConnect]": (s)=>s.onConnect
    }["DesignCanvas.useCanvasStore[onConnect]"]);
    const addNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[addNode]": (s)=>s.addNode
    }["DesignCanvas.useCanvasStore[addNode]"]);
    const updateNodeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[updateNodeData]": (s)=>s.updateNodeData
    }["DesignCanvas.useCanvasStore[updateNodeData]"]);
    const setSelectedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[setSelectedNode]": (s)=>s.setSelectedNode
    }["DesignCanvas.useCanvasStore[setSelectedNode]"]);
    const setSelectedEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[setSelectedEdge]": (s)=>s.setSelectedEdge
    }["DesignCanvas.useCanvasStore[setSelectedEdge]"]);
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[tabs]": (s)=>s.tabs
    }["DesignCanvas.useCanvasStore[tabs]"]);
    const activeTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "DesignCanvas.useCanvasStore[activeTabId]": (s)=>s.activeTabId
    }["DesignCanvas.useCanvasStore[activeTabId]"]);
    const isReadOnly = tabs.find((t)=>t.id === activeTabId)?.readOnly === true;
    const penMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"])({
        "DesignCanvas.usePenStore[penMode]": (s)=>s.mode
    }["DesignCanvas.usePenStore[penMode]"]);
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "DesignCanvas.useAppStore": (s)=>s.theme
    }["DesignCanvas.useAppStore"]) === "dark";
    // Blueprint ruling: a fine 20px grid under a stronger 100px grid, the way a
    // drafting sheet is printed. Values mirror --grid-line / --grid-major.
    const fineColor = isDark ? "rgba(140,180,250,0.09)" : "rgba(58,92,150,0.10)";
    const majorColor = isDark ? "rgba(150,190,255,0.17)" : "rgba(58,92,150,0.20)";
    const minimapMask = isDark ? "rgba(10,14,26,0.72)" : "rgba(226,233,245,0.62)";
    const penActive = penMode !== "off";
    // Re-fit the viewport whenever the user switches canvas tabs
    const initialTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignCanvas.useEffect": ()=>{
            if (initialTabRef.current) {
                initialTabRef.current = false;
                return; // initial mount already handled by the `fitView` prop
            }
            // Wait one frame so the new tab's nodes are mounted before fitting
            const raf = requestAnimationFrame({
                "DesignCanvas.useEffect.raf": ()=>{
                    fitView({
                        padding: 0.2,
                        duration: 300
                    });
                }
            }["DesignCanvas.useEffect.raf"]);
            return ({
                "DesignCanvas.useEffect": ()=>cancelAnimationFrame(raf)
            })["DesignCanvas.useEffect"];
        }
    }["DesignCanvas.useEffect"], [
        activeTabId,
        fitView
    ]);
    // Listen for text node edits and persist them to the store
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesignCanvas.useEffect": ()=>{
            function handleTextNodeUpdate(e) {
                const { id, text } = e.detail;
                updateNodeData(id, {
                    text
                });
            }
            window.addEventListener("textnode:update", handleTextNodeUpdate);
            return ({
                "DesignCanvas.useEffect": ()=>window.removeEventListener("textnode:update", handleTextNodeUpdate)
            })["DesignCanvas.useEffect"];
        }
    }["DesignCanvas.useEffect"], [
        updateNodeData
    ]);
    const onDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignCanvas.useCallback[onDragOver]": (event)=>{
            event.preventDefault();
            event.dataTransfer.dropEffect = "copy";
        }
    }["DesignCanvas.useCallback[onDragOver]"], []);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignCanvas.useCallback[onDrop]": (event)=>{
            event.preventDefault();
            if (isReadOnly) return;
            const componentId = event.dataTransfer.getData("application/systemsim-component");
            if (!componentId) return;
            const component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$components$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponentById"])(componentId);
            if (!component) return;
            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY
            });
            const newNode = {
                id: `${componentId}-${crypto.randomUUID()}`,
                type: "component",
                position,
                data: {
                    componentId: component.id,
                    label: component.label,
                    icon: component.icon,
                    category: component.category,
                    replicas: 1,
                    maxQPS: component.maxQPS,
                    latencyMs: component.latencyMs,
                    scalable: component.scalable
                }
            };
            addNode(newNode);
        }
    }["DesignCanvas.useCallback[onDrop]"], [
        screenToFlowPosition,
        addNode,
        isReadOnly
    ]);
    const onNodeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignCanvas.useCallback[onNodeClick]": (_, node)=>{
            setSelectedNode(node.id);
        }
    }["DesignCanvas.useCallback[onNodeClick]"], [
        setSelectedNode
    ]);
    const onEdgeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignCanvas.useCallback[onEdgeClick]": (_, edge)=>{
            setSelectedEdge(edge.id);
        }
    }["DesignCanvas.useCallback[onEdgeClick]"], [
        setSelectedEdge
    ]);
    const onPaneClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesignCanvas.useCallback[onPaneClick]": ()=>{
            setSelectedNode(null);
            setSelectedEdge(null);
        }
    }["DesignCanvas.useCallback[onPaneClick]"], [
        setSelectedNode,
        setSelectedEdge
    ]);
    const miniMapNodeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesignCanvas.useMemo[miniMapNodeColor]": ()=>({
                "DesignCanvas.useMemo[miniMapNodeColor]": (node)=>{
                    const data = node.data;
                    const status = data.status;
                    if (status === "critical") return "#ef4444";
                    if (status === "warning") return "#f59e0b";
                    if (status === "healthy") return "#10b981";
                    return "#52525b";
                }
            })["DesignCanvas.useMemo[miniMapNodeColor]"]
    }["DesignCanvas.useMemo[miniMapNodeColor]"], []);
    const isEmpty = nodes.length === 0;
    const hasSimulated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "DesignCanvas.useSimulationStore[hasSimulated]": (s)=>s.result !== null
    }["DesignCanvas.useSimulationStore[hasSimulated]"]);
    // Mirrors TitleBlock's own visibility rule: text notes aren't parts.
    const hasComponents = nodes.some((n)=>n.type === "component");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: reactFlowWrapper,
        className: "relative flex-1 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$CanvasTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTabBar"], {}, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
                        className: "sf-canvas h-full w-full",
                        nodes: nodes,
                        edges: edges,
                        onNodesChange: onNodesChange,
                        onEdgesChange: onEdgesChange,
                        onConnect: isReadOnly ? undefined : onConnect,
                        onDrop: onDrop,
                        onDragOver: onDragOver,
                        onNodeClick: onNodeClick,
                        onEdgeClick: onEdgeClick,
                        onPaneClick: onPaneClick,
                        nodeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$nodes$2f$nodeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeTypes"],
                        edgeTypes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$edges$2f$edgeTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeTypes"],
                        defaultEdgeOptions: {
                            type: "animated"
                        },
                        fitView: true,
                        proOptions: {
                            hideAttribution: true
                        },
                        panOnDrag: !penActive,
                        zoomOnScroll: !penActive,
                        zoomOnPinch: !penActive,
                        nodesDraggable: !penActive && !isReadOnly,
                        nodesConnectable: !penActive && !isReadOnly,
                        elementsSelectable: !penActive,
                        connectionRadius: 30,
                        deleteKeyCode: null,
                        snapToGrid: true,
                        snapGrid: [
                            16,
                            16
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                                id: "grid-fine",
                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Lines,
                                gap: 20,
                                lineWidth: 1,
                                color: fineColor,
                                className: "!bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 209,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                                id: "grid-major",
                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BackgroundVariant"].Lines,
                                gap: 100,
                                lineWidth: 1,
                                color: majorColor,
                                className: "!bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 217,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                                // Lift clear of the title block only while it is actually rendered
                                className: `${hasComponents ? "sf-controls-lifted " : ""}!rounded-sm !border !border-zinc-700/80 !bg-zinc-900 !shadow-sm [&>button]:!border-zinc-700/80 [&>button]:!bg-zinc-900 [&>button]:!text-zinc-400 [&>button:hover]:!bg-zinc-800 [&>button:hover]:!text-zinc-200`,
                                position: "bottom-left"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 225,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                                className: "!hidden !rounded-sm !border !border-zinc-700/80 !bg-zinc-900 md:!block",
                                maskColor: minimapMask,
                                nodeColor: miniMapNodeColor,
                                position: "bottom-right",
                                // Lifted above the corner Support FAB so the two don't overlap
                                style: {
                                    width: 140,
                                    height: 90,
                                    bottom: 72
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 230,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 180,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$PenOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PenOverlay"], {}, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$PenToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PenToolbar"], {}, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$TitleBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleBlock"], {}, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    hasSimulated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bp-ticks pointer-events-none absolute left-3 top-3 z-20 hidden items-center gap-3 rounded-sm border border-zinc-700/80 bg-zinc-900/92 px-3 py-1.5 text-[10px] text-zinc-300 shadow-sm backdrop-blur md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bp-label",
                                children: "Capacity used"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                className: "bg-emerald-500",
                                label: "Healthy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                className: "bg-amber-500",
                                label: "Near limit"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendDot, {
                                className: "bg-rose-500",
                                label: "Overloaded"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    isReadOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute left-1/2 top-3 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-sm border border-cyan-500/35 bg-zinc-900/92 px-3 py-1 text-[11px] font-medium text-cyan-400 shadow-sm backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            "Read-only reference"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            isEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center px-4 pb-4 md:pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: emptyContainer,
                    initial: "hidden",
                    animate: "show",
                    className: "pointer-events-auto flex w-full max-w-lg flex-col items-center gap-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: emptyItem,
                            className: "bp-ticks relative flex h-14 w-14 items-center justify-center rounded-sm border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-transparent shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-6 w-6 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: emptyItem,
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "bp-label",
                                    children: "Sheet 01 — new drawing"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-lg font-bold tracking-[-0.02em] text-zinc-50 md:text-xl",
                                    children: "Build an architecture that scales"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto max-w-sm text-xs leading-relaxed text-zinc-400 md:text-sm",
                                    children: "Pick a problem, drop infrastructure components onto the canvas, and get scored the way an interviewer would evaluate you."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this),
                        onShowGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            variants: emptyItem,
                            onClick: onShowGuide,
                            className: "inline-flex items-center gap-1.5 rounded-sm border border-zinc-700/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-500/45 hover:text-cyan-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this),
                                "New here? See how it works"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                            lineNumber: 290,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: emptyItem,
                            className: "grid w-full gap-2 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStartCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                        lineNumber: 302,
                                        columnNumber: 23
                                    }, this),
                                    title: "Pick a problem",
                                    hint: "35 real interview questions",
                                    onClick: onPickProblem
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStartCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                        lineNumber: 308,
                                        columnNumber: 23
                                    }, this),
                                    title: "Load reference",
                                    hint: "Open a sample solution",
                                    onClick: onLoadReference
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStartCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                        lineNumber: 314,
                                        columnNumber: 23
                                    }, this),
                                    title: "Practice interview",
                                    hint: "Timed 6-phase mock",
                                    onClick: onStartInterview,
                                    accent: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: emptyItem,
                            className: "hidden flex-wrap items-center justify-center gap-3 text-[11px] text-zinc-500 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]",
                                            children: "⌘K"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        "command palette"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-700",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        "Drag from the sidebar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-700",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]",
                                            children: "⌘E"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        "export"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-700",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 font-mono text-[10px]",
                                            children: "⌘↵"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        "simulate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(DesignCanvas, "zlTnFsV9yFZw5Q1rFvtkPU19Q9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"]
    ];
});
_c = DesignCanvas;
function LegendDot({ className, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `h-2 w-2 shrink-0 rounded-full ${className}`
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, this);
}
_c1 = LegendDot;
function QuickStartCard({ icon, title, hint, onClick, accent }) {
    if (!onClick) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `bp-ticks relative group flex flex-col items-start gap-1.5 rounded-sm border bg-zinc-900/60 p-3 text-left transition-all hover:-translate-y-0.5 hover:bg-zinc-900 ${accent ? "border-cyan-500/35 hover:border-cyan-400/65 hover:shadow-[0_0_24px_-8px_rgba(6,182,212,0.5)]" : "border-zinc-800 hover:border-zinc-700"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `flex h-6 w-6 items-center justify-center rounded-[3px] ${accent ? "bg-cyan-500/15 text-cyan-400" : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-medium text-zinc-200",
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] leading-tight text-zinc-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_c2 = QuickStartCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DesignCanvas");
__turbopack_context__.k.register(_c1, "LegendDot");
__turbopack_context__.k.register(_c2, "QuickStartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_system-design-simulator_src_components_canvas_0vn46-m._.js.map