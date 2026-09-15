(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeLocalStorage",
    ()=>safeLocalStorage
]);
/**
 * localStorage wrapper that never throws.
 *
 * `setItem` can fail with QuotaExceededError (storage full, private
 * browsing, etc.). When that happens we surface a toast instead of
 * crashing the state update that triggered the persist write.
 *
 * NOTE: appStore itself persists through this storage, so we must NOT
 * import appStore statically here (import cycle). The toast is fired
 * through a lazy dynamic import instead.
 */ function notifyStorageFull() {
    __turbopack_context__.A("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript, async loader)").then(({ useAppStore })=>{
        useAppStore.getState().showToast("Storage full — changes not persisted", "error");
    }).catch(()=>{
    // Nothing else we can do — persistence is best-effort.
    });
}
const safeLocalStorage = {
    getItem: (name)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            return window.localStorage.getItem(name);
        } catch  {
            return null;
        }
    },
    setItem: (name, value)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.setItem(name, value);
        } catch  {
            notifyStorageFull();
        }
    },
    removeItem: (name)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            window.localStorage.removeItem(name);
        } catch  {
        // Ignore — worst case a stale key stays behind.
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyThemeClass",
    ()=>applyThemeClass,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
function applyThemeClass(theme) {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
}
// Single owner of the toast auto-dismiss timer (4s). showToast resets it,
// clearToast cancels it — no other code should schedule toast dismissal.
let toastTimeoutId = null;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        selectedProblemId: "url-shortener",
        theme: "dark",
        leftSidebarOpen: true,
        rightPanelOpen: true,
        activeLeftTab: "components",
        activeRightTab: "properties",
        toast: null,
        setSelectedProblem: (id)=>set({
                selectedProblemId: id
            }),
        setTheme: (theme)=>{
            applyThemeClass(theme);
            set({
                theme
            });
        },
        toggleTheme: ()=>set((s)=>{
                const theme = s.theme === "dark" ? "light" : "dark";
                applyThemeClass(theme);
                return {
                    theme
                };
            }),
        toggleLeftSidebar: ()=>set((s)=>({
                    leftSidebarOpen: !s.leftSidebarOpen
                })),
        toggleRightPanel: ()=>set((s)=>({
                    rightPanelOpen: !s.rightPanelOpen
                })),
        setLeftSidebarOpen: (open)=>set({
                leftSidebarOpen: open
            }),
        setActiveLeftTab: (tab)=>set({
                activeLeftTab: tab
            }),
        setActiveRightTab: (tab)=>set({
                activeRightTab: tab
            }),
        showToast: (message, type)=>{
            if (toastTimeoutId !== null) {
                clearTimeout(toastTimeoutId);
            }
            set({
                toast: {
                    message,
                    type
                }
            });
            toastTimeoutId = setTimeout(()=>{
                set({
                    toast: null
                });
                toastTimeoutId = null;
            }, 4000);
        },
        clearToast: ()=>{
            if (toastTimeoutId !== null) {
                clearTimeout(toastTimeoutId);
                toastTimeoutId = null;
            }
            set({
                toast: null
            });
        }
    }), {
    name: "systemsim-app",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    partialize: (state)=>({
            selectedProblemId: state.selectedProblemId,
            theme: state.theme
        }),
    // Apply the persisted theme to <html> as soon as the store rehydrates.
    onRehydrateStorage: ()=>(state)=>{
            if (state?.theme) applyThemeClass(state.theme);
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSimulationStore",
    ()=>useSimulationStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const defaultConfig = {
    requestsPerSec: 10000,
    durationSec: 10,
    rampUp: true
};
const useSimulationStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isRunning: false,
        config: defaultConfig,
        result: null,
        scoreResult: null,
        showScore: false,
        setRunning: (running)=>set({
                isRunning: running
            }),
        setConfig: (config)=>set((s)=>({
                    config: {
                        ...s.config,
                        ...config
                    }
                })),
        setResult: (result)=>set({
                result
            }),
        setScoreResult: (result)=>set({
                scoreResult: result
            }),
        setShowScore: (show)=>set({
                showScore: show
            }),
        reset: ()=>set({
                isRunning: false,
                config: defaultConfig,
                result: null,
                scoreResult: null,
                showScore: false
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
;
;
const MAX_HISTORY = 50;
/** Cheap deep snapshot of just the structural canvas state. */ function snapshot(state) {
    return JSON.parse(JSON.stringify({
        nodes: state.nodes,
        edges: state.edges
    }));
}
/**
 * Push the CURRENT (pre-mutation) state onto the undo stack and clear the
 * redo stack. Call this from inside `set` BEFORE applying a structural
 * mutation so that `undo()` restores the pre-change state.
 */ function pushedHistory(state) {
    return [
        ...state.history,
        snapshot(state)
    ].slice(-MAX_HISTORY);
}
/** Strip simulation runtime fields so persisted nodes don't glow on reload. */ function stripRuntimeFields(nodes) {
    return nodes.map((n)=>{
        if (n.type === "text") return n;
        const data = {
            ...n.data
        };
        delete data.utilization;
        delete data.status;
        delete data.isBottleneck;
        return {
            ...n,
            data
        };
    });
}
function resetSimulation() {
    // Metrics/score refer to nodes that just changed out from under them.
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().reset();
}
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        nodes: [],
        edges: [],
        selectedNodeId: null,
        selectedEdgeId: null,
        // Tab system — "my-design" is the default tab
        tabs: [
            {
                id: "my-design",
                label: "My Design",
                nodes: [],
                edges: []
            }
        ],
        activeTabId: "my-design",
        history: [],
        future: [],
        isDragging: false,
        addTab: (tab)=>{
            set((state)=>{
                // Save current tab state before switching
                const updatedTabs = state.tabs.map((t)=>t.id === state.activeTabId ? {
                        ...t,
                        nodes: state.nodes,
                        edges: state.edges
                    } : t);
                // Check if tab already exists (reuse it)
                const existing = updatedTabs.find((t)=>t.id === tab.id);
                if (existing) {
                    return {
                        tabs: updatedTabs.map((t)=>t.id === tab.id ? {
                                ...t,
                                ...tab
                            } : t),
                        activeTabId: tab.id,
                        nodes: tab.nodes,
                        edges: tab.edges,
                        selectedNodeId: null,
                        selectedEdgeId: null,
                        history: [],
                        future: [],
                        isDragging: false
                    };
                }
                return {
                    tabs: [
                        ...updatedTabs,
                        tab
                    ],
                    activeTabId: tab.id,
                    nodes: tab.nodes,
                    edges: tab.edges,
                    selectedNodeId: null,
                    selectedEdgeId: null,
                    history: [],
                    future: [],
                    isDragging: false
                };
            });
            resetSimulation();
        },
        switchTab: (tabId)=>{
            const before = get().activeTabId;
            set((state)=>{
                const target = state.tabs.find((t)=>t.id === tabId);
                if (!target || tabId === state.activeTabId) return state;
                // Save current tab state
                const updatedTabs = state.tabs.map((t)=>t.id === state.activeTabId ? {
                        ...t,
                        nodes: state.nodes,
                        edges: state.edges
                    } : t);
                return {
                    tabs: updatedTabs,
                    activeTabId: tabId,
                    nodes: target.nodes,
                    edges: target.edges,
                    selectedNodeId: null,
                    selectedEdgeId: null,
                    history: [],
                    future: [],
                    isDragging: false
                };
            });
            if (get().activeTabId !== before) resetSimulation();
        },
        closeTab: (tabId)=>{
            const before = get().activeTabId;
            set((state)=>{
                if (tabId === "my-design") return state; // Can't close the main tab
                const remaining = state.tabs.filter((t)=>t.id !== tabId);
                if (state.activeTabId === tabId) {
                    // Switch to my-design tab
                    const myDesign = remaining.find((t)=>t.id === "my-design") ?? remaining[0];
                    return {
                        tabs: remaining,
                        activeTabId: myDesign.id,
                        nodes: myDesign.nodes,
                        edges: myDesign.edges,
                        selectedNodeId: null,
                        selectedEdgeId: null,
                        history: [],
                        future: [],
                        isDragging: false
                    };
                }
                return {
                    tabs: remaining
                };
            });
            if (get().activeTabId !== before) resetSimulation();
        },
        renameTab: (tabId, label)=>{
            set((state)=>({
                    tabs: state.tabs.map((t)=>t.id === tabId ? {
                            ...t,
                            label
                        } : t)
                }));
        },
        undo: ()=>{
            set((state)=>{
                const prev = state.history[state.history.length - 1];
                if (!prev) return state;
                return {
                    history: state.history.slice(0, -1),
                    future: [
                        ...state.future,
                        snapshot(state)
                    ].slice(-MAX_HISTORY),
                    nodes: prev.nodes,
                    edges: prev.edges,
                    selectedNodeId: null,
                    selectedEdgeId: null,
                    isDragging: false
                };
            });
        },
        redo: ()=>{
            set((state)=>{
                const next = state.future[state.future.length - 1];
                if (!next) return state;
                return {
                    future: state.future.slice(0, -1),
                    history: [
                        ...state.history,
                        snapshot(state)
                    ].slice(-MAX_HISTORY),
                    nodes: next.nodes,
                    edges: next.edges,
                    selectedNodeId: null,
                    selectedEdgeId: null,
                    isDragging: false
                };
            });
        },
        canUndo: ()=>get().history.length > 0,
        canRedo: ()=>get().future.length > 0,
        clearHistory: ()=>set({
                history: [],
                future: [],
                isDragging: false
            }),
        onNodesChange: (changes)=>{
            set((state)=>{
                const dragStart = changes.some((c)=>c.type === "position" && c.dragging === true);
                const dragEnd = changes.some((c)=>c.type === "position" && c.dragging === false);
                const hasRemove = changes.some((c)=>c.type === "remove");
                let history = state.history;
                let future = state.future;
                // Push pre-change state once at drag start (NOT on every drag
                // tick) so undo restores the pre-drag positions; also on removal.
                if (dragStart && !state.isDragging || hasRemove) {
                    history = pushedHistory(state);
                    future = [];
                }
                return {
                    nodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, state.nodes),
                    history,
                    future,
                    isDragging: dragStart ? true : dragEnd ? false : state.isDragging
                };
            });
        },
        onEdgesChange: (changes)=>{
            set((state)=>{
                const hasRemove = changes.some((c)=>c.type === "remove");
                return {
                    edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, state.edges),
                    ...hasRemove ? {
                        history: pushedHistory(state),
                        future: []
                    } : null
                };
            });
        },
        onConnect: (connection)=>{
            set((state)=>({
                    history: pushedHistory(state),
                    future: [],
                    edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])({
                        ...connection,
                        type: "animated",
                        data: {
                            label: '',
                            protocol: 'http',
                            async: false
                        }
                    }, state.edges)
                }));
        },
        addNode: (node)=>{
            set((state)=>({
                    history: pushedHistory(state),
                    future: [],
                    nodes: [
                        ...state.nodes,
                        node
                    ]
                }));
        },
        setSelectedNode: (id)=>{
            set({
                selectedNodeId: id,
                selectedEdgeId: null
            });
        },
        setSelectedEdge: (id)=>{
            set({
                selectedEdgeId: id,
                selectedNodeId: null
            });
        },
        updateNodeData: (nodeId, data)=>{
            set((state)=>({
                    nodes: state.nodes.map((n)=>n.id === nodeId ? {
                            ...n,
                            data: {
                                ...n.data,
                                ...data
                            }
                        } : n)
                }));
        },
        updateEdgeData: (edgeId, data)=>{
            set((state)=>({
                    edges: state.edges.map((e)=>e.id === edgeId ? {
                            ...e,
                            data: {
                                ...e.data,
                                ...data
                            }
                        } : e)
                }));
        },
        updateAllNodeData: (updates)=>{
            set((state)=>({
                    nodes: state.nodes.map((n)=>{
                        const update = updates.get(n.id);
                        return update ? {
                            ...n,
                            data: {
                                ...n.data,
                                ...update
                            }
                        } : n;
                    })
                }));
        },
        clearCanvas: ()=>{
            set((state)=>({
                    history: pushedHistory(state),
                    future: [],
                    nodes: [],
                    edges: [],
                    selectedNodeId: null,
                    selectedEdgeId: null
                }));
            resetSimulation();
        },
        deleteNode: (nodeId)=>{
            set((state)=>({
                    history: pushedHistory(state),
                    future: [],
                    nodes: state.nodes.filter((n)=>n.id !== nodeId),
                    edges: state.edges.filter((e)=>e.source !== nodeId && e.target !== nodeId),
                    selectedNodeId: state.selectedNodeId === nodeId ? null : state.selectedNodeId,
                    selectedEdgeId: state.edges.some((e)=>e.id === state.selectedEdgeId && (e.source === nodeId || e.target === nodeId)) ? null : state.selectedEdgeId
                }));
        },
        deleteEdge: (edgeId)=>{
            set((state)=>({
                    history: pushedHistory(state),
                    future: [],
                    edges: state.edges.filter((e)=>e.id !== edgeId),
                    selectedEdgeId: state.selectedEdgeId === edgeId ? null : state.selectedEdgeId
                }));
        }
    }), {
    name: "systemsim-canvas",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state,
    partialize: (state)=>({
            nodes: stripRuntimeFields(state.nodes),
            edges: state.edges,
            // The active tab's content already lives in the top-level
            // nodes/edges — persist it emptied to avoid duplicating it, and
            // reconstruct it in `merge` on rehydrate.
            tabs: state.tabs.map((t)=>t.id === state.activeTabId ? {
                    ...t,
                    nodes: [],
                    edges: []
                } : {
                    ...t,
                    nodes: stripRuntimeFields(t.nodes)
                }),
            activeTabId: state.activeTabId
        }),
    merge: (persistedState, currentState)=>{
        const persisted = persistedState ?? {};
        const merged = {
            ...currentState,
            ...persisted
        };
        // Refill the active tab's snapshot from the live nodes/edges.
        if (merged.tabs && merged.tabs.length > 0) {
            merged.tabs = merged.tabs.map((t)=>t.id === merged.activeTabId ? {
                    ...t,
                    nodes: merged.nodes,
                    edges: merged.edges
                } : t);
        } else {
            merged.tabs = [
                {
                    id: "my-design",
                    label: "My Design",
                    nodes: merged.nodes,
                    edges: merged.edges
                }
            ];
            merged.activeTabId = "my-design";
        }
        return merged;
    }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PEN_COLORS",
    ()=>PEN_COLORS,
    "PEN_WIDTHS",
    ()=>PEN_WIDTHS,
    "usePenStore",
    ()=>usePenStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
const PEN_COLORS = [
    "#f43f5e",
    "#fbbf24",
    "#22d3ee",
    "#a78bfa",
    "#f4f4f5"
];
const PEN_WIDTHS = [
    4,
    8,
    16
];
const usePenStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        strokes: [],
        mode: "off",
        color: PEN_COLORS[2],
        width: PEN_WIDTHS[0],
        setMode: (mode)=>set({
                mode
            }),
        setColor: (color)=>set({
                color
            }),
        setWidth: (width)=>set({
                width
            }),
        addStroke: (stroke)=>set((s)=>({
                    strokes: [
                        ...s.strokes,
                        stroke
                    ]
                })),
        eraseAt: (x, y, radius)=>{
            const r2 = radius * radius;
            set((s)=>({
                    strokes: s.strokes.filter((stroke)=>{
                        for (const [px, py] of stroke.points){
                            const dx = px - x;
                            const dy = py - y;
                            if (dx * dx + dy * dy < r2) return false;
                        }
                        return true;
                    })
                }));
        },
        clearAll: ()=>set({
                strokes: []
            }),
        setStrokes: (strokes)=>set({
                strokes
            })
    }), {
    name: "systemsim-pen-strokes",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state,
    partialize: (state)=>({
            strokes: state.strokes,
            color: state.color,
            width: state.width
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/customProblemsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomProblemsStore",
    ()=>useCustomProblemsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
/** crypto.randomUUID is unavailable on non-secure (http) origins. */ function randomId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        try {
            return crypto.randomUUID();
        } catch  {
        // fall through to the non-crypto fallback
        }
    }
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
const useCustomProblemsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        problems: [],
        addProblem: (problem)=>{
            const id = `custom-${randomId()}`;
            const newProblem = {
                ...problem,
                id,
                createdAt: new Date().toISOString()
            };
            set((s)=>({
                    problems: [
                        newProblem,
                        ...s.problems
                    ]
                }));
            return id;
        },
        updateProblem: (id, updates)=>{
            set((s)=>({
                    problems: s.problems.map((p)=>p.id === id ? {
                            ...p,
                            ...updates
                        } : p)
                }));
        },
        deleteProblem: (id)=>{
            set((s)=>({
                    problems: s.problems.filter((p)=>p.id !== id)
                }));
        }
    }), {
    name: "systemsim-custom-problems",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/customComponentsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomComponentsStore",
    ()=>useCustomComponentsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
function slugify(label) {
    return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32) || "component";
}
const useCustomComponentsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        components: [],
        addComponent: (component)=>{
            const baseId = component.id ?? `custom-${slugify(component.label)}`;
            const existing = new Set(get().components.map((c)=>c.id));
            let id = baseId;
            let i = 2;
            while(existing.has(id)){
                id = `${baseId}-${i++}`;
            }
            const next = {
                ...component,
                id,
                custom: true,
                createdAt: new Date().toISOString()
            };
            set((s)=>({
                    components: [
                        next,
                        ...s.components
                    ]
                }));
            return id;
        },
        updateComponent: (id, updates)=>{
            set((s)=>({
                    components: s.components.map((c)=>c.id === id ? {
                            ...c,
                            ...updates
                        } : c)
                }));
        },
        deleteComponent: (id)=>{
            set((s)=>({
                    components: s.components.filter((c)=>c.id !== id)
                }));
        },
        getComponent: (id)=>get().components.find((c)=>c.id === id)
    }), {
    name: "systemsim-custom-components",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/savedDesignsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProblemTitle",
    ()=>getProblemTitle,
    "serializeEdges",
    ()=>serializeEdges,
    "serializeNodes",
    ()=>serializeNodes,
    "useSavedDesignsStore",
    ()=>useSavedDesignsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/simulationStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customProblemsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/problems.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function serializeNodes(nodes) {
    return nodes.map((n)=>{
        const base = {
            id: n.id,
            type: n.type ?? "component",
            position: {
                x: n.position.x,
                y: n.position.y
            }
        };
        if (n.type === "text") {
            return {
                ...base,
                data: {
                    text: n.data.text ?? "",
                    fontSize: n.data.fontSize ?? undefined
                }
            };
        }
        return {
            ...base,
            data: {
                componentId: n.data.componentId,
                label: n.data.label,
                icon: n.data.icon,
                category: n.data.category,
                replicas: n.data.replicas,
                maxQPS: n.data.maxQPS,
                latencyMs: n.data.latencyMs,
                scalable: n.data.scalable
            }
        };
    });
}
function serializeEdges(edges) {
    return edges.map((e)=>({
            id: e.id,
            type: e.type,
            source: e.source,
            target: e.target,
            sourceHandle: e.sourceHandle ?? null,
            targetHandle: e.targetHandle ?? null,
            data: {
                label: typeof e.data?.label === "string" ? e.data.label : "",
                protocol: typeof e.data?.protocol === "string" ? e.data.protocol : "http",
                async: e.data?.async === true
            }
        }));
}
/* ---------- import validation (no external deps) ---------- */ function isRecord(v) {
    return typeof v === "object" && v !== null && !Array.isArray(v);
}
function str(v, fallback) {
    return typeof v === "string" ? v : fallback;
}
function num(v, fallback) {
    return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
/**
 * Structurally validate an imported design and normalize it into the
 * SerializedNode/SerializedEdge shape (stripping unknown/runtime fields).
 * Accepts both the LoadDialog export envelope (a full SavedDesign) and the
 * top-bar exportAsJSON envelope ({ schemaVersion, name, problemId, nodes,
 * edges, strokes }).
 */ function normalizeImportedDesign(parsed) {
    if (!isRecord(parsed)) {
        return {
            ok: false,
            error: "File is not a design object"
        };
    }
    if (!Array.isArray(parsed.nodes)) {
        return {
            ok: false,
            error: "Missing or invalid \"nodes\" array"
        };
    }
    if (!Array.isArray(parsed.edges)) {
        return {
            ok: false,
            error: "Missing or invalid \"edges\" array"
        };
    }
    const nodes = [];
    const nodeIds = new Set();
    for(let i = 0; i < parsed.nodes.length; i++){
        const raw = parsed.nodes[i];
        if (!isRecord(raw)) {
            return {
                ok: false,
                error: `Node ${i} is not an object`
            };
        }
        if (typeof raw.id !== "string" || raw.id.length === 0) {
            return {
                ok: false,
                error: `Node ${i} has no string id`
            };
        }
        if (nodeIds.has(raw.id)) {
            return {
                ok: false,
                error: `Duplicate node id "${raw.id}"`
            };
        }
        const pos = raw.position;
        if (!isRecord(pos) || typeof pos.x !== "number" || typeof pos.y !== "number" || !Number.isFinite(pos.x) || !Number.isFinite(pos.y)) {
            return {
                ok: false,
                error: `Node "${raw.id}" has an invalid position`
            };
        }
        if (!isRecord(raw.data)) {
            return {
                ok: false,
                error: `Node "${raw.id}" has no data object`
            };
        }
        const type = str(raw.type, "component");
        const d = raw.data;
        if (type === "text") {
            const fontSize = d.fontSize;
            nodes.push({
                id: raw.id,
                type,
                position: {
                    x: pos.x,
                    y: pos.y
                },
                data: {
                    text: str(d.text, ""),
                    fontSize: fontSize === "sm" || fontSize === "base" || fontSize === "lg" ? fontSize : undefined
                }
            });
        } else {
            nodes.push({
                id: raw.id,
                type,
                position: {
                    x: pos.x,
                    y: pos.y
                },
                data: {
                    componentId: str(d.componentId, "custom"),
                    label: str(d.label, "Component"),
                    icon: str(d.icon, "Box"),
                    category: str(d.category, "compute"),
                    replicas: num(d.replicas, 1),
                    maxQPS: num(d.maxQPS, 1000),
                    latencyMs: num(d.latencyMs, 10),
                    scalable: d.scalable !== false
                }
            });
        }
        nodeIds.add(raw.id);
    }
    const edges = [];
    for(let i = 0; i < parsed.edges.length; i++){
        const raw = parsed.edges[i];
        if (!isRecord(raw)) {
            return {
                ok: false,
                error: `Edge ${i} is not an object`
            };
        }
        const source = raw.source;
        const target = raw.target;
        if (typeof source !== "string" || !nodeIds.has(source)) {
            return {
                ok: false,
                error: `Edge ${i} has an unknown source node`
            };
        }
        if (typeof target !== "string" || !nodeIds.has(target)) {
            return {
                ok: false,
                error: `Edge ${i} has an unknown target node`
            };
        }
        const data = isRecord(raw.data) ? raw.data : {};
        edges.push({
            id: str(raw.id, `e-${source}-${target}-${i}`),
            type: str(raw.type, "animated"),
            source,
            target,
            sourceHandle: typeof raw.sourceHandle === "string" ? raw.sourceHandle : null,
            targetHandle: typeof raw.targetHandle === "string" ? raw.targetHandle : null,
            data: {
                label: str(data.label, ""),
                protocol: str(data.protocol, "http"),
                async: data.async === true
            }
        });
    }
    // Strokes are best-effort: drop anything malformed instead of rejecting.
    const strokes = Array.isArray(parsed.strokes) ? parsed.strokes.filter((s)=>{
        if (!isRecord(s)) return false;
        if (typeof s.id !== "string") return false;
        if (typeof s.color !== "string") return false;
        if (typeof s.width !== "number" || !Number.isFinite(s.width)) return false;
        return Array.isArray(s.points) && s.points.every((p)=>Array.isArray(p) && p.length === 2 && typeof p[0] === "number" && typeof p[1] === "number" && Number.isFinite(p[0]) && Number.isFinite(p[1]));
    }) : [];
    return {
        ok: true,
        name: str(parsed.name, "Untitled design"),
        problemId: typeof parsed.problemId === "string" ? parsed.problemId : null,
        nodes,
        edges,
        strokes
    };
}
const useSavedDesignsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        designs: [],
        saveDesign: (name)=>{
            const { nodes, edges } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
            const { strokes } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"].getState();
            const problemId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().selectedProblemId;
            const now = new Date().toISOString();
            const id = `design-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
            const design = {
                id,
                name,
                problemId,
                nodes: serializeNodes(nodes),
                edges: serializeEdges(edges),
                annotations: [],
                strokes,
                createdAt: now,
                updatedAt: now
            };
            set((s)=>({
                    designs: [
                        design,
                        ...s.designs
                    ]
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast(`Design "${name}" saved`, "success");
        },
        loadDesign: (id)=>{
            const design = get().designs.find((d)=>d.id === id);
            if (!design) return;
            // Restore canvas state
            const restoredNodes = design.nodes.map((n)=>{
                if (n.type === "text") {
                    const textData = n.data;
                    return {
                        id: n.id,
                        type: n.type,
                        position: n.position,
                        connectable: false,
                        data: {
                            text: textData.text ?? "",
                            fontSize: textData.fontSize
                        }
                    };
                }
                return {
                    id: n.id,
                    type: n.type,
                    position: n.position,
                    data: {
                        ...n.data
                    }
                };
            });
            const restoredEdges = design.edges.map((e)=>({
                    id: e.id,
                    type: e.type,
                    source: e.source,
                    target: e.target,
                    sourceHandle: e.sourceHandle ?? undefined,
                    targetHandle: e.targetHandle ?? undefined,
                    data: {
                        label: e.data?.label ?? "",
                        protocol: e.data?.protocol ?? "http",
                        async: e.data?.async ?? false
                    }
                }));
            // Route through the tab system so a read-only reference tab is never
            // clobbered: loading always (re)targets the "My Design" tab. addTab
            // also clears node/edge selection and the undo history.
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().addTab({
                id: "my-design",
                label: "My Design",
                nodes: restoredNodes,
                edges: restoredEdges
            });
            // Stale simulation metrics/score refer to the previous canvas.
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$simulationStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulationStore"].getState().reset();
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"].getState().setStrokes(design.strokes ?? []);
            // Restore problem selection if it exists
            if (design.problemId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().setSelectedProblem(design.problemId);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast(`Loaded "${design.name}"`, "success");
        },
        deleteDesign: (id)=>{
            set((s)=>({
                    designs: s.designs.filter((d)=>d.id !== id)
                }));
        },
        renameDesign: (id, name)=>{
            set((s)=>({
                    designs: s.designs.map((d)=>d.id === id ? {
                            ...d,
                            name,
                            updatedAt: new Date().toISOString()
                        } : d)
                }));
        },
        exportDesign: (id)=>{
            const design = get().designs.find((d)=>d.id === id);
            if (!design) return "{}";
            return JSON.stringify({
                schemaVersion: 1,
                ...design
            }, null, 2);
        },
        importDesign: (json)=>{
            let parsed;
            try {
                parsed = JSON.parse(json);
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Failed to parse JSON", "error");
                return {
                    ok: false,
                    error: "Failed to parse JSON"
                };
            }
            const result = normalizeImportedDesign(parsed);
            if (!result.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast(`Invalid design file: ${result.error}`, "error");
                return result;
            }
            const now = new Date().toISOString();
            const design = {
                id: `design-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                name: `${result.name} (imported)`,
                problemId: result.problemId,
                nodes: result.nodes,
                edges: result.edges,
                annotations: [],
                strokes: result.strokes,
                createdAt: now,
                updatedAt: now
            };
            set((s)=>({
                    designs: [
                        design,
                        ...s.designs
                    ]
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Design imported", "success");
            return {
                ok: true
            };
        }
    }), {
    name: "systemsim-saved-designs",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state
}));
function getProblemTitle(problemId) {
    if (!problemId) return "No problem";
    const builtin = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$problems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROBLEMS"].find((p)=>p.id === problemId)?.title;
    if (builtin) return builtin;
    const custom = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomProblemsStore"].getState().problems.find((p)=>p.id === problemId)?.title;
    return custom ?? problemId;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/tradeoffStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTradeoffStore",
    ()=>useTradeoffStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
const useTradeoffStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        entries: [],
        addEntry: (entry)=>set((s)=>({
                    entries: [
                        {
                            ...entry,
                            id: `tradeoff-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                            timestamp: Date.now()
                        },
                        ...s.entries
                    ]
                })),
        removeEntry: (id)=>set((s)=>({
                    entries: s.entries.filter((e)=>e.id !== id)
                })),
        clearEntries: ()=>set({
                entries: []
            })
    }), {
    name: "systemsim-tradeoffs",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/interviewStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInterviewStore",
    ()=>useInterviewStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/safeStorage.ts [app-client] (ecmascript)");
;
;
;
const PHASES = [
    {
        name: "Requirements",
        targetMinutes: 5,
        description: "Clarify functional and non-functional requirements",
        icon: "ClipboardList"
    },
    {
        name: "Estimation",
        targetMinutes: 5,
        description: "Back-of-envelope calculations",
        icon: "Calculator"
    },
    {
        name: "API Design",
        targetMinutes: 5,
        description: "Define core API endpoints",
        icon: "FileCode2"
    },
    {
        name: "Data Model",
        targetMinutes: 2,
        description: "Design key entities and relationships",
        icon: "Database"
    },
    {
        name: "High-Level Design",
        targetMinutes: 15,
        description: "Build the architecture on the canvas",
        icon: "LayoutDashboard"
    },
    {
        name: "Deep Dive",
        targetMinutes: 10,
        description: "Discuss trade-offs, failure modes, scaling",
        icon: "Search"
    }
];
function elapsedMsOf(s) {
    return s.accumulatedMs + (s.startedAt !== null ? Date.now() - s.startedAt : 0);
}
const useInterviewStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        mode: "free",
        currentPhase: 0,
        phases: PHASES,
        timerRunning: false,
        timerSeconds: 0,
        phaseStartTime: 0,
        startedAt: null,
        accumulatedMs: 0,
        elapsedSeconds: ()=>Math.floor(elapsedMsOf(get()) / 1000),
        startInterview: ()=>set({
                mode: "interview",
                currentPhase: 0,
                timerRunning: true,
                timerSeconds: 0,
                phaseStartTime: 0,
                startedAt: Date.now(),
                accumulatedMs: 0
            }),
        endInterview: ()=>set({
                mode: "free",
                currentPhase: 0,
                timerRunning: false,
                timerSeconds: 0,
                phaseStartTime: 0,
                startedAt: null,
                accumulatedMs: 0
            }),
        nextPhase: ()=>{
            const { currentPhase, phases, elapsedSeconds } = get();
            if (currentPhase < phases.length - 1) {
                const elapsed = elapsedSeconds();
                set({
                    currentPhase: currentPhase + 1,
                    phaseStartTime: elapsed,
                    timerSeconds: elapsed
                });
            }
        },
        prevPhase: ()=>{
            const { currentPhase, elapsedSeconds } = get();
            if (currentPhase > 0) {
                const elapsed = elapsedSeconds();
                set({
                    currentPhase: currentPhase - 1,
                    phaseStartTime: elapsed,
                    timerSeconds: elapsed
                });
            }
        },
        setPhase: (index)=>{
            const { phases, elapsedSeconds } = get();
            if (index >= 0 && index < phases.length) {
                const elapsed = elapsedSeconds();
                set({
                    currentPhase: index,
                    phaseStartTime: elapsed,
                    timerSeconds: elapsed
                });
            }
        },
        // Called every second by the app shell while the timer runs. It only
        // resyncs the derived display value (and thereby triggers re-renders);
        // the elapsed time itself comes from timestamps, so missed ticks in
        // throttled background tabs cause no drift.
        tickTimer: ()=>{
            const elapsed = get().elapsedSeconds();
            if (elapsed !== get().timerSeconds) {
                set({
                    timerSeconds: elapsed
                });
            }
        },
        toggleTimer: ()=>{
            const s = get();
            if (s.timerRunning) {
                const elapsedMs = elapsedMsOf(s);
                set({
                    timerRunning: false,
                    accumulatedMs: elapsedMs,
                    startedAt: null,
                    timerSeconds: Math.floor(elapsedMs / 1000)
                });
            } else {
                set({
                    timerRunning: true,
                    startedAt: Date.now()
                });
            }
        }
    }), {
    name: "systemsim-interview",
    version: 1,
    skipHydration: true,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$safeStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLocalStorage"]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    migrate: (state)=>state,
    partialize: (state)=>({
            mode: state.mode,
            currentPhase: state.currentPhase,
            timerRunning: state.timerRunning,
            timerSeconds: state.timerSeconds,
            phaseStartTime: state.phaseStartTime,
            startedAt: state.startedAt,
            accumulatedMs: state.accumulatedMs
        }),
    onRehydrateStorage: ()=>(state)=>{
            // Resync the derived display seconds from timestamps after a
            // refresh (the persisted timerSeconds may be stale if the tab was
            // closed while the timer was running).
            state?.tickTimer();
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/store/hydration.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehydrateAllStores",
    ()=>rehydrateAllStores,
    "useHasHydrated",
    ()=>useHasHydrated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$savedDesignsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/savedDesignsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customProblemsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customComponentsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/customComponentsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$tradeoffStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/tradeoffStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/interviewStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
/**
 * All persisted stores use `skipHydration: true` so that the server render
 * and the first client render agree (no hydration mismatch). Call
 * `rehydrateAllStores()` once after mount (e.g. in AppShell's useEffect)
 * to load the persisted state from localStorage.
 */ let hasHydrated = false;
const listeners = new Set();
function emit() {
    for (const listener of listeners)listener();
}
function subscribe(listener) {
    listeners.add(listener);
    return ()=>{
        listeners.delete(listener);
    };
}
function rehydrateAllStores() {
    const results = [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$savedDesignsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedDesignsStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customProblemsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomProblemsStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$customComponentsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomComponentsStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$tradeoffStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTradeoffStore"].persist.rehydrate(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$interviewStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterviewStore"].persist.rehydrate()
    ];
    return Promise.all(results.map((r)=>Promise.resolve(r))).then(()=>{
        hasHydrated = true;
        emit();
    });
}
function useHasHydrated() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useHasHydrated.useSyncExternalStore": ()=>hasHydrated
    }["useHasHydrated.useSyncExternalStore"], {
        "useHasHydrated.useSyncExternalStore": ()=>false
    }["useHasHydrated.useSyncExternalStore"]);
}
_s(useHasHydrated, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/lib/loadReference.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReferenceGraph",
    ()=>buildReferenceGraph,
    "loadReferenceIntoTab",
    ()=>loadReferenceIntoTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$components$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/data/components.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
;
;
;
function buildReferenceGraph(problem) {
    // componentId -> node ids, in declaration order
    const instancesByComponent = new Map();
    const refNodes = [];
    problem.referenceSolution.nodes.forEach((ref, index)=>{
        const comp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$data$2f$components$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponentById"])(ref.componentId);
        if (!comp) return;
        const nodeId = `${comp.id}-ref-${index}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        const list = instancesByComponent.get(ref.componentId) ?? [];
        list.push(nodeId);
        instancesByComponent.set(ref.componentId, list);
        refNodes.push({
            id: nodeId,
            type: "component",
            position: {
                x: ref.x,
                y: ref.y
            },
            data: {
                componentId: comp.id,
                label: comp.label,
                icon: comp.icon,
                category: comp.category,
                replicas: 1,
                maxQPS: comp.maxQPS,
                latencyMs: comp.latencyMs,
                scalable: comp.scalable
            }
        });
    });
    // Round-robin counters, keyed by `${componentId}#${role}`
    const rrCounters = new Map();
    const nextInstance = (componentId, role)=>{
        const instances = instancesByComponent.get(componentId);
        if (!instances || instances.length === 0) return undefined;
        const key = `${componentId}#${role}`;
        const count = rrCounters.get(key) ?? 0;
        rrCounters.set(key, count + 1);
        return instances[count % instances.length];
    };
    const refEdges = [];
    for (const ref of problem.referenceSolution.edges){
        const sourceId = nextInstance(ref.source, "source");
        const targetId = nextInstance(ref.target, "target");
        if (sourceId && targetId) {
            refEdges.push({
                id: `e-${sourceId}-${targetId}`,
                source: sourceId,
                target: targetId,
                type: "animated"
            });
        }
    }
    return {
        nodes: refNodes,
        edges: refEdges
    };
}
function loadReferenceIntoTab(problem) {
    const { nodes, edges } = buildReferenceGraph(problem);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().addTab({
        id: `ref-${problem.id}`,
        label: `${problem.title} (Reference)`,
        nodes,
        edges,
        readOnly: true
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().showToast("Reference opened in new tab — your design is safe", "success");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/lib/exportCanvas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportAsJSON",
    ()=>exportAsJSON,
    "exportAsPng",
    ()=>exportAsPng,
    "exportAsSvg",
    ()=>exportAsSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$perfect$2d$freehand$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/perfect-freehand/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/canvasStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/appStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/penStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$savedDesignsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/store/savedDesignsStore.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getTimestamp() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function triggerDownload(dataUrl, filename) {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function getViewportElement() {
    const el = document.querySelector(".react-flow__viewport");
    if (!el) throw new Error("Could not find ReactFlow viewport element");
    return el;
}
/* ---------- stroke path generation (mirrors PenOverlay) ---------- */ function outlineToPath(outline) {
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
/* ---------- export geometry ---------- */ const BG_COLOR = "#18181b"; // zinc-900 — the app is dark-only
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const PADDING = 0.1;
const PIXEL_RATIO = 2;
function unionRect(a, b) {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const x2 = Math.max(a.x + a.width, b.x + b.width);
    const y2 = Math.max(a.y + a.height, b.y + b.height);
    return {
        x,
        y,
        width: x2 - x,
        height: y2 - y
    };
}
/**
 * Bounds (in flow coordinates) of everything worth exporting: all nodes —
 * including off-screen ones — plus all pen strokes (stored in flow coords).
 */ function getContentBounds(nodes, strokes) {
    let rect = nodes.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodesBounds"])(nodes) : null;
    for (const stroke of strokes){
        // The freehand outline can extend up to ~width around the point.
        const margin = stroke.width;
        for (const [x, y] of stroke.points){
            const point = {
                x: x - margin,
                y: y - margin,
                width: margin * 2,
                height: margin * 2
            };
            rect = rect ? unionRect(rect, point) : point;
        }
    }
    if (!rect || rect.width <= 0 || rect.height <= 0) {
        throw new Error("Nothing to export");
    }
    return rect;
}
function computeExportGeometry() {
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$canvasStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().nodes;
    const strokes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$penStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePenStore"].getState().strokes;
    const bounds = getContentBounds(nodes, strokes);
    // Size the image to the content (clamped), then compute the viewport
    // transform that frames all of it — React Flow v12 documented pattern.
    const imageWidth = Math.min(4096, Math.max(320, Math.ceil(bounds.width * 1.2)));
    const imageHeight = Math.min(4096, Math.max(240, Math.ceil(bounds.height * 1.2)));
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewportForBounds"])(bounds, imageWidth, imageHeight, MIN_ZOOM, MAX_ZOOM, PADDING);
    return {
        bounds,
        imageWidth,
        imageHeight,
        viewport,
        strokes
    };
}
function captureStyle(geom) {
    return {
        width: `${geom.imageWidth}px`,
        height: `${geom.imageHeight}px`,
        transform: `translate(${geom.viewport.x}px, ${geom.viewport.y}px) scale(${geom.viewport.zoom})`
    };
}
function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}
async function exportAsPng(problemName) {
    const viewportEl = getViewportElement();
    const geom = computeExportGeometry();
    const filename = `${slugify(problemName)}-hld-${getTimestamp()}.png`;
    const options = {
        backgroundColor: BG_COLOR,
        pixelRatio: PIXEL_RATIO,
        width: geom.imageWidth,
        height: geom.imageHeight,
        style: captureStyle(geom)
    };
    // Safari workaround: html-to-image can render a blank/partial image on
    // the first call (fonts/images not ready in the cloned tree) — call
    // twice and keep the second result.
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(viewportEl, options);
    const flowDataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(viewportEl, options);
    if (geom.strokes.length === 0) {
        triggerDownload(flowDataUrl, filename);
        return;
    }
    // Composite the pen strokes (PenOverlay renders them as a sibling of
    // .react-flow, so they are not part of the captured viewport). Strokes
    // are stored in flow coordinates — replay them through the exact same
    // viewport transform used for the flow capture.
    const img = await loadImage(flowDataUrl);
    const canvas = document.createElement("canvas");
    canvas.width = geom.imageWidth * PIXEL_RATIO;
    canvas.height = geom.imageHeight * PIXEL_RATIO;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not get 2d canvas context");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    ctx.translate(geom.viewport.x, geom.viewport.y);
    ctx.scale(geom.viewport.zoom, geom.viewport.zoom);
    for (const stroke of geom.strokes){
        const path = new Path2D(strokeToPath(stroke.points, stroke.width));
        ctx.fillStyle = stroke.color;
        ctx.fill(path);
    }
    const blob = await new Promise((resolve)=>canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("Failed to encode PNG");
    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    URL.revokeObjectURL(url);
}
async function exportAsSvg(problemName) {
    const viewportEl = getViewportElement();
    const geom = computeExportGeometry();
    const filename = `${slugify(problemName)}-hld-${getTimestamp()}.svg`;
    // NOTE: pen strokes are intentionally NOT included in the SVG export —
    // compositing the freehand overlay into html-to-image's serialized SVG
    // (a foreignObject wrapper) is not reliably correct. The PNG export
    // includes them.
    const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSvg"])(viewportEl, {
        backgroundColor: BG_COLOR,
        width: geom.imageWidth,
        height: geom.imageHeight,
        style: captureStyle(geom)
    });
    triggerDownload(dataUrl, filename);
}
function exportAsJSON(nodes, edges, problemName, strokes = []) {
    const filename = `${slugify(problemName)}-hld-${getTimestamp()}.json`;
    // Same envelope as savedDesignsStore.exportDesign so both import paths
    // (LoadDialog import + saved-design export) accept both files.
    const payload = JSON.stringify({
        schemaVersion: 1,
        name: problemName,
        problemId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$appStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"].getState().selectedProblemId ?? null,
        nodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$savedDesignsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeNodes"])(nodes),
        edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$store$2f$savedDesignsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeEdges"])(edges),
        strokes
    }, null, 2);
    const blob = new Blob([
        payload
    ], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    URL.revokeObjectURL(url);
}
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "design";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/lib/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICON_MAP",
    ()=>ICON_MAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloudy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloudy$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/cloudy.js [app-client] (ecmascript) <export default as Cloudy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/router.js [app-client] (ecmascript) <export default as Router>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/key-round.js [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/warehouse.js [app-client] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldOff$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/shield-off.js [app-client] (ecmascript) <export default as ShieldOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeySquare$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/key-square.js [app-client] (ecmascript) <export default as KeySquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$antenna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Antenna$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/antenna.js [app-client] (ecmascript) <export default as Antenna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/inbox.js [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brick$2d$wall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrickWall$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/lucide-react/dist/esm/icons/brick-wall.js [app-client] (ecmascript) <export default as BrickWall>");
;
const ICON_MAP = {
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    Cloudy: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloudy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloudy$3e$__["Cloudy"],
    Network: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
    Router: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Router$3e$__["Router"],
    ShieldAlert: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
    Server: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
    KeyRound: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
    Database: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
    HardDrive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Archive: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"],
    Search: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
    MessageSquare: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
    GitBranch: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    Radio: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
    Clock: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
    Waves: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
    Bell: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
    Share2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"],
    TrendingUp: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
    Warehouse: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"],
    Compass: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
    Shield: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
    Lock: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    ShieldOff: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldOff$3e$__["ShieldOff"],
    FolderOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
    ShieldCheck: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    Box: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
    Megaphone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
    Hash: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
    Brain: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    MapPin: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
    Settings: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    KeySquare: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeySquare$3e$__["KeySquare"],
    Antenna: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$antenna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Antenna$3e$__["Antenna"],
    Inbox: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"],
    Repeat: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"],
    Cpu: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
    Layers: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
    BrainCircuit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
    BrickWall: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brick$2d$wall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrickWall$3e$__["BrickWall"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared number/unit formatting so capacity and traffic read the same way in
 * every surface (palette, nodes, metrics, capacity tab).
 */ /** Compact K/M/B abbreviation for large counts (Grafana-style). */ __turbopack_context__.s([
    "LOAD_LABEL",
    ()=>LOAD_LABEL,
    "abbrev",
    ()=>abbrev,
    "capacitySentence",
    ()=>capacitySentence,
    "formatRate",
    ()=>formatRate,
    "formatRateWithUnit",
    ()=>formatRateWithUnit,
    "loadLevel",
    ()=>loadLevel,
    "utilizationSentence",
    ()=>utilizationSentence
]);
function abbrev(n) {
    if (!Number.isFinite(n)) return "∞";
    if (n >= 1e9) return (n / 1e9).toFixed(n % 1e9 === 0 ? 0 : 1) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(n % 1e6 === 0 ? 0 : 1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(n % 1e3 === 0 ? 0 : 1) + "K";
    return String(Math.round(n));
}
function formatRate(n) {
    return abbrev(n);
}
function formatRateWithUnit(n) {
    if (!Number.isFinite(n)) return "unlimited";
    return `${abbrev(n)} req/sec`;
}
function capacitySentence(maxQPS) {
    if (!Number.isFinite(maxQPS)) {
        return "Handles unlimited traffic — it will never be the bottleneck.";
    }
    return `Handles up to ${abbrev(maxQPS)} requests/sec before it becomes a bottleneck.`;
}
function loadLevel(utilization) {
    if (utilization > 0.8) return "critical";
    if (utilization > 0.5) return "warning";
    return "healthy";
}
const LOAD_LABEL = {
    healthy: "Healthy",
    warning: "Near limit",
    critical: "Overloaded"
};
function utilizationSentence(utilization) {
    const pct = Math.round(utilization * 100);
    if (pct > 100) {
        return `Receiving ${pct}% of what it can handle — traffic beyond 100% is dropped.`;
    }
    return `Using ${pct}% of its capacity.`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/hooks/useBreakpoint.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsCoarsePointer",
    ()=>useIsCoarsePointer,
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const MOBILE_MAX = 767; // matches Tailwind's `md` breakpoint
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
            const update = {
                "useIsMobile.useEffect.update": ()=>setIsMobile(mq.matches)
            }["useIsMobile.useEffect.update"];
            update();
            mq.addEventListener("change", update);
            return ({
                "useIsMobile.useEffect": ()=>mq.removeEventListener("change", update)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
function useIsCoarsePointer() {
    _s1();
    const [isCoarse, setIsCoarse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsCoarsePointer.useEffect": ()=>{
            const mq = window.matchMedia("(pointer: coarse)");
            const update = {
                "useIsCoarsePointer.useEffect.update": ()=>setIsCoarse(mq.matches)
            }["useIsCoarsePointer.useEffect.update"];
            update();
            mq.addEventListener("change", update);
            return ({
                "useIsCoarsePointer.useEffect": ()=>mq.removeEventListener("change", update)
            })["useIsCoarsePointer.useEffect"];
        }
    }["useIsCoarsePointer.useEffect"], []);
    return isCoarse;
}
_s1(useIsCoarsePointer, "Y8F0tOc09Fvy1kHgWAI1eHpTDRU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/engine/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LATENCY_SPIKE_MULTIPLIER",
    ()=>LATENCY_SPIKE_MULTIPLIER,
    "LATENCY_SPIKE_THRESHOLD",
    ()=>LATENCY_SPIKE_THRESHOLD,
    "UTILIZATION_CRITICAL",
    ()=>UTILIZATION_CRITICAL,
    "UTILIZATION_WARNING",
    ()=>UTILIZATION_WARNING
]);
const UTILIZATION_WARNING = 0.5;
const UTILIZATION_CRITICAL = 0.8;
const LATENCY_SPIKE_THRESHOLD = 0.7;
const LATENCY_SPIKE_MULTIPLIER = 3;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/engine/simulator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runSimulation",
    ()=>runSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/engine/constants.ts [app-client] (ecmascript)");
;
/** Component IDs that split (load-balance) traffic across children. */ const LOAD_BALANCING_COMPONENTS = new Set([
    "load-balancer",
    "api-gateway"
]);
function getStatus(utilization) {
    if (utilization > __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UTILIZATION_CRITICAL"]) return "critical";
    if (utilization > __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UTILIZATION_WARNING"]) return "warning";
    return "healthy";
}
function computeLatency(baseLatency, utilization) {
    if (utilization > __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LATENCY_SPIKE_THRESHOLD"]) {
        return baseLatency * (1 + Math.max(0, utilization - __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LATENCY_SPIKE_THRESHOLD"]) * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LATENCY_SPIKE_MULTIPLIER"]);
    }
    return baseLatency;
}
/** Sanitize a raw maxQPS spec: finite positive number, otherwise 0. */ function sanitizeMaxQPS(value) {
    return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : 0;
}
/** Sanitize a raw replicas spec: integer >= 1 (NaN/negative/fractional inputs clamp to 1). */ function sanitizeReplicas(value) {
    const n = typeof value === "number" && Number.isFinite(value) ? Math.floor(value) : 1;
    return Math.max(1, n);
}
function runSimulation(nodes, edges, requestsPerSec) {
    const warnings = [];
    const nodeMetrics = new Map();
    const nodeMap = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    // Sanitized effective capacity per node (maxQPS * replicas)
    const capacity = new Map();
    for (const node of nodes){
        capacity.set(node.id, sanitizeMaxQPS(node.data.maxQPS) * sanitizeReplicas(node.data.replicas));
    }
    // Build adjacency list and in-degree map.
    // - Edges whose endpoints aren't known component nodes (e.g. text nodes) are skipped,
    //   otherwise they'd inflate in-degree and falsely flag cycles.
    // - Duplicate parallel edges A->B are deduped so traffic isn't double-counted.
    // - Async edges still carry QPS, but are excluded from the latency graph:
    //   queue/notification/monitoring hops aren't user-facing latency.
    const adjacency = new Map();
    const syncAdjacency = new Map();
    const inDegree = new Map();
    for (const node of nodes){
        adjacency.set(node.id, []);
        syncAdjacency.set(node.id, []);
        inDegree.set(node.id, 0);
    }
    const seenPairs = new Set();
    const seenSyncPairs = new Set();
    let validEdgeCount = 0;
    for (const edge of edges){
        if (!nodeMap.has(edge.source) || !nodeMap.has(edge.target)) continue;
        const key = `${edge.source}->${edge.target}`;
        if (!seenPairs.has(key)) {
            seenPairs.add(key);
            validEdgeCount++;
            adjacency.get(edge.source).push(edge.target);
            inDegree.set(edge.target, (inDegree.get(edge.target) ?? 0) + 1);
        }
        if (edge.data?.async !== true && !seenSyncPairs.has(key)) {
            seenSyncPairs.add(key);
            syncAdjacency.get(edge.source).push(edge.target);
        }
    }
    // Entry nodes: in-degree 0 AND at least one outgoing edge, so disconnected
    // nodes don't steal traffic from the real request path. When the canvas has
    // no (valid) edges at all, fall back to treating every root as an entry.
    const hasEdges = validEdgeCount > 0;
    const entryNodes = nodes.filter((n)=>(inDegree.get(n.id) ?? 0) === 0 && (!hasEdges || (adjacency.get(n.id)?.length ?? 0) > 0));
    // Initialize incoming QPS for entry nodes
    const incomingQPS = new Map();
    const qpsPerEntry = entryNodes.length > 0 ? requestsPerSec / entryNodes.length : 0;
    for (const entry of entryNodes){
        incomingQPS.set(entry.id, qpsPerEntry);
    }
    const bottleneckNodes = [];
    const deliveredQPS = new Map();
    const processed = new Set();
    // Compute metrics for a node from its accumulated incoming QPS; returns delivered QPS.
    const processNode = (nodeId)=>{
        const node = nodeMap.get(nodeId);
        const data = node.data;
        const incoming = incomingQPS.get(nodeId) ?? 0;
        const effectiveQPS = capacity.get(nodeId) ?? 0;
        // A node with no usable capacity that still receives traffic is fully
        // saturated (it black-holes everything downstream) — not "healthy".
        const utilization = effectiveQPS <= 0 ? incoming > 0 ? 2 : 0 : incoming / effectiveQPS;
        const latency = computeLatency(data.latencyMs, utilization);
        const status = getStatus(utilization);
        const isBottleneck = utilization > __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$engine$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UTILIZATION_CRITICAL"];
        if (isBottleneck) bottleneckNodes.push(nodeId);
        const delivered = Math.min(incoming, effectiveQPS);
        deliveredQPS.set(nodeId, delivered);
        nodeMetrics.set(nodeId, {
            nodeId,
            incomingQPS: incoming,
            effectiveQPS,
            utilization: Math.min(utilization, 2),
            latencyMs: latency,
            status,
            isBottleneck
        });
        return delivered;
    };
    // Push a node's output QPS to its (not yet processed) children.
    const propagateToUnprocessedChildren = (nodeId, output)=>{
        const children = adjacency.get(nodeId) ?? [];
        if (children.length === 0) return;
        const isSplitter = LOAD_BALANCING_COMPONENTS.has(nodeMap.get(nodeId).data.componentId);
        const qpsToChild = isSplitter ? output / children.length : output;
        for (const childId of children){
            if (processed.has(childId)) continue;
            incomingQPS.set(childId, (incomingQPS.get(childId) ?? 0) + qpsToChild);
        }
    };
    // --- Kahn's algorithm for topological-order QPS propagation ---
    // Clone inDegree so we can decrement without corrupting the original
    const remaining = new Map(inDegree);
    const queue = entryNodes.map((n)=>n.id);
    let head = 0;
    while(head < queue.length){
        const nodeId = queue[head++];
        if (processed.has(nodeId)) continue;
        processed.add(nodeId);
        const output = processNode(nodeId);
        // Propagate to children: load-balancers split traffic, everything else fans out
        const children = adjacency.get(nodeId) ?? [];
        const isSplitter = LOAD_BALANCING_COMPONENTS.has(nodeMap.get(nodeId).data.componentId);
        const qpsToChild = isSplitter && children.length > 0 ? output / children.length : output;
        for (const childId of children){
            incomingQPS.set(childId, (incomingQPS.get(childId) ?? 0) + qpsToChild);
            // Decrement in-degree; enqueue when all predecessors processed
            const newDeg = (remaining.get(childId) ?? 1) - 1;
            remaining.set(childId, newDeg);
            if (newDeg === 0) {
                queue.push(childId);
            }
        }
    }
    // --- Cycle handling ---
    // Unprocessed nodes with inbound edges are either ON a cycle or strictly
    // DOWNSTREAM of one. Distinguish them by repeatedly peeling zero-out-degree
    // nodes within the unresolved subgraph: survivors are on (or feed back into)
    // a cycle, peeled nodes are merely downstream of it.
    const unresolved = nodes.filter((n)=>!processed.has(n.id) && (inDegree.get(n.id) ?? 0) > 0);
    if (unresolved.length > 0) {
        const unresolvedSet = new Set(unresolved.map((n)=>n.id));
        const outDeg = new Map();
        const revAdj = new Map();
        for (const id of unresolvedSet){
            outDeg.set(id, 0);
            revAdj.set(id, []);
        }
        for (const id of unresolvedSet){
            for (const child of adjacency.get(id) ?? []){
                if (unresolvedSet.has(child)) {
                    outDeg.set(id, (outDeg.get(id) ?? 0) + 1);
                    revAdj.get(child).push(id);
                }
            }
        }
        const peelQueue = [];
        for (const [id, deg] of outDeg){
            if (deg === 0) peelQueue.push(id);
        }
        const peeled = new Set();
        let peelHead = 0;
        while(peelHead < peelQueue.length){
            const id = peelQueue[peelHead++];
            peeled.add(id);
            for (const pred of revAdj.get(id) ?? []){
                const newDeg = (outDeg.get(pred) ?? 1) - 1;
                outDeg.set(pred, newDeg);
                if (newDeg === 0) peelQueue.push(pred);
            }
        }
        const cycleIds = unresolved.filter((n)=>!peeled.has(n.id)).map((n)=>n.id);
        const downstreamIds = unresolved.filter((n)=>peeled.has(n.id)).map((n)=>n.id);
        if (cycleIds.length > 0) {
            warnings.push(`Cycle detected involving node(s): ${cycleIds.join(", ")}. Processing with accumulated QPS.`);
        }
        if (downstreamIds.length > 0) {
            warnings.push(`Node(s) downstream of a cycle: ${downstreamIds.join(", ")}. Traffic propagated after resolving the cycle.`);
        }
        // Process cycle members in traffic-flow order: start from members that
        // already accumulated QPS from the acyclic portion, and let each push its
        // output one step onward (around the cycle and out of it), so nodes
        // downstream of the cycle aren't black-holed.
        const cycleSet = new Set(cycleIds);
        const cycleQueue = cycleIds.filter((id)=>(incomingQPS.get(id) ?? 0) > 0);
        const processCycleMember = (nodeId)=>{
            processed.add(nodeId);
            const output = processNode(nodeId);
            const children = adjacency.get(nodeId) ?? [];
            if (children.length === 0) return;
            const isSplitter = LOAD_BALANCING_COMPONENTS.has(nodeMap.get(nodeId).data.componentId);
            const qpsToChild = isSplitter ? output / children.length : output;
            for (const childId of children){
                if (processed.has(childId)) continue;
                incomingQPS.set(childId, (incomingQPS.get(childId) ?? 0) + qpsToChild);
                if (cycleSet.has(childId)) cycleQueue.push(childId);
            }
        };
        let cycleHead = 0;
        while(cycleHead < cycleQueue.length){
            const nodeId = cycleQueue[cycleHead++];
            if (processed.has(nodeId)) continue;
            processCycleMember(nodeId);
        }
        // Cycle members that never saw any traffic still need metrics
        for (const nodeId of cycleIds){
            if (!processed.has(nodeId)) processCycleMember(nodeId);
        }
        // Topological pass over the downstream-of-cycle subgraph (acyclic by construction).
        const downstreamSet = new Set(downstreamIds);
        const dsInDeg = new Map();
        for (const id of downstreamSet)dsInDeg.set(id, 0);
        for (const id of downstreamSet){
            for (const child of adjacency.get(id) ?? []){
                if (downstreamSet.has(child)) {
                    dsInDeg.set(child, (dsInDeg.get(child) ?? 0) + 1);
                }
            }
        }
        const dsQueue = [];
        for (const [id, deg] of dsInDeg){
            if (deg === 0) dsQueue.push(id);
        }
        let dsHead = 0;
        while(dsHead < dsQueue.length){
            const nodeId = dsQueue[dsHead++];
            if (processed.has(nodeId)) continue;
            processed.add(nodeId);
            const output = processNode(nodeId);
            propagateToUnprocessedChildren(nodeId, output);
            for (const childId of adjacency.get(nodeId) ?? []){
                if (!downstreamSet.has(childId)) continue;
                const newDeg = (dsInDeg.get(childId) ?? 1) - 1;
                dsInDeg.set(childId, newDeg);
                if (newDeg === 0) dsQueue.push(childId);
            }
        }
    }
    // Disconnected/idle nodes get their base latency, not 0
    for (const node of nodes){
        if (!nodeMetrics.has(node.id)) {
            nodeMetrics.set(node.id, {
                nodeId: node.id,
                incomingQPS: 0,
                effectiveQPS: capacity.get(node.id) ?? 0,
                utilization: 0,
                latencyMs: node.data.latencyMs,
                status: "idle",
                isBottleneck: false
            });
        }
    }
    // User-facing latency: longest synchronous path from an entry node
    // (async hops — queues, notifications, monitoring — are excluded).
    const totalLatencyMs = computeLongestPathLatency(entryNodes.map((n)=>n.id), syncAdjacency, nodeMetrics);
    // Throughput can never exceed offered load. With no entry point, nothing flows.
    // At a bottleneck, what actually gets through is min(incoming, capacity).
    let throughput;
    if (nodes.length === 0 || entryNodes.length === 0) {
        throughput = 0;
    } else if (bottleneckNodes.length > 0) {
        throughput = Math.min(requestsPerSec, ...bottleneckNodes.map((id)=>deliveredQPS.get(id) ?? 0));
    } else {
        throughput = requestsPerSec;
    }
    return {
        nodeMetrics,
        totalLatencyMs,
        bottleneckNodes,
        throughput,
        timestamp: Date.now(),
        warnings
    };
}
/**
 * Longest-path latency over the synchronous edge graph, starting from the
 * simulation's entry nodes. Nodes only reachable via async edges don't
 * contribute — async work isn't on the user-facing request path.
 */ function computeLongestPathLatency(entryIds, syncAdjacency, metrics) {
    if (entryIds.length === 0) return 0;
    // BFS reachable set from entries over sync edges
    const reachable = new Set(entryIds);
    const bfs = [
        ...entryIds
    ];
    let bfsHead = 0;
    while(bfsHead < bfs.length){
        const id = bfs[bfsHead++];
        for (const child of syncAdjacency.get(id) ?? []){
            if (!reachable.has(child)) {
                reachable.add(child);
                bfs.push(child);
            }
        }
    }
    // In-degree restricted to the reachable subgraph (edges from unreachable
    // nodes must not block Kahn's ordering)
    const inDeg = new Map();
    for (const id of reachable)inDeg.set(id, 0);
    for (const id of reachable){
        for (const child of syncAdjacency.get(id) ?? []){
            if (reachable.has(child)) {
                inDeg.set(child, (inDeg.get(child) ?? 0) + 1);
            }
        }
    }
    const dist = new Map();
    const queue = [];
    for (const id of entryIds){
        queue.push(id);
        dist.set(id, metrics.get(id)?.latencyMs ?? 0);
    }
    const done = new Set();
    let head = 0;
    while(head < queue.length){
        const id = queue[head++];
        if (done.has(id)) continue;
        done.add(id);
        const currentDist = dist.get(id) ?? 0;
        for (const childId of syncAdjacency.get(id) ?? []){
            if (!reachable.has(childId)) continue;
            const childLatency = metrics.get(childId)?.latencyMs ?? 0;
            const newDist = currentDist + childLatency;
            if (newDist > (dist.get(childId) ?? 0)) {
                dist.set(childId, newDist);
            }
            const newDeg = (inDeg.get(childId) ?? 1) - 1;
            inDeg.set(childId, newDeg);
            if (newDeg === 0) {
                queue.push(childId);
            }
        }
    }
    return dist.size === 0 ? 0 : Math.max(0, ...dist.values());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/rules/scalability.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreScalability",
    ()=>scoreScalability
]);
function scoreScalability(nodes, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_edges, graph) {
    const feedback = [];
    const passed = [];
    let score = 0;
    const nodeMap = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    const connectedNodes = nodes.filter((n)=>graph.reachable.has(n.id));
    const connectedIds = new Set(connectedNodes.map((n)=>n.data.componentId));
    const placedIds = new Set(nodes.map((n)=>n.data.componentId));
    const hasLB = connectedIds.has("load-balancer");
    const hasCache = connectedIds.has("cache");
    const hasQueue = connectedIds.has("message-queue");
    const hasCDN = connectedIds.has("cdn");
    const hasScalableCompute = connectedNodes.some((n)=>n.data.category === "compute" && n.data.scalable);
    const placedScalableCompute = nodes.some((n)=>n.data.category === "compute" && n.data.scalable);
    // NoSQL databases scale horizontally out of the box (replicas=1 is fine);
    // SQL needs explicit read replicas to scale reads.
    const isDBScalingNode = (n)=>n.data.componentId === "nosql-db" || n.data.componentId === "sql-db" && (n.data.replicas || 1) > 1;
    const hasDBScaling = connectedNodes.some(isDBScalingNode);
    const placedDBScaling = nodes.some(isDBScalingNode);
    // Check load balancer (3 pts)
    if (hasLB) {
        score += 3;
        passed.push("Load balancer distributes traffic across servers, enabling horizontal scaling");
    } else if (placedIds.has("load-balancer")) {
        feedback.push("You placed a Load Balancer but it isn't connected to the request path. Wire traffic through it (entry → Load Balancer → App Servers) so it can actually distribute load.");
    } else {
        feedback.push("Add a Load Balancer (e.g., AWS ALB, Nginx) to distribute traffic across multiple servers. Without one, a single server handles all requests and becomes a bottleneck — you can't scale horizontally.");
    }
    // Check horizontal scaling (3 pts)
    if (hasScalableCompute) {
        score += 3;
        passed.push("Horizontally scalable compute layer allows adding capacity on demand");
    } else if (placedScalableCompute) {
        feedback.push("You placed scalable compute (e.g., App Server) but it isn't connected to the request path. Connect it behind your load balancer so it can serve traffic.");
    } else {
        feedback.push("Add stateless App Servers that can scale horizontally behind the load balancer. Stateless servers let you spin up new instances in seconds during traffic spikes, handling 10x load by simply adding more machines.");
    }
    // Check caching (3 pts)
    if (hasCache) {
        score += 3;
        passed.push("Caching layer (Redis/Memcached) absorbs read traffic and reduces backend load");
    } else if (placedIds.has("cache")) {
        feedback.push("You placed a Cache but it isn't connected to the request path. Connect your App Servers to it so reads can actually be absorbed by the cache.");
    } else {
        feedback.push("Add a caching layer (Redis/Memcached) between your App Servers and Database. This can reduce DB load by 80-90% for read-heavy workloads by serving frequently accessed data from memory (~1ms) instead of disk (~5-10ms).");
    }
    // Check async processing (3 pts)
    if (hasQueue) {
        score += 3;
        passed.push("Message queue enables async processing and absorbs traffic spikes");
    } else if (placedIds.has("message-queue")) {
        feedback.push("You placed a Message Queue but it isn't connected to the request path. Connect a producer (e.g., App Server) to it so heavy work can actually be offloaded.");
    } else {
        feedback.push("Add a Message Queue (Kafka, SQS, RabbitMQ) for asynchronous processing. Queues decouple producers from consumers, letting you buffer traffic spikes and process heavy tasks (email, transcoding, analytics) in the background without blocking user requests.");
    }
    // Check DB read scaling (3 pts)
    if (hasDBScaling) {
        score += 3;
        passed.push("Database layer supports read scaling via NoSQL or read replicas");
    } else if (placedDBScaling) {
        feedback.push("You have a scalable database (NoSQL or replicated SQL) but it isn't connected to the request path. Connect your App Servers to it so queries actually reach it.");
    } else {
        feedback.push("Scale your database layer — use a NoSQL database (DynamoDB, Cassandra) for automatic horizontal scaling, or add SQL read replicas to distribute query load. A single SQL primary becomes a bottleneck beyond ~10K QPS.");
    }
    // Check CDN for static content offloading (3 pts)
    if (hasCDN) {
        score += 3;
        passed.push("CDN offloads static content delivery from origin servers");
    } else if (placedIds.has("cdn")) {
        feedback.push("You placed a CDN but it isn't connected to the request path. Put it in front of your origin (e.g., DNS → CDN → Load Balancer) so static content is actually served from the edge.");
    } else {
        feedback.push("Add a CDN (CloudFront, Cloudflare) to offload static content delivery from your origin servers. CDNs serve cached content from 200+ edge locations worldwide, reducing origin load by 60-80% and cutting latency for global users from 200ms+ to under 20ms.");
    }
    // Check LB→compute connectivity (2 pts)
    // True when the LB feeds a compute node directly, or feeds an API gateway /
    // rate limiter that itself reaches a compute node downstream.
    const reachesCompute = (startId)=>{
        const visited = new Set([
            startId
        ]);
        const queue = [
            startId
        ];
        let head = 0;
        while(head < queue.length){
            const id = queue[head++];
            for (const child of graph.adjacency.get(id) ?? []){
                if (visited.has(child)) continue;
                visited.add(child);
                if (nodeMap.get(child)?.data.category === "compute") return true;
                queue.push(child);
            }
        }
        return false;
    };
    let lbToCompute = false;
    if (hasLB && hasScalableCompute) {
        outer: for (const [sourceId, children] of graph.adjacency){
            if (nodeMap.get(sourceId)?.data.componentId !== "load-balancer") continue;
            for (const childId of children){
                const target = nodeMap.get(childId);
                if (!target) continue;
                if (target.data.category === "compute") {
                    lbToCompute = true;
                    break outer;
                }
                if ((target.data.componentId === "api-gateway" || target.data.componentId === "rate-limiter") && reachesCompute(childId)) {
                    lbToCompute = true;
                    break outer;
                }
            }
        }
    }
    if (lbToCompute) {
        score += 2;
        passed.push("Load balancer is properly connected to compute layer");
    } else if (hasLB && hasScalableCompute) {
        feedback.push("Connect your Load Balancer to your App Servers (directly or via an API Gateway). Without this connection, the LB can't distribute traffic to your compute layer — it's like having a highway on-ramp that leads nowhere.");
    }
    return {
        category: "Scalability",
        score,
        maxScore: 20,
        feedback,
        passed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/rules/availability.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreAvailability",
    ()=>scoreAvailability
]);
/** Stores whose replicas constitute real data redundancy (a cache is not durable). */ const DURABLE_STORES = new Set([
    "sql-db",
    "nosql-db",
    "object-storage",
    "timeseries-db",
    "graph-db",
    "file-store"
]);
function scoreAvailability(nodes, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_edges, graph) {
    const feedback = [];
    const passed = [];
    let score = 0;
    const connectedNodes = nodes.filter((n)=>graph.reachable.has(n.id));
    const connectedIds = new Set(connectedNodes.map((n)=>n.data.componentId));
    const placedIds = new Set(nodes.map((n)=>n.data.componentId));
    // Check no single point of failure (3 pts)
    const scalableNodes = nodes.filter((n)=>n.data.scalable || (n.data.replicas || 1) > 1);
    const noSpof = scalableNodes.length >= Math.ceil(nodes.length * 0.7);
    if (noSpof) {
        score += 3;
        passed.push("At least 70% of components are scalable or redundant, minimizing single points of failure");
    } else {
        feedback.push("Too many single points of failure — over 30% of your components can't scale or failover. Most components on the critical path should be redundant. Use scalable components (App Server, Cache, NoSQL) and add replicas to stateful ones to target 99.9%+ availability.");
    }
    // Check DB redundancy (3 pts) — only durable stores count; a replicated
    // cache doesn't protect your data if the database goes down.
    const isReplicatedDurableStore = (n)=>DURABLE_STORES.has(n.data.componentId) && (n.data.replicas || 1) > 1;
    const hasReplicatedStorage = connectedNodes.some(isReplicatedDurableStore);
    const placedReplicatedStorage = nodes.some(isReplicatedDurableStore);
    if (hasReplicatedStorage) {
        score += 3;
        passed.push("Database replication provides real redundancy — failover to replica if primary goes down");
    } else if (placedReplicatedStorage) {
        feedback.push("You have a replicated database but it isn't connected to the request path. Connect it to your services so the replicas actually back the live system.");
    } else {
        feedback.push("Add database replication (replicas > 1) to at least one durable storage component (SQL, NoSQL, object storage). Having multiple different storage types (e.g., Redis + PostgreSQL) isn't redundancy — if PostgreSQL goes down, Redis can't replace it. True redundancy means replicas of the same data store ready to take over on failure.");
    }
    // Check multi-path (3 pts) — duplicates must be on the connected request path
    const entryComponents = [
        "load-balancer",
        "api-gateway",
        "cdn"
    ];
    const entryWithMultipleDownstream = connectedNodes.some((n)=>entryComponents.includes(n.data.componentId) && (graph.adjacency.get(n.id)?.length ?? 0) >= 2);
    const componentTypeCounts = new Map();
    for (const n of connectedNodes){
        const cid = n.data.componentId;
        componentTypeCounts.set(cid, (componentTypeCounts.get(cid) ?? 0) + 1);
    }
    const hasRedundantInstances = Array.from(componentTypeCounts.values()).some((count)=>count >= 2);
    const hasMultiPath = entryWithMultipleDownstream || hasRedundantInstances;
    if (hasMultiPath && nodes.length > 2) {
        score += 3;
        passed.push("Redundant paths exist — entry points fan out to multiple targets or duplicate instances provide failover");
    } else {
        feedback.push("Add redundant data paths to avoid cascading failures. Entry-point components (load balancer, API gateway, CDN) should fan out to multiple downstream targets, or use multiple connected instances of the same component type for failover. A single chain (A→B→C→D) means any link failure takes down the entire system.");
    }
    // Check monitoring (3 pts)
    if (connectedIds.has("monitoring")) {
        score += 3;
        passed.push("Monitoring enables fast incident detection and reduces Mean Time To Recovery (MTTR)");
    } else if (placedIds.has("monitoring")) {
        feedback.push("You placed Monitoring but it isn't connected to anything. Connect your services to it (metrics/log flow) so it can actually observe the system.");
    } else {
        feedback.push("Add a Monitoring stack (Prometheus/Grafana, CloudWatch, Datadog) for alerting and observability. Without monitoring, outages go undetected until users complain — increasing MTTR from minutes to hours. You can't improve what you can't measure.");
    }
    // Check rate limiter or API gateway for overload protection (3 pts)
    const hasOverloadProtection = connectedIds.has("rate-limiter") || connectedIds.has("api-gateway");
    if (hasOverloadProtection) {
        score += 3;
        passed.push("Rate limiting / API gateway protects backend from traffic surges and abuse");
    } else if (placedIds.has("rate-limiter") || placedIds.has("api-gateway")) {
        feedback.push("You placed a Rate Limiter / API Gateway but it isn't connected to the request path. Put it in front of your backend so it can actually shed excess traffic.");
    } else {
        feedback.push("Add a Rate Limiter or API Gateway to protect your backend from traffic surges and DDoS attacks. Without overload protection, a sudden traffic spike (or malicious attack) can cascade through your entire system and cause a full outage.");
    }
    // Check cache for graceful degradation (3 pts)
    const hasCache = connectedIds.has("cache");
    const hasDB = connectedIds.has("sql-db") || connectedIds.has("nosql-db");
    if (hasCache && hasDB) {
        score += 3;
        passed.push("Cache enables graceful degradation — serves stale data if database becomes unavailable");
    } else if (hasDB && !hasCache) {
        feedback.push("Add a Cache layer (Redis/Memcached) in front of your database. Beyond performance, caching enables graceful degradation: if your DB goes down, the cache can continue serving recent data while you recover, keeping the system partially available.");
    } else if (hasCache && !hasDB) {
        feedback.push("You have a Cache but no connected database behind it. Graceful degradation needs both: the cache serves stale data while the database recovers. Add a durable store (SQL/NoSQL) on the request path to earn these points.");
    } else {
        feedback.push("Add a connected Cache + Database pair. A cache in front of a durable store enables graceful degradation — if the DB goes down, the cache keeps serving recent data while you recover.");
    }
    // Check queue for resilience (2 pts)
    if (connectedIds.has("message-queue")) {
        score += 2;
        passed.push("Message queue buffers requests during downstream outages, preventing data loss");
    } else if (placedIds.has("message-queue")) {
        feedback.push("You placed a Message Queue but it isn't connected to the request path. Connect producers to it so it can actually buffer requests during outages.");
    } else {
        feedback.push("Add a Message Queue (Kafka, SQS) to buffer requests during downstream outages. If a consumer service goes down, messages are retained in the queue and processed when it recovers — no data loss, no user-facing errors for async operations.");
    }
    return {
        category: "Availability",
        score,
        maxScore: 20,
        feedback,
        passed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/rules/latency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreLatency",
    ()=>scoreLatency
]);
function scoreLatency(nodes, edges, graph) {
    const feedback = [];
    const passed = [];
    let score = 0;
    const connectedNodes = nodes.filter((n)=>graph.reachable.has(n.id));
    const connectedIds = new Set(connectedNodes.map((n)=>n.data.componentId));
    const placedIds = new Set(nodes.map((n)=>n.data.componentId));
    // CDN for static content (3 pts)
    if (connectedIds.has("cdn")) {
        score += 3;
        passed.push("CDN serves content from edge locations, cutting latency from 200ms+ to <20ms for static assets");
    } else if (placedIds.has("cdn")) {
        feedback.push("You placed a CDN but it isn't connected to the request path. Put it in front of your origin (e.g., DNS → CDN → Load Balancer) so users actually hit the edge first.");
    } else {
        feedback.push("Add a CDN (CloudFront, Cloudflare, Google Cloud CDN) to serve static content from edge locations close to users. Without a CDN, every request travels to your origin server — a user in Tokyo hitting a US-East server adds 150-200ms of network latency alone.");
    }
    // Cache before DB (4 pts)
    const adj = graph.adjacency;
    const cacheNodes = connectedNodes.filter((n)=>n.data.componentId === "cache");
    const dbNodes = connectedNodes.filter((n)=>n.data.componentId === "sql-db" || n.data.componentId === "nosql-db");
    const cacheNodeIds = new Set(cacheNodes.map((c)=>c.id));
    const dbNodeIds = new Set(dbNodes.map((d)=>d.id));
    // (a) Look-through wiring: a DB is reachable within 2 hops from a cache
    const cacheInFront = cacheNodes.some((c)=>{
        const hop1 = adj.get(c.id) ?? [];
        if (hop1.some((id)=>dbNodeIds.has(id))) return true;
        return hop1.some((mid)=>(adj.get(mid) ?? []).some((id)=>dbNodeIds.has(id)));
    });
    // (b) Cache-aside wiring: some node fans out to both a cache and a DB
    //     (the app checks the cache first, falls back to the DB on a miss)
    const cacheAside = connectedNodes.some((n)=>{
        const children = adj.get(n.id) ?? [];
        return children.some((id)=>cacheNodeIds.has(id)) && children.some((id)=>dbNodeIds.has(id));
    });
    const cacheBeforeDB = cacheNodes.length > 0 && dbNodes.length > 0 && (cacheInFront || cacheAside);
    if (cacheBeforeDB) {
        score += 4;
        passed.push("Cache intercepts reads before hitting the database — memory access (~1ms) vs disk (~5-10ms)");
    } else if (cacheNodes.length > 0) {
        score += 1;
        feedback.push("Your cache exists but isn't positioned to intercept reads before the database. Connect your App Server to both Cache and DB so it checks the cache first. A cache hit returns in ~1ms; a DB query takes 5-10ms or more — that's a 5-10x latency improvement on every cached read.");
    } else if (placedIds.has("cache")) {
        feedback.push("You placed a Cache but it isn't connected to the request path. Connect your App Server to both Cache and DB (cache-aside) so reads check the cache first.");
    } else {
        feedback.push("Add a Cache layer (Redis/Memcached) between your App Servers and Database. Reading from memory (~1ms) is 5-10x faster than reading from disk (~5-10ms). For read-heavy workloads, caching can serve 80-90% of requests without ever touching the database.");
    }
    // Minimal hops on the synchronous request path (4 pts; async edges excluded)
    const { depth: maxDepth, cyclic } = computeMaxDepth(nodes, edges);
    if (cyclic) {
        feedback.push("Your design contains a cycle — requests could loop forever, so the hop count can't be credited. Break the cycle (for example, make the back-edge asynchronous via a queue) to earn these points.");
    } else if (maxDepth <= 6) {
        score += 4;
        passed.push("Request path has a lean hop count (" + maxDepth + " layers) — minimal serialized latency");
    } else if (maxDepth <= 8) {
        score += 2;
        passed.push("Request path has an acceptable hop count (" + maxDepth + " layers)");
    } else {
        feedback.push(`Request path has ${maxDepth} sequential hops — each hop adds latency (network round-trip + processing time). Consider whether all layers are necessary, or if some can be combined. Every unnecessary hop adds 2-10ms to p99 latency.`);
    }
    // DNS entry point (1 pt)
    if (connectedIds.has("dns")) {
        score += 1;
        passed.push("DNS-based geo-routing can direct users to the nearest region, reducing cross-region latency");
    } else if (placedIds.has("dns")) {
        feedback.push("You placed DNS but it isn't connected to the request path. Make it the entry point (DNS → CDN/Load Balancer) so geo-routing actually applies.");
    } else {
        feedback.push("Add DNS with geo-routing (Route 53, Cloud DNS) to direct users to the nearest region. DNS alone isn't a latency optimization, but DNS-based geo-routing can reduce cross-region latency by 50-150ms for international users.");
    }
    // Async offloading heavy work (4 pts)
    if (connectedIds.has("message-queue")) {
        score += 4;
        passed.push("Message queue offloads heavy processing from the request path, keeping responses fast");
    } else if (placedIds.has("message-queue")) {
        feedback.push("You placed a Message Queue but it isn't connected to the request path. Connect a producer (e.g., App Server) to it so heavy work can actually be enqueued instead of blocking responses.");
    } else {
        feedback.push("Add a Message Queue to offload heavy processing (transcoding, emails, analytics) from the synchronous request path. If your API handler does all the work inline, a 2-second transcoding job blocks the response for 2 seconds. Enqueue it and respond immediately.");
    }
    // Load balancer for connection reuse (2 pts)
    if (connectedIds.has("load-balancer")) {
        score += 2;
        passed.push("Load balancer enables connection pooling and keep-alive, though it adds an extra network hop");
    } else if (placedIds.has("load-balancer")) {
        feedback.push("You placed a Load Balancer but it isn't connected to the request path. Wire traffic through it so connection pooling and keep-alive actually apply.");
    } else {
        feedback.push("Add a Load Balancer for connection pooling and keep-alive support. LBs add an extra hop but maintain warm connections to backends, avoiding fresh TCP+TLS handshakes (30-100ms overhead) on each request.");
    }
    // Low-latency data store choice (2 pts) — must be on a connected path
    const hasLowLatencyStore = connectedIds.has("cache") || connectedIds.has("nosql-db");
    if (hasLowLatencyStore) {
        score += 2;
        passed.push("Using low-latency data stores (in-memory cache or NoSQL) for fast data access");
    } else if (placedIds.has("cache") || placedIds.has("nosql-db")) {
        feedback.push("You placed a low-latency store (Cache/NoSQL) but it isn't connected to the request path. Connect it so your hot path actually benefits from fast reads.");
    } else {
        feedback.push("Consider using low-latency data stores for your hot path. Redis serves reads in <1ms and DynamoDB in single-digit milliseconds, while a complex SQL JOIN can take 50-100ms. Pick the right store for your access pattern.");
    }
    return {
        category: "Latency",
        score,
        maxScore: 20,
        feedback,
        passed
    };
}
/**
 * Longest chain of synchronous hops. Async edges (queues, notifications,
 * monitoring) are excluded — they aren't user-facing latency. Edges touching
 * unknown nodes (text annotations) are ignored, and parallel edges deduped.
 * If a cycle prevents full processing, depth is reported as the worst case
 * (every node serialized) and flagged so the rule doesn't award hop bonuses.
 */ function computeMaxDepth(nodes, edges) {
    const nodeIds = new Set(nodes.map((n)=>n.id));
    const adjacency = new Map();
    const inDegree = new Map();
    for (const node of nodes){
        adjacency.set(node.id, []);
        inDegree.set(node.id, 0);
    }
    const seen = new Set();
    for (const edge of edges){
        if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) continue;
        if (edge.data?.async === true) continue; // async hops aren't user-facing latency
        const key = `${edge.source}->${edge.target}`;
        if (seen.has(key)) continue;
        seen.add(key);
        adjacency.get(edge.source).push(edge.target);
        inDegree.set(edge.target, (inDegree.get(edge.target) ?? 0) + 1);
    }
    // Topological sort (Kahn's algorithm) — process each node only after all predecessors
    const dist = new Map();
    const remaining = new Map(inDegree);
    const queue = [];
    for (const node of nodes){
        if ((remaining.get(node.id) ?? 0) === 0) {
            queue.push(node.id);
            dist.set(node.id, 1);
        }
    }
    let head = 0;
    while(head < queue.length){
        const id = queue[head++];
        for (const child of adjacency.get(id) ?? []){
            const newDist = (dist.get(id) ?? 1) + 1;
            if (newDist > (dist.get(child) ?? 0)) dist.set(child, newDist);
            const newDeg = (remaining.get(child) ?? 1) - 1;
            remaining.set(child, newDeg);
            if (newDeg === 0) queue.push(child);
        }
    }
    if (head < nodes.length) {
        // Some nodes never resolved — there's a cycle; assume worst-case depth.
        return {
            depth: nodes.length,
            cyclic: true
        };
    }
    return {
        depth: Math.max(0, ...dist.values()),
        cyclic: false
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/rules/cost.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreCost",
    ()=>scoreCost
]);
function scoreCost(nodes, edges, graph) {
    const feedback = [];
    const passed = [];
    let score = 0;
    const componentIds = nodes.map((n)=>n.data.componentId);
    const connectedNodes = nodes.filter((n)=>graph.reachable.has(n.id));
    const connectedIds = new Set(connectedNodes.map((n)=>n.data.componentId));
    const placedIds = new Set(componentIds);
    // Not over-provisioned (3 pts) — total component count reasonable
    if (nodes.length >= 3 && nodes.length <= 25) {
        score += 3;
        passed.push("Appropriate number of components (" + nodes.length + ") — not over-engineered or under-provisioned");
    } else if (nodes.length < 3) {
        score += 1;
        feedback.push("System has only " + nodes.length + " component(s) — this is under-provisioned for any real workload. A minimal production system needs at least DNS → Load Balancer → App Server → Database. Add the missing layers.");
    } else if (nodes.length <= 35) {
        score += 1;
        feedback.push("System has " + nodes.length + " components — this is getting complex. Each component adds operational cost (hosting, monitoring, on-call burden). Verify each component serves a distinct, necessary purpose.");
    } else {
        feedback.push("System has " + nodes.length + " components — this is likely over-engineered. Each component adds operational cost (hosting, monitoring, on-call burden). Over-engineering a simple problem is as costly as under-engineering a complex one. Consider consolidating.");
    }
    // Appropriate storage choice (3 pts)
    const storageNodes = nodes.filter((n)=>n.data.category === "storage");
    if (storageNodes.length >= 1 && storageNodes.length <= 5) {
        score += 3;
        passed.push("Appropriate number of storage components — each serves a distinct purpose");
    } else if (storageNodes.length === 0) {
        feedback.push("No storage components in your design — where is data persisted? Every system needs at least one database. Without persistent storage, you lose all data on restart.");
    } else {
        feedback.push("You have " + storageNodes.length + " storage components — consider consolidating. Each storage system requires backups, monitoring, and operational expertise. Use the minimum number of distinct stores that satisfy your access patterns.");
    }
    // Caching reduces DB load = cost savings (3 pts) — both must be on the request path
    const hasCache = connectedIds.has("cache");
    const hasDB = connectedIds.has("sql-db") || connectedIds.has("nosql-db");
    if (hasCache && hasDB) {
        score += 3;
        passed.push("Cache reduces expensive database queries — a $50/mo Redis instance can save $500/mo in DB scaling costs");
    } else if (hasDB && !hasCache) {
        if (placedIds.has("cache")) {
            feedback.push("You placed a Cache but it isn't connected to the request path — it's costing money without absorbing any database load. Connect your App Servers to it.");
        } else {
            feedback.push("Add a Cache (Redis/Memcached) to reduce database load and cost. Databases are one of the most expensive components to scale. A cache costing $50-100/month can handle reads that would otherwise require a $500+/month larger DB instance.");
        }
    }
    // No cache or no DB = 0 points for this check (cache cost savings only apply when both exist)
    // No disconnected nodes (3 pts) — self-loops and edges to non-component
    // nodes (text annotations) don't count as being "connected"
    const nodeIds = new Set(nodes.map((n)=>n.id));
    const attachedNodes = new Set();
    for (const edge of edges){
        if (edge.source === edge.target) continue;
        if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) continue;
        attachedNodes.add(edge.source);
        attachedNodes.add(edge.target);
    }
    const disconnected = nodes.filter((n)=>!attachedNodes.has(n.id));
    if (disconnected.length === 0) {
        score += 3;
        passed.push("All components are connected — no wasted resources sitting idle");
    } else {
        feedback.push(`${disconnected.length} disconnected component(s) are not connected to anything — they're costing money without providing value. Either connect them to your architecture or remove them. Idle infrastructure is pure waste.`);
    }
    // CDN offloads origin traffic (3 pts)
    if (connectedIds.has("cdn")) {
        score += 3;
        passed.push("CDN offloads traffic from origin servers, reducing compute and bandwidth costs significantly");
    } else if (placedIds.has("cdn")) {
        feedback.push("You placed a CDN but it isn't connected to the request path — it can't offload any origin traffic. Put it in front of your origin servers.");
    } else {
        feedback.push("Add a CDN to offload static content delivery from your origin servers. CDN bandwidth costs $0.01-0.08/GB vs $0.09-0.12/GB for origin egress. For a media-heavy service serving 100TB/month, a CDN can save $4,000-8,000/month in bandwidth alone.");
    }
    // Async processing avoids over-provisioning compute (3 pts)
    if (connectedIds.has("message-queue")) {
        score += 3;
        passed.push("Message queue enables right-sizing compute — process background tasks at lower priority instead of provisioning for peak");
    } else if (placedIds.has("message-queue")) {
        feedback.push("You placed a Message Queue but it isn't connected to the request path — no work is being offloaded to it. Connect a producer so it can absorb background tasks.");
    } else {
        feedback.push("Add a Message Queue for background processing. Without async offloading, you must provision your App Servers for peak load including background tasks. With a queue, you can run cheaper, smaller worker instances that process tasks at their own pace.");
    }
    // Efficient architecture — not duplicating functionality (2 pts)
    const hasApiGw = placedIds.has("api-gateway");
    const hasRateLimiter = placedIds.has("rate-limiter");
    const hasServiceMesh = placedIds.has("service-mesh");
    const duplicateNetworking = hasApiGw && hasRateLimiter && hasServiceMesh;
    if (!duplicateNetworking) {
        score += 2;
        passed.push("No excessive duplication of networking functionality");
    } else {
        feedback.push("You have an API Gateway, Rate Limiter, and Service Mesh — some functionality overlaps. API Gateways often include rate limiting built-in. Consider whether you need all three or if consolidating would reduce complexity and cost.");
    }
    return {
        category: "Cost Efficiency",
        score,
        maxScore: 20,
        feedback,
        passed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/rules/tradeoffs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreTradeoffs",
    ()=>scoreTradeoffs
]);
function scoreTradeoffs(nodes, // eslint-disable-next-line @typescript-eslint/no-unused-vars
_edges, graph) {
    const feedback = [];
    const passed = [];
    let score = 0;
    const connectedNodes = nodes.filter((n)=>graph.reachable.has(n.id));
    const connectedIds = new Set(connectedNodes.map((n)=>n.data.componentId));
    const placedIds = new Set(nodes.map((n)=>n.data.componentId));
    // Read/write separation (3 pts) — cache for reads + DB for writes, on the request path
    const hasCache = connectedIds.has("cache");
    const hasDB = connectedIds.has("sql-db") || connectedIds.has("nosql-db");
    if (hasCache && hasDB) {
        score += 3;
        passed.push("Read/write separation via cache + database — optimizes each path independently");
    } else if (placedIds.has("cache") && (placedIds.has("sql-db") || placedIds.has("nosql-db"))) {
        feedback.push("You placed a Cache and a Database, but they aren't both connected to the request path. Wire them in (App Server → Cache for reads, App Server → DB for writes) to get credit for read/write separation.");
    } else {
        feedback.push("Separate your read and write paths (Cache for reads, DB for writes). This is a core system design pattern — reads and writes have different scaling characteristics. Reads can be served from cheap, fast caches while writes go to durable storage. This lets you optimize each path independently.");
    }
    // Polyglot persistence (3 pts) — multiple durable storage types suited to
    // different access patterns. Cache is excluded: cache+DB is already
    // rewarded above as read/write separation.
    const polyglotTypes = [
        "sql-db",
        "nosql-db",
        "timeseries-db",
        "graph-db",
        "search",
        "object-storage"
    ];
    const storageTypes = new Set();
    for (const n of connectedNodes){
        if (polyglotTypes.includes(n.data.componentId)) storageTypes.add(n.data.componentId);
    }
    if (storageTypes.size >= 2) {
        score += 3;
        passed.push("Polyglot persistence — using " + storageTypes.size + " distinct storage types suited to different access patterns");
    } else if (storageTypes.size === 1) {
        score += 1;
        feedback.push("Consider polyglot persistence — using multiple storage technologies suited to different access patterns. For example, SQL for transactional data, NoSQL for high-throughput key-value access, and object storage for blobs. One storage type rarely fits all workloads efficiently.");
    } else {
        feedback.push("No connected durable storage in your design — add at least one. Real systems benefit from polyglot persistence: different storage technologies (SQL, NoSQL, object storage) suited to different access patterns and consistency requirements.");
    }
    // Async processing with queues (3 pts)
    if (connectedIds.has("message-queue")) {
        score += 3;
        passed.push("Message queue decouples services — trading immediate consistency for resilience and throughput");
    } else if (placedIds.has("message-queue")) {
        feedback.push("You placed a Message Queue but it isn't connected to the request path. Connect producers and consumers to it so the decoupling actually happens.");
    } else {
        feedback.push("Add a Message Queue (Kafka, SQS, RabbitMQ) to decouple synchronous dependencies. This is a key tradeoff: you accept eventual consistency in exchange for much higher resilience and throughput. If Service B goes down, Service A can still enqueue work instead of failing.");
    }
    // Defense in depth (3 pts) — rate limiter or API gateway
    const hasDefense = connectedIds.has("rate-limiter") || connectedIds.has("api-gateway");
    if (hasDefense) {
        score += 3;
        passed.push("Defense in depth with rate limiting / API gateway — protects against abuse and overload");
    } else if (placedIds.has("rate-limiter") || placedIds.has("api-gateway")) {
        feedback.push("You placed an API Gateway / Rate Limiter but it isn't connected to the request path. Put it in front of your services so it can actually filter traffic.");
    } else {
        feedback.push("Add an API Gateway or Rate Limiter for security and traffic control. This is a latency-vs-safety tradeoff: each request pays ~1-5ms extra for protection against DDoS, abuse, and cascading failures. Without it, one bad actor can bring down your entire system.");
    }
    // Overall architecture depth (3 pts) — at least 4 distinct connected component categories
    const uniqueCategories = new Set(connectedNodes.map((n)=>n.data.category));
    if (uniqueCategories.size >= 4) {
        score += 3;
        passed.push("Design covers " + uniqueCategories.size + " architectural layers — shows breadth of thinking");
    } else if (uniqueCategories.size >= 3) {
        score += 1;
        feedback.push("Your connected design covers " + uniqueCategories.size + " categories but is missing important layers. A well-rounded system design typically spans networking (LB, CDN), compute (app servers), storage (DB, cache), and messaging (queues) — consider which layers you're missing.");
    } else {
        feedback.push("Your connected design only covers " + uniqueCategories.size + " category/categories — production systems need breadth. Add (and connect) components from networking, compute, storage, and messaging categories to show you've considered the full picture.");
    }
    // Auth / security considerations (3 pts)
    const hasAuthLayer = connectedIds.has("auth-service") || connectedIds.has("api-gateway") && connectedIds.has("rate-limiter");
    if (hasAuthLayer) {
        score += 3;
        passed.push("Security layer (Auth Service / API Gateway + Rate Limiter) protects the system");
    } else if (placedIds.has("auth-service") || placedIds.has("api-gateway") && placedIds.has("rate-limiter")) {
        feedback.push("You placed security components (Auth Service / API Gateway + Rate Limiter) but they aren't connected to the request path. Wire them in so requests are actually authenticated and throttled.");
    } else {
        feedback.push("Add an Auth Service or security layer (API Gateway + Rate Limiter) to your design. Authentication and authorization are non-negotiable for any user-facing system. Centralizing auth into a dedicated service prevents security logic from being duplicated across microservices.");
    }
    // Monitoring / observability awareness (2 pts)
    if (connectedIds.has("monitoring")) {
        score += 2;
        passed.push("Monitoring shows awareness that you need observability to manage tradeoffs in production");
    } else if (placedIds.has("monitoring")) {
        feedback.push("You placed Monitoring but it isn't connected to anything. Connect your services to it so metrics actually flow.");
    } else {
        feedback.push("Add Monitoring to your design. In production, every tradeoff you make (consistency vs availability, cost vs performance) needs to be measured and validated. Without metrics, you're flying blind — you won't know if your cache hit rate justifies its cost or if your queue is creating unacceptable delays.");
    }
    return {
        category: "Trade-offs",
        score,
        maxScore: 20,
        feedback,
        passed
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/scoring/scorer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scoreDesign",
    ()=>scoreDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$scalability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/rules/scalability.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$availability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/rules/availability.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$latency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/rules/latency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$cost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/rules/cost.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$tradeoffs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/scoring/rules/tradeoffs.ts [app-client] (ecmascript)");
;
;
;
;
;
function getVerdict(total) {
    if (total >= 86) return {
        verdict: "Architect Level",
        verdictColor: "text-emerald-400"
    };
    if (total >= 71) return {
        verdict: "Excellent",
        verdictColor: "text-cyan-400"
    };
    if (total >= 51) return {
        verdict: "Good",
        verdictColor: "text-blue-400"
    };
    if (total >= 31) return {
        verdict: "Decent",
        verdictColor: "text-amber-400"
    };
    return {
        verdict: "Needs Work",
        verdictColor: "text-rose-400"
    };
}
/**
 * Build the connectivity context shared by all scoring rules: a cleaned
 * adjacency map (component nodes only, no self-loops, parallel edges deduped)
 * and the set of nodes reachable from entry points. Presence-based rules use
 * the reachable set so a pile of disconnected components doesn't score points.
 */ function buildScoringGraph(nodes, edges) {
    const nodeIds = new Set(nodes.map((n)=>n.id));
    const adjacency = new Map();
    const inDegree = new Map();
    for (const n of nodes){
        adjacency.set(n.id, []);
        inDegree.set(n.id, 0);
    }
    const seen = new Set();
    let edgeCount = 0;
    for (const e of edges){
        // Skip edges touching non-component nodes (text annotations) and self-loops
        if (!nodeIds.has(e.source) || !nodeIds.has(e.target) || e.source === e.target) continue;
        const key = `${e.source}->${e.target}`;
        if (seen.has(key)) continue;
        seen.add(key);
        edgeCount++;
        adjacency.get(e.source).push(e.target);
        inDegree.set(e.target, (inDegree.get(e.target) ?? 0) + 1);
    }
    const reachable = new Set();
    if (edgeCount === 0) {
        // No wiring at all: nothing is on a request path — except the trivial
        // single-node canvas, where the lone node is the whole system.
        if (nodes.length === 1) reachable.add(nodes[0].id);
    } else {
        // Entries: in-degree 0 with at least one outgoing edge
        const queue = [];
        for (const n of nodes){
            if ((inDegree.get(n.id) ?? 0) === 0 && (adjacency.get(n.id)?.length ?? 0) > 0) {
                queue.push(n.id);
                reachable.add(n.id);
            }
        }
        let head = 0;
        while(head < queue.length){
            const id = queue[head++];
            for (const child of adjacency.get(id) ?? []){
                if (!reachable.has(child)) {
                    reachable.add(child);
                    queue.push(child);
                }
            }
        }
    }
    return {
        adjacency,
        reachable
    };
}
function scoreDesign(nodes, edges) {
    if (nodes.length === 0) {
        return {
            total: 0,
            categories: [],
            verdict: "Empty Canvas",
            verdictColor: "text-zinc-500",
            summary: "Add components to the canvas to get a score."
        };
    }
    const graph = buildScoringGraph(nodes, edges);
    const categories = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$scalability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreScalability"])(nodes, edges, graph),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$availability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreAvailability"])(nodes, edges, graph),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$latency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreLatency"])(nodes, edges, graph),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$cost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreCost"])(nodes, edges, graph),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$scoring$2f$rules$2f$tradeoffs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreTradeoffs"])(nodes, edges, graph)
    ];
    // Clamp each category score to [0, maxScore]
    for (const c of categories){
        c.score = Math.max(0, Math.min(c.score, c.maxScore));
    }
    const rawTotal = categories.reduce((sum, c)=>sum + c.score, 0);
    const total = Math.max(0, Math.min(rawTotal, 100));
    const { verdict, verdictColor } = getVerdict(total);
    const totalFeedback = categories.flatMap((c)=>c.feedback);
    const summary = totalFeedback.length === 0 ? "Outstanding system design! All criteria met." : `${totalFeedback.length} suggestion${totalFeedback.length > 1 ? "s" : ""} for improvement.`;
    return {
        total,
        categories,
        verdict,
        verdictColor,
        summary
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/system-design-simulator/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/src/components/layout/app-shell.tsx [app-client] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$src$2f$components$2f$layout$2f$app$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {}, void 0, false, {
        fileName: "[project]/Documents/system-design-simulator/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_system-design-simulator_src_07wnuu3._.js.map