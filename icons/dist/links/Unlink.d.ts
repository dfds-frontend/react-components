import * as React from 'react';
declare const SvgUnlink: React.ForwardRefExoticComponent<Pick<React.SVGProps<SVGSVGElement>, "string" | "max" | "accumulate" | "origin" | "end" | "hanging" | "alphabetic" | "ideographic" | "media" | "style" | "clipPath" | "filter" | "mask" | "result" | "local" | "color" | "clip" | "fill" | "stroke" | "mathematical" | "additive" | "key" | "children" | "className" | "height" | "id" | "lang" | "method" | "min" | "name" | "target" | "type" | "width" | "role" | "tabIndex" | "accentHeight" | "alignmentBaseline" | "allowReorder" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "azimuth" | "baseFrequency" | "baselineShift" | "baseProfile" | "bbox" | "begin" | "bias" | "by" | "calcMode" | "capHeight" | "clipPathUnits" | "clipRule" | "colorInterpolation" | "colorInterpolationFilters" | "colorProfile" | "colorRendering" | "contentScriptType" | "contentStyleType" | "cursor" | "cx" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "direction" | "display" | "divisor" | "dominantBaseline" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "exponent" | "externalResourcesRequired" | "fillOpacity" | "fillRule" | "filterRes" | "filterUnits" | "floodColor" | "floodOpacity" | "focusable" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "format" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "glyphRef" | "gradientTransform" | "gradientUnits" | "horizAdvX" | "horizOriginX" | "href" | "imageRendering" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "letterSpacing" | "lightingColor" | "limitingConeAngle" | "markerEnd" | "markerHeight" | "markerMid" | "markerStart" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mode" | "numOctaves" | "offset" | "opacity" | "operator" | "order" | "orient" | "orientation" | "overflow" | "overlinePosition" | "overlineThickness" | "paintOrder" | "panose1" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "pointerEvents" | "points" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "preserveAspectRatio" | "primitiveUnits" | "r" | "radius" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredExtensions" | "requiredFeatures" | "restart" | "rotate" | "rx" | "ry" | "scale" | "seed" | "shapeRendering" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "stopColor" | "stopOpacity" | "strikethroughPosition" | "strikethroughThickness" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "surfaceScale" | "systemLanguage" | "tableValues" | "targetX" | "targetY" | "textAnchor" | "textDecoration" | "textLength" | "textRendering" | "to" | "transform" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeBidi" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "values" | "vectorEffect" | "version" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewBox" | "viewTarget" | "visibility" | "vMathematical" | "widths" | "wordSpacing" | "writingMode" | "x1" | "x2" | "x" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "y" | "yChannelSelector" | "z" | "zoomAndPan" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<SVGSVGElement>>;
export default SvgUnlink;
