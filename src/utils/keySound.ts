import { assetUrl } from "./asset"

let ctx: AudioContext | null = null
let buffers: AudioBuffer[] = []
let loading = false

// HTMLAudio pool for instant first-press (no decode wait) – Cherry MX Black sample you added
const SAMPLE_URL = assetUrl(
  "assets/561697__mattruthsound__keyboard-computer-mechanical-typing-individual-keys-press-button-click-tap-one-keypress-96khz-mono-zoomh4n-nt5-008.wav",
)
const htmlPool: HTMLAudioElement[] = []
if (typeof window !== "undefined" && typeof Audio !== "undefined") {
  try {
    for (let i = 0; i < 3; i++) {
      const a = new Audio(SAMPLE_URL)
      a.preload = "auto"
      // @ts-ignore
      a.load()
      htmlPool.push(a)
    }
  } catch {}
}

function getCtx(): AudioContext | null {
  try {
    const AC =
      (window as unknown as { AudioContext: typeof AudioContext })
        .AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    if (!AC) return null
    if (!ctx) ctx = new AC()
    if (ctx.state === "suspended") void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

function ensureSamples(ctx: AudioContext) {
  if (buffers.length || loading) return
  loading = true
  const urls = [SAMPLE_URL, SAMPLE_URL, SAMPLE_URL]
  Promise.all(
    urls.map((u) =>
      fetch(u)
        .then((r) => {
          if (!r.ok) throw new Error("fetch fail " + u)
          return r.arrayBuffer()
        })
        .then((b) => ctx.decodeAudioData(b))
        .catch(() => null),
    ),
  ).then((bufs) => {
    buffers = bufs.filter((b): b is AudioBuffer => !!b)
    loading = false
  })
}

// Pre-decode on idle so first press doesn't hit synth
if (typeof window !== "undefined") {
  try {
    const c = getCtx()
    if (c) ensureSamples(c)
    // Also warm on first user gesture (required to resume suspended context)
    const warm = () => {
      const cc = getCtx()
      if (cc) ensureSamples(cc)
      window.removeEventListener("pointerdown", warm)
      window.removeEventListener("keydown", warm)
    }
    window.addEventListener("pointerdown", warm, { once: true })
    window.addEventListener("keydown", warm, { once: true })
  } catch {}
}

// Fallback synthesized Cherry MX Black – linear, heavy, deep thock (no click bar)
function playSynth(ctx: AudioContext, variant: number) {
  const now = ctx.currentTime
  const jitter = (variant % 5) * 2.2
  const r = (Math.random() - 0.5) * 3.5

  // --- 1. Subtle stem slide (linear = almost silent, low-passed noise) ---
  try {
    const len = Math.floor(ctx.sampleRate * 0.02)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) {
      const env =
        Math.exp(-i / (ctx.sampleRate * 0.0045)) *
        (i < len * 0.7 ? 1 : Math.pow(1 - i / len, 1.2))
      d[i] = (Math.random() * 2 - 1) * env * 0.42
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    // Low-pass for linear smoothness – no harsh bandpass
    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.value = 1800 + r * 30
    lp.Q.value = 0.6
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.09, now)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.02)
    src.connect(lp)
    lp.connect(g)
    g.connect(ctx.destination)
    src.start(now)
    src.stop(now + 0.022)
  } catch {}

  // --- 2. No square click for linear – replaced with ultra-soft 2.8k tick ---
  // (Cherry MX Black has no tactile click, just a muted bottom-out)
  // intentionally omitted loud square; keep a whisper tick for feedback
  try {
    const oTick = ctx.createOscillator()
    const gTick = ctx.createGain()
    oTick.type = "sine"
    oTick.frequency.setValueAtTime(2850 + jitter * 18, now)
    oTick.frequency.exponentialRampToValueAtTime(2400, now + 0.007)
    gTick.gain.setValueAtTime(0.035, now)
    gTick.gain.exponentialRampToValueAtTime(0.001, now + 0.009)
    oTick.connect(gTick)
    gTick.connect(ctx.destination)
    oTick.start(now)
    oTick.stop(now + 0.011)
  } catch {}

  // --- 3. Main thock – deep, heavy, muted (Cherry MX Black 60g linear) ---
  const f0 = 86.5 + jitter + r * 0.6
  ;[1, 2.01, 3.0].forEach((mult, idx) => {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.value = idx === 0 ? 780 : 1100
    lp.Q.value = 0.55
    o.type = "sine"
    o.frequency.setValueAtTime(f0 * mult, now)
    o.frequency.exponentialRampToValueAtTime(f0 * mult * 0.86, now + 0.08)
    const amp = idx === 0 ? 0.68 : idx === 1 ? 0.24 : 0.08
    g.gain.setValueAtTime(amp, now)
    g.gain.exponentialRampToValueAtTime(0.001, now + (idx === 0 ? 0.15 : 0.08))
    o.connect(lp)
    lp.connect(g)
    g.connect(ctx.destination)
    o.start(now + idx * 0.0005)
    o.stop(now + 0.16)
  })

  // --- 4. Sub-bass plate (52Hz heavy case) ---
  const oPlate = ctx.createOscillator()
  const gPlate = ctx.createGain()
  oPlate.type = "sine"
  oPlate.frequency.value = 52 + r * 0.35
  gPlate.gain.setValueAtTime(0.095, now)
  gPlate.gain.exponentialRampToValueAtTime(0.001, now + 0.18)
  oPlate.connect(gPlate)
  gPlate.connect(ctx.destination)
  oPlate.start(now + 0.002)
  oPlate.stop(now + 0.19)

  // --- 5. Spring – heavy, low, muted (linear springs are dampened) ---
  const oSpring = ctx.createOscillator()
  const gSpring = ctx.createGain()
  oSpring.type = "sine"
  oSpring.frequency.setValueAtTime(1320 + jitter * 8, now + 0.004)
  oSpring.frequency.linearRampToValueAtTime(1290 + jitter * 6, now + 0.05)
  gSpring.gain.setValueAtTime(0.038, now + 0.004)
  gSpring.gain.exponentialRampToValueAtTime(0.001, now + 0.055)
  oSpring.connect(gSpring)
  gSpring.connect(ctx.destination)
  oSpring.start(now + 0.004)
  oSpring.stop(now + 0.06)
}

