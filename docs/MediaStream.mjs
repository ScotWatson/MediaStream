/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

class MediaSource {
  constructor() {
  }
};

class MediaSink {
  constructor() {
  }
};

class MediaBundle {
  #mediaStream;
  constructor() {
    this.#mediaStream = args.mediaStream;
  }
  get active() {
    return this.#mediaStream.active;
  }
  get id() {
    return this.#mediaStream.id;
  }
  addTrack(args) {
    this.#mediaStream.addTrack(args.track.#mediaTrack);
  }
  clone() {
    this.#mediaStream.clone();
  }
  getTracks() {
    this.#mediaStream.getTracks();
  }
};


class MediaSource {
  #mediaTrack;
  constructor() {
  }
  get contentHint() {
  }
  get enabled() {
  }
  get id() {
  }
  get kind() {
  }
  get label() {
  }
  get muted() {
  }
  get readyState() {
  }
  applyConstraints(args) {
  }
  clone(args) {
  }
  getCapabilities(args) {
  }
  getConstraints(args) {
  }
  getSettings(args) {
  }
  stop(args) {
  }
};


class  extends {
  #htmlMediaElement;
  constructor() {

    MediaStream
    MediaSource
    Blob
    URL
     
    this.#htmlMediaElement = new HTMLMediaElement();
  }
  get audioTracks() {
    return this.#htmlMediaElement.audioTracks;
  }
  set audioTracks() {
  }
  get autoplay() {
  }
  set autoplay() {
  }
  get buffered() {
  }
  get controls() {
  }
  set controls() {
  }
  get controlsList() {
  }
  get crossOrigin() {
  }
  set crossOrigin() {
  }
  get currentSrc() {
  }
  get currentTime() {
  }
  set currentTime() {
  }
  get defaultMuted() {
  }
  set defaultMuted() {
  }
  get defaultPlaybackRate() {
  }
  set defaultPlaybackRate() {
  }
  get disableRemotePlayback() {
  }
  set disableRemotePlayback() {
  }
  get duration() {
  }
  get ended() {
  }
  get error() {
  }
  get loop() {
  }
  set loop() {
  }
  get muted() {
  }
  set muted() {
  }
  get networkState() {
  }
  get paused() {
  }
  get playbackRate() {
  }
  set playbackRate() {
  }
  get preload() {
  }
  set preload() {
  }
  get preservesPitch() {
  }
  set preservesPitch() {
  }
  get readyState() {
  }
  get seekable() {
  }
  get src() {
  }
  set src() {
  }
  get srcObject() {
  }
  set srcObject() {
  }
  get textTracks() {
  }
  get videoTracks() {
  }
  get volume() {
  }
  set volume() {
  }
  canPlayType(args) {
  }
  captureStream(args) {
  }
  fastSeek(args) {
  }
  load(args) {
  }
  pause(args) {
  }
  play(args) {
  }
  setMediaKeys(args) {
  }
  setSinkId(args) {
  }
};
