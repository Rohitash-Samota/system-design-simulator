module.exports = [
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRootContext",
    ()=>CompositeRootContext,
    "useCompositeRootContext",
    ()=>useCompositeRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusableWhenDisabled",
    ()=>useFocusableWhenDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const additionalProps = {
            // allow Tabbing away from focusableWhenDisabled elements
            onKeyDown (event) {
                if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                    event.preventDefault();
                }
            }
        };
        if (!composite) {
            additionalProps.tabIndex = tabIndexProp;
            if (!isNativeButton && disabled) {
                additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
            }
        }
        if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
            additionalProps['aria-disabled'] = disabled;
        }
        if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
            additionalProps.disabled = disabled;
        }
        return additionalProps;
    }, [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return {
        props
    };
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/use-button/useButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/safeReact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const compositeRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeRootContext"])(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
    const { props: focusableWhenDisabledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusableWhenDisabled"])({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (!elementRef.current) {
                return;
            }
            const isButtonTag = isButtonElement(elementRef.current);
            if (isNativeButton) {
                if (!isButtonTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = 'A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Use a real <button> in the ' + '`render` prop, or set `nativeButton` to `false`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            } else if (isButtonTag) {
                const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                const message = 'A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while Base UI applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set ' + '`nativeButton` to `true`.';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
            }
        }, [
            isNativeButton
        ]);
    }
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        const element = elementRef.current;
        if (!isButtonElement(element)) {
            return;
        }
        if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
            element.disabled = false;
        }
    }, [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((externalProps = {})=>{
        const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
        const type = isNativeButton ? 'button' : undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            type,
            onClick (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnClick?.(event);
            },
            onMouseDown (event) {
                if (!disabled) {
                    externalOnMouseDown?.(event);
                }
            },
            onKeyDown (event) {
                if (disabled) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                externalOnKeyDown?.(event);
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                const isCurrentTarget = event.target === event.currentTarget;
                const currentTarget = event.currentTarget;
                const isButton = isButtonElement(currentTarget);
                const isLink = !isNativeButton && isValidLinkElement(currentTarget);
                const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
                const isEnterKey = event.key === 'Enter';
                const isSpaceKey = event.key === ' ';
                const role = currentTarget.getAttribute('role');
                const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
                if (isCurrentTarget && isCompositeItem && isSpaceKey) {
                    if (event.defaultPrevented && isTextNavigationRole) {
                        return;
                    }
                    event.preventDefault();
                    if (isLink || isNativeButton && isButton) {
                        currentTarget.click();
                        event.preventBaseUIHandler();
                    } else if (shouldClick) {
                        externalOnClick?.(event);
                        event.preventBaseUIHandler();
                    }
                    return;
                }
                // Keyboard accessibility for native and non-native elements.
                if (shouldClick) {
                    if (!isNativeButton && (isSpaceKey || isEnterKey)) {
                        event.preventDefault();
                    }
                    if (!isNativeButton && isEnterKey) {
                        externalOnClick?.(event);
                    }
                }
            },
            onKeyUp (event) {
                if (disabled) {
                    return;
                }
                // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                externalOnKeyUp?.(event);
                if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
                    event.preventDefault();
                    return;
                }
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                // Keyboard accessibility for non interactive elements
                if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === ' ') {
                    externalOnClick?.(event);
                }
            },
            onPointerDown (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnPointerDown?.(event);
            }
        }, !isNativeButton ? {
            role: 'button'
        } : undefined, focusableWhenDisabledProps, otherExternalProps);
    }, [
        disabled,
        focusableWhenDisabledProps,
        isCompositeItem,
        isNativeButton
    ]);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        elementRef.current = element;
        updateDisabled();
    });
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === 'A' && elem?.href);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeListContext",
    ()=>CompositeListContext,
    "useCompositeListContext",
    ()=>useCompositeListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const CompositeListContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>{
        return ()=>{};
    },
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
});
if ("TURBOPACK compile-time truthy", 1) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CompositeListContext);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeList",
    ()=>CompositeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable no-bitwise */ 'use client';
;
;
;
;
;
;
function CompositeList(props) {
    const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(onMapChangeProp);
    const nextIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(createListeners).current;
    // We use a stable `map` to avoid O(n^2) re-allocation costs for large lists.
    // `mapTick` is our re-render trigger mechanism. We also need to update the
    // elements and label refs, but there's a lot of async work going on and sometimes
    // the effect that handles `onMapChange` gets called after those refs have been
    // filled, and we don't want to lose those values by setting their lengths to `0`.
    // We also need to have them at the proper length because floating-ui uses that
    // information for list navigation.
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefWithInit"])(createMap).current;
    // `mapTick` uses a counter rather than objects for low precision-loss risk and better memory efficiency
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const lastTickRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](mapTick);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((node, metadata)=>{
        map.set(node, metadata ?? null);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((node)=>{
        map.delete(node);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const sortedMap = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        // `mapTick` is the `useMemo` trigger as `map` is stable.
        disableEslintWarning(mapTick);
        const newMap = new Map();
        // Filter out disconnected elements before sorting to avoid inconsistent
        // compareDocumentPosition results when elements are detached from the DOM.
        const sortedNodes = Array.from(map.keys()).filter((node)=>node.isConnected).sort(sortByDocumentPosition);
        sortedNodes.forEach((node, index)=>{
            const metadata = map.get(node) ?? {};
            newMap.set(node, {
                ...metadata,
                index
            });
        });
        return newMap;
    }, [
        map,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (typeof MutationObserver !== 'function' || sortedMap.size === 0) {
            return undefined;
        }
        const mutationObserver = new MutationObserver((entries)=>{
            const diff = new Set();
            const updateDiff = (node)=>diff.has(node) ? diff.delete(node) : diff.add(node);
            entries.forEach((entry)=>{
                entry.removedNodes.forEach(updateDiff);
                entry.addedNodes.forEach(updateDiff);
            });
            if (diff.size === 0) {
                lastTickRef.current += 1;
                setMapTick(lastTickRef.current);
            }
        });
        sortedMap.forEach((_, node)=>{
            if (node.parentElement) {
                mutationObserver.observe(node.parentElement, {
                    childList: true
                });
            }
        });
        return ()=>{
            mutationObserver.disconnect();
        };
    }, [
        sortedMap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        const shouldUpdateLengths = lastTickRef.current === mapTick;
        if (shouldUpdateLengths) {
            if (elementsRef.current.length !== sortedMap.size) {
                elementsRef.current.length = sortedMap.size;
            }
            if (labelsRef && labelsRef.current.length !== sortedMap.size) {
                labelsRef.current.length = sortedMap.size;
            }
            nextIndexRef.current = sortedMap.size;
        }
        onMapChange(sortedMap);
    }, [
        onMapChange,
        sortedMap,
        elementsRef,
        labelsRef,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        return ()=>{
            elementsRef.current = [];
        };
    }, [
        elementsRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        return ()=>{
            if (labelsRef) {
                labelsRef.current = [];
            }
        };
    }, [
        labelsRef
    ]);
    const subscribeMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((fn)=>{
        listeners.add(fn);
        return ()=>{
            listeners.delete(fn);
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        listeners.forEach((l)=>l(sortedMap));
    }, [
        listeners,
        sortedMap
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            register,
            unregister,
            subscribeMapChange,
            elementsRef,
            labelsRef,
            nextIndexRef
        }), [
        register,
        unregister,
        subscribeMapChange,
        elementsRef,
        labelsRef,
        nextIndexRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeListContext"].Provider, {
        value: contextValue,
        children: children
    });
}
function createMap() {
    return new Map();
}
function createListeners() {
    return new Set();
}
function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
function disableEslintWarning(_) {}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsRootContext",
    ()=>TabsRootContext,
    "useTabsRootContext",
    ()=>useTabsRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const TabsRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TabsRootContext.displayName = "TabsRootContext";
function useTabsRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](TabsRootContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsRootDataAttributes",
    ()=>TabsRootDataAttributes
]);
let TabsRootDataAttributes = /*#__PURE__*/ function(TabsRootDataAttributes) {
    /**
   * Indicates the direction of the activation (based on the previous active tab).
   * @type {'left' | 'right' | 'up' | 'down' | 'none'}
   */ TabsRootDataAttributes["activationDirection"] = "data-activation-direction";
    /**
   * Indicates the orientation of the tabs.
   * @type {'horizontal' | 'vertical'}
   */ TabsRootDataAttributes["orientation"] = "data-orientation";
    return TabsRootDataAttributes;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tabsStateAttributesMapping",
    ()=>tabsStateAttributesMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootDataAttributes.js [app-ssr] (ecmascript)");
;
const tabsStateAttributesMapping = {
    tabActivationDirection: (dir)=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsRootDataAttributes"].activationDirection]: dir
        })
};
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsRoot",
    ()=>TabsRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useControlled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const TabsRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function TabsRoot(componentProps, forwardedRef) {
    const { className, defaultValue: defaultValueProp = 0, onValueChange: onValueChangeProp, orientation = 'horizontal', render, value: valueProp, ...elementProps } = componentProps;
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    // Track whether the user explicitly provided a `defaultValue` prop.
    // Used to determine if we should honor a disabled tab selection.
    const hasExplicitDefaultValueProp = Object.hasOwn(componentProps, 'defaultValue');
    const tabPanelRefs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const [mountedTabPanels, setMountedTabPanels] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Map());
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: defaultValueProp,
        name: 'Tabs',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const [tabMap, setTabMap] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Map());
    const [tabActivationDirection, setTabActivationDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('none');
    const onValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((newValue, eventDetails)=>{
        onValueChangeProp?.(newValue, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        setValue(newValue);
        setTabActivationDirection(eventDetails.activationDirection);
    });
    const registerMountedTabPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((panelValue, panelId)=>{
        setMountedTabPanels((prev)=>{
            if (prev.get(panelValue) === panelId) {
                return prev;
            }
            const next = new Map(prev);
            next.set(panelValue, panelId);
            return next;
        });
    });
    const unregisterMountedTabPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((panelValue, panelId)=>{
        setMountedTabPanels((prev)=>{
            if (!prev.has(panelValue) || prev.get(panelValue) !== panelId) {
                return prev;
            }
            const next = new Map(prev);
            next.delete(panelValue);
            return next;
        });
    });
    // get the `id` attribute of <Tabs.Panel> to set as the value of `aria-controls` on <Tabs.Tab>
    const getTabPanelIdByValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((tabValue)=>{
        return mountedTabPanels.get(tabValue);
    }, [
        mountedTabPanels
    ]);
    // get the `id` attribute of <Tabs.Tab> to set as the value of `aria-labelledby` on <Tabs.Panel>
    const getTabIdByPanelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((tabPanelValue)=>{
        for (const tabMetadata of tabMap.values()){
            if (tabPanelValue === tabMetadata?.value) {
                return tabMetadata?.id;
            }
        }
        return undefined;
    }, [
        tabMap
    ]);
    // used in `useActivationDirectionDetector` for setting data-activation-direction
    const getTabElementBySelectedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((selectedValue)=>{
        if (selectedValue === undefined) {
            return null;
        }
        for (const [tabElement, tabMetadata] of tabMap.entries()){
            if (tabMetadata != null && selectedValue === (tabMetadata.value ?? tabMetadata.index)) {
                return tabElement;
            }
        }
        return null;
    }, [
        tabMap
    ]);
    const tabsContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            direction,
            getTabElementBySelectedValue,
            getTabIdByPanelValue,
            getTabPanelIdByValue,
            onValueChange,
            orientation,
            registerMountedTabPanel,
            setTabMap,
            unregisterMountedTabPanel,
            tabActivationDirection,
            value
        }), [
        direction,
        getTabElementBySelectedValue,
        getTabIdByPanelValue,
        getTabPanelIdByValue,
        onValueChange,
        orientation,
        registerMountedTabPanel,
        setTabMap,
        unregisterMountedTabPanel,
        tabActivationDirection,
        value
    ]);
    const selectedTabMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        for (const tabMetadata of tabMap.values()){
            if (tabMetadata != null && tabMetadata.value === value) {
                return tabMetadata;
            }
        }
        return undefined;
    }, [
        tabMap,
        value
    ]);
    // Find the first non-disabled tab value.
    // Used as a fallback when the current selection is disabled or missing.
    const firstEnabledTabValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        for (const tabMetadata of tabMap.values()){
            if (tabMetadata != null && !tabMetadata.disabled) {
                return tabMetadata.value;
            }
        }
        return undefined;
    }, [
        tabMap
    ]);
    // Automatically switch to the first enabled tab when:
    // - The current selection is disabled (and wasn't explicitly set via defaultValue)
    // - The current selection is missing (tab was removed from DOM)
    // Falls back to null if all tabs are disabled.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (isControlled || tabMap.size === 0) {
            return;
        }
        const selectionIsDisabled = selectedTabMetadata?.disabled;
        const selectionIsMissing = selectedTabMetadata == null && value !== null;
        const shouldHonorExplicitDefaultSelection = hasExplicitDefaultValueProp && selectionIsDisabled && value === defaultValueProp;
        if (shouldHonorExplicitDefaultSelection) {
            return;
        }
        if (!selectionIsDisabled && !selectionIsMissing) {
            return;
        }
        const fallbackValue = firstEnabledTabValue ?? null;
        if (value === fallbackValue) {
            return;
        }
        setValue(fallbackValue);
        setTabActivationDirection('none');
    }, [
        defaultValueProp,
        firstEnabledTabValue,
        hasExplicitDefaultValueProp,
        isControlled,
        selectedTabMetadata,
        setTabActivationDirection,
        setValue,
        tabMap,
        value
    ]);
    const state = {
        orientation,
        tabActivationDirection
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabsStateAttributesMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsRootContext"].Provider, {
        value: tabsContextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeList"], {
            elementsRef: tabPanelRefs,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) TabsRoot.displayName = "TabsRoot";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_COMPOSITE_ITEM",
    ()=>ACTIVE_COMPOSITE_ITEM
]);
const ACTIVE_COMPOSITE_ITEM = 'data-composite-item-active';
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndexGuessBehavior",
    ()=>IndexGuessBehavior,
    "useCompositeListItem",
    ()=>useCompositeListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-ssr] (ecmascript)");
