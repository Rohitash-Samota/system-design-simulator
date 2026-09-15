(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopBar",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/panel-right.js [app-client] (ecmascript) <export default as PanelRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/file-code-corner.js [app-client] (ecmascript) <export default as FileCode2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/file-braces.js [app-client] (ecmascript) <export default as FileJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/sticky-note.js [app-client] (ecmascript) <export default as StickyNote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/redo-2.js [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/problems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customProblemsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$loadReference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/loadReference.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$exportCanvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/exportCanvas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/ConfirmDialog.tsx [app-client] (ecmascript)");
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
;
function TopBar({ onSimulate, onScore, onClearCanvas, onSave, onLoad, onStartInterview, onCreateProblem, onOpenSupport, onToggleLeft, onToggleRight }) {
    _s();
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportOpen, setExportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMoreOpen, setMobileMoreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clearConfirmOpen, setClearConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { screenToFlowPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"])();
    const addNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[addNode]": (s)=>s.addNode
    }["TopBar.useCanvasStore[addNode]"]);
    const isSimulating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"])({
        "TopBar.useSimulationStore[isSimulating]": (s)=>s.isRunning
    }["TopBar.useSimulationStore[isSimulating]"]);
    // Undo/redo — subscribe to stack lengths so the buttons enable/disable reactively
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[canUndo]": (s)=>s.history.length > 0
    }["TopBar.useCanvasStore[canUndo]"]);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[canRedo]": (s)=>s.future.length > 0
    }["TopBar.useCanvasStore[canRedo]"]);
    const activeTabReadOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[activeTabReadOnly]": (s)=>s.tabs.find({
                "TopBar.useCanvasStore[activeTabReadOnly]": (t)=>t.id === s.activeTabId
            }["TopBar.useCanvasStore[activeTabReadOnly]"])?.readOnly === true
    }["TopBar.useCanvasStore[activeTabReadOnly]"]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[undo]": (s)=>s.undo
    }["TopBar.useCanvasStore[undo]"]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])({
        "TopBar.useCanvasStore[redo]": (s)=>s.redo
    }["TopBar.useCanvasStore[redo]"]);
    const selectedProblemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TopBar.useAppStore[selectedProblemId]": (s)=>s.selectedProblemId
    }["TopBar.useAppStore[selectedProblemId]"]);
    const setSelectedProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TopBar.useAppStore[setSelectedProblem]": (s)=>s.setSelectedProblem
    }["TopBar.useAppStore[setSelectedProblem]"]);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TopBar.useAppStore[theme]": (s)=>s.theme
    }["TopBar.useAppStore[theme]"]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "TopBar.useAppStore[toggleTheme]": (s)=>s.toggleTheme
    }["TopBar.useAppStore[toggleTheme]"]);
    const customProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomProblemsStore"])({
        "TopBar.useCustomProblemsStore[customProblems]": (s)=>s.problems
    }["TopBar.useCustomProblemsStore[customProblems]"]);
    const currentProblem = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"].find((p)=>p.id === selectedProblemId) ?? customProblems.find((p)=>p.id === selectedProblemId);
    const addTextNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopBar.useCallback[addTextNote]": ()=>{
            // Center of the visible canvas (not the window — sidebars offset it)
            const wrapper = document.querySelector(".react-flow");
            const rect = wrapper?.getBoundingClientRect();
            const position = screenToFlowPosition({
                x: rect ? rect.left + rect.width / 2 : window.innerWidth / 2,
                y: rect ? rect.top + rect.height / 2 : window.innerHeight / 2
            });
            const newNode = {
                id: `text-${crypto.randomUUID()}`,
                type: "text",
                position,
                data: {
                    text: ""
                },
                connectable: false
            };
            addNode(newNode);
        }
    }["TopBar.useCallback[addTextNote]"], [
        screenToFlowPosition,
        addNode
    ]);
    const handleExportPng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopBar.useCallback[handleExportPng]": async ()=>{
            setExportOpen(false);
            const name = currentProblem?.title ?? "design";
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$exportCanvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportAsPng"])(name);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Exported as PNG", "success");
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Export failed", "error");
            }
        }
    }["TopBar.useCallback[handleExportPng]"], [
        currentProblem
    ]);
    const handleExportSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopBar.useCallback[handleExportSvg]": async ()=>{
            setExportOpen(false);
            const name = currentProblem?.title ?? "design";
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$exportCanvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportAsSvg"])(name);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Exported as SVG", "success");
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Export failed", "error");
            }
        }
    }["TopBar.useCallback[handleExportSvg]"], [
        currentProblem
    ]);
    const handleExportJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopBar.useCallback[handleExportJson]": ()=>{
            setExportOpen(false);
            const name = currentProblem?.title ?? "design";
            const { nodes, edges } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
            const { strokes } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"].getState();
            if (nodes.length === 0 && strokes.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Nothing to export", "info");
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$exportCanvas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportAsJSON"])(nodes, edges, name, strokes);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Exported as JSON", "success");
        }
    }["TopBar.useCallback[handleExportJson]"], [
        currentProblem
    ]);
    // Keyboard shortcut: Ctrl/Cmd+E → Export as PNG
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopBar.useEffect": ()=>{
            function handleKeyDown(e) {
                const target = e.target;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
                if (e.key === "e" && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
                    e.preventDefault();
                    handleExportPng();
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "TopBar.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["TopBar.useEffect"];
        }
    }["TopBar.useEffect"], [
        handleExportPng
    ]);
    const loadReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopBar.useCallback[loadReference]": ()=>{
            const problem = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"].find({
                "TopBar.useCallback[loadReference].problem": (p)=>p.id === selectedProblemId
            }["TopBar.useCallback[loadReference].problem"]);
            if (!problem) return;
            // Opens the reference in a NEW read-only tab — user's design stays safe
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$loadReference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadReferenceIntoTab"])(problem);
        }
    }["TopBar.useCallback[loadReference]"], [
        selectedProblemId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex h-12 shrink-0 items-center justify-between gap-2 border-b border-zinc-800 bg-zinc-900 px-2 md:gap-3 md:px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2 md:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleLeft,
                                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                title: "Toggle sidebar",
                                "aria-label": "Toggle sidebar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 168,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 162,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo-mark.svg",
                                        alt: "SystemForge",
                                        width: 20,
                                        height: 20,
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 173,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden font-display text-[15px] font-bold tracking-[-0.02em] text-zinc-50 sm:inline",
                                        children: "SystemForge"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 171,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 179,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-w-0 flex-shrink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDropdownOpen(!dropdownOpen),
                                        className: "flex min-w-0 items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-zinc-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "max-w-[120px] truncate md:max-w-none",
                                                children: currentProblem?.title ?? "Select Problem"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 187,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-3 w-3 shrink-0 text-zinc-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 190,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 11
                                    }, this),
                                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed inset-0 z-40",
                                                onClick: ()=>setDropdownOpen(false)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-full z-50 mt-1 max-h-80 w-56 overflow-y-auto rounded-md border border-zinc-700 bg-zinc-800 py-1 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setDropdownOpen(false);
                                                            onCreateProblem();
                                                        },
                                                        className: "flex w-full items-center gap-1.5 border-b border-zinc-700 px-3 py-1.5 text-left text-xs font-medium text-violet-400 transition-colors hover:bg-zinc-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Create Custom Problem"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 17
                                                    }, this),
                                                    customProblems.map((problem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedProblem(problem.id);
                                                                setDropdownOpen(false);
                                                            },
                                                            className: `flex w-full items-center gap-1.5 px-3 py-1.5 text-left text-xs transition-colors hover:bg-zinc-700 ${problem.id === selectedProblemId ? "text-cyan-500" : "text-zinc-400 hover:text-zinc-200"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex-1 truncate",
                                                                    children: problem.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "shrink-0 rounded bg-violet-500/10 px-1 py-0.5 text-[9px] font-medium text-violet-400",
                                                                    children: "Custom"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, problem.id, true, {
                                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, this)),
                                                    customProblems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-0.5 h-px bg-zinc-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"].map((problem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedProblem(problem.id);
                                                                setDropdownOpen(false);
                                                            },
                                                            className: `flex w-full items-center px-3 py-1.5 text-left text-xs transition-colors hover:bg-zinc-700 ${problem.id === selectedProblemId ? "text-cyan-500" : "text-zinc-400 hover:text-zinc-200"}`,
                                                            children: problem.title
                                                        }, problem.id, false, {
                                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 182,
                                columnNumber: 9
                            }, this),
                            !selectedProblemId.startsWith("custom-") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadReference,
                                className: "hidden shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[10px] text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-300 md:flex",
                                title: "Load reference solution",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    "Reference"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 270,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addTextNote,
                                className: "hidden shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[10px] text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 md:flex",
                                title: "Add text note to canvas",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 277,
                                        columnNumber: 11
                                    }, this),
                                    "Add Note"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 272,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 281,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: undo,
                                disabled: !canUndo || activeTabReadOnly,
                                className: "hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 disabled:pointer-events-none disabled:opacity-40 md:flex",
                                title: "Undo (⌘Z)",
                                "aria-label": "Undo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 290,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 283,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: redo,
                                disabled: !canRedo || activeTabReadOnly,
                                className: "hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 disabled:pointer-events-none disabled:opacity-40 md:flex",
                                title: "Redo (⌘⇧Z)",
                                "aria-label": "Redo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 299,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 292,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-1 hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 302,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartInterview,
                                className: "hidden shrink-0 items-center gap-1 rounded-md bg-zinc-800 px-2 py-1 text-[10px] font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-zinc-100 md:flex",
                                title: "Start a guided interview practice",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 309,
                                        columnNumber: 11
                                    }, this),
                                    "Practice Interview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 304,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileMoreOpen((v)=>!v),
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                        title: "More actions",
                                        "aria-label": "More actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                            lineNumber: 321,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 315,
                                        columnNumber: 11
                                    }, this),
                                    mobileMoreOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed inset-0 z-40",
                                                onClick: ()=>setMobileMoreOpen(false)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-full z-50 mt-1 w-60 rounded-md border border-zinc-700 bg-zinc-900 py-1 shadow-lg",
                                                children: [
                                                    !selectedProblemId.startsWith("custom-") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            loadReference();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Load reference solution"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            addTextNote();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticky$2d$note$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StickyNote$3e$__["StickyNote"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Add text note"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            onStartInterview();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Practice interview"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 h-px bg-zinc-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            onSave();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Save design"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            onLoad();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Load design"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 h-px bg-zinc-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            handleExportPng();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as PNG"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            handleExportSvg();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as SVG"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            handleExportJson();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                                                className: "h-3.5 w-3.5 text-zinc-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as JSON"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 h-px bg-zinc-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            onOpenSupport();
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                className: "h-3.5 w-3.5 fill-rose-400/40 text-rose-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Support this project"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 h-px bg-zinc-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setMobileMoreOpen(false);
                                                            setClearConfirmOpen(true);
                                                        },
                                                        className: "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs text-rose-400 transition-colors hover:bg-zinc-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Clear canvas"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 314,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                        lineNumber: 161,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 md:gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onSave,
                                className: "hidden h-7 items-center gap-1 rounded-md px-2 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 md:flex",
                                title: "Save design (Ctrl+S)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 429,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 430,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 424,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLoad,
                                className: "hidden h-7 items-center gap-1 rounded-md px-2 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 md:flex",
                                title: "Load design (Ctrl+O)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 437,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Load"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 438,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 432,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 441,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative hidden md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExportOpen(!exportOpen),
                                        className: "flex h-7 items-center gap-1 rounded-md px-2 text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                        title: "Export design (Ctrl+E)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 450,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Export"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 451,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-2.5 w-2.5 text-zinc-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 452,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 445,
                                        columnNumber: 11
                                    }, this),
                                    exportOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed inset-0 z-40",
                                                onClick: ()=>setExportOpen(false)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-full z-50 mt-1 w-44 rounded-md border border-zinc-700 bg-zinc-900 py-1 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleExportPng,
                                                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as PNG",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                className: "ml-auto rounded border border-zinc-700 bg-zinc-800 px-1 py-0.5 font-mono text-[9px] text-zinc-500",
                                                                children: [
                                                                    "\u2318",
                                                                    "E"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleExportSvg,
                                                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode2$3e$__["FileCode2"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as SVG"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleExportJson,
                                                        className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Export as JSON"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 444,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden h-4 w-px bg-zinc-800 md:block"
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 491,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setClearConfirmOpen(true),
                                className: "hidden h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-rose-400 md:flex",
                                title: "Clear canvas",
                                "aria-label": "Clear canvas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 499,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 493,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: onSimulate,
                                disabled: isSimulating,
                                className: "h-7 gap-1.5 bg-cyan-500 px-3 text-xs font-medium text-white transition-colors hover:bg-cyan-400 disabled:opacity-80",
                                children: isSimulating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3 w-3 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                            lineNumber: 510,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Simulating…"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                            lineNumber: 511,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Simulate"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 502,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "ghost",
                                onClick: onScore,
                                className: "h-7 gap-1.5 border border-zinc-700 bg-transparent px-2.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 sm:px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 526,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Score"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 527,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 520,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenSupport,
                                className: "hidden h-7 items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 text-xs font-medium text-cyan-400 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:text-cyan-300 md:flex",
                                title: "Buy me a coffee — support the project",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 536,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Buy me a coffee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                        lineNumber: 537,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 531,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                title: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
                                "aria-label": "Toggle color theme",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 546,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 546,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 540,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleRight,
                                className: "flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200",
                                title: "Toggle panel",
                                "aria-label": "Toggle properties panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__["PanelRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                    lineNumber: 555,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                                lineNumber: 549,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                        lineNumber: 423,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                lineNumber: 159,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                open: clearConfirmOpen,
                title: "Clear canvas?",
                message: "All components and connections on the current tab will be removed. This can't be undone.",
                confirmText: "Clear canvas",
                danger: true,
                onConfirm: onClearCanvas,
                onClose: ()=>setClearConfirmOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx",
                lineNumber: 560,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(TopBar, "1sQDdFa43IzM0hSkWWoE2vPn9vA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactFlow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomProblemsStore"]
    ];
});
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupportFAB",
    ()=>SupportFAB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
"use client";
;
;
function SupportFAB({ onClick, hidden = false }) {
    if (hidden) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none hidden translate-x-1 rounded-full border border-zinc-700/80 bg-zinc-900/95 px-2.5 py-1 text-[11px] font-medium text-zinc-200 opacity-0 shadow-lg backdrop-blur transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block",
                children: "Buy me a coffee"
            }, void 0, false, {
                fileName: "[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: "relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-zinc-950 shadow-md shadow-cyan-500/25 ring-1 ring-inset ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/40 active:translate-y-0 active:scale-95",
                title: "Buy me a coffee — support the project",
                "aria-label": "Buy me a coffee",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-0 rounded-full ring-2 ring-cyan-400/0 ring-offset-0 ring-offset-transparent transition-all duration-300 group-hover:ring-cyan-400/30 group-hover:ring-offset-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                        className: "h-[18px] w-[18px] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110",
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SupportFAB;
var _c;
__turbopack_context__.k.register(_c, "SupportFAB");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$top$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/layout/top-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$SupportFAB$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/layout/SupportFAB.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/sidebar/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$panel$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/panel/RightPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$DesignCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/canvas/DesignCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$simulator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/engine/simulator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$scorer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/scorer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/problems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$loadReference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/lib/loadReference.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/ui/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$SaveDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/SaveDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$LoadDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/LoadDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$interview$2f$InterviewBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/interview/InterviewBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$interview$2f$InterviewStartDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/interview/InterviewStartDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$CreateProblemDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/CreateProblemDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$CreateComponentDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/CreateComponentDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$SupportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/SupportDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/interviewStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/hooks/useBreakpoint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/CommandPalette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$HowItWorksDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/dialogs/HowItWorksDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$Walkthrough$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/Walkthrough.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$hydration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/hydration.ts [app-client] (ecmascript)");
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
;
;
;
;
;
function AppShell() {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const leftSidebarOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "AppShell.useAppStore[leftSidebarOpen]": (s)=>s.leftSidebarOpen
    }["AppShell.useAppStore[leftSidebarOpen]"]);
    const rightPanelOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "AppShell.useAppStore[rightPanelOpen]": (s)=>s.rightPanelOpen
    }["AppShell.useAppStore[rightPanelOpen]"]);
    const toggleLeftSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "AppShell.useAppStore[toggleLeftSidebar]": (s)=>s.toggleLeftSidebar
    }["AppShell.useAppStore[toggleLeftSidebar]"]);
    const toggleRightPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "AppShell.useAppStore[toggleRightPanel]": (s)=>s.toggleRightPanel
    }["AppShell.useAppStore[toggleRightPanel]"]);
    // Mobile drawer state — local, does not persist
    const [mobileSidebarOpen, setMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileRightOpen, setMobileRightOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveDialogOpen, setSaveDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadDialogOpen, setLoadDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [interviewDialogOpen, setInterviewDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createProblemDialogOpen, setCreateProblemDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createComponentDialogOpen, setCreateComponentDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [supportDialogOpen, setSupportDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commandOpen, setCommandOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [howItWorksOpen, setHowItWorksOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [walkthroughOpen, setWalkthroughOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load persisted state from localStorage once, after mount. All stores use
    // `skipHydration: true` (so SSR and first client render agree), so without
    // this call nothing would ever be restored — the canvas, saved designs,
    // custom components, etc. would reset on every refresh / new tab.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$hydration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehydrateAllStores"])();
        }
    }["AppShell.useEffect"], []);
    // Auto-open support dialog when URL has ?support=1 (used by the README link)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            if (params.get("support") === "1") {
                // Reading the URL (external system) once on mount — a lazy initializer
                // would cause an SSR hydration mismatch, so the effect is intentional.
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSupportDialogOpen(true);
                params.delete("support");
                const q = params.toString();
                const next = window.location.pathname + (q ? `?${q}` : "") + window.location.hash;
                window.history.replaceState({}, "", next);
            }
        }
    }["AppShell.useEffect"], []);
    const interviewMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"])({
        "AppShell.useInterviewStore[interviewMode]": (s)=>s.mode
    }["AppShell.useInterviewStore[interviewMode]"]);
    const timerRunning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"])({
        "AppShell.useInterviewStore[timerRunning]": (s)=>s.timerRunning
    }["AppShell.useInterviewStore[timerRunning]"]);
    const tickTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"])({
        "AppShell.useInterviewStore[tickTimer]": (s)=>s.tickTimer
    }["AppShell.useInterviewStore[tickTimer]"]);
    const handleToggleLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleToggleLeft]": ()=>{
            if (isMobile) setMobileSidebarOpen({
                "AppShell.useCallback[handleToggleLeft]": (v)=>!v
            }["AppShell.useCallback[handleToggleLeft]"]);
            else toggleLeftSidebar();
        }
    }["AppShell.useCallback[handleToggleLeft]"], [
        isMobile,
        toggleLeftSidebar
    ]);
    const handleToggleRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleToggleRight]": ()=>{
            if (isMobile) setMobileRightOpen({
                "AppShell.useCallback[handleToggleRight]": (v)=>!v
            }["AppShell.useCallback[handleToggleRight]"]);
            else toggleRightPanel();
        }
    }["AppShell.useCallback[handleToggleRight]"], [
        isMobile,
        toggleRightPanel
    ]);
    // Close any open mobile drawers when we transition to desktop
    // (render-time adjustment — https://react.dev/learn/you-might-not-need-an-effect)
    if (!isMobile && (mobileSidebarOpen || mobileRightOpen)) {
        setMobileSidebarOpen(false);
        setMobileRightOpen(false);
    }
    // On tablets (768–1023px) default the right panel to closed on first load
    // so the canvas gets the space. Runs once; the user can still toggle it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().rightPanelOpen) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().toggleRightPanel();
            }
        }
    }["AppShell.useEffect"], []);
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleSave]": ()=>setSaveDialogOpen(true)
    }["AppShell.useCallback[handleSave]"], []);
    const handleLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleLoad]": ()=>setLoadDialogOpen(true)
    }["AppShell.useCallback[handleLoad]"], []);
    const handleSimulate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleSimulate]": ()=>{
            const { nodes, edges } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
            const { config } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState();
            const componentNodes = nodes.filter({
                "AppShell.useCallback[handleSimulate].componentNodes": (n)=>n.type !== "text"
            }["AppShell.useCallback[handleSimulate].componentNodes"]);
            if (componentNodes.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("No components to simulate", "info");
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().setRunning(true);
            setTimeout({
                "AppShell.useCallback[handleSimulate]": ()=>{
                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$simulator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runSimulation"])(componentNodes, edges, config.requestsPerSec);
                    const updates = new Map();
                    for (const [nodeId, metrics] of result.nodeMetrics){
                        updates.set(nodeId, {
                            utilization: metrics.utilization,
                            status: metrics.status,
                            isBottleneck: metrics.isBottleneck
                        });
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().updateAllNodeData(updates);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().setResult(result);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().setRunning(false);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Simulation complete!", "success");
                }
            }["AppShell.useCallback[handleSimulate]"], 100);
        }
    }["AppShell.useCallback[handleSimulate]"], []);
    const handleScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleScore]": ()=>{
            const { nodes, edges } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
            const componentNodes = nodes.filter({
                "AppShell.useCallback[handleScore].componentNodes": (n)=>n.type !== "text"
            }["AppShell.useCallback[handleScore].componentNodes"]);
            if (componentNodes.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("No components to score", "info");
                return;
            }
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$scorer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreDesign"])(componentNodes, edges);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().setScoreResult(result);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().setShowScore(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().setActiveRightTab("score");
            // On mobile, auto-open the right sheet so the score is visible
            if (isMobile) setMobileRightOpen(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Design scored!", "success");
        }
    }["AppShell.useCallback[handleScore]"], [
        isMobile
    ]);
    const handleClearCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleClearCanvas]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().clearCanvas();
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Canvas cleared", "info");
        }
    }["AppShell.useCallback[handleClearCanvas]"], []);
    const handlePickProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handlePickProblem]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().setActiveLeftTab("problems");
            if (isMobile) setMobileSidebarOpen(true);
            else __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().setLeftSidebarOpen(true);
        }
    }["AppShell.useCallback[handlePickProblem]"], [
        isMobile
    ]);
    const handleLoadReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShell.useCallback[handleLoadReference]": ()=>{
            const problemId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().selectedProblemId;
            const problem = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"].find({
                "AppShell.useCallback[handleLoadReference].problem": (p)=>p.id === problemId
            }["AppShell.useCallback[handleLoadReference].problem"]);
            if (!problem) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Pick a problem first", "info");
                handlePickProblem();
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$lib$2f$loadReference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadReferenceIntoTab"])(problem);
        }
    }["AppShell.useCallback[handleLoadReference]"], [
        handlePickProblem
    ]);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            function handleKeyDown(e) {
                const target = e.target;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
                    return;
                }
                // e.key is "S" (uppercase) when Shift is held — normalize for shortcuts
                const key = e.key.toLowerCase();
                if (e.key === "Delete" || e.key === "Backspace") {
                    const { selectedNodeId, selectedEdgeId, deleteNode, deleteEdge, tabs, activeTabId } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                    const isReadOnlyTab = tabs.find({
                        "AppShell.useEffect.handleKeyDown": (t)=>t.id === activeTabId
                    }["AppShell.useEffect.handleKeyDown"])?.readOnly === true;
                    if (isReadOnlyTab) return;
                    if (selectedNodeId) {
                        e.preventDefault();
                        deleteNode(selectedNodeId);
                    } else if (selectedEdgeId) {
                        e.preventDefault();
                        deleteEdge(selectedEdgeId);
                    }
                }
                // Command palette — Cmd/Ctrl+K (toggle)
                if (key === "k" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    setCommandOpen({
                        "AppShell.useEffect.handleKeyDown": (v)=>!v
                    }["AppShell.useEffect.handleKeyDown"]);
                    return;
                }
                // Undo / Redo — Cmd/Ctrl+Z, redo via Shift+Z or Ctrl+Y. Disabled on read-only tabs.
                if (key === "z" && (e.metaKey || e.ctrlKey)) {
                    const { tabs, activeTabId, undo, redo } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                    const isReadOnlyTab = tabs.find({
                        "AppShell.useEffect.handleKeyDown": (t)=>t.id === activeTabId
                    }["AppShell.useEffect.handleKeyDown"])?.readOnly === true;
                    if (!isReadOnlyTab) {
                        e.preventDefault();
                        if (e.shiftKey) redo();
                        else undo();
                    }
                }
                if (key === "y" && (e.metaKey || e.ctrlKey)) {
                    const { tabs, activeTabId, redo } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                    const isReadOnlyTab = tabs.find({
                        "AppShell.useEffect.handleKeyDown": (t)=>t.id === activeTabId
                    }["AppShell.useEffect.handleKeyDown"])?.readOnly === true;
                    if (!isReadOnlyTab) {
                        e.preventDefault();
                        redo();
                    }
                }
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    handleSimulate();
                }
                if (key === "s" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
                    e.preventDefault();
                    handleScore();
                }
                if (key === "s" && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
                    e.preventDefault();
                    setSaveDialogOpen(true);
                }
                if (key === "o" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    setLoadDialogOpen(true);
                }
                if (e.key === "Escape") {
                    if (mobileSidebarOpen) setMobileSidebarOpen(false);
                    else if (mobileRightOpen) setMobileRightOpen(false);
                    else {
                        // Clears both node and edge selection
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setSelectedNode(null);
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().setSelectedEdge(null);
                    }
                }
            }
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "AppShell.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], [
        handleSimulate,
        handleScore,
        mobileSidebarOpen,
        mobileRightOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if (!timerRunning) return;
            const id = setInterval({
                "AppShell.useEffect.id": ()=>{
                    tickTimer();
                }
            }["AppShell.useEffect.id"], 1000);
            return ({
                "AppShell.useEffect": ()=>clearInterval(id)
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], [
        timerRunning,
        tickTimer
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlowProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full flex-col",
            children: [
                interviewMode === "interview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$interview$2f$InterviewBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterviewBar"], {}, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 282,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$top$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopBar"], {
                    onSimulate: handleSimulate,
                    onScore: handleScore,
                    onClearCanvas: handleClearCanvas,
                    onSave: handleSave,
                    onLoad: handleLoad,
                    onStartInterview: ()=>setInterviewDialogOpen(true),
                    onCreateProblem: ()=>setCreateProblemDialogOpen(true),
                    onOpenSupport: ()=>setSupportDialogOpen(true),
                    onToggleLeft: handleToggleLeft,
                    onToggleRight: handleToggleRight
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-1 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                            open: leftSidebarOpen,
                            onCreateProblem: ()=>setCreateProblemDialogOpen(true),
                            onCreateCustomComponent: ()=>setCreateComponentDialogOpen(true),
                            variant: "desktop"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$canvas$2f$DesignCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignCanvas"], {
                            onPickProblem: handlePickProblem,
                            onLoadReference: handleLoadReference,
                            onStartInterview: ()=>setInterviewDialogOpen(true),
                            onShowGuide: ()=>setHowItWorksOpen(true)
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$panel$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightPanel"], {
                            open: rightPanelOpen,
                            onSimulate: handleSimulate,
                            variant: "desktop"
                        }, void 0, false, {
                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 z-30 bg-black/60 transition-opacity md:hidden ${mobileSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
                                    onClick: ()=>setMobileSidebarOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-y-0 left-0 z-40 flex w-[85%] max-w-[320px] flex-col border-r border-zinc-800 bg-zinc-900 shadow-xl transition-transform md:hidden ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
                                    "aria-hidden": !mobileSidebarOpen,
                                    inert: !mobileSidebarOpen || undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-10 shrink-0 items-center justify-between border-b border-zinc-800 px-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold uppercase tracking-wider text-zinc-400",
                                                    children: "Library"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setMobileSidebarOpen(false),
                                                    className: "flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200",
                                                    "aria-label": "Close sidebar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-h-0 flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                                                onCreateProblem: ()=>{
                                                    setCreateProblemDialogOpen(true);
                                                    setMobileSidebarOpen(false);
                                                },
                                                onCreateCustomComponent: ()=>{
                                                    setCreateComponentDialogOpen(true);
                                                    setMobileSidebarOpen(false);
                                                },
                                                onComponentAdded: ()=>setMobileSidebarOpen(false),
                                                variant: "mobile"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-0 z-30 bg-black/60 transition-opacity md:hidden ${mobileRightOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
                                    onClick: ()=>setMobileRightOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute inset-x-0 bottom-0 z-40 flex h-[70dvh] max-h-[85dvh] flex-col rounded-t-2xl border-t border-zinc-800 bg-zinc-900 shadow-2xl transition-transform md:hidden ${mobileRightOpen ? "translate-y-0" : "translate-y-full"}`,
                                    "aria-hidden": !mobileRightOpen,
                                    inert: !mobileRightOpen || undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex shrink-0 items-center justify-between pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sheet-handle"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-1 justify-end pr-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMobileRightOpen(false),
                                                        className: "flex h-7 w-7 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200",
                                                        "aria-label": "Close panel",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-h-0 flex-1 pb-[env(safe-area-inset-bottom)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$panel$2f$RightPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightPanel"], {
                                                onSimulate: handleSimulate,
                                                variant: "mobile"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$SupportFAB$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupportFAB"], {
                    onClick: ()=>setSupportDialogOpen(true),
                    hidden: mobileSidebarOpen || mobileRightOpen
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {}, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$SaveDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveDialog"], {
                    open: saveDialogOpen,
                    onClose: ()=>setSaveDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$LoadDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadDialog"], {
                    open: loadDialogOpen,
                    onClose: ()=>setLoadDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$interview$2f$InterviewStartDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterviewStartDialog"], {
                    open: interviewDialogOpen,
                    onClose: ()=>setInterviewDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$CreateProblemDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateProblemDialog"], {
                    open: createProblemDialogOpen,
                    onClose: ()=>setCreateProblemDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$CreateComponentDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateComponentDialog"], {
                    open: createComponentDialogOpen,
                    onClose: ()=>setCreateComponentDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$SupportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupportDialog"], {
                    open: supportDialogOpen,
                    onClose: ()=>setSupportDialogOpen(false)
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandPalette"], {
                    open: commandOpen,
                    onClose: ()=>setCommandOpen(false),
                    actions: {
                        onSimulate: handleSimulate,
                        onScore: handleScore,
                        onSave: handleSave,
                        onLoad: handleLoad,
                        onStartInterview: ()=>setInterviewDialogOpen(true),
                        onLoadReference: handleLoadReference,
                        onClear: handleClearCanvas,
                        onOpenSupport: ()=>setSupportDialogOpen(true),
                        onShowGuide: ()=>setHowItWorksOpen(true)
                    }
                }, commandOpen ? "cmd-open" : "cmd-closed", false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$dialogs$2f$HowItWorksDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorksDialog"], {
                    open: howItWorksOpen,
                    onClose: ()=>setHowItWorksOpen(false),
                    onPickProblem: handlePickProblem,
                    onPlayWalkthrough: ()=>{
                        setHowItWorksOpen(false);
                        setWalkthroughOpen(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$Walkthrough$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Walkthrough"], {
                    open: walkthroughOpen,
                    onClose: ()=>setWalkthroughOpen(false),
                    onPickProblem: handlePickProblem
                }, void 0, false, {
                    fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s(AppShell, "4/KSK2zHGN2Gr7FrYwp4gFDnbNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$hooks$2f$useBreakpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_system-design-simulator_src_components_layout_0gg824u._.js.map