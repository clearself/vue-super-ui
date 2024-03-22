import {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  TransitionPresets,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsMasterCss,
  breakpointsPrimeFlex,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  cloneFnJSON,
  computedAsync,
  computedInject,
  createFetch,
  createReusableTemplate,
  createTemplatePromise,
  createUnrefFn,
  customStorageEventName,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  executeTransition,
  formatTimeAgo,
  getSSRHandler,
  mapGamepadToXbox360Controller,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onLongPress,
  onStartTyping,
  setSSRHandler,
  templateRef,
  unrefElement,
  useActiveElement,
  useAnimate,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBluetooth,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useCached,
  useClipboard,
  useClipboardItems,
  useCloned,
  useColorMode,
  useConfirmDialog,
  useCssVar,
  useCurrentElement,
  useCycleList,
  useDark,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFileDialog,
  useFileSystemAccess,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGamepad,
  useGeolocation,
  useIdle,
  useImage,
  useInfiniteScroll,
  useIntersectionObserver,
  useKeyModifier,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useObjectUrl,
  useOffsetPagination,
  useOnline,
  usePageLeave,
  useParallax,
  useParentElement,
  usePerformanceObserver,
  usePermission,
  usePointer,
  usePointerLock,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredContrast,
  usePreferredDark,
  usePreferredLanguages,
  usePreferredReducedMotion,
  usePrevious,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenOrientation,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSorted,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStepper,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSupported,
  useSwipe,
  useTemplateRefsList,
  useTextDirection,
  useTextSelection,
  useTextareaAutosize,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeoutPoll,
  useTimestamp,
  useTitle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize
} from "./chunk-3GQCVKPN.js";
import {
  assert,
  bypassFilter,
  camelize,
  clamp,
  computedEager,
  computedWithControl,
  containsProp,
  controlledRef,
  createEventHook,
  createFilterWrapper,
  createGlobalState,
  createInjectionState,
  createSharedComposable,
  createSingletonPromise,
  debounceFilter,
  directiveHooks,
  extendRef,
  formatDate,
  get,
  hasOwn,
  hyphenate,
  identity,
  increaseWithUnit,
  injectLocal,
  invoke,
  isClient,
  isDef,
  isDefined,
  isIOS,
  isObject,
  isWorker,
  makeDestructurable,
  noop,
  normalizeDate,
  notNullish,
  now,
  objectEntries,
  objectOmit,
  objectPick,
  pausableFilter,
  promiseTimeout,
  provideLocal,
  rand,
  reactify,
  reactifyObject,
  reactiveComputed,
  reactiveOmit,
  reactivePick,
  refAutoReset,
  refDebounced,
  refDefault,
  refThrottled,
  refWithControl,
  resolveRef,
  resolveUnref,
  set2 as set,
  syncRef,
  syncRefs,
  throttleFilter,
  timestamp,
  toReactive,
  toRef,
  toRefs,
  toValue,
  tryOnBeforeMount,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  until,
  useArrayDifference,
  useArrayEvery,
  useArrayFilter,
  useArrayFind,
  useArrayFindIndex,
  useArrayFindLast,
  useArrayIncludes,
  useArrayJoin,
  useArrayMap,
  useArrayReduce,
  useArraySome,
  useArrayUnique,
  useCounter,
  useDateFormat,
  useDebounceFn,
  useInterval,
  useIntervalFn,
  useLastChanged,
  useThrottleFn,
  useTimeout,
  useTimeoutFn,
  useToNumber,
  useToString,
  useToggle,
  watchArray,
  watchAtMost,
  watchDebounced,
  watchDeep,
  watchIgnorable,
  watchImmediate,
  watchOnce,
  watchPausable,
  watchThrottled,
  watchTriggerable,
  watchWithFilter,
  whenever
} from "./chunk-TRGGXRGV.js";
import "./chunk-V7AUFIRV.js";
import "./chunk-UXIASGQL.js";
export {
  DefaultMagicKeysAliasMap,
  StorageSerializers,
  TransitionPresets,
  assert,
  computedAsync as asyncComputed,
  refAutoReset as autoResetRef,
  breakpointsAntDesign,
  breakpointsBootstrapV5,
  breakpointsMasterCss,
  breakpointsPrimeFlex,
  breakpointsQuasar,
  breakpointsSematic,
  breakpointsTailwind,
  breakpointsVuetify,
  bypassFilter,
  camelize,
  clamp,
  cloneFnJSON,
  computedAsync,
  computedEager,
  computedInject,
  computedWithControl,
  containsProp,
  computedWithControl as controlledComputed,
  controlledRef,
  createEventHook,
  createFetch,
  createFilterWrapper,
  createGlobalState,
  createInjectionState,
  reactify as createReactiveFn,
  createReusableTemplate,
  createSharedComposable,
  createSingletonPromise,
  createTemplatePromise,
  createUnrefFn,
  customStorageEventName,
  debounceFilter,
  refDebounced as debouncedRef,
  watchDebounced as debouncedWatch,
  defaultDocument,
  defaultLocation,
  defaultNavigator,
  defaultWindow,
  directiveHooks,
  computedEager as eagerComputed,
  executeTransition,
  extendRef,
  formatDate,
  formatTimeAgo,
  get,
  getSSRHandler,
  hasOwn,
  hyphenate,
  identity,
  watchIgnorable as ignorableWatch,
  increaseWithUnit,
  injectLocal,
  invoke,
  isClient,
  isDef,
  isDefined,
  isIOS,
  isObject,
  isWorker,
  makeDestructurable,
  mapGamepadToXbox360Controller,
  noop,
  normalizeDate,
  notNullish,
  now,
  objectEntries,
  objectOmit,
  objectPick,
  onClickOutside,
  onKeyDown,
  onKeyPressed,
  onKeyStroke,
  onKeyUp,
  onLongPress,
  onStartTyping,
  pausableFilter,
  watchPausable as pausableWatch,
  promiseTimeout,
  provideLocal,
  rand,
  reactify,
  reactifyObject,
  reactiveComputed,
  reactiveOmit,
  reactivePick,
  refAutoReset,
  refDebounced,
  refDefault,
  refThrottled,
  refWithControl,
  resolveRef,
  resolveUnref,
  set,
  setSSRHandler,
  syncRef,
  syncRefs,
  templateRef,
  throttleFilter,
  refThrottled as throttledRef,
  watchThrottled as throttledWatch,
  timestamp,
  toReactive,
  toRef,
  toRefs,
  toValue,
  tryOnBeforeMount,
  tryOnBeforeUnmount,
  tryOnMounted,
  tryOnScopeDispose,
  tryOnUnmounted,
  unrefElement,
  until,
  useActiveElement,
  useAnimate,
  useArrayDifference,
  useArrayEvery,
  useArrayFilter,
  useArrayFind,
  useArrayFindIndex,
  useArrayFindLast,
  useArrayIncludes,
  useArrayJoin,
  useArrayMap,
  useArrayReduce,
  useArraySome,
  useArrayUnique,
  useAsyncQueue,
  useAsyncState,
  useBase64,
  useBattery,
  useBluetooth,
  useBreakpoints,
  useBroadcastChannel,
  useBrowserLocation,
  useCached,
  useClipboard,
  useClipboardItems,
  useCloned,
  useColorMode,
  useConfirmDialog,
  useCounter,
  useCssVar,
  useCurrentElement,
  useCycleList,
  useDark,
  useDateFormat,
  refDebounced as useDebounce,
  useDebounceFn,
  useDebouncedRefHistory,
  useDeviceMotion,
  useDeviceOrientation,
  useDevicePixelRatio,
  useDevicesList,
  useDisplayMedia,
  useDocumentVisibility,
  useDraggable,
  useDropZone,
  useElementBounding,
  useElementByPoint,
  useElementHover,
  useElementSize,
  useElementVisibility,
  useEventBus,
  useEventListener,
  useEventSource,
  useEyeDropper,
  useFavicon,
  useFetch,
  useFileDialog,
  useFileSystemAccess,
  useFocus,
  useFocusWithin,
  useFps,
  useFullscreen,
  useGamepad,
  useGeolocation,
  useIdle,
  useImage,
  useInfiniteScroll,
  useIntersectionObserver,
  useInterval,
  useIntervalFn,
  useKeyModifier,
  useLastChanged,
  useLocalStorage,
  useMagicKeys,
  useManualRefHistory,
  useMediaControls,
  useMediaQuery,
  useMemoize,
  useMemory,
  useMounted,
  useMouse,
  useMouseInElement,
  useMousePressed,
  useMutationObserver,
  useNavigatorLanguage,
  useNetwork,
  useNow,
  useObjectUrl,
  useOffsetPagination,
  useOnline,
  usePageLeave,
  useParallax,
  useParentElement,
  usePerformanceObserver,
  usePermission,
  usePointer,
  usePointerLock,
  usePointerSwipe,
  usePreferredColorScheme,
  usePreferredContrast,
  usePreferredDark,
  usePreferredLanguages,
  usePreferredReducedMotion,
  usePrevious,
  useRafFn,
  useRefHistory,
  useResizeObserver,
  useScreenOrientation,
  useScreenSafeArea,
  useScriptTag,
  useScroll,
  useScrollLock,
  useSessionStorage,
  useShare,
  useSorted,
  useSpeechRecognition,
  useSpeechSynthesis,
  useStepper,
  useStorage,
  useStorageAsync,
  useStyleTag,
  useSupported,
  useSwipe,
  useTemplateRefsList,
  useTextDirection,
  useTextSelection,
  useTextareaAutosize,
  refThrottled as useThrottle,
  useThrottleFn,
  useThrottledRefHistory,
  useTimeAgo,
  useTimeout,
  useTimeoutFn,
  useTimeoutPoll,
  useTimestamp,
  useTitle,
  useToNumber,
  useToString,
  useToggle,
  useTransition,
  useUrlSearchParams,
  useUserMedia,
  useVModel,
  useVModels,
  useVibrate,
  useVirtualList,
  useWakeLock,
  useWebNotification,
  useWebSocket,
  useWebWorker,
  useWebWorkerFn,
  useWindowFocus,
  useWindowScroll,
  useWindowSize,
  watchArray,
  watchAtMost,
  watchDebounced,
  watchDeep,
  watchIgnorable,
  watchImmediate,
  watchOnce,
  watchPausable,
  watchThrottled,
  watchTriggerable,
  watchWithFilter,
  whenever
};
//# sourceMappingURL=@vueuse_core.js.map