'use client';
;
;
;
let IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
    IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
    IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
    return IndexGuessBehavior;
}({});
function useCompositeListItem(params = {}) {
    const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
    const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeListContext"])();
    const indexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](-1);
    const [index, setIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? ()=>{
        if (indexRef.current === -1) {
            const newIndex = nextIndexRef.current;
            nextIndexRef.current += 1;
            indexRef.current = newIndex;
        }
        return indexRef.current;
    } : -1));
    const componentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        componentRef.current = node;
        if (index !== -1 && node !== null) {
            elementsRef.current[index] = node;
            if (labelsRef) {
                const isLabelDefined = label !== undefined;
                labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
            }
        }
    }, [
        index,
        elementsRef,
        labelsRef,
        label,
        textRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (externalIndex != null) {
            return undefined;
        }
        const node = componentRef.current;
        if (node) {
            register(node, metadata);
            return ()=>{
                unregister(node);
            };
        }
        return undefined;
    }, [
        externalIndex,
        register,
        unregister,
        metadata
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (externalIndex != null) {
            return undefined;
        }
        return subscribeMapChange((map)=>{
            const i = componentRef.current ? map.get(componentRef.current)?.index : null;
            if (i != null) {
                setIndex(i);
            }
        });
    }, [
        externalIndex,
        subscribeMapChange,
        setIndex
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ref,
            index
        }), [
        index,
        ref
    ]);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/item/useCompositeItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompositeItem",
    ()=>useCompositeItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function useCompositeItem(params = {}) {
    const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeRootContext"])();
    const { ref, index } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeListItem"])(params);
    const isHighlighted = highlightedIndex === index;
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(ref, itemRef);
    const compositeProps = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            tabIndex: isHighlighted ? 0 : -1,
            onFocus () {
                onHighlightedIndexChange(index);
            },
            onMouseMove () {
                const item = itemRef.current;
                if (!highlightItemOnHover || !item) {
                    return;
                }
                const disabled = item.hasAttribute('disabled') || item.ariaDisabled === 'true';
                if (!isHighlighted && !disabled) {
                    item.focus();
                }
            }
        }), [
        isHighlighted,
        onHighlightedIndexChange,
        index,
        highlightItemOnHover
    ]);
    return {
        compositeProps,
        compositeRef: mergedRef,
        index
    };
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsListContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsListContext",
    ()=>TabsListContext,
    "useTabsListContext",
    ()=>useTabsListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const TabsListContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) TabsListContext.displayName = "TabsListContext";
function useTabsListContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](TabsListContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/tab/TabsTab.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsTab",
    ()=>TabsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/owner.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/use-button/useButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$item$2f$useCompositeItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/item/useCompositeItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-ssr] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-ssr] (ecmascript)");
'use client';
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
const TabsTab = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function TabsTab(componentProps, forwardedRef) {
    const { className, disabled = false, render, value, id: idProp, nativeButton = true, ...elementProps } = componentProps;
    const { value: activeTabValue, getTabPanelIdByValue, orientation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsRootContext"])();
    const { activateOnFocus, highlightedTabIndex, onTabActivation, registerTabResizeObserverElement, setHighlightedTabIndex, tabsListElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsListContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const tabMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            disabled,
            id,
            value
        }), [
        disabled,
        id,
        value
    ]);
    const { compositeProps, compositeRef, index } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$item$2f$useCompositeItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeItem"])({
        metadata: tabMetadata
    });
    const active = value === activeTabValue;
    const isNavigatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const tabElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const tabElement = tabElementRef.current;
        if (!tabElement) {
            return undefined;
        }
        return registerTabResizeObserverElement(tabElement);
    }, [
        registerTabResizeObserverElement
    ]);
    // Keep the highlighted item in sync with the currently active tab
    // when the value prop changes externally (controlled mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (isNavigatingRef.current) {
            isNavigatingRef.current = false;
            return;
        }
        if (!(active && index > -1 && highlightedTabIndex !== index)) {
            return;
        }
        // If focus is currently within the tabs list, don't override the roving
        // focus highlight. This keeps keyboard navigation relative to the focused
        // item after an external/asynchronous selection change.
        const listElement = tabsListElement;
        if (listElement != null) {
            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(listElement));
            if (activeEl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(listElement, activeEl)) {
                return;
            }
        }
        // Don't highlight disabled tabs to prevent them from interfering with keyboard navigation.
        // Keyboard focus (tabIndex) should remain on an enabled tab even when a disabled tab is selected.
        if (!disabled) {
            setHighlightedTabIndex(index);
        }
    }, [
        active,
        index,
        highlightedTabIndex,
        setHighlightedTabIndex,
        disabled,
        tabsListElement
    ]);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton,
        focusableWhenDisabled: true
    });
    const tabPanelId = getTabPanelIdByValue(value);
    const isPressingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const isMainButtonRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    function onClick(event) {
        if (active || disabled) {
            return;
        }
        onTabActivation(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent, undefined, {
            activationDirection: 'none'
        }));
    }
    function onFocus(event) {
        if (active) {
            return;
        }
        // Only highlight enabled tabs when focused (disabled tabs remain focusable via focusableWhenDisabled).
        if (index > -1 && !disabled) {
            setHighlightedTabIndex(index);
        }
        if (disabled) {
            return;
        }
        if (activateOnFocus && (!isPressingRef.current || // keyboard or touch focus
        isPressingRef.current && isMainButtonRef.current) // mouse focus
        ) {
            onTabActivation(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, event.nativeEvent, undefined, {
                activationDirection: 'none'
            }));
        }
    }
    function onPointerDown(event) {
        if (active || disabled) {
            return;
        }
        isPressingRef.current = true;
        function handlePointerUp() {
            isPressingRef.current = false;
            isMainButtonRef.current = false;
        }
        if (!event.button || event.button === 0) {
            isMainButtonRef.current = true;
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget);
            doc.addEventListener('pointerup', handlePointerUp, {
                once: true
            });
        }
    }
    const state = {
        disabled,
        active,
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef,
            compositeRef,
            tabElementRef
        ],
        props: [
            compositeProps,
            {
                role: 'tab',
                'aria-controls': tabPanelId,
                'aria-selected': active,
                id,
                onClick,
                onFocus,
                onPointerDown,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_COMPOSITE_ITEM"]]: active ? '' : undefined,
                onKeyDownCapture () {
                    isNavigatingRef.current = true;
                }
            },
            elementProps,
            getButtonProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) TabsTab.displayName = "TabsTab";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/prehydrationScript.min.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is autogenerated. Do not edit it directly.