/**
 * Cherry MX Black – linear 60g, deep muted thock, no tactile bump.
 * Uses your uploaded `561697...008.wav` for every press – no more "old" synth on first hit.
 */
export function playKeySound(variant: number = 0) {
  const audio = getCtx()
  if (audio) ensureSamples(audio)

  // 1) If WebAudio buffers ready – lowest latency, best quality
  if (audio && buffers.length) {
    try {
      const now = audio.currentTime
      const buf = buffers[variant % buffers.length] ?? buffers[0]
      const src = audio.createBufferSource()
      src.buffer = buf
      const g = audio.createGain()
      g.gain.setValueAtTime(0.74 + (Math.random() * 0.06 - 0.03), now)
      src.playbackRate.value = 1 + (Math.random() * 0.05 - 0.025)
      const lp = audio.createBiquadFilter()
      lp.type = "lowpass"
      lp.frequency.value = 5200
      lp.Q.value = 0.5
      const hs = audio.createBiquadFilter()
      hs.type = "highshelf"
      hs.frequency.value = 5800
      hs.gain.value = -2.0
      src.connect(lp)
      lp.connect(hs)
      hs.connect(g)
      g.connect(audio.destination)
      src.start(now)
      return
    } catch {}
  }

  // 2) Instant fallback for first press (before decode) – HTMLAudio pool plays the SAME file, no synth
  if (htmlPool.length) {
    try {
      const base = htmlPool[variant % htmlPool.length]
      // cloneNode allows overlapping rapid presses
      const a = base.cloneNode() as HTMLAudioElement
      a.volume = 0.72 + (Math.random() * 0.08 - 0.04)
      // @ts-ignore – playbackRate works on HTMLAudio
      a.playbackRate = 1 + (Math.random() * 0.06 - 0.03)
      a.currentTime = 0
      void a.play().catch(() => {})
      // still ensure WebAudio gets decoded for next presses
      if (audio) ensureSamples(audio)
      return
    } catch {}
  }

  // 3) Last resort – synthesized Cherry MX Black (should rarely be hit now)
  if (audio) playSynth(audio, variant)
}
