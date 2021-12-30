import PlayCallbackInfo from '../interface/playcallbackinfo';
import VideoDeviceInfo from '../interface/videodeviceinfo';
import Region from '../interface/region';
import DCEFrame from '../interface/DCEFrame';
export default class CameraEnhancer {
    private static _jsVersion;
    private static _jsEditVersion;
    protected static _version: string;
    /**
     * @ignore
     */
    static _onLog: (message: any) => void;
    static getVersion(): string;
    /**
     * modify from https://gist.github.com/2107/5529665
     * @ignore
     */
    static browserInfo: any;
    /**
     * Detect environment and get a report.
     * ```js
     * console.log(Dynamsoft.DCE.CameraEnhancer.detectEnvironment());
     * // {"wasm":true, "worker":true, "getUserMedia":true, "camera":true, "browser":"Chrome", "version":90, "OS":"Windows"}
     * ```
     */
    static detectEnvironment(): Promise<any>;
    protected static _hasEngineResourceLoaded: boolean;
    protected static _engineResourcePath?: string;
    static get engineResourcePath(): string;
    /**
     * Specify the Barcode Reader SDK engine (WASM) url. The SDK tries to automatically explore the engine location.
     * If the auto-explored engine location is incorrect, you can manually specify the engine location.
     * The property needs to be set before [[loadWasm]].
     * ```js
     * Dynamsoft.DCE.CameraEnhancer.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@2.0.3/dist/";
     * await Dynamsoft.DCE.CameraEnhancer.loadWasm();
     * ```
    */
    static set engineResourcePath(value: string);
    _canvasMaxWH: number;
    private static _defaultUIElementURL;
    static get defaultUIElementURL(): string;
    /**
     * The url of the default UI.
     * Can only be changed before `createInstance`.
     * ```js
     * Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@2.0.3/dist/dce.ui.html";
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     await enhancer.open(true);
     * })();
     * ```
     */
    static set defaultUIElementURL(value: string);
    /** @ignore */
    private UIElement;
    /**
     * Get HTML element containing the `CameraEnhancer` instance.
     * @category UI
     */
    getUIElement(): HTMLElement;
    /**
     * Set html element containing the `CameraEnhancer` instance.
     * ```html
     * <video class="dce-video" playsinline="true"></video>
     * <script>
     *     let pEnhancer = null;
     *     (async()=>{
     *         let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *         await enhancer.setUIElement(document.getElementsByClassName("dce-video")[0]);
     *         await enhancer.open(true);
     *     })();
     * </script>
     * ```
     * @param elementOrUrl
     * @category UI
     */
    setUIElement(elementOrUrl: HTMLElement | string): Promise<void>;
    private _singleFrameMode;
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     if(enhancer.singleFrameMode){
     *         // the browser does not provide webrtc API, dcejs automatically use singleFrameMode instead
     *         enhancer.open(true);
     *     }
     * })();
     * ```
     */
    get singleFrameMode(): boolean;
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     enhancer.singleFrameMode = true; // use singleFrameMode anyway
     *     enhancer.show();
     * })();
     * ```
     */
    set singleFrameMode(value: boolean);
    onSingleFrameAcquired?: (file: File) => void;
    private _singleFrameModeIpt;
    _clickIptSingleFrameMode: () => void;
    /** @ignore */
    private styleEls;
    private bSaveOriCanvas;
    /**
     * to do
     * @ignore
     */
    get ifSaveOriginalImageInACanvas(): boolean;
    set ifSaveOriginalImageInACanvas(value: boolean);
    maxVideoCvsLength: number;
    protected videoCvses?: (HTMLCanvasElement | OffscreenCanvas)[];
    protected videoGlCvs?: HTMLCanvasElement | OffscreenCanvas;
    protected videoGl?: WebGLRenderingContext;
    protected glImgData?: Uint8Array;
    private webglTexture;
    private webglProgramInfo;
    private webglBuffers;
    /** @ignore */
    _onCameraSelChange: () => Promise<void>;
    /** @ignore */
    _onResolutionSelChange: () => Promise<void>;
    /** @ignore */
    _onCloseBtnClick: () => void;
    /** @ignore */
    _bindUI(): void;
    /** @ignore */
    _unbindUI(): void;
    /**
     * Triggered when the camera video stream is played.
     * ```js
     * enhancer.onPlayed = rsl=>{ console.log(rsl.width+'x'+rsl.height) };
     * await enhancer.open(true); // or selectCamera, setResolution, like these.
     * ```
     * @event onPlayed
     */
    onPlayed?: (info: PlayCallbackInfo) => void;
    private _bOpen;
    private set bOpen(value);
    private _assertOpen;
    /** Set a existing video source */
    videoSrc: string | MediaStream | MediaSource | Blob;
    /** @ignore */
    videoSettings: MediaStreamConstraints;
    private iPlayRound;
    private promisePlay;
    /** @ignore */
    _allCameras: VideoDeviceInfo[];
    /** @ignore */
    _currentCamera?: VideoDeviceInfo;
    /** @ignore */
    _videoTrack: MediaStreamTrack;
    /** @ignore */
    _lastDeviceId: string;
    private _vc_bPlayingVideoBeforeHide;
    private _ev_documentHideEvent;
    /** @ignore */
    private _video;
    get video(): HTMLVideoElement;
    setVideoFit(value: string): void;
    getVideoFit(): string;
    /** @ignore */
    _cvsScanRegion: HTMLCanvasElement;
    /** @ignore */
    _divScanArea: any;
    /** @ignore */
    _divScanLight: any;
    /** @ignore */
    _bgLoading: any;
    /** @ignore */
    _selCam: any;
    /** @ignore */
    _bgCamera: any;
    /** @ignore */
    _selRsl: any;
    /** @ignore */
    _optGotRsl: any;
    /** @ignore */
    _btnClose: any;
    private regionMaskFillStyle;
    private regionMaskStrokeStyle;
    private regionMaskLineWidth;
    private _bShowScanRegionMask;
    /**
     * Whether to show mask in scan region.
     */
    set ifShowScanRegionMask(value: boolean);
    get ifShowScanRegionMask(): boolean;
    private _showScanRegionMask;
    private _hideScanRegionMask;
    private _bShowScanRegionLaser;
    /**
     * Whether to show scan light in scan region.
     */
    set ifShowScanRegionLaser(value: boolean);
    get ifShowScanRegionLaser(): boolean;
    private _showScanRegionLaser;
    private _hideScanRegionLaser;
    private _checkValidRegion;
    private _scanRegion;
    private set scanRegion(value);
    private _arrScanRegionOverlays;
    /**
     * set scan region.
     * @param region
     */
    setScanRegion(region: Region): void;
    /**
     * get scan region.
     */
    getScanRegion(): Region;
    /**
     *
     * @returns HTMLCanvasElement
     */
    addScanRegionOverlayCanvas(): HTMLCanvasElement;
    private _adjustOverlays;
    /**
     *
     * @param inPixels
     * @ignore
     */
    getVisibleRegion(inPixels?: boolean): Region;
    /**
     *
     * @param style
     * @returns
     * @ignore
     */
    setScanRegionMaskStyle(style: any): void;
    /**
     *
     * @param
     * @returns
     * @ignore
     */
    private _getRegionInPixels;
    private _drawScanRegion;
    _clearDrawnRegion(): void;
    private _croppingRegions;
    /**
     * to do
     * @ignore
     */
    set croppingRegions(value: Region[]);
    /**
     * to do
     * @ignore
     */
    get croppingRegions(): Region[];
    private bIncreaseRegionIndexAuto;
    private _croppingRegionIndex;
    /**
     * to do
     * @ignore
     */
    set croppingRegionIndex(index: number);
    /**
     * to do
     * @ignore
     */
    get croppingRegionIndex(): number;
    private _loopInterval;
    /**
     * to do
     * @ignore
     */
    set loopInterval(value: number);
    get loopInterval(): number;
    private _maxNumberOfFramesInBuffer;
    /**
     * to do
     * @ignore
     */
    set maxNumberOfFramesInBuffer(value: number);
    get maxNumberOfFramesInBuffer(): number;
    /**
     * to do
     * @ignore
     */
    get numberOfFramesInBuffer(): number;
    private _frameQueue;
    private _frameLoopTimeoutId;
    private _bFetchingLoopStarted;
    private _bStoppedByPause;
    /**
     * Specify how soon to refresh the buffer when the buffer is full.
     * NOTE that it can be set to 0 (default) or -1 which means
     * 0: When the buffer is full, refresh it at the next loop.
     * -1: When the buffer is full, do nothing at the next loop.
     * @ignore
     */
    refreshInterval: number;
    private _frameLoopTimeoutId2;
    /**
     * Indicates whether the instance has been destroyed.
     * to do
     * @ignore
     */
    private bDestroyed;
    isContextDestroyed(): boolean;
    /**
     * Create a `CameraEnhancer` object.
    * ```
    * let pEnhancer = null;
    * (async()=>{
    *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
    * })();
    * ```
     * @param config
     * @category Initialize and Destroy
     */
    static createInstance(config?: any): Promise<CameraEnhancer>;
    /**
     * Continue the video.
     * ```js
     * enhancer.pause(); // or enhancer.stop()
     * \\*** a lot of work ***
     * await enhancer.play();
     * ```
     * @fires [[onPlayed]]
     * @category Play and Pause
     * @ignore
     */
    play(deviceId?: string, width?: number, height?: number): Promise<PlayCallbackInfo>;
    /**
     * Resume the video.
     * @category Pause and Resume
     */
    resume(): Promise<void>;
    /**
     * Pause the video. Do not release the camera.
     * ```js
     * scanner.pause();
     * \\*** a lot of work ***
     * await scanner.play();
     * ```
     * @category Pause and Resume
     */
    pause(): void;
    /** @ignore */
    /**
     * Bind UI, open the camera, start decoding, and remove the UIElement `display` style if the original style is `display:none;`.
     * ```js
     * await scanner.setUIElement("https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@2.0.3/dist/dce.ui.html");
     * scanner.onUnduplicatedRead = (txt, result) => { alert(txt); console.log(result); };
     * await scanner.show();
     * // await scanner.hide();
     * ```
     * @fires [[onPlayed]]
     * @category Open and Close
     */
    /**
     * Stop decoding, release camera, unbind UI, and set the Element as `display:none;`.
     * ```js
     * await scanner.show();
     * await scanner.hide();
     * ```
     * ```js
     * await scanner.showVideo();
     * await scanner.hide();
     * ```
     * @category Open and Close
     */
    close(hideUI?: boolean): void;
    /**
     * Bind UI, open the camera.
     * ```js
     * await enhancer.setUIElement(document.getElementById("my-camera-enhancer"));
     * await enhancer.open(true);
     * // await enhancer.close(true);
     * ```
     * @fires [[onPlayed]]
     * @category Open and Close
     */
    open(showUI?: boolean): Promise<PlayCallbackInfo>;
    /**
     * Stop the video, and release the camera.
     * ```js
     * enhancer.stop()
     * \\*** a lot of work ***
     * await enhancer.play();
     * ```
     * @category Play and Pause
     * @ignore
     */
    stop(): void;
    /**
     * Get infomation of all available cameras on the device.
     * ```js
     * let cameras = await enhancer.getAllCameras();
     * if(cameras.length){
     *     await enhancer.selectCamera(cameras[0]);
     * }
     * ```
     * @category Camera Settings
     */
    getAllCameras(): Promise<VideoDeviceInfo[]>;
    private _renderSelCameraInfo;
    /**
     * Get information about the currently used camera.
     * ```js
     * let camera = await enhancer.getSelectedCamera();
     * ```
     * @category Camera Settings
     */
    getSelectedCamera(): Promise<VideoDeviceInfo | null>;
    /**
     * Choose the camera and play it by its information or devide id.
     * ```js
     * let cameras = await enhancer.getAllCameras();
     * if(cameras.length){
     *     await enhancer.selectCamera(cameras[0]);
     * }
     * ```
     * @param cameraInfoOrDeviceId
     * @fires [[onPlayed]]
     * @category Camera Settings
     */
    selectCamera(cameraInfoOrDeviceId: any): Promise<PlayCallbackInfo>;
    /**
     * Get current camera resolution.
     * ```js
     * let rsl = await enhancer.getResolution();
     * console.log(rsl[0] + " x " + rsl[1]);
     * ```
     * @category Camera Settings
     */
    getResolution(): number[];
    /**
     * Set current camera resolution.
     * ```js
     * await enhancer.setResolution(width, height);
     * ```
     * @param width
     * @param height
     * @fires [[onPlayed]]
     * @category Camera Settings
     */
    setResolution(width: number | number[], height: number): Promise<PlayCallbackInfo>;
    private mapCameraEvent;
    on(eventName: string, listener: () => void): void;
    /**
     * Get current video settings.
     * @category Camera Settings
     */
    getVideoSettings(): MediaStreamConstraints;
    /**
     * Modify and update video settings.
     * ```js
     * await enhancer.updateVideoSettings({ video: {width: {ideal: 1280}, height: {ideal: 720}, facingMode: {ideal: 'environment'}} });
     * ```
     * @param MediaStreamConstraints
     * @category Camera Settings
     */
    updateVideoSettings(MediaStreamConstraints: any): Promise<PlayCallbackInfo | void>;
    /**
     * Check if the camera is open.
     * @category Open and Close
     */
    isOpen(): boolean;
    /**
     * Get the camera capabilities. Unavailable in Firefox.
     * Only available when the camera is open.
     * ```console
     * > enhancer.getCapabilities()
     * < {
     *   "aspectRatio":{"max":3840,"min":0.000462962962962963},
     *   "colorTemperature":{max: 7000, min: 2850, step: 50},
     *   "deviceId":"1e...3af7",
     *   "exposureCompensation": {max: 2.0000040531158447, min: -2.0000040531158447, step: 0.16666699945926666},
     *   "exposureMode":["continuous","manual"],
     *   "facingMode":["environment"],
     *   "focusMode":["continuous","single-shot","manual"],
     *   "frameRate":{"max":30,"min":0},
     *   "groupId":"71...a935",
     *   "height":{"max":2160,"min":1},
     *   "resizeMode":["none","crop-and-scale"],
     *   "torch":true,
     *   "whiteBalanceMode":["continuous","manual"],
     *   "width":{"max":3840,"min":1},
     *   "zoom":{max: 606, min: 100, step: 2}
     * }
     * ```
     * @see [[turnOnTorch]],[[turnOffTorch]],[[setColorTemperature]],[[setExposureCompensation]],[[setZoom]],[[setFrameRate]],[[getFrameRate]]
     * @category Camera Settings
     */
    getCapabilities(): MediaTrackCapabilities;
    /** @ignore */
    getCameraSettings(): MediaTrackSettings;
    /** @ignore */
    getConstraints(): MediaTrackConstraints;
    /**
     * @ignore
     * Set the camera capabilities.
     * Only available when the camera is open.
     * It's a low-level API, usually you can use the wrapped APIs instead.
     * ```js
     * await enhancer.applyConstraints({ frameRate: { ideal:5 } });
     * ```
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    /**
     * Turn on the torch/flashlight.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.turnOnTorch();
     * ```
     * @see [[turnOffTorch]],[[getCapabilities]]
     * @category Camera Settings
     */
    turnOnTorch(): Promise<void>;
    /**
     * Turn off the torch.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.turnOffTorch();
     * ```
     * @see [[turnOnTorch]],[[getCapabilities]]
     * @category Camera Settings
     */
    turnOffTorch(): Promise<void>;
    /**
     * Adjusts the color temperature. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setColorTemperature(5000);
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setColorTemperature(value: number): Promise<void>;
    /**
     * Adjusts the exposure level. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setExposureCompensation(-0.7);
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setExposureCompensation(value: number): Promise<void>;
    /**
     * Adjusts the zoom ratio. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setZoom(400);
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setZoom(value: number): Promise<void>;
    /**
     * Adjusts the frame rate. Only available in Chrome, Edge and Safari.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setFrameRate(10);
     * ```
     * @see [[getFrameRate]],[[getCapabilities]]
     * @category Camera Settings
     */
    setFrameRate(value: number): Promise<void>;
    /**
     * Get the real-time frame rate.
     * Only available when the camera is open.
     * ```js
     * enhancer.getFrameRate();
     * ```
     * @see [[setFrameRate]],[[getCapabilities]]
     * @category Camera Settings
     */
    getFrameRate(): number;
    /**
     * Adjusts the focus distance. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setFocus(5);
     * ```
     * @see [[getFocus]],[[getCapabilities]]
     * @category Camera Settings
     */
    setFocus(value: number): Promise<void>;
    /**
     * Get the focus distance.
     * Only available when the camera is open.
     * ```js
     * enhancer.getFocus();
     * ```
     * @see [[setFocus]],[[getCapabilities]]
     * @category Camera Settings
     */
    getFocus(): number;
    /**
     * to do
     * @ignore
     */
    getFrame(): DCEFrame;
    private _getFrame;
    /**
     * to do
     * @ignore
     */
    private getCurrentRegion;
    private _fetchingLoop;
    /**
     * to do
     * @ignore
     */
    startFetchingLoop(): void;
    /**
     * to do
     * @ignore
     */
    isFetchingLoopStarted(): boolean;
    /**
     * stop fetching loop and clear frame queue.
     * @ignore
     */
    stopFetchingLoop(): void;
    /**
     * to do
     * @ignore
     */
    getFrameFromBuffer(index?: number): DCEFrame;
    /**
     * Destroy the `BarcodeScanner` instance. If your page needs to create new instances from time to time, don't forget to destroy unused old instances, otherwise it will cause memory leaks.
     * @category Initialize and Destroy
     */
    private forceLoseContext;
    dispose(removeUIElement: boolean): void;
}
//# sourceMappingURL=cameraenhancer.d.ts.map