// To update it, modify the corresponding source file and run `pnpm inline-scripts`.
// prettier-ignore
__turbopack_context__.s([
    "script",
    ()=>script
]);
const script = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicatorCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsIndicatorCssVars",
    ()=>TabsIndicatorCssVars
]);
let TabsIndicatorCssVars = /*#__PURE__*/ function(TabsIndicatorCssVars) {
    /**
   * Indicates the distance on the left side from the parent's container if the tab is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabLeft"] = "--active-tab-left";
    /**
   * Indicates the distance on the right side from the parent's container if the tab is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabRight"] = "--active-tab-right";
    /**
   * Indicates the distance on the top side from the parent's container if the tab is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabTop"] = "--active-tab-top";
    /**
   * Indicates the distance on the bottom side from the parent's container if the tab is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabBottom"] = "--active-tab-bottom";
    /**
   * Indicates the width of the tab if it is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabWidth"] = "--active-tab-width";
    /**
   * Indicates the height of the tab if it is active.
   * @type {number}
   */ TabsIndicatorCssVars["activeTabHeight"] = "--active-tab-height";
    return TabsIndicatorCssVars;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPContext",
    ()=>CSPContext,
    "useCSPContext",
    ()=>useCSPContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const CSPContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CSPContext.displayName = "CSPContext";
const DEFAULT_CSP_CONTEXT_VALUE = {
    disableStyleElements: false
};
function useCSPContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsIndicator",
    ()=>TabsIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useForcedRerendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useForcedRerendering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useOnMount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/getCssDimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$prehydrationScript$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/prehydrationScript.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicatorCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabsStateAttributesMapping"],
    activeTabPosition: ()=>null,
    activeTabSize: ()=>null
};
const TabsIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function TabIndicator(componentProps, forwardedRef) {
    const { className, render, renderBeforeHydration = false, ...elementProps } = componentProps;
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const { getTabElementBySelectedValue, orientation, tabActivationDirection, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsRootContext"])();
    const { tabsListElement, registerIndicatorUpdateListener } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsListContext"])();
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnMount"])(()=>setIsMounted(true));
    const rerender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useForcedRerendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForcedRerendering"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return registerIndicatorUpdateListener(rerender);
    }, [
        registerIndicatorUpdateListener,
        rerender
    ]);
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    let width = 0;
    let height = 0;
    let isTabSelected = false;
    if (value != null && tabsListElement != null) {
        const activeTab = getTabElementBySelectedValue(value);
        isTabSelected = true;
        if (activeTab != null) {
            const { width: computedWidth, height: computedHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCssDimensions"])(activeTab);
            const { width: tabListWidth, height: tabListHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getCssDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCssDimensions"])(tabsListElement);
            const tabRect = activeTab.getBoundingClientRect();
            const tabsListRect = tabsListElement.getBoundingClientRect();
            const scaleX = tabListWidth > 0 ? tabsListRect.width / tabListWidth : 1;
            const scaleY = tabListHeight > 0 ? tabsListRect.height / tabListHeight : 1;
            const hasNonZeroScale = Math.abs(scaleX) > Number.EPSILON && Math.abs(scaleY) > Number.EPSILON;
            if (hasNonZeroScale) {
                const tabLeftDelta = tabRect.left - tabsListRect.left;
                const tabTopDelta = tabRect.top - tabsListRect.top;
                left = tabLeftDelta / scaleX + tabsListElement.scrollLeft - tabsListElement.clientLeft;
                top = tabTopDelta / scaleY + tabsListElement.scrollTop - tabsListElement.clientTop;
            } else {
                left = activeTab.offsetLeft;
                top = activeTab.offsetTop;
            }
            width = computedWidth;
            height = computedHeight;
            right = tabsListElement.scrollWidth - left - width;
            bottom = tabsListElement.scrollHeight - top - height;
        }
    }
    const activeTabPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>isTabSelected ? {
            left,
            right,
            top,
            bottom
        } : null, [
        left,
        right,
        top,
        bottom,
        isTabSelected
    ]);
    const activeTabSize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>isTabSelected ? {
            width,
            height
        } : null, [
        width,
        height,
        isTabSelected
    ]);
    const style = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!isTabSelected) {
            return undefined;
        }
        return {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabLeft]: `${left}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabRight]: `${right}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabTop]: `${top}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabBottom]: `${bottom}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabWidth]: `${width}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicatorCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicatorCssVars"].activeTabHeight]: `${height}px`
        };
    }, [
        left,
        right,
        top,
        bottom,
        width,
        height,
        isTabSelected
    ]);
    const displayIndicator = isTabSelected && width > 0 && height > 0;
    const state = {
        orientation,
        activeTabPosition,
        activeTabSize,
        tabActivationDirection
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('span', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'presentation',
                style,
                hidden: !displayIndicator // do not display the indicator before the layout is settled
            },
            elementProps,
            {
                suppressHydrationWarning: true
            }
        ],
        stateAttributesMapping
    });
    if (value == null) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            element,
            !isMounted && renderBeforeHydration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("script", {
                nonce: nonce,
                dangerouslySetInnerHTML: {
                    __html: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$prehydrationScript$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["script"]
                },
                suppressHydrationWarning: true
            })
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) TabsIndicator.displayName = "TabsIndicator";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/panel/TabsPanelDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsPanelDataAttributes",
    ()=>TabsPanelDataAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-ssr] (ecmascript)");
;
let TabsPanelDataAttributes = function(TabsPanelDataAttributes) {
    /**
   * Indicates the index of the tab panel.
   */ TabsPanelDataAttributes["index"] = "data-index";
    /**
   * Indicates the direction of the activation (based on the previous active tab).
   * @type {'left' | 'right' | 'up' | 'down' | 'none'}
   */ TabsPanelDataAttributes["activationDirection"] = "data-activation-direction";
    /**
   * Indicates the orientation of the tabs.
   * @type {'horizontal' | 'vertical'}
   */ TabsPanelDataAttributes["orientation"] = "data-orientation";
    /**
   * Present when the panel is hidden.
   */ TabsPanelDataAttributes["hidden"] = "data-hidden";
    /**
   * Present when the panel is animating in.
   */ TabsPanelDataAttributes[TabsPanelDataAttributes["startingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionStatusDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the panel is animating out.
   */ TabsPanelDataAttributes[TabsPanelDataAttributes["endingStyle"] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionStatusDataAttributes"].endingStyle] = "endingStyle";
    return TabsPanelDataAttributes;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/panel/TabsPanel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsPanel",
    ()=>TabsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/inertValue.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useOpenChangeComplete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useTransitionStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$panel$2f$TabsPanelDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/panel/TabsPanelDataAttributes.js [app-ssr] (ecmascript)");
'use client';
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabsStateAttributesMapping"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionStatusMapping"]
};
const TabsPanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function TabPanel(componentProps, forwardedRef) {
    const { className, value, render, keepMounted = false, ...elementProps } = componentProps;
    const { value: selectedValue, getTabIdByPanelValue, orientation, tabActivationDirection, registerMountedTabPanel, unregisterMountedTabPanel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsRootContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const metadata = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            id,
            value
        }), [
        id,
        value
    ]);
    const { ref: listItemRef, index } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeListItem"])({
        metadata
    });
    const open = value === selectedValue;
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useTransitionStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransitionStatus"])(open);
    const hidden = !mounted;
    const correspondingTabId = getTabIdByPanelValue(value);
    const state = {
        hidden,
        orientation,
        tabActivationDirection,
        transitionStatus
    };
    const panelRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            listItemRef,
            panelRef
        ],
        props: [
            {
                'aria-labelledby': correspondingTabId,
                hidden,
                id,
                role: 'tabpanel',
                tabIndex: open ? 0 : -1,
                inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$inertValue$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inertValue"])(!open),
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$panel$2f$TabsPanelDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsPanelDataAttributes"].index]: index
            },
            elementProps
        ],
        stateAttributesMapping
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useOpenChangeComplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenChangeComplete"])({
        open,
        ref: panelRef,
        onComplete () {
            if (!open) {
                setMounted(false);
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (hidden && !keepMounted) {
            return undefined;
        }
        if (id == null) {
            return undefined;
        }
        registerMountedTabPanel(value, id);
        return ()=>{
            unregisterMountedTabPanel(value, id);
        };
    }, [
        hidden,
        keepMounted,
        value,
        id,
        registerMountedTabPanel,
        unregisterMountedTabPanel
    ]);
    const shouldRender = keepMounted || mounted;
    if (!shouldRender) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) TabsPanel.displayName = "TabsPanel";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/composite.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_KEYS",
    ()=>ALL_KEYS,
    "ALT",
    ()=>ALT,
    "ARROW_DOWN",
    ()=>ARROW_DOWN,
    "ARROW_KEYS",
    ()=>ARROW_KEYS,
    "ARROW_LEFT",
    ()=>ARROW_LEFT,
    "ARROW_RIGHT",
    ()=>ARROW_RIGHT,
    "ARROW_UP",
    ()=>ARROW_UP,
    "COMPOSITE_KEYS",
    ()=>COMPOSITE_KEYS,
    "CONTROL",
    ()=>CONTROL,
    "END",
    ()=>END,
    "HOME",
    ()=>HOME,
    "HORIZONTAL_KEYS",
    ()=>HORIZONTAL_KEYS,
    "HORIZONTAL_KEYS_WITH_EXTRA_KEYS",
    ()=>HORIZONTAL_KEYS_WITH_EXTRA_KEYS,
    "META",
    ()=>META,
    "MODIFIER_KEYS",
    ()=>MODIFIER_KEYS,
    "SHIFT",
    ()=>SHIFT,
    "VERTICAL_KEYS",
    ()=>VERTICAL_KEYS,
    "VERTICAL_KEYS_WITH_EXTRA_KEYS",
    ()=>VERTICAL_KEYS_WITH_EXTRA_KEYS,
    "isNativeInput",
    ()=>isNativeInput,
    "scrollIntoViewIfNeeded",
    ()=>scrollIntoViewIfNeeded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
;
;
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const HORIZONTAL_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT
]);
const HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const VERTICAL_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN
]);
const VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    HOME,
    END
]);
const ARROW_KEYS = new Set([
    ...HORIZONTAL_KEYS,
    ...VERTICAL_KEYS
]);
const ALL_KEYS = new Set([
    ...ARROW_KEYS,
    HOME,
    END
]);
const COMPOSITE_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const SHIFT = 'Shift';
const CONTROL = 'Control';
const ALT = 'Alt';
const META = 'Meta';
const MODIFIER_KEYS = new Set([
    SHIFT,
    CONTROL,
    ALT,
    META
]);
function isInputElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'INPUT';
}
function isNativeInput(element) {
    if (isInputElement(element) && element.selectionStart != null) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'TEXTAREA') {
        return true;
    }
    return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
    if (!scrollContainer || !element || !element.scrollTo) {
        return;
    }
    let targetX = scrollContainer.scrollLeft;
    let targetY = scrollContainer.scrollTop;
    const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
    const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
    if (isOverflowingX && orientation !== 'vertical') {
        const elementOffsetLeft = getOffset(scrollContainer, element, 'left');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (direction === 'ltr') {
            if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            }
        }
        if (direction === 'rtl') {
            if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            }
        }
    }
    if (isOverflowingY && orientation !== 'horizontal') {
        const elementOffsetTop = getOffset(scrollContainer, element, 'top');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
            // overflow upwards, align top edges
            targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
        } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
            // overflow downwards, align bottom edges
            targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
        }
    }
    scrollContainer.scrollTo({
        left: targetX,
        top: targetY,
        behavior: 'auto'
    });
}
function getOffset(ancestor, element, side) {
    const propName = side === 'left' ? 'offsetLeft' : 'offsetTop';
    let result = 0;
    while(element.offsetParent){
        result += element[propName];
        if (element.offsetParent === ancestor) {
            break;
        }
        element = element.offsetParent;
    }
    return result;
}
function getStyles(element) {
    const styles = getComputedStyle(element);
    return {
        scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
    };
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGridCellMap",
    ()=>createGridCellMap,
    "findNonDisabledListIndex",
    ()=>findNonDisabledListIndex,
    "getGridCellIndexOfCorner",
    ()=>getGridCellIndexOfCorner,
    "getGridCellIndices",
    ()=>getGridCellIndices,
    "getGridNavigatedIndex",
    ()=>getGridNavigatedIndex,
    "getMaxListIndex",
    ()=>getMaxListIndex,
    "getMinListIndex",
    ()=>getMinListIndex,
    "isDifferentGridRow",
    ()=>isDifferentGridRow,
    "isElementVisible",
    ()=>isElementVisible,
    "isIndexOutOfListBounds",
    ()=>isIndexOutOfListBounds,
    "isListIndexDisabled",
    ()=>isListIndexDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js [app-ssr] (ecmascript)");
;
;
;
;
function isDifferentGridRow(index, cols, prevRow) {
    return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(listRef, index) {
    return index < 0 || index >= listRef.current.length;
}
function getMinListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef, {
        disabledIndices
    });
}
function getMaxListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef, {
        decrement: true,
        startingIndex: listRef.current.length,
        disabledIndices
    });
}
function findNonDisabledListIndex(listRef, { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = {}) {
    let index = startingIndex;
    do {
        index += decrement ? -amount : amount;
    }while (index >= 0 && index <= listRef.current.length - 1 && isListIndexDisabled(listRef, index, disabledIndices))
    return index;
}
function getGridNavigatedIndex(listRef, { event, orientation, loopFocus, rtl, cols, disabledIndices, minIndex, maxIndex, prevIndex, stopEvent: stop = false }) {
    let nextIndex = prevIndex;
    let verticalDirection;
    if (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_UP"]) {
        verticalDirection = 'up';
    } else if (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_DOWN"]) {
        verticalDirection = 'down';
    }
    if (verticalDirection) {
        // -------------------------------------------------------------------------
        // Detect row structure only when handling vertical navigation. This keeps
        // the non-vertical key paths free from row inference work.
        // -------------------------------------------------------------------------
        const rows = [];
        const rowIndexMap = [];
        let hasRoleRow = false;
        let visibleItemCount = 0;
        {
            let currentRowEl = null;
            let currentRowIndex = -1;
            listRef.current.forEach((el, idx)=>{
                if (el == null) {
                    return;
                }
                visibleItemCount += 1;
                const rowEl = el.closest('[role="row"]');
                if (rowEl) {
                    hasRoleRow = true;
                }
                if (rowEl !== currentRowEl || currentRowIndex === -1) {
                    currentRowEl = rowEl;
                    currentRowIndex += 1;
                    rows[currentRowIndex] = [];
                }
                rows[currentRowIndex].push(idx);
                rowIndexMap[idx] = currentRowIndex;
            });
        }
        let hasDomRows = false;
        let inferredDomCols = 0;
        if (hasRoleRow) {
            for (const row of rows){
                const rowLength = row.length;
                if (rowLength > inferredDomCols) {
                    inferredDomCols = rowLength;
                }
                if (rowLength !== cols) {
                    hasDomRows = true;
                }
            }
        }
        const hasVirtualizedGaps = hasDomRows && visibleItemCount < listRef.current.length;
        const verticalCols = inferredDomCols || cols;
        const navigateVertically = (direction)=>{
            if (!hasDomRows || prevIndex === -1) {
                return undefined;
            }
            const currentRow = rowIndexMap[prevIndex];
            if (currentRow == null) {
                return undefined;
            }
            const colInRow = rows[currentRow].indexOf(prevIndex);
            const step = direction === 'up' ? -1 : 1;
            for(let nextRow = currentRow + step, i = 0; i < rows.length; i += 1, nextRow += step){
                if (nextRow < 0 || nextRow >= rows.length) {
                    if (!loopFocus || hasVirtualizedGaps) {
                        return undefined;
                    }
                    nextRow = nextRow < 0 ? rows.length - 1 : 0;
                }
                const targetRow = rows[nextRow];
                for(let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1){
                    const candidate = targetRow[col];
                    if (!isListIndexDisabled(listRef, candidate, disabledIndices)) {
                        return candidate;
                    }
                }
            }
            return undefined;
        };
        const navigateVerticallyWithInferredRows = (direction)=>{
            if (!hasVirtualizedGaps || prevIndex === -1) {
                return undefined;
            }
            const colInRow = prevIndex % verticalCols;
            const rowStep = direction === 'up' ? -verticalCols : verticalCols;
            const lastRowStart = maxIndex - maxIndex % verticalCols;
            const rowCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(maxIndex / verticalCols) + 1;
            for(let rowStart = prevIndex - colInRow + rowStep, i = 0; i < rowCount; i += 1, rowStart += rowStep){
                if (rowStart < 0 || rowStart > maxIndex) {
                    if (!loopFocus) {
                        return undefined;
                    }
                    rowStart = rowStart < 0 ? lastRowStart : 0;
                }
                const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
                for(let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1){
                    if (!isListIndexDisabled(listRef, candidate, disabledIndices)) {
                        return candidate;
                    }
                }
            }
            return undefined;
        };
        if (stop) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopEvent"])(event);
        }
        const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
        if (verticalCandidate !== undefined) {
            nextIndex = verticalCandidate;
        } else if (prevIndex === -1) {
            nextIndex = verticalDirection === 'up' ? maxIndex : minIndex;
        } else {
            nextIndex = findNonDisabledListIndex(listRef, {
                startingIndex: prevIndex,
                amount: verticalCols,
                decrement: verticalDirection === 'up',
                disabledIndices
            });
            if (loopFocus) {
                if (verticalDirection === 'up' && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
                    const col = prevIndex % verticalCols;
                    const maxCol = maxIndex % verticalCols;
                    const offset = maxIndex - (maxCol - col);
                    if (maxCol === col) {
                        nextIndex = maxIndex;
                    } else {
                        nextIndex = maxCol > col ? offset : offset - verticalCols;
                    }
                }
                if (verticalDirection === 'down' && prevIndex + verticalCols > maxIndex) {
                    nextIndex = findNonDisabledListIndex(listRef, {
                        startingIndex: prevIndex % verticalCols - verticalCols,
                        amount: verticalCols,
                        disabledIndices
                    });
                }
            }
        }
        if (isIndexOutOfListBounds(listRef, nextIndex)) {
            nextIndex = prevIndex;
        }
    }
    // Remains on the same row/column.
    if (orientation === 'both') {
        const prevRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(prevIndex / cols);
        if (event.key === (rtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_LEFT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_RIGHT"])) {
            if (stop) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopEvent"])(event);
            }
            if (prevIndex % cols !== cols - 1) {
                nextIndex = findNonDisabledListIndex(listRef, {
                    startingIndex: prevIndex,
                    disabledIndices
                });
                if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledListIndex(listRef, {
                        startingIndex: prevIndex - prevIndex % cols - 1,
                        disabledIndices
                    });
                }
            } else if (loopFocus) {
                nextIndex = findNonDisabledListIndex(listRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
            }
            if (isDifferentGridRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        if (event.key === (rtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_RIGHT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_LEFT"])) {
            if (stop) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopEvent"])(event);
            }
            if (prevIndex % cols !== 0) {
                nextIndex = findNonDisabledListIndex(listRef, {
                    startingIndex: prevIndex,
                    decrement: true,
                    disabledIndices
                });
                if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledListIndex(listRef, {
                        startingIndex: prevIndex + (cols - prevIndex % cols),
                        decrement: true,
                        disabledIndices
                    });
                }
            } else if (loopFocus) {
                nextIndex = findNonDisabledListIndex(listRef, {
                    startingIndex: prevIndex + (cols - prevIndex % cols),
                    decrement: true,
                    disabledIndices
                });
            }
            if (isDifferentGridRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        const lastRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"])(maxIndex / cols) === prevRow;
        if (isIndexOutOfListBounds(listRef, nextIndex)) {
            if (loopFocus && lastRow) {
                nextIndex = event.key === (rtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_RIGHT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARROW_LEFT"]) ? maxIndex : findNonDisabledListIndex(listRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
            } else {
                nextIndex = prevIndex;
            }
        }
    }
    return nextIndex;
}
function createGridCellMap(sizes, cols, dense) {
    const cellMap = [];
    let startIndex = 0;
    sizes.forEach(({ width, height }, index)=>{
        if (width > cols) {
            if ("TURBOPACK compile-time truthy", 1) {
                throw new Error(`[Floating UI]: Invalid grid - item width at index ${index} is greater than grid columns`);
            }
        }
        let itemPlaced = false;
        if (dense) {
            startIndex = 0;
        }
        while(!itemPlaced){
            const targetCells = [];
            for(let i = 0; i < width; i += 1){
                for(let j = 0; j < height; j += 1){
                    targetCells.push(startIndex + i + j * cols);
                }
            }
            if (startIndex % cols + width <= cols && targetCells.every((cell)=>cellMap[cell] == null)) {
                targetCells.forEach((cell)=>{
                    cellMap[cell] = index;
                });
                itemPlaced = true;
            } else {
                startIndex += 1;
            }
        }
    });
    // convert into a non-sparse array
    return [
        ...cellMap
    ];
}
function getGridCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
    if (index === -1) {
        return -1;
    }
    const firstCellIndex = cellMap.indexOf(index);
    const sizeItem = sizes[index];
    switch(corner){
        case 'tl':
            return firstCellIndex;
        case 'tr':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + sizeItem.width - 1;
        case 'bl':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + (sizeItem.height - 1) * cols;
        case 'br':
            return cellMap.lastIndexOf(index);
        default:
            return -1;
    }
}
function getGridCellIndices(indices, cellMap) {
    return cellMap.flatMap((index, cellIndex)=>indices.includes(index) ? [
            cellIndex
        ] : []);
}
function isListIndexDisabled(listRef, index, disabledIndices) {
    const isExplicitlyDisabled = typeof disabledIndices === 'function' ? disabledIndices(index) : disabledIndices?.includes(index) ?? false;
    if (isExplicitlyDisabled) {
        return true;
    }
    const element = listRef.current[index];
    if (!element) {
        return false;
    }
    if (!isElementVisible(element)) {
        return true;
    }
    return !disabledIndices && (element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true');
}
function isElementVisible(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).display !== 'none';
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/useCompositeRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompositeRoot",
    ()=>useCompositeRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isElementDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/isElementDisabled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/composite.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/constants.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const EMPTY_ARRAY = [];
function useCompositeRoot(params) {
    const { itemSizes, cols = 1, loopFocus = true, dense = false, orientation = 'both', direction, highlightedIndex: externalHighlightedIndex, onHighlightedIndexChange: externalSetHighlightedIndex, rootRef: externalRef, enableHomeAndEndKeys = false, stopEventPropagation = false, disabledIndices, modifierKeys = EMPTY_ARRAY } = params;
    const [internalHighlightedIndex, internalSetHighlightedIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const isGrid = cols > 1;
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRefs"])(rootRef, externalRef);
    const elementsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    const hasSetDefaultIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
    const onHighlightedIndexChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((index, shouldScrollIntoView = false)=>{
        (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
        if (shouldScrollIntoView) {
            const newActiveItem = elementsRef.current[index];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["scrollIntoViewIfNeeded"])(rootRef.current, newActiveItem, direction, orientation);
        }
    });
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((map)=>{
        if (map.size === 0 || hasSetDefaultIndexRef.current) {
            return;
        }
        hasSetDefaultIndexRef.current = true;
        const sortedElements = Array.from(map.keys());
        const activeItem = sortedElements.find((compositeElement)=>compositeElement?.hasAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACTIVE_COMPOSITE_ITEM"])) ?? null;
        // Set the default highlighted index of an arbitrary composite item.
        const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
        if (activeIndex !== -1) {
            onHighlightedIndexChange(activeIndex);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["scrollIntoViewIfNeeded"])(rootRef.current, activeItem, direction, orientation);
    });
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            'aria-orientation': orientation === 'both' ? undefined : orientation,
            ref: mergedRef,
            onFocus (event) {
                const element = rootRef.current;
                if (!element || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNativeInput"])(event.target)) {
                    return;
                }
                event.target.setSelectionRange(0, event.target.value.length ?? 0);
            },
            onKeyDown (event) {
                const RELEVANT_KEYS = enableHomeAndEndKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ALL_KEYS"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_KEYS"];
                if (!RELEVANT_KEYS.has(event.key)) {
                    return;
                }
                if (isModifierKeySet(event, modifierKeys)) {
                    return;
                }
                const element = rootRef.current;
                if (!element) {
                    return;
                }
                const isRtl = direction === 'rtl';
                const horizontalForwardKey = isRtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_LEFT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_RIGHT"];
                const forwardKey = {
                    horizontal: horizontalForwardKey,
                    vertical: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"],
                    both: horizontalForwardKey
                }[orientation];
                const horizontalBackwardKey = isRtl ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_RIGHT"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_LEFT"];
                const backwardKey = {
                    horizontal: horizontalBackwardKey,
                    vertical: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_UP"],
                    both: horizontalBackwardKey
                }[orientation];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNativeInput"])(event.target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$isElementDisabled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElementDisabled"])(event.target)) {
                    const selectionStart = event.target.selectionStart;
                    const selectionEnd = event.target.selectionEnd;
                    const textContent = event.target.value ?? '';
                    // return to native textbox behavior when
                    // 1 - Shift is held to make a text selection, or if there already is a text selection
                    if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) {
                        return;
                    }
                    // 2 - arrow-ing forward and not in the last position of the text
                    if (event.key !== backwardKey && selectionStart < textContent.length) {
                        return;
                    }
                    // 3 -arrow-ing backward and not in the first position of the text
                    if (event.key !== forwardKey && selectionStart > 0) {
                        return;
                    }
                }
                let nextIndex = highlightedIndex;
                const minIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMinListIndex"])(elementsRef, disabledIndices);
                const maxIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxListIndex"])(elementsRef, disabledIndices);
                if (isGrid) {
                    const sizes = itemSizes || Array.from({
                        length: elementsRef.current.length
                    }, ()=>({
                            width: 1,
                            height: 1
                        }));
                    // To calculate movements on the grid, we use hypothetical cell indices
                    // as if every item was 1x1, then convert back to real indices.
                    const cellMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGridCellMap"])(sizes, cols, dense);
                    const minGridIndex = cellMap.findIndex((index)=>index != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(elementsRef, index, disabledIndices));
                    // last enabled index
                    const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex)=>index != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(elementsRef, index, disabledIndices) ? cellIndex : foundIndex, -1);
                    nextIndex = cellMap[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGridNavigatedIndex"])({
                        current: cellMap.map((itemIndex)=>itemIndex ? elementsRef.current[itemIndex] : null)
                    }, {
                        event,
                        orientation,
                        loopFocus,
                        cols,
                        // treat undefined (empty grid spaces) as disabled indices so we
                        // don't end up in them
                        disabledIndices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGridCellIndices"])([
                            ...disabledIndices || elementsRef.current.map((_, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isListIndexDisabled"])(elementsRef, index) ? index : undefined),
                            undefined
                        ], cellMap),
                        minIndex: minGridIndex,
                        maxIndex: maxGridIndex,
                        prevIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGridCellIndexOfCorner"])(highlightedIndex > maxIndex ? minIndex : highlightedIndex, sizes, cellMap, cols, // use a corner matching the edge closest to the direction we're
                        // moving in so we don't end up in the same item. Prefer
                        // top/left over bottom/right.
                        // eslint-disable-next-line no-nested-ternary
                        event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"] ? 'bl' : event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_RIGHT"] ? 'tr' : 'tl'),
                        rtl: isRtl
                    })]; // navigated cell will never be nullish
                }
                const forwardKeys = {
                    horizontal: [
                        horizontalForwardKey
                    ],
                    vertical: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"]
                    ],
                    both: [
                        horizontalForwardKey,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"]
                    ]
                }[orientation];
                const backwardKeys = {
                    horizontal: [
                        horizontalBackwardKey
                    ],
                    vertical: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_UP"]
                    ],
                    both: [
                        horizontalBackwardKey,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_UP"]
                    ]
                }[orientation];
                const preventedKeys = isGrid ? RELEVANT_KEYS : ({
                    horizontal: enableHomeAndEndKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HORIZONTAL_KEYS_WITH_EXTRA_KEYS"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HORIZONTAL_KEYS"],
                    vertical: enableHomeAndEndKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VERTICAL_KEYS_WITH_EXTRA_KEYS"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VERTICAL_KEYS"],
                    both: RELEVANT_KEYS
                })[orientation];
                if (enableHomeAndEndKeys) {
                    if (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HOME"]) {
                        nextIndex = minIndex;
                    } else if (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["END"]) {
                        nextIndex = maxIndex;
                    }
                }
                if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
                    if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
                        nextIndex = minIndex;
                    } else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
                        nextIndex = maxIndex;
                    } else {
                        nextIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findNonDisabledListIndex"])(elementsRef, {
                            startingIndex: nextIndex,
                            decrement: backwardKeys.includes(event.key),
                            disabledIndices
                        });
                    }
                }
                if (nextIndex !== highlightedIndex && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIndexOutOfListBounds"])(elementsRef, nextIndex)) {
                    if (stopEventPropagation) {
                        event.stopPropagation();
                    }
                    if (preventedKeys.has(event.key)) {
                        event.preventDefault();
                    }
                    onHighlightedIndexChange(nextIndex, true);
                    // Wait for FocusManager `returnFocus` to execute.
                    queueMicrotask(()=>{
                        elementsRef.current[nextIndex]?.focus();
                    });
                }
            }
        }), [
        cols,
        dense,
        direction,
        disabledIndices,
        elementsRef,
        enableHomeAndEndKeys,
        highlightedIndex,
        isGrid,
        itemSizes,
        loopFocus,
        mergedRef,
        modifierKeys,
        onHighlightedIndexChange,
        orientation,
        stopEventPropagation
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            props,
            highlightedIndex,
            onHighlightedIndexChange,
            elementsRef,
            disabledIndices,
            onMapChange,
            relayKeyboardEvent: props.onKeyDown
        }), [
        props,
        highlightedIndex,
        onHighlightedIndexChange,
        elementsRef,
        disabledIndices,
        onMapChange
    ]);
}
function isModifierKeySet(event, ignoredModifierKeys) {
    for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MODIFIER_KEYS"].values()){
        if (ignoredModifierKeys.includes(key)) {
            continue;
        }
        if (event.getModifierState(key)) {
            return true;
        }
    }
    return false;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRoot",
    ()=>CompositeRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$useCompositeRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/useCompositeRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function CompositeRoot(componentProps) {
    const { render, className, refs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"], props = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"], state = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], stateAttributesMapping, highlightedIndex: highlightedIndexProp, onHighlightedIndexChange: onHighlightedIndexChangeProp, orientation, dense, itemSizes, loopFocus, cols, enableHomeAndEndKeys, onMapChange: onMapChangeProp, stopEventPropagation = true, rootRef, disabledIndices, modifierKeys, highlightItemOnHover = false, tag = 'div', ...elementProps } = componentProps;
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const { props: defaultProps, highlightedIndex, onHighlightedIndexChange, elementsRef, onMapChange: onMapChangeUnwrapped, relayKeyboardEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$useCompositeRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositeRoot"])({
        itemSizes,
        cols,
        loopFocus,
        dense,
        orientation,
        highlightedIndex: highlightedIndexProp,
        onHighlightedIndexChange: onHighlightedIndexChangeProp,
        rootRef,
        stopEventPropagation,
        enableHomeAndEndKeys,
        direction,
        disabledIndices,
        modifierKeys
    });
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])(tag, componentProps, {
        state,
        ref: refs,
        props: [
            defaultProps,
            ...props,
            elementProps
        ],
        stateAttributesMapping
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            highlightedIndex,
            onHighlightedIndexChange,
            highlightItemOnHover,
            relayKeyboardEvent
        }), [
        highlightedIndex,
        onHighlightedIndexChange,
        highlightItemOnHover,
        relayKeyboardEvent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeRootContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeList"], {
            elementsRef: elementsRef,
            onMapChange: (newMap)=>{
                onMapChangeProp?.(newMap);
                onMapChangeUnwrapped(newMap);
            },
            children: element
        })
    });
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsList",
    ()=>TabsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/composite/root/CompositeRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/stateAttributesMapping.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/empty.js [app-ssr] (ecmascript)");
/**
 * Groups the individual tab buttons.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function TabsList(componentProps, forwardedRef) {
    const { activateOnFocus = false, className, loopFocus = true, render, ...elementProps } = componentProps;
    const { getTabElementBySelectedValue, onValueChange, orientation, value, setTabMap, tabActivationDirection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTabsRootContext"])();
    const [highlightedTabIndex, setHighlightedTabIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [tabsListElement, setTabsListElement] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const indicatorUpdateListenersRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](new Set());
    const tabResizeObserverElementsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](new Set());
    const resizeObserverRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const notifyIndicatorUpdateListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>{
        indicatorUpdateListenersRef.current.forEach((listener)=>{
            listener();
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (typeof ResizeObserver === 'undefined') {
            return undefined;
        }
        const resizeObserver = new ResizeObserver(()=>{
            if (!indicatorUpdateListenersRef.current.size) {
                return;
            }
            notifyIndicatorUpdateListeners();
        });
        resizeObserverRef.current = resizeObserver;
        if (tabsListElement) {
            resizeObserver.observe(tabsListElement);
        }
        tabResizeObserverElementsRef.current.forEach((element)=>{
            resizeObserver.observe(element);
        });
        return ()=>{
            resizeObserver.disconnect();
            resizeObserverRef.current = null;
        };
    }, [
        tabsListElement,
        notifyIndicatorUpdateListeners
    ]);
    const registerIndicatorUpdateListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((listener)=>{
        indicatorUpdateListenersRef.current.add(listener);
        return ()=>{
            indicatorUpdateListenersRef.current.delete(listener);
        };
    });
    const registerTabResizeObserverElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((element)=>{
        tabResizeObserverElementsRef.current.add(element);
        resizeObserverRef.current?.observe(element);
        return ()=>{
            tabResizeObserverElementsRef.current.delete(element);
            resizeObserverRef.current?.unobserve(element);
        };
    });
    const detectActivationDirection = useActivationDirectionDetector(value, // the old value
    orientation, tabsListElement, getTabElementBySelectedValue);
    const onTabActivation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((newValue, eventDetails)=>{
        if (newValue !== value) {
            const activationDirection = detectActivationDirection(newValue);
            eventDetails.activationDirection = activationDirection;
            onValueChange(newValue, eventDetails);
        }
    });
    const state = {
        orientation,
        tabActivationDirection
    };
    const defaultProps = {
        'aria-orientation': orientation === 'vertical' ? 'vertical' : undefined,
        role: 'tablist'
    };
    const tabsListContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            activateOnFocus,
            highlightedTabIndex,
            registerIndicatorUpdateListener,
            registerTabResizeObserverElement,
            onTabActivation,
            setHighlightedTabIndex,
            tabsListElement
        }), [
        activateOnFocus,
        highlightedTabIndex,
        registerIndicatorUpdateListener,
        registerTabResizeObserverElement,
        onTabActivation,
        setHighlightedTabIndex,
        tabsListElement
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsListContext"].Provider, {
        value: tabsListContextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompositeRoot"], {
            render: render,
            className: className,
            state: state,
            refs: [
                forwardedRef,
                setTabsListElement
            ],
            props: [
                defaultProps,
                elementProps
            ],
            stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabsStateAttributesMapping"],
            highlightedIndex: highlightedTabIndex,
            enableHomeAndEndKeys: true,
            loopFocus: loopFocus,
            orientation: orientation,
            onHighlightedIndexChange: setHighlightedTabIndex,
            onMapChange: setTabMap,
            disabledIndices: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY_ARRAY"]
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) TabsList.displayName = "TabsList";
function getInset(tab, tabsList) {
    const { left: tabLeft, top: tabTop } = tab.getBoundingClientRect();
    const { left: listLeft, top: listTop } = tabsList.getBoundingClientRect();
    const left = tabLeft - listLeft;
    const top = tabTop - listTop;
    return {
        left,
        top
    };
}
function useActivationDirectionDetector(// the old value
activeTabValue, orientation, tabsListElement, getTabElement) {
    const [previousTabEdge, setPreviousTabEdge] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // Whenever orientation changes, reset the state.
        if (activeTabValue == null || tabsListElement == null) {
            setPreviousTabEdge(null);
            return;
        }
        const activeTab = getTabElement(activeTabValue);
        if (activeTab == null) {
            setPreviousTabEdge(null);
            return;
        }
        const { left, top } = getInset(activeTab, tabsListElement);
        setPreviousTabEdge(orientation === 'horizontal' ? left : top);
    }, [
        orientation,
        getTabElement,
        tabsListElement,
        activeTabValue
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((newValue)=>{
        if (newValue === activeTabValue) {
            return 'none';
        }
        if (newValue == null) {
            setPreviousTabEdge(null);
            return 'none';
        }
        if (newValue != null && tabsListElement != null) {
            const activeTabElement = getTabElement(newValue);
            if (activeTabElement != null) {
                const { left, top } = getInset(activeTabElement, tabsListElement);
                if (previousTabEdge == null) {
                    setPreviousTabEdge(orientation === 'horizontal' ? left : top);
                    return 'none';
                }
                if (orientation === 'horizontal') {
                    if (left < previousTabEdge) {
                        setPreviousTabEdge(left);
                        return 'left';
                    }
                    if (left > previousTabEdge) {
                        setPreviousTabEdge(left);
                        return 'right';
                    }
                } else if (top < previousTabEdge) {
                    setPreviousTabEdge(top);
                    return 'up';
                } else if (top > previousTabEdge) {
                    setPreviousTabEdge(top);
                    return 'down';
                }
            }
        }
        return 'none';
    }, [
        getTabElement,
        orientation,
        previousTabEdge,
        tabsListElement,
        activeTabValue
    ]);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Indicator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsIndicator"],
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"],
    "Panel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$panel$2f$TabsPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsPanel"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsRoot"],
    "Tab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$tab$2f$TabsTab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTab"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$root$2f$TabsRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/root/TabsRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$tab$2f$TabsTab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/tab/TabsTab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$indicator$2f$TabsIndicator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/indicator/TabsIndicator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$panel$2f$TabsPanel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/panel/TabsPanel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$list$2f$TabsList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/list/TabsList.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/index.parts.js [app-ssr] (ecmascript) <export * as Tabs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tabs$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/tabs/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootContext",
    ()=>ScrollAreaRootContext,
    "useScrollAreaRootContext",
    ()=>useScrollAreaRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaRootContext.displayName = "ScrollAreaRootContext";
function useScrollAreaRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaRootContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaRootContext is missing. ScrollArea parts must be placed within <ScrollArea.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootCssVars",
    ()=>ScrollAreaRootCssVars
]);
let ScrollAreaRootCssVars = /*#__PURE__*/ function(ScrollAreaRootCssVars) {
    /**
   * The scroll area's corner height.
   * @type {number}
   */ ScrollAreaRootCssVars["scrollAreaCornerHeight"] = "--scroll-area-corner-height";
    /**
   * The scroll area's corner width.
   * @type {number}
   */ ScrollAreaRootCssVars["scrollAreaCornerWidth"] = "--scroll-area-corner-width";
    return ScrollAreaRootCssVars;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIN_THUMB_SIZE",
    ()=>MIN_THUMB_SIZE,
    "SCROLL_TIMEOUT",
    ()=>SCROLL_TIMEOUT
]);
const SCROLL_TIMEOUT = 500;
const MIN_THUMB_SIZE = 16;
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOffset",
    ()=>getOffset
]);
function getOffset(element, prop, axis) {
    if (!element) {
        return 0;
    }
    const styles = getComputedStyle(element);
    const propAxis = axis === 'x' ? 'Inline' : 'Block';
    // Safari misreports `marginInlineEnd` in RTL.
    // We have to assume the start/end values are symmetrical, which is likely.
    if (axis === 'x' && prop === 'margin') {
        return parseFloat(styles[`${prop}InlineStart`]) * 2;
    }
    return parseFloat(styles[`${prop}${propAxis}Start`]) + parseFloat(styles[`${prop}${propAxis}End`]);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarDataAttributes",
    ()=>ScrollAreaScrollbarDataAttributes
]);
let ScrollAreaScrollbarDataAttributes = /*#__PURE__*/ function(ScrollAreaScrollbarDataAttributes) {
    /**
   * Indicates the orientation of the scrollbar.
   * @type {'horizontal' | 'vertical'}
   */ ScrollAreaScrollbarDataAttributes["orientation"] = "data-orientation";
    /**
   * Present when the pointer is over the scroll area.
   */ ScrollAreaScrollbarDataAttributes["hovering"] = "data-hovering";
    /**
   * Present when the user scrolls inside the scroll area.
   */ ScrollAreaScrollbarDataAttributes["scrolling"] = "data-scrolling";
    /**
   * Present when the scroll area content is wider than the viewport.
   */ ScrollAreaScrollbarDataAttributes["hasOverflowX"] = "data-has-overflow-x";
    /**
   * Present when the scroll area content is taller than the viewport.
   */ ScrollAreaScrollbarDataAttributes["hasOverflowY"] = "data-has-overflow-y";
    /**
   * Present when there is overflow on the horizontal start side.
   */ ScrollAreaScrollbarDataAttributes["overflowXStart"] = "data-overflow-x-start";
    /**
   * Present when there is overflow on the horizontal end side.
   */ ScrollAreaScrollbarDataAttributes["overflowXEnd"] = "data-overflow-x-end";
    /**
   * Present when there is overflow on the vertical start side.
   */ ScrollAreaScrollbarDataAttributes["overflowYStart"] = "data-overflow-y-start";
    /**
   * Present when there is overflow on the vertical end side.
   */ ScrollAreaScrollbarDataAttributes["overflowYEnd"] = "data-overflow-y-end";
    return ScrollAreaScrollbarDataAttributes;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleDisableScrollbar",
    ()=>styleDisableScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
const DISABLE_SCROLLBAR_CLASS_NAME = 'base-ui-disable-scrollbar';
const styleDisableScrollbar = {
    className: DISABLE_SCROLLBAR_CLASS_NAME,
    getElement (nonce) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
            nonce: nonce,
            href: DISABLE_SCROLLBAR_CLASS_NAME,
            precedence: "base-ui:low",
            children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
        });
    }
};
if ("TURBOPACK compile-time truthy", 1) styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootDataAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRootDataAttributes",
    ()=>ScrollAreaRootDataAttributes
]);
let ScrollAreaRootDataAttributes = /*#__PURE__*/ function(ScrollAreaRootDataAttributes) {
    /**
   * Present when the user scrolls inside the scroll area.
   */ ScrollAreaRootDataAttributes["scrolling"] = "data-scrolling";
    /**
   * Present when the scroll area content is wider than the viewport.
   */ ScrollAreaRootDataAttributes["hasOverflowX"] = "data-has-overflow-x";
    /**
   * Present when the scroll area content is taller than the viewport.
   */ ScrollAreaRootDataAttributes["hasOverflowY"] = "data-has-overflow-y";
    /**
   * Present when there is overflow on the horizontal start side.
   */ ScrollAreaRootDataAttributes["overflowXStart"] = "data-overflow-x-start";
    /**
   * Present when there is overflow on the horizontal end side.
   */ ScrollAreaRootDataAttributes["overflowXEnd"] = "data-overflow-x-end";
    /**
   * Present when there is overflow on the vertical start side.
   */ ScrollAreaRootDataAttributes["overflowYStart"] = "data-overflow-y-start";
    /**
   * Present when there is overflow on the vertical end side.
   */ ScrollAreaRootDataAttributes["overflowYEnd"] = "data-overflow-y-end";
    return ScrollAreaRootDataAttributes;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollAreaStateAttributesMapping",
    ()=>scrollAreaStateAttributesMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootDataAttributes.js [app-ssr] (ecmascript)");
;
const scrollAreaStateAttributesMapping = {
    hasOverflowX: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].hasOverflowX]: ''
        } : null,
    hasOverflowY: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].hasOverflowY]: ''
        } : null,
    overflowXStart: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowXStart]: ''
        } : null,
    overflowXEnd: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowXEnd]: ''
        } : null,
    overflowYStart: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowYStart]: ''
        } : null,
    overflowYEnd: (value)=>value ? {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootDataAttributes"].overflowYEnd]: ''
        } : null,
    cornerHidden: ()=>null
};
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRoot",
    ()=>ScrollAreaRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const DEFAULT_COORDS = {
    x: 0,
    y: 0
};
const DEFAULT_SIZE = {
    width: 0,
    height: 0
};
const DEFAULT_OVERFLOW_EDGES = {
    xStart: false,
    xEnd: false,
    yStart: false,
    yEnd: false
};
const DEFAULT_HIDDEN_STATE = {
    x: true,
    y: true,
    corner: true
};
const ScrollAreaRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaRoot(componentProps, forwardedRef) {
    const { render, className, overflowEdgeThreshold: overflowEdgeThresholdProp, ...elementProps } = componentProps;
    const overflowEdgeThreshold = normalizeOverflowEdgeThreshold(overflowEdgeThresholdProp);
    const rootId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const scrollYTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const scrollXTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const { nonce, disableStyleElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const [hovering, setHovering] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollingX, setScrollingX] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollingY, setScrollingY] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [touchModality, setTouchModality] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [hasMeasuredScrollbar, setHasMeasuredScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [cornerSize, setCornerSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_SIZE);
    const [thumbSize, setThumbSize] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_SIZE);
    const [overflowEdges, setOverflowEdges] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_OVERFLOW_EDGES);
    const [hiddenState, setHiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_HIDDEN_STATE);
    const rootRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const viewportRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollbarYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const scrollbarXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const cornerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbDraggingRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const startYRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startXRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const startScrollLeftRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const currentOrientationRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]('vertical');
    const scrollPositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](DEFAULT_COORDS);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((scrollPosition)=>{
        const offsetX = scrollPosition.x - scrollPositionRef.current.x;
        const offsetY = scrollPosition.y - scrollPositionRef.current.y;
        scrollPositionRef.current = scrollPosition;
        if (offsetY !== 0) {
            setScrollingY(true);
            scrollYTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                setScrollingY(false);
            });
        }
        if (offsetX !== 0) {
            setScrollingX(true);
            scrollXTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                setScrollingX(false);
            });
        }
    });
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        if (event.button !== 0) {
            return;
        }
        thumbDraggingRef.current = true;
        startYRef.current = event.clientY;
        startXRef.current = event.clientX;
        currentOrientationRef.current = event.currentTarget.getAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarDataAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarDataAttributes"].orientation);
        if (viewportRef.current) {
            startScrollTopRef.current = viewportRef.current.scrollTop;
            startScrollLeftRef.current = viewportRef.current.scrollLeft;
        }
        if (thumbYRef.current && currentOrientationRef.current === 'vertical') {
            thumbYRef.current.setPointerCapture(event.pointerId);
        }
        if (thumbXRef.current && currentOrientationRef.current === 'horizontal') {
            thumbXRef.current.setPointerCapture(event.pointerId);
        }
    });
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        if (!thumbDraggingRef.current) {
            return;
        }
        const deltaY = event.clientY - startYRef.current;
        const deltaX = event.clientX - startXRef.current;
        if (viewportRef.current) {
            const scrollableContentHeight = viewportRef.current.scrollHeight;
            const viewportHeight = viewportRef.current.clientHeight;
            const scrollableContentWidth = viewportRef.current.scrollWidth;
            const viewportWidth = viewportRef.current.clientWidth;
            if (thumbYRef.current && scrollbarYRef.current && currentOrientationRef.current === 'vertical') {
                const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYRef.current, 'padding', 'y');
                const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYRef.current, 'margin', 'y');
                const thumbHeight = thumbYRef.current.offsetHeight;
                const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
                const scrollRatioY = deltaY / maxThumbOffsetY;
                viewportRef.current.scrollTop = startScrollTopRef.current + scrollRatioY * (scrollableContentHeight - viewportHeight);
                event.preventDefault();
                setScrollingY(true);
                scrollYTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                    setScrollingY(false);
                });
            }
            if (thumbXRef.current && scrollbarXRef.current && currentOrientationRef.current === 'horizontal') {
                const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXRef.current, 'padding', 'x');
                const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXRef.current, 'margin', 'x');
                const thumbWidth = thumbXRef.current.offsetWidth;
                const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
                const scrollRatioX = deltaX / maxThumbOffsetX;
                viewportRef.current.scrollLeft = startScrollLeftRef.current + scrollRatioX * (scrollableContentWidth - viewportWidth);
                event.preventDefault();
                setScrollingX(true);
                scrollXTimeout.start(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_TIMEOUT"], ()=>{
                    setScrollingX(false);
                });
            }
        }
    });
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])((event)=>{
        thumbDraggingRef.current = false;
        if (thumbYRef.current && currentOrientationRef.current === 'vertical') {
            thumbYRef.current.releasePointerCapture(event.pointerId);
        }
        if (thumbXRef.current && currentOrientationRef.current === 'horizontal') {
            thumbXRef.current.releasePointerCapture(event.pointerId);
        }
    });
    function handleTouchModalityChange(event) {
        setTouchModality(event.pointerType === 'touch');
    }
    function handlePointerEnterOrMove(event) {
        handleTouchModalityChange(event);
        if (event.pointerType !== 'touch') {
            const isTargetRootChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contains"])(rootRef.current, event.target);
            setHovering(isTargetRootChild);
        }
    }
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            scrolling: scrollingX || scrollingY,
            hasOverflowX: !hiddenState.x,
            hasOverflowY: !hiddenState.y,
            overflowXStart: overflowEdges.xStart,
            overflowXEnd: overflowEdges.xEnd,
            overflowYStart: overflowEdges.yStart,
            overflowYEnd: overflowEdges.yEnd,
            cornerHidden: hiddenState.corner
        }), [
        scrollingX,
        scrollingY,
        hiddenState.x,
        hiddenState.y,
        hiddenState.corner,
        overflowEdges
    ]);
    const props = {
        role: 'presentation',
        onPointerEnter: handlePointerEnterOrMove,
        onPointerMove: handlePointerEnterOrMove,
        onPointerDown: handleTouchModalityChange,
        onPointerLeave () {
            setHovering(false);
        },
        style: {
            position: 'relative',
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerHeight]: `${cornerSize.height}px`,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerWidth]: `${cornerSize.width}px`
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            rootRef
        ],
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            handlePointerDown,
            handlePointerMove,
            handlePointerUp,
            handleScroll,
            cornerSize,
            setCornerSize,
            thumbSize,
            setThumbSize,
            hasMeasuredScrollbar,
            setHasMeasuredScrollbar,
            touchModality,
            cornerRef,
            scrollingX,
            setScrollingX,
            scrollingY,
            setScrollingY,
            hovering,
            setHovering,
            viewportRef,
            rootRef,
            scrollbarYRef,
            scrollbarXRef,
            thumbYRef,
            thumbXRef,
            rootId,
            hiddenState,
            setHiddenState,
            overflowEdges,
            setOverflowEdges,
            viewportState: state,
            overflowEdgeThreshold
        }), [
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleScroll,
        cornerSize,
        thumbSize,
        hasMeasuredScrollbar,
        touchModality,
        scrollingX,
        setScrollingX,
        scrollingY,
        setScrollingY,
        hovering,
        setHovering,
        rootId,
        hiddenState,
        overflowEdges,
        state,
        overflowEdgeThreshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootContext"].Provider, {
        value: contextValue,
        children: [
            !disableStyleElements && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].getElement(nonce),
            element
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaRoot.displayName = "ScrollAreaRoot";
function normalizeOverflowEdgeThreshold(threshold) {
    if (typeof threshold === 'number') {
        const value = Math.max(0, threshold);
        return {
            xStart: value,
            xEnd: value,
            yStart: value,
            yEnd: value
        };
    }
    return {
        xStart: Math.max(0, threshold?.xStart || 0),
        xEnd: Math.max(0, threshold?.xEnd || 0),
        yStart: Math.max(0, threshold?.yStart || 0),
        yEnd: Math.max(0, threshold?.yEnd || 0)
    };
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewportContext",
    ()=>ScrollAreaViewportContext,
    "useScrollAreaViewportContext",
    ()=>useScrollAreaViewportContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaViewportContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaViewportContext.displayName = "ScrollAreaViewportContext";
function useScrollAreaViewportContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaViewportContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaViewportContext missing. ScrollAreaViewport parts must be placed within <ScrollArea.Viewport>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/clamp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/onVisible.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Executes a callback when an element becomes visible.
 */ __turbopack_context__.s([
    "onVisible",
    ()=>onVisible
]);
function onVisible(element, callback) {
    if (typeof IntersectionObserver === 'undefined') {
        return ()=>{};
    }
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.intersectionRatio > 0) {
                callback();
                observer.disconnect();
            }
        });
    });
    observer.observe(element);
    return ()=>{
        observer.disconnect();
    };
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewportCssVars",
    ()=>ScrollAreaViewportCssVars
]);
let ScrollAreaViewportCssVars = /*#__PURE__*/ function(ScrollAreaViewportCssVars) {
    /**
   * The distance from the horizontal start edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowXStart"] = "--scroll-area-overflow-x-start";
    /**
   * The distance from the horizontal end edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowXEnd"] = "--scroll-area-overflow-x-end";
    /**
   * The distance from the vertical start edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowYStart"] = "--scroll-area-overflow-y-start";
    /**
   * The distance from the vertical end edge in pixels.
   * @type {number}
   */ ScrollAreaViewportCssVars["scrollAreaOverflowYEnd"] = "--scroll-area-overflow-y-end";
    return ScrollAreaViewportCssVars;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/scrollEdges.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCROLL_EDGE_TOLERANCE_PX",
    ()=>SCROLL_EDGE_TOLERANCE_PX,
    "normalizeScrollOffset",
    ()=>normalizeScrollOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/clamp.js [app-ssr] (ecmascript)");
;
const SCROLL_EDGE_TOLERANCE_PX = 1;
function normalizeScrollOffset(value, max) {
    if (max <= 0) {
        return 0;
    }
    const clamped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(value, 0, max);
    const startDistance = clamped;
    const endDistance = max - clamped;
    const withinStartTolerance = startDistance <= SCROLL_EDGE_TOLERANCE_PX;
    const withinEndTolerance = endDistance <= SCROLL_EDGE_TOLERANCE_PX;
    if (withinStartTolerance && withinEndTolerance) {
        return startDistance <= endDistance ? 0 : max;
    }
    if (withinStartTolerance) {
        return 0;
    }
    if (withinEndTolerance) {
        return max;
    }
    return clamped;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useStableCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/detectBrowser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/clamp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$onVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/onVisible.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/scrollEdges.js [app-ssr] (ecmascript)");
// Module-level flag to ensure we only register the CSS properties once,
// regardless of how many Scroll Area components are mounted.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
let scrollAreaOverflowVarsRegistered = false;
const HAS_RESIZE_OBSERVER = typeof ResizeObserver !== 'undefined';
/**
 * Removes inheritance of the scroll area overflow CSS variables, which
 * improves rendering performance in complex scroll areas with deep subtrees.
 * Instead, each child must manually opt-in to using these properties by
 * specifying `inherit`.
 * See https://motion.dev/blog/web-animation-performance-tier-list
 * under the "Improving CSS variable performance" section.
 */ function removeCSSVariableInheritance() {
    if (scrollAreaOverflowVarsRegistered || // When `inherits: false`, specifying `inherit` on child elements doesn't work
    // in Safari. To let CSS features work correctly, this optimization must be skipped.
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebKit"]) {
        return;
    }
    if (typeof CSS !== 'undefined' && 'registerProperty' in CSS) {
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXStart,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXEnd,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYStart,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYEnd
        ].forEach((name)=>{
            try {
                CSS.registerProperty({
                    name,
                    syntax: '<length>',
                    inherits: false,
                    initialValue: '0px'
                });
            } catch  {
            /* ignore already-registered */ }
        });
    }
    scrollAreaOverflowVarsRegistered = true;
}
const ScrollAreaViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaViewport(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { viewportRef, scrollbarYRef, scrollbarXRef, thumbYRef, thumbXRef, cornerRef, cornerSize, setCornerSize, setThumbSize, rootId, setHiddenState, hiddenState, setHasMeasuredScrollbar, handleScroll, setHovering, setOverflowEdges, overflowEdges, overflowEdgeThreshold, scrollingX, scrollingY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const programmaticScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](true);
    const lastMeasuredViewportMetricsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        NaN,
        NaN,
        NaN,
        NaN
    ]);
    const scrollEndTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const waitForAnimationsTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimeout"])();
    const computeThumbPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStableCallback"])(()=>{
        const viewportEl = viewportRef.current;
        const scrollbarYEl = scrollbarYRef.current;
        const scrollbarXEl = scrollbarXRef.current;
        const thumbYEl = thumbYRef.current;
        const thumbXEl = thumbXRef.current;
        const cornerEl = cornerRef.current;
        if (!viewportEl) {
            return;
        }
        const scrollableContentHeight = viewportEl.scrollHeight;
        const scrollableContentWidth = viewportEl.scrollWidth;
        const viewportHeight = viewportEl.clientHeight;
        const viewportWidth = viewportEl.clientWidth;
        const scrollTop = viewportEl.scrollTop;
        const scrollLeft = viewportEl.scrollLeft;
        const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
        const isFirstMeasurement = Number.isNaN(lastMeasuredViewportMetrics[0]);
        lastMeasuredViewportMetrics[0] = viewportHeight;
        lastMeasuredViewportMetrics[1] = scrollableContentHeight;
        lastMeasuredViewportMetrics[2] = viewportWidth;
        lastMeasuredViewportMetrics[3] = scrollableContentWidth;
        if (isFirstMeasurement) {
            setHasMeasuredScrollbar(true);
        }
        if (scrollableContentHeight === 0 || scrollableContentWidth === 0) {
            return;
        }
        const nextHiddenState = getHiddenState(viewportEl);
        const scrollbarYHidden = nextHiddenState.y;
        const scrollbarXHidden = nextHiddenState.x;
        const ratioX = viewportWidth / scrollableContentWidth;
        const ratioY = viewportHeight / scrollableContentHeight;
        const maxScrollLeft = Math.max(0, scrollableContentWidth - viewportWidth);
        const maxScrollTop = Math.max(0, scrollableContentHeight - viewportHeight);
        let scrollLeftFromStart = 0;
        let scrollLeftFromEnd = 0;
        if (!scrollbarXHidden) {
            let rawScrollLeftFromStart = 0;
            if (direction === 'rtl') {
                rawScrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(-scrollLeft, 0, maxScrollLeft);
            } else {
                rawScrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollLeft, 0, maxScrollLeft);
            }
            scrollLeftFromStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(rawScrollLeftFromStart, maxScrollLeft);
            scrollLeftFromEnd = maxScrollLeft - scrollLeftFromStart;
        }
        const rawScrollTopFromStart = !scrollbarYHidden ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollTop, 0, maxScrollTop) : 0;
        const scrollTopFromStart = !scrollbarYHidden ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$scrollEdges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScrollOffset"])(rawScrollTopFromStart, maxScrollTop) : 0;
        const scrollTopFromEnd = !scrollbarYHidden ? maxScrollTop - scrollTopFromStart : 0;
        const nextWidth = scrollbarXHidden ? 0 : viewportWidth;
        const nextHeight = scrollbarYHidden ? 0 : viewportHeight;
        let nextCornerWidth = 0;
        let nextCornerHeight = 0;
        if (!scrollbarXHidden && !scrollbarYHidden) {
            nextCornerWidth = scrollbarYEl?.offsetWidth || 0;
            nextCornerHeight = scrollbarXEl?.offsetHeight || 0;
        }
        // Only subtract corner size from scrollbar dimensions if the corner hasn't been sized yet.
        // Once sized, the layout will already account for it.
        const cornerNotYetSized = cornerSize.width === 0 && cornerSize.height === 0;
        const cornerWidthOffset = cornerNotYetSized ? nextCornerWidth : 0;
        const cornerHeightOffset = cornerNotYetSized ? nextCornerHeight : 0;
        const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXEl, 'padding', 'x');
        const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYEl, 'padding', 'y');
        const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXEl, 'margin', 'x');
        const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYEl, 'margin', 'y');
        const idealNextWidth = nextWidth - scrollbarXOffset - thumbXOffset;
        const idealNextHeight = nextHeight - scrollbarYOffset - thumbYOffset;
        const maxNextWidth = scrollbarXEl ? Math.min(scrollbarXEl.offsetWidth - cornerWidthOffset, idealNextWidth) : idealNextWidth;
        const maxNextHeight = scrollbarYEl ? Math.min(scrollbarYEl.offsetHeight - cornerHeightOffset, idealNextHeight) : idealNextHeight;
        const clampedNextWidth = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_THUMB_SIZE"], maxNextWidth * ratioX);
        const clampedNextHeight = Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_THUMB_SIZE"], maxNextHeight * ratioY);
        setThumbSize((prevSize)=>{
            if (prevSize.height === clampedNextHeight && prevSize.width === clampedNextWidth) {
                return prevSize;
            }
            return {
                width: clampedNextWidth,
                height: clampedNextHeight
            };
        });
        // Handle Y (vertical) scroll
        if (scrollbarYEl && thumbYEl) {
            const maxThumbOffsetY = scrollbarYEl.offsetHeight - clampedNextHeight - scrollbarYOffset - thumbYOffset;
            const scrollRangeY = scrollableContentHeight - viewportHeight;
            const scrollRatioY = scrollRangeY === 0 ? 0 : scrollTop / scrollRangeY;
            // In Safari, don't allow it to go negative or too far as `scrollTop` considers the rubber
            // band effect.
            const thumbOffsetY = Math.min(maxThumbOffsetY, Math.max(0, scrollRatioY * maxThumbOffsetY));
            thumbYEl.style.transform = `translate3d(0,${thumbOffsetY}px,0)`;
        }
        // Handle X (horizontal) scroll
        if (scrollbarXEl && thumbXEl) {
            const maxThumbOffsetX = scrollbarXEl.offsetWidth - clampedNextWidth - scrollbarXOffset - thumbXOffset;
            const scrollRangeX = scrollableContentWidth - viewportWidth;
            const scrollRatioX = scrollRangeX === 0 ? 0 : scrollLeft / scrollRangeX;
            // In Safari, don't allow it to go negative or too far as `scrollLeft` considers the rubber
            // band effect.
            const thumbOffsetX = direction === 'rtl' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollRatioX * maxThumbOffsetX, -maxThumbOffsetX, 0) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollRatioX * maxThumbOffsetX, 0, maxThumbOffsetX);
            thumbXEl.style.transform = `translate3d(${thumbOffsetX}px,0,0)`;
        }
        const overflowMetricsPx = [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXStart,
                scrollLeftFromStart
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowXEnd,
                scrollLeftFromEnd
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYStart,
                scrollTopFromStart
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportCssVars"].scrollAreaOverflowYEnd,
                scrollTopFromEnd
            ]
        ];
        for (const [cssVar, value] of overflowMetricsPx){
            viewportEl.style.setProperty(cssVar, `${value}px`);
        }
        if (cornerEl) {
            if (scrollbarXHidden || scrollbarYHidden) {
                setCornerSize({
                    width: 0,
                    height: 0
                });
            } else if (!scrollbarXHidden && !scrollbarYHidden) {
                setCornerSize({
                    width: nextCornerWidth,
                    height: nextCornerHeight
                });
            }
        }
        setHiddenState((prevState)=>mergeHiddenState(prevState, nextHiddenState));
        const nextOverflowEdges = {
            xStart: !scrollbarXHidden && scrollLeftFromStart > overflowEdgeThreshold.xStart,
            xEnd: !scrollbarXHidden && scrollLeftFromEnd > overflowEdgeThreshold.xEnd,
            yStart: !scrollbarYHidden && scrollTopFromStart > overflowEdgeThreshold.yStart,
            yEnd: !scrollbarYHidden && scrollTopFromEnd > overflowEdgeThreshold.yEnd
        };
        setOverflowEdges((prev)=>{
            if (prev.xStart === nextOverflowEdges.xStart && prev.xEnd === nextOverflowEdges.xEnd && prev.yStart === nextOverflowEdges.yStart && prev.yEnd === nextOverflowEdges.yEnd) {
                return prev;
            }
            return nextOverflowEdges;
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (!viewportRef.current) {
            return undefined;
        }
        removeCSSVariableInheritance();
        if (HAS_RESIZE_OBSERVER) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$onVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onVisible"])(viewportRef.current, ()=>{
            computeThumbPosition();
        });
    }, [
        computeThumbPosition,
        viewportRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // Wait for scrollbar and thumb refs after hidden-state toggles, and refresh math on direction flips.
        queueMicrotask(computeThumbPosition);
    }, [
        computeThumbPosition,
        hiddenState,
        direction
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        // `onMouseEnter` doesn't fire upon load, so we need to check if the viewport is already
        // being hovered.
        if (viewportRef.current?.matches(':hover')) {
            setHovering(true);
        }
    }, [
        viewportRef,
        setHovering
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = viewportRef.current;
        if (!HAS_RESIZE_OBSERVER || !viewport) {
            return undefined;
        }
        let hasInitialized = false;
        const ro = new ResizeObserver(()=>{
            // Avoid duplicate mount-time recompute when observer data matches what the mount
            // scheduling pass already measured. If dimensions changed before the first observer
            // delivery, keep the recompute so overflow transitions stay in sync.
            if (!hasInitialized) {
                hasInitialized = true;
                const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
                if (lastMeasuredViewportMetrics[0] === viewport.clientHeight && lastMeasuredViewportMetrics[1] === viewport.scrollHeight && lastMeasuredViewportMetrics[2] === viewport.clientWidth && lastMeasuredViewportMetrics[3] === viewport.scrollWidth) {
                    return;
                }
            }
            computeThumbPosition();
        });
        ro.observe(viewport);
        // If there are animations in the viewport, wait for them to finish and then recompute the thumb position.
        // This is necessary when the viewport contains a Dialog that is animating its popup on open
        // and the popup is using a transform for the animation, which affects the size of the viewport.
        // Without this, the thumb position will be incorrect until scrolling (i.e. if the scrollbar shows
        // on hover, the thumb has an incorrect size).
        // We assume the user is using `onOpenChangeComplete` to hide the scrollbar
        // until animations complete because otherwise the scrollbar would show the thumb resizing mid-animation.
        waitForAnimationsTimeout.start(0, ()=>{
            const animations = viewport.getAnimations({
                subtree: true
            });
            if (animations.length === 0) {
                return;
            }
            Promise.allSettled(animations.map((animation)=>animation.finished)).then(computeThumbPosition).catch(()=>{});
        });
        return ()=>{
            ro.disconnect();
            waitForAnimationsTimeout.clear();
        };
    }, [
        computeThumbPosition,
        viewportRef,
        waitForAnimationsTimeout
    ]);
    function handleUserInteraction() {
        programmaticScrollRef.current = false;
    }
    const props = {
        role: 'presentation',
        ...rootId && {
            'data-id': `${rootId}-viewport`
        },
        // https://accessibilityinsights.io/info-examples/web/scrollable-region-focusable/
        // Keep non-scrollable viewports out of tab order.
        tabIndex: hiddenState.x && hiddenState.y ? -1 : 0,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleDisableScrollbar"].className,
        style: {
            overflow: 'scroll'
        },
        onScroll () {
            if (!viewportRef.current) {
                return;
            }
            computeThumbPosition();
            if (!programmaticScrollRef.current) {
                handleScroll({
                    x: viewportRef.current.scrollLeft,
                    y: viewportRef.current.scrollTop
                });
            }
            // Debounce the restoration of the programmatic flag so that it only
            // flips back to `true` once scrolling has come to a rest. This ensures
            // that momentum scrolling (where no further user-interaction events fire)
            // is still treated as user-driven.
            // 100 ms without scroll events ≈ scroll end
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollend_event
            scrollEndTimeout.start(100, ()=>{
                programmaticScrollRef.current = true;
            });
        },
        onWheel: handleUserInteraction,
        onTouchMove: handleUserInteraction,
        onPointerMove: handleUserInteraction,
        onPointerEnter: handleUserInteraction,
        onKeyDown: handleUserInteraction
    };
    const viewportState = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            scrolling: scrollingX || scrollingY,
            hasOverflowX: !hiddenState.x,
            hasOverflowY: !hiddenState.y,
            overflowXStart: overflowEdges.xStart,
            overflowXEnd: overflowEdges.xEnd,
            overflowYStart: overflowEdges.yStart,
            overflowYEnd: overflowEdges.yEnd,
            cornerHidden: hiddenState.corner
        }), [
        scrollingX,
        scrollingY,
        hiddenState.x,
        hiddenState.y,
        hiddenState.corner,
        overflowEdges
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            viewportRef
        ],
        state: viewportState,
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            computeThumbPosition
        }), [
        computeThumbPosition
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewportContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaViewport.displayName = "ScrollAreaViewport";
function getHiddenState(viewport) {
    const y = viewport.clientHeight >= viewport.scrollHeight;
    const x = viewport.clientWidth >= viewport.scrollWidth;
    return {
        y,
        x,
        corner: y || x
    };
}
function mergeHiddenState(prevState, nextState) {
    if (prevState.y === nextState.y && prevState.x === nextState.x && prevState.corner === nextState.corner) {
        return prevState;
    }
    return nextState;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarContext",
    ()=>ScrollAreaScrollbarContext,
    "useScrollAreaScrollbarContext",
    ()=>useScrollAreaScrollbarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollAreaScrollbarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ScrollAreaScrollbarContext.displayName = "ScrollAreaScrollbarContext";
function useScrollAreaScrollbarContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ScrollAreaScrollbarContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarCssVars",
    ()=>ScrollAreaScrollbarCssVars
]);
let ScrollAreaScrollbarCssVars = /*#__PURE__*/ function(ScrollAreaScrollbarCssVars) {
    /**
   * The scroll area thumb's height.
   * @type {number}
   */ ScrollAreaScrollbarCssVars["scrollAreaThumbHeight"] = "--scroll-area-thumb-height";
    /**
   * The scroll area thumb's width.
   * @type {number}
   */ ScrollAreaScrollbarCssVars["scrollAreaThumbWidth"] = "--scroll-area-thumb-width";
    return ScrollAreaScrollbarCssVars;
}({});
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const ScrollAreaScrollbar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaScrollbar(componentProps, forwardedRef) {
    const { render, className, orientation = 'vertical', keepMounted = false, ...elementProps } = componentProps;
    const { hovering, scrollingX, scrollingY, hiddenState, overflowEdges, scrollbarYRef, scrollbarXRef, viewportRef, thumbYRef, thumbXRef, handlePointerDown, handlePointerUp, rootId, thumbSize, hasMeasuredScrollbar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const state = {
        hovering,
        scrolling: {
            horizontal: scrollingX,
            vertical: scrollingY
        }[orientation],
        orientation,
        hasOverflowX: !hiddenState.x,
        hasOverflowY: !hiddenState.y,
        overflowXStart: overflowEdges.xStart,
        overflowXEnd: overflowEdges.xEnd,
        overflowYStart: overflowEdges.yStart,
        overflowYEnd: overflowEdges.yEnd,
        cornerHidden: hiddenState.corner
    };
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const hideTrackUntilMeasured = !hasMeasuredScrollbar && !keepMounted;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewportEl = viewportRef.current;
        const scrollbarEl = orientation === 'vertical' ? scrollbarYRef.current : scrollbarXRef.current;
        if (!scrollbarEl) {
            return undefined;
        }
        function handleWheel(event) {
            if (!viewportEl || !scrollbarEl || event.ctrlKey) {
                return;
            }
            event.preventDefault();
            if (orientation === 'vertical') {
                if (viewportEl.scrollTop === 0 && event.deltaY < 0) {
                    return;
                }
            } else if (viewportEl.scrollLeft === 0 && event.deltaX < 0) {
                return;
            }
            if (orientation === 'vertical') {
                if (viewportEl.scrollTop === viewportEl.scrollHeight - viewportEl.clientHeight && event.deltaY > 0) {
                    return;
                }
            } else if (viewportEl.scrollLeft === viewportEl.scrollWidth - viewportEl.clientWidth && event.deltaX > 0) {
                return;
            }
            if (orientation === 'vertical') {
                viewportEl.scrollTop += event.deltaY;
            } else {
                viewportEl.scrollLeft += event.deltaX;
            }
        }
        scrollbarEl.addEventListener('wheel', handleWheel, {
            passive: false
        });
        return ()=>{
            scrollbarEl.removeEventListener('wheel', handleWheel);
        };
    }, [
        orientation,
        scrollbarXRef,
        scrollbarYRef,
        viewportRef
    ]);
    const props = {
        ...rootId && {
            'data-id': `${rootId}-scrollbar`
        },
        onPointerDown (event) {
            if (event.button !== 0) {
                return;
            }
            // Ignore clicks on thumb
            if (event.currentTarget !== event.target) {
                return;
            }
            if (!viewportRef.current) {
                return;
            }
            // Handle Y-axis (vertical) scroll
            if (thumbYRef.current && scrollbarYRef.current && orientation === 'vertical') {
                const thumbYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbYRef.current, 'margin', 'y');
                const scrollbarYOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarYRef.current, 'padding', 'y');
                const thumbHeight = thumbYRef.current.offsetHeight;
                const trackRectY = scrollbarYRef.current.getBoundingClientRect();
                const clickY = event.clientY - trackRectY.top - thumbHeight / 2 - scrollbarYOffset + thumbYOffset / 2;
                const scrollableContentHeight = viewportRef.current.scrollHeight;
                const viewportHeight = viewportRef.current.clientHeight;
                const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
                const scrollRatioY = clickY / maxThumbOffsetY;
                const newScrollTop = scrollRatioY * (scrollableContentHeight - viewportHeight);
                viewportRef.current.scrollTop = newScrollTop;
            }
            if (thumbXRef.current && scrollbarXRef.current && orientation === 'horizontal') {
                const thumbXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(thumbXRef.current, 'margin', 'x');
                const scrollbarXOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$utils$2f$getOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(scrollbarXRef.current, 'padding', 'x');
                const thumbWidth = thumbXRef.current.offsetWidth;
                const trackRectX = scrollbarXRef.current.getBoundingClientRect();
                const clickX = event.clientX - trackRectX.left - thumbWidth / 2 - scrollbarXOffset + thumbXOffset / 2;
                const scrollableContentWidth = viewportRef.current.scrollWidth;
                const viewportWidth = viewportRef.current.clientWidth;
                const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
                const scrollRatioX = clickX / maxThumbOffsetX;
                let newScrollLeft;
                if (direction === 'rtl') {
                    // In RTL, invert the scroll direction
                    newScrollLeft = (1 - scrollRatioX) * (scrollableContentWidth - viewportWidth);
                    // Adjust for browsers that use negative scrollLeft in RTL
                    if (viewportRef.current.scrollLeft <= 0) {
                        newScrollLeft = -newScrollLeft;
                    }
                } else {
                    newScrollLeft = scrollRatioX * (scrollableContentWidth - viewportWidth);
                }
                viewportRef.current.scrollLeft = newScrollLeft;
            }
            handlePointerDown(event);
        },
        onPointerUp: handlePointerUp,
        style: {
            position: 'absolute',
            touchAction: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            visibility: hideTrackUntilMeasured ? 'hidden' : undefined,
            ...orientation === 'vertical' && {
                top: 0,
                bottom: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerHeight})`,
                insetInlineEnd: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbHeight]: `${thumbSize.height}px`
            },
            ...orientation === 'horizontal' && {
                insetInlineStart: 0,
                insetInlineEnd: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRootCssVars"].scrollAreaCornerWidth})`,
                bottom: 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbWidth]: `${thumbSize.width}px`
            }
        }
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            orientation === 'vertical' ? scrollbarYRef : scrollbarXRef
        ],
        state,
        props: [
            props,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"]
    });
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            orientation
        }), [
        orientation
    ]);
    const isHidden = orientation === 'vertical' ? hiddenState.y : hiddenState.x;
    const shouldRender = keepMounted || !isHidden;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarContext"].Provider, {
        value: contextValue,
        children: element
    });
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/content/ScrollAreaContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaContent",
    ()=>ScrollAreaContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ScrollAreaContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaContent(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const contentWrapperRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { computeThumbPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewportContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaViewportContext"])();
    const { viewportState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(()=>{
        if (typeof ResizeObserver === 'undefined') {
            return undefined;
        }
        let hasInitialized = false;
        const ro = new ResizeObserver(()=>{
            // ResizeObserver fires once upon observing, so we skip the initial call
            // to avoid double-calculating the thumb position on mount.
            if (!hasInitialized) {
                hasInitialized = true;
                return;
            }
            computeThumbPosition();
        });
        if (contentWrapperRef.current) {
            ro.observe(contentWrapperRef.current);
        }
        return ()=>{
            ro.disconnect();
        };
    }, [
        computeThumbPosition
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            contentWrapperRef
        ],
        state: viewportState,
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$stateAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAreaStateAttributesMapping"],
        props: [
            {
                role: 'presentation',
                style: {
                    minWidth: 'fit-content'
                }
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaContent.displayName = "ScrollAreaContent";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/thumb/ScrollAreaThumb.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ScrollAreaThumb = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaThumb(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { thumbYRef, thumbXRef, handlePointerDown, handlePointerMove, handlePointerUp, setScrollingX, setScrollingY, hasMeasuredScrollbar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const { orientation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaScrollbarContext"])();
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            orientation === 'vertical' ? thumbYRef : thumbXRef
        ],
        state,
        props: [
            {
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp (event) {
                    if (orientation === 'vertical') {
                        setScrollingY(false);
                    }
                    if (orientation === 'horizontal') {
                        setScrollingX(false);
                    }
                    handlePointerUp(event);
                },
                style: {
                    visibility: hasMeasuredScrollbar ? undefined : 'hidden',
                    ...orientation === 'vertical' && {
                        height: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbHeight})`
                    },
                    ...orientation === 'horizontal' && {
                        width: `var(${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbarCssVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarCssVars"].scrollAreaThumbWidth})`
                    }
                }
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaThumb.displayName = "ScrollAreaThumb";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/corner/ScrollAreaCorner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ScrollAreaCorner = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function ScrollAreaCorner(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { cornerRef, cornerSize, hiddenState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRootContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAreaRootContext"])();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            cornerRef
        ],
        props: [
            {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    insetInlineEnd: 0,
                    width: cornerSize.width,
                    height: cornerSize.height
                }
            },
            elementProps
        ]
    });
    if (hiddenState.corner) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time truthy", 1) ScrollAreaCorner.displayName = "ScrollAreaCorner";
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$content$2f$ScrollAreaContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaContent"],
    "Corner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$corner$2f$ScrollAreaCorner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaCorner"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaRoot"],
    "Scrollbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"],
    "Thumb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$thumb$2f$ScrollAreaThumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaViewport"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$root$2f$ScrollAreaRoot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$viewport$2f$ScrollAreaViewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$scrollbar$2f$ScrollAreaScrollbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$content$2f$ScrollAreaContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/content/ScrollAreaContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$thumb$2f$ScrollAreaThumb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/thumb/ScrollAreaThumb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$corner$2f$ScrollAreaCorner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/corner/ScrollAreaCorner.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript) <export * as ScrollArea>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$scroll$2d$area$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/scroll-area/index.parts.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/use-render/useRender.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRender",
    ()=>useRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
;
function useRender(params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])(params.defaultTagName ?? 'div', params, params);
}
}),
"[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/separator/Separator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/system-design-simulator/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-ssr] (ecmascript)");
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', ...elementProps } = componentProps;
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$system$2d$design$2d$simulator$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'separator',
                'aria-orientation': orientation
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) Separator.displayName = "Separator";
}),
];

//# sourceMappingURL=0~im_%40base-ui_react_esm_0~l51ii._.js.map