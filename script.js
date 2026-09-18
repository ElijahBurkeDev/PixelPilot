console.log("Script loaded successfully.");

window.Userback = window.Userback || {};
  Userback.access_token = "A-6XNr2g2Qk0fa7PZInuGEqKuUb";
  (function(d) {
    var s = d.createElement('script');s.async = true;s.src = 'https://static.userback.io/widget/v1.js';(d.head || d.body).appendChild(s);
  })(document);


    // For spaceship cards
var classicstats = `<span style="font-size: 16px; font-family: '8bit-font-text'; color: #c8c8d0;"> 
     PRICE: Free 
</span>` + buildStatBars(7, 1, 1) + `<span style="font-size: 14px; font-family: '8bit-font-text'; color: #c8c8d0;">
<br> Guns: 1x AstroPopper
<br> Cooldown: 1 second
<br> Fire modes: Single-shot
 <br> Score Multiplier: 1
 <br> Size: Medium
 <br><br> Write-up: This spaceship is... well... classic. Large and fast with no multiplier, it's not quite the best spaceship. But hey, it's free.</span> 
 <br><br>`

 var classicEquipButton = `<button class="button buttonPurchase" onclick="setSelectedShipCookie(7, 1, '1ast', 1, 'single-shot', 50, 50, 1, 110, 90, './images/classic_spaceship_guns_removed_thrust.png', 'c') || shipEquiped(this)">Equip Ship</button>`

//----------------------------------------------------------------

var pixproStats = `<span style="font-size: 16px; font-family: '8bit-font-text'; color: #c8c8d0;"> 
    PRICE: 20000PP 
</span>` + buildStatBars(7, 1, 1.25) + `<span style="font-size: 14px; font-family: '8bit-font-text'; color: #c8c8d0;">
<br> Guns: 1x AstroPopper
<br> Cooldown: 1 second
<br> Fire modes: Single-shot
<br> Score Multiplier: 1.25
<br> Size: Medium
<br><br> Write-up: The Pixel Piece Prospector is just here for the money (and alliteration). It has nothing to boast of in performance, but its score multiplier will get you cash—fast!
<br>
</span>`  

var pixproPurchaseButton = `<button id="pixproPurchaseButton" class="button buttonPurchase" onclick="purchaseAttempt(20000, 'pixpro')">Purchase Ship</button> <br>`
var pixproEquipButton = `<br> <br> <button class="button buttonPurchase" onclick="setSelectedShipCookie(7, 1, '1ast', 1, 'single-shot', 50, 50, 1.25, 110, 90, './images/prospector_spaceship_guns_removed_thrust.png', 'gs') || shipEquiped(this)">Equip Ship</button>`


//----------------------------------------------------------------------
// ── STAT BARS BUILDER ──
function buildStatBars(speed, maneuver, multiplier) {
  function bar(label, value, max, color) {
    const pct = Math.min(100, Math.round((value / max) * 100));
    return `<div class="stat-bar-wrap">
      <span class="stat-bar-label">${label}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill" style="width:${pct}%; background:${color};"></div>
      </div>
    </div>`;
  }
  return `<div style="margin: 10px 0 4px 0;">
    ${bar('Speed', speed, 10, '#e03a3a')}
    ${bar('Maneuverability', maneuver, 5, '#4a9bdc')}
    ${bar('Multiplier', multiplier, 2, '#e8c84a')}
  </div>`;
}

//----------------------------------------------------------------------
var splashStrings = [
  "Holy hamsters!",
  "Gluten-free water!",
  "Tip your waiter!",
  "Gondor calls for aid!",
  "Made in the USA!",
  "Give me a break!",
  "Shout!",
  "Vegan-free!",
  "Totally accurate!",
  "Heavier than a kilogram of feathers!",
  "PEMDAS!",
  "Made for VSA!",
  "All I'm asking for is total perfection!",
  "Déjà vu!",
  "May contain bugs!",
  "Smash that subscribe button!",
  "Don't forget to breathe!",
  "Don't ask your doctor!",
  "Read the instructions before opening!",
  "Привет!",
  "Eat more cheeseballs!",
  "Don't forget your homework!",
  "Panic is not advised, but it is recommended!",
  "Nobody asked for your opinion!",
  "Try the calamari!",
  "Oh, it's you again!",
  "I'm ready!",
  "Pay as little taxes as legally permissible!",
  "Don't be naïve!",
  "What the fridge!",
  "May cause intense anxiety!",
  "Pineapple on pizza is good!",
  "Wow, nice shoes!",
  "Watch out for the mafia!",
  "That's kinda dicey!",
  "Это всего лишь несколько слов!",
  "Indie!",
  "Don't forget to lock up the chinchillas!",
  "Another one bites the dust!",
  "Check under your bed for Chuck Norris!",
  "Carry on!",
  "Don't let a drunk chicken stomp on your crops!",
  "Houston, we have a major problem!",
  "It gets worse, trust me!",
  "So many pixels!",
  "Oh come on, Patrick!",
  "Don't be scared of swamp puppies!",
  "Let's shoot for 40!",
  "Todd is just a garbage last name!",
  "Licking ice cream is just wrong!",
  "Touch grass!",
  "Timmy can play golf with a bowling ball!",
  "Wheels are more abundant than doors!",
  "Three little birds!",
  "Ha roligt!",
  "Nyango Star destroys the drums!",
  "You underestimate my power!",
  "That's some good beans!",
  "Spoons are not inherently evil!",
  "Made with Javascript!",
  "Your shoe is untied!",
  "Good afternoon, good evening, and good night!",
  "It's elementary, my dear Watson!",
  "Probably doesn't contain peanuts, but who knows!",
  "Produced in a two-story house!",
  "I'm going on an adventure!",
  "Dream on!",
  "Chuck Norris can kill two stones with one bird!",
  "Grenade!",
  "Seal pups are pretty average!",
  "Take a break from your phone already!",
  "Flying straight isn't a good idea!",
  "Still a work in progress!",
  "Technoblade never dies!",
  "Do not go gentle into that good night!",
  "Everything is awesome!",
  "Look behind you!",
  "It's Schoology, not Schoalagy!",
  "It is Thursday, my dudes!",
  "That's a lotta damage!",
  "Ask the Panzer of the Lake!",
  "Feedback is greatly appreciated!",
  "Emotional damage!",
  "Brother, may I have some oats!",
  "Think for yourself!",
  "Tell your friends!",
  "The Dyatlov Pass wasn't just an avalanche!",
  "Agency FB is pretty cool!",
  "Support the troops!",
  "You may not sleep now, there are monsters nearby!",
  "Microsoft One Drive is malware!",
  "Attack the D point!",
  "Do a barrel roll!",
  "Try listening to real music!",
  "It is Wednesday, my dudes!",
  "Don't put rubber bands in your hair!",
  "Poyo!",
  "Free to play!"
];

document.getElementById("splashText").textContent =
  splashStrings[Math.floor(Math.random() * splashStrings.length)];


// For spaceship performance
let sensitivity = 2;

// Settings state
let settingsMusicVol   = 0.25;
let settingsSfxVol     = 0.25;
let settingsShowHitbox = false;

// For spaceship previews
var classicSpaceshipPrev = `<img class="shipPrev" src="./images/classic_spaceship_guns_removed_thrust.png">`
var pieproSpaceshipsPrev = `<img class="shipPrev" src="./images/prospector_spaceship_guns_removed_thrust.png">`

// For game canvas
var myGamePiece;
var myObstacles = [];
var myBullets = [];
var myBarriers = [];
var myScore;
var myObstacle;
var barrierOpening = 300;
var myBackground;
var myAmmo;
var myMags = [];
var speedLines = [];
var crashFlash = { active: false, alpha: 0, elapsed: 0, duration: 18 };
var crashSlowmo = { active: false, elapsed: 0, duration: 20 };

// Explosions
var explosions = [];
var screenShake = { active: false, intensity: 0, duration: 0, elapsed: 0 };

function spawnExplosion(x, y) {
    explosions.push({ x: x, y: y, radius: 2, maxRadius: 500, alpha: 1.0 });
    explosionSound.play();
}

function updateExplosions() {
    for (var e = explosions.length - 1; e >= 0; e--) {
        explosions[e].radius += 2.5;
        explosions[e].alpha  -= 0.07;
        if (explosions[e].alpha <= 0 || explosions[e].radius >= explosions[e].maxRadius) {
            explosions.splice(e, 1);
        }
    }
}

function drawExplosions() {
    var ctx = myGameArea.context;
    const sx = myGameArea.shakeX || 0;
    const sy = myGameArea.shakeY || 0;
    for (var e = 0; e < explosions.length; e++) {
        var exp = explosions[e];
        var gradient = ctx.createRadialGradient(
          exp.x + sx, exp.y + sy, 0,
          exp.x + sx, exp.y + sy, exp.radius
        );
        gradient.addColorStop(0,   "rgba(255, 255, 180, " + exp.alpha + ")");
        gradient.addColorStop(0.3, "rgba(255, 160,   0, " + exp.alpha + ")");
        gradient.addColorStop(1,   "rgba(200,  40,   0, 0)");
        ctx.beginPath();
        ctx.arc(exp.x + sx, exp.y + sy, exp.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    }
}

  function updateAndDrawSpeedLines() {
    const ctx = myGameArea.context;
    const sx = myGameArea.shakeX || 0;
    const sy = myGameArea.shakeY || 0;
    const score = myGameArea.frameNo / 4 * getSelectedShipCookie().at(7);
    const intensity = Math.min(score / 8000, 1);
    if (intensity < 0.15) return;

    if (Math.random() < intensity * 0.4) {
      speedLines.push({
        x: GAME_WIDTH,
        y: Math.random() * GAME_HEIGHT,
        length: 60 + Math.random() * 180 * intensity,
        speed: 18 + Math.random() * 14 * intensity,
        alpha: 0.08 + Math.random() * 0.13 * intensity,
        width: 0.5 + Math.random() * 1.0,
      });
    }

    for (let i = speedLines.length - 1; i >= 0; i--) {
      const l = speedLines[i];
      l.x -= l.speed;
      if (l.x + l.length < 0) { speedLines.splice(i, 1); continue; }
      ctx.strokeStyle = `rgba(200, 210, 255, ${l.alpha})`;
      ctx.lineWidth = l.width;
      ctx.beginPath();
      ctx.moveTo(l.x + l.length + sx, l.y + sy);
      ctx.lineTo(l.x + sx, l.y + sy);
      ctx.stroke();
    }
  }



  function drawCrashFlash() {
  if (!crashFlash.active) return;
  const ctx = myGameArea.context;
  ctx.save();
  ctx.globalAlpha = crashFlash.alpha;
  const r = 255;
  const g = Math.round(255 * (crashFlash.alpha));
  const b = Math.round(255 * (crashFlash.alpha));
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.restore();
  crashFlash.elapsed++;
  crashFlash.alpha = Math.max(0, 1.0 - (crashFlash.elapsed / crashFlash.duration));
  if (crashFlash.elapsed >= crashFlash.duration) crashFlash.active = false;
}

// Misc
var gameoverSound;
var explosionSound;
var backgroundIngame;

// ── HIGH SCORE ──
function getHighScore() {
  const c = document.cookie.match(/(^|;)\s*highScore=([^;]+)/);
  return c ? parseInt(c[2]) : 0;
}
function setHighScore(score) {
  if (score > getHighScore()) {
    document.cookie = `highScore=${score}; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/`;
    return true; // new record
  }
  return false;
}

//------------------------------VARIABLES OVER-----------------------------//


//--------------------------- DYNAMIC MUSIC ENGINE ---------------------------//

let musicCtx, musicMaster, musicCompressor;
let musicStarted = false;
let musicIntensity = 0;
let musicBpm = 120;

let mStep = 0, mArpStep = 0, mMelStep = 0, mCounterStep = 0, mHarmStep = 0, mPadStep = 0;
let mChordIdx = 0, mBarCount = 0;
let mSeqTimer = null;

let mSubOsc, mSubGain;
let mBassOsc, mBassGain, mBassFilter;
let mMelOsc, mMelGain, mMelFilter;
let mArpOsc, mArpGain;
let mCounterOsc, mCounterGain, mCounterFilter;
let mHarmOsc, mHarmGain;
let mPadOscs = [], mPadGains = [];
let mChaosOsc, mChaosOsc2, mChaosGain;
let mKickGain, mSnareGain, mHihatGain, mPercGain;
let mReverbNode, mReverbGain;
let mDelayNode, mDelayGain, mDelayFeedback;

const mProgressions = [
  { chords: [[130.81,155.56,196.00],[174.61,207.65,261.63],[196.00,233.08,293.66],[130.81,155.56,196.00]] },
  { chords: [[130.81,155.56,196.00],[103.83,130.81,155.56],[155.56,196.00,233.08],[116.54,146.83,174.61]] },
  { chords: [[130.81,155.56,196.00],[174.61,207.65,261.63],[103.83,130.81,155.56],[196.00,233.08,293.66]] },
  { chords: [[138.59,164.81,207.65],[155.56,185.00,233.08],[174.61,207.65,261.63],[130.81,155.56,196.00]] },
];

const mBassPatterns = [
  [130.81,0,0,130.81, 0,0,196.00,0, 174.61,0,0,174.61, 0,0,155.56,0],
  [130.81,0,130.81,0, 155.56,0,196.00,0, 174.61,0,174.61,0, 155.56,0,130.81,0],
  [130.81,0,0,0, 155.56,0,0,196.00, 0,174.61,0,0, 155.56,0,130.81,155.56],
  [130.81,155.56,130.81,155.56, 196.00,174.61,155.56,130.81, 174.61,196.00,174.61,155.56, 130.81,0,196.00,0],
];

const mScale = [261.63,293.66,311.13,349.23,392.00,415.30,466.16,523.25,587.33,622.25,698.46,784.00,932.33,1046.50];

const mMelPatterns = [
  [0,2,4,2, 3,2,4,6, 5,4,6,7, 6,4,2,0],
  [4,6,7,6, 4,3,2,4, 6,7,9,7, 6,4,3,2],
  [0,0,2,4, 6,4,2,4, 6,7,6,4, 3,2,0,2],
  [7,6,4,3, 2,4,6,7, 9,7,6,4, 6,7,9,7],
];

const mArpPatterns = [
  [0,1,2,1, 0,2,1,0],
  [0,2,1,2, 0,1,2,0],
  [2,1,0,1, 2,0,1,2],
  [0,1,2,0, 2,1,0,2],
];

const mCounterPatterns = [
  [6,7,6,4, 5,6,4,2, 3,4,2,0, 1,2,4,3],
  [9,7,6,7, 9,7,6,4, 6,7,6,4, 3,4,6,4],
  [4,6,7,9, 7,6,4,6, 7,9,7,6, 4,3,2,4],
  [9,9,7,6, 7,9,7,6, 4,6,7,9, 11,9,7,6],
];

const mHarmOffsets = [2,2,3,2,2,3,2,2];

const mDrumPatterns = [
  "k..h s..h k..h s..h",
  "k.hh s.hh k.hh s.hh",
  "kphh sphh kphh sphh",
  "khhh shhh khhh shhh",
].map(p => p.replace(/ /g,'').split('').map(c => c === '.' ? '' : c));

function mMakeNoiseBuf(ctx) {
  const sz = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, sz, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < sz; i++) d[i] = Math.random() * 2 - 1;
  return buf;
}

function mMakeNoiseSrc(ctx, buf) {
  const s = ctx.createBufferSource();
  s.buffer = buf; s.loop = true;
  return s;
}

function mTriggerOsc(osc, gainNode, freq, vol, atk, rel, when) {
  if (!freq) return;
  osc.frequency.setValueAtTime(freq, when);
  gainNode.gain.cancelScheduledValues(when);
  gainNode.gain.setValueAtTime(0.0001, when);
  gainNode.gain.linearRampToValueAtTime(vol, when + atk);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, when + atk + rel);
}

function mTriggerNoise(gainNode, vol, atk, rel, when) {
  gainNode.gain.cancelScheduledValues(when);
  gainNode.gain.setValueAtTime(0.0001, when);
  gainNode.gain.linearRampToValueAtTime(vol, when + atk);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, when + atk + rel);
}

function mBuildReverb(ctx, secs, decay) {
  const len = ctx.sampleRate * secs;
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buf.getChannelData(c);
    for (let i = 0; i < len; i++)
      d[i] = (Math.random()*2-1) * Math.pow(1 - i/len, decay);
  }
  const conv = ctx.createConvolver();
  conv.buffer = buf;
  return conv;
}

function mTick() {
  const stepDur = 60 / musicBpm / 4;
  const now = musicCtx.currentTime;
  const pi = Math.min(Math.floor(musicIntensity * 4), 3);
  const chord = mProgressions[pi].chords[mChordIdx % 4];
  const bassP = mBassPatterns[pi];
  const melP  = mMelPatterns[pi];
  const counterP = mCounterPatterns[pi];
  const drumP = mDrumPatterns[Math.min(pi, 3)];
  const arpP  = mArpPatterns[pi];
  const s16   = mStep % 16;

  const bassFreq = bassP[s16];
  if (bassFreq) {
    mSubOsc.frequency.setValueAtTime(bassFreq / 2, now);
    mSubGain.gain.cancelScheduledValues(now);
    mSubGain.gain.setValueAtTime(0.0001, now);
    mSubGain.gain.linearRampToValueAtTime(0.22, now + 0.008);
    mSubGain.gain.exponentialRampToValueAtTime(0.0001, now + stepDur * 1.8);
  }

  mTriggerOsc(mBassOsc, mBassGain, bassFreq, 0.32, 0.005, stepDur * 0.75, now);

  if (musicIntensity > 0.1) {
    mTriggerOsc(mMelOsc, mMelGain, mScale[melP[mMelStep % 16]], 0.10 + musicIntensity * 0.12, 0.008, stepDur * 0.6, now);
    mMelStep++;
  }

  if (musicIntensity > 0.35) {
    const hIdx = Math.min(melP[mMelStep % 16] + mHarmOffsets[mStep % 8], mScale.length - 1);
    mTriggerOsc(mHarmOsc, mHarmGain, mScale[hIdx], 0.06 + musicIntensity * 0.06, 0.01, stepDur * 0.55, now);
    mHarmStep++;
  }

  if (musicIntensity > 0.25) {
    mTriggerOsc(mArpOsc, mArpGain, chord[arpP[mArpStep % arpP.length]] * 2, 0.07 + musicIntensity * 0.09, 0.004, stepDur * 0.35, now);
    mArpStep++;
  }

  if (musicIntensity > 0.5 && s16 % 2 === 0) {
    mTriggerOsc(mCounterOsc, mCounterGain, mScale[counterP[mCounterStep % 16]] * 2, 0.065 + musicIntensity * 0.055, 0.006, stepDur * 0.5, now);
    mCounterStep++;
  }

  if (musicIntensity > 0.45 && s16 % 4 === 0) {
    chord.forEach((f, i) => {
      if (!mPadOscs[i]) return;
      mPadOscs[i].frequency.setValueAtTime(f, now);
      mPadGains[i].gain.cancelScheduledValues(now);
      mPadGains[i].gain.setValueAtTime(0.0001, now);
      mPadGains[i].gain.linearRampToValueAtTime(0.04 + musicIntensity * 0.035, now + 0.04);
      mPadGains[i].gain.exponentialRampToValueAtTime(0.0001, now + stepDur * 5);
    });
    mPadStep++;
  }

  const dc = drumP[s16] || '';
  if (dc.includes('k')) mTriggerNoise(mKickGain,  0.55 + musicIntensity * 0.3,  0.003, 0.07,  now);
  if (dc.includes('s') && musicIntensity > 0.18) mTriggerNoise(mSnareGain, 0.38 + musicIntensity * 0.22, 0.003, 0.13, now);
  if (dc.includes('h') && musicIntensity > 0.38) mTriggerNoise(mHihatGain, 0.12 + musicIntensity * 0.14, 0.002, 0.035, now);
  if (dc.includes('p') && musicIntensity > 0.55) mTriggerNoise(mPercGain,  0.22 + musicIntensity * 0.12, 0.003, 0.06,  now);

  if (musicIntensity > 0.72) {
    const cv = (musicIntensity - 0.72) * 0.55;
    mTriggerOsc(mChaosOsc,  mChaosGain, mScale[Math.floor(Math.random() * mScale.length)] * (2 + Math.random()), cv * 0.6, 0.002, stepDur * 0.25, now);
    mTriggerOsc(mChaosOsc2, mChaosGain, mScale[Math.floor(Math.random() * mScale.length)] * (3 + Math.random()), cv * 0.4, 0.002, stepDur * 0.20, now);
  }

  mStep++;
  if (mStep % 16 === 0) {
    mBarCount++;
    mChordIdx = (mChordIdx + 1) % 4;
    if (mBarCount % 4 === 0 && musicIntensity > 0.5) mMelStep = Math.floor(Math.random() * 4) * 4;
  }

  const next = now + stepDur;
  mSeqTimer = setTimeout(mTick, Math.max(0, (next - musicCtx.currentTime) * 1000 - 12));
}

function startDynamicMusic() {
  if (musicStarted) return;
  musicStarted = true;

  musicCtx = new (window.AudioContext || window.webkitAudioContext)();

  musicCompressor = musicCtx.createDynamicsCompressor();
  musicCompressor.threshold.value = -18;
  musicCompressor.knee.value = 10;
  musicCompressor.ratio.value = 6;
  musicCompressor.attack.value = 0.003;
  musicCompressor.release.value = 0.18;
  musicCompressor.connect(musicCtx.destination);

  musicMaster = musicCtx.createGain();
  musicMaster.gain.value = settingsMusicVol;
  musicMaster.connect(musicCompressor);

  mReverbNode = mBuildReverb(musicCtx, 1.2, 2.8);
  mReverbGain = musicCtx.createGain();
  mReverbGain.gain.value = 0.15;
  mReverbNode.connect(mReverbGain).connect(musicMaster);

  mDelayNode = musicCtx.createDelay(1.0);
  mDelayNode.delayTime.value = 0.19;
  mDelayFeedback = musicCtx.createGain();
  mDelayFeedback.gain.value = 0.35;
  mDelayGain = musicCtx.createGain();
  mDelayGain.gain.value = 0.0;
  mDelayNode.connect(mDelayFeedback).connect(mDelayNode);
  mDelayNode.connect(mDelayGain).connect(musicMaster);

  const nBuf = mMakeNoiseBuf(musicCtx);

  function makeFiltered(src, type, freq, Q) {
    const f = musicCtx.createBiquadFilter();
    f.type = type; f.frequency.value = freq;
    if (Q) f.Q.value = Q;
    const g = musicCtx.createGain(); g.gain.value = 0;
    src.connect(f).connect(g).connect(musicMaster);
    src.start();
    return g;
  }

  mKickGain  = makeFiltered(mMakeNoiseSrc(musicCtx, nBuf), "lowpass",  160,  null);
  mSnareGain = makeFiltered(mMakeNoiseSrc(musicCtx, nBuf), "bandpass", 1600, 0.8);
  mHihatGain = makeFiltered(mMakeNoiseSrc(musicCtx, nBuf), "highpass", 8000, null);
  mPercGain  = makeFiltered(mMakeNoiseSrc(musicCtx, nBuf), "bandpass", 900,  2.5);

  mSubOsc = musicCtx.createOscillator(); mSubOsc.type = "sine"; mSubOsc.frequency.value = 65.41;
  mSubGain = musicCtx.createGain(); mSubGain.gain.value = 0;
  mSubOsc.connect(mSubGain).connect(musicMaster);
  mSubOsc.start();

  mBassOsc = musicCtx.createOscillator(); mBassOsc.type = "square"; mBassOsc.frequency.value = 130.81;
  mBassFilter = musicCtx.createBiquadFilter(); mBassFilter.type = "lowpass"; mBassFilter.frequency.value = 700;
  mBassGain = musicCtx.createGain(); mBassGain.gain.value = 0;
  mBassOsc.connect(mBassFilter).connect(mBassGain).connect(musicMaster);
  mBassGain.connect(mReverbNode);
  mBassOsc.start();

  mMelOsc = musicCtx.createOscillator(); mMelOsc.type = "triangle"; mMelOsc.frequency.value = 440;
  mMelFilter = musicCtx.createBiquadFilter(); mMelFilter.type = "lowpass"; mMelFilter.frequency.value = 1200;
  mMelGain = musicCtx.createGain(); mMelGain.gain.value = 0;
  mMelOsc.connect(mMelFilter).connect(mMelGain).connect(musicMaster);
  mMelGain.connect(mReverbNode); mMelGain.connect(mDelayNode);
  mMelOsc.start();

  mHarmOsc = musicCtx.createOscillator(); mHarmOsc.type = "triangle"; mHarmOsc.frequency.value = 523.25;
  mHarmGain = musicCtx.createGain(); mHarmGain.gain.value = 0;
  mHarmOsc.connect(mHarmGain).connect(musicMaster);
  mHarmGain.connect(mReverbNode);
  mHarmOsc.start();

  mArpOsc = musicCtx.createOscillator(); mArpOsc.type = "square"; mArpOsc.detune.value = 8;
  mArpGain = musicCtx.createGain(); mArpGain.gain.value = 0;
  mArpOsc.connect(mArpGain).connect(musicMaster);
  mArpGain.connect(mDelayNode);
  mArpOsc.start();

  mCounterOsc = musicCtx.createOscillator(); mCounterOsc.type = "sawtooth"; mCounterOsc.frequency.value = 523.25;
  mCounterFilter = musicCtx.createBiquadFilter(); mCounterFilter.type = "bandpass"; mCounterFilter.frequency.value = 1400; mCounterFilter.Q.value = 1.2;
  mCounterGain = musicCtx.createGain(); mCounterGain.gain.value = 0;
  mCounterOsc.connect(mCounterFilter).connect(mCounterGain).connect(musicMaster);
  mCounterGain.connect(mReverbNode);
  mCounterOsc.start();

  for (let i = 0; i < 3; i++) {
    const o = musicCtx.createOscillator(); o.type = "sine";
    o.frequency.value = [261.63, 311.13, 392.00][i];
    const g = musicCtx.createGain(); g.gain.value = 0;
    o.connect(g).connect(mReverbNode); g.connect(musicMaster);
    o.start();
    mPadOscs.push(o); mPadGains.push(g);
  }

  mChaosOsc = musicCtx.createOscillator(); mChaosOsc.type = "square"; mChaosOsc.frequency.value = 880;
  mChaosOsc2 = musicCtx.createOscillator(); mChaosOsc2.type = "square"; mChaosOsc2.detune.value = -12;
  mChaosGain = musicCtx.createGain(); mChaosGain.gain.value = 0;
  const chaosHP = musicCtx.createBiquadFilter(); chaosHP.type = "highpass"; chaosHP.frequency.value = 600;
  mChaosOsc.connect(chaosHP); mChaosOsc2.connect(chaosHP);
  chaosHP.connect(mChaosGain).connect(musicMaster);
  mChaosGain.connect(mDelayNode);
  mChaosOsc.start(); mChaosOsc2.start();

  mTick();
}

function stopDynamicMusic() {
  if (!musicStarted) return;
  clearTimeout(mSeqTimer);
  musicStarted = false;
  mStep = 0; mArpStep = 0; mMelStep = 0; mCounterStep = 0; mHarmStep = 0; mPadStep = 0;
  mChordIdx = 0; mBarCount = 0;
  mPadOscs = []; mPadGains = [];
  try { musicCtx.close(); } catch(e) {}
  musicCtx = null;
}

function updateDynamicMusic(score) {
  if (!musicStarted) return;
  musicIntensity = Math.min(score / 2500, 1);
  musicBpm = 120 + musicIntensity * 70;
  if (musicMaster)   musicMaster.gain.value         = settingsMusicVol;
  if (mMelFilter)    mMelFilter.frequency.value     = 600  + musicIntensity * 5000;
  if (mBassFilter)   mBassFilter.frequency.value    = 400  + musicIntensity * 1200;
  if (mReverbGain)   mReverbGain.gain.value          = 0.08 + musicIntensity * 0.32;
  if (mDelayGain)    mDelayGain.gain.value            = musicIntensity > 0.4 ? (musicIntensity - 0.4) * 0.4 : 0;
  if (mDelayFeedback) mDelayFeedback.gain.value       = 0.25 + musicIntensity * 0.22;
}

//--------------------------- END DYNAMIC MUSIC ENGINE -----------------------//


function queryShipCookie() {
  let array = getPurchasedShipsCookie();

  if (!array) {
    try {
      setPurchasedShipsCookie('no', 'no', 'no');
    } catch (e) {
      console.warn('Cookie storage unavailable');
    }
  }
}

function hideDiv(divID) {
  var x = document.getElementById(divID);
  x.style.display = "none";
  console.log(divID + " hidden.");
}

function showDiv(divID) {
  var x = document.getElementById(divID);
  x.style.display = divID === 'startScreen' ? "flex" : "block";
}

function closePanels() {
  ['howPlay', 'changelog', 'credits', 'settings'].forEach(id => hideDiv(id));
  hideDiv('panelBackdrop');
  showDiv('startScreen');
}

function setCard(ssName, ssStats) {
  var x = document.getElementById("spaceshipName");
  x.innerHTML = ssName;
  var y = document.getElementById("spaceshipStats");
  y.innerHTML = ssStats;
  const array = getPurchasedShipsCookie();
  const pp = getScoreCookie();

  if (ssName == 'Pixel Piece Prospecter') {
    if (array[0] !== 'yes') {
      // Not purchased — show purchase button or lock badge
      if (pp >= 20000) {
        y.innerHTML += pixproPurchaseButton;
      } else {
        y.innerHTML += `<div class="shipLockBadge">Need ${(20000 - pp).toLocaleString()} more PP</div>`;
      }
    } else {
      console.log('Pixel Piece Prospecter is purchased');
    }
  }


  if (getSelectedShipCookie().at(11) !== 'gs' && ssName == 'Pixel Piece Prospecter') {
    addPixProEquip();
  }
  if (getSelectedShipCookie().at(11) !== 'c' && ssName == 'CLASSIC') {
    addClassicEquip();
  }

  console.log("setCard function called");
}

function addPixProEquip() {
  const array = getPurchasedShipsCookie();
  if (array[0] == 'yes') {
    x = document.getElementById('spaceshipStats');
    x.innerHTML += pixproEquipButton;
  }
}


function addClassicEquip() {
  x = document.getElementById('spaceshipStats');
  x.innerHTML += classicEquipButton;
}

function shipEquiped(e) {
  e.style.display = "none";
}

function setPicture(pictureName) {
  var x = document.getElementById("spaceshipPreview");
  x.innerHTML = pictureName;
  console.log("setPicture function called");
}


function setScorebar() {
  let pixelPieces = getScoreCookie();
  let highScore = getHighScore();
  let score_hangerBar = `<span style="font-size: 20px; float:right; padding-right: 70px; padding-top: 3px; color: #e8c84a;">PIXEL PIECES: ${pixelPieces} &nbsp;|&nbsp; <span style="color:#4adc6e;">BEST: ${highScore}</span></span>`;
  document.getElementById("hangerBar").innerHTML = `<button onclick="hideDiv('hanger') || showDiv('startScreen')" style="text-size: 16; font-family: '8bit-font-text'" class="backbuttonhangerbar">-BACK</button>` + score_hangerBar;
  console.log("setScorebar function called");
}

// ── SCORE TEXT FLASH ──
var lastDisplayedScore = 0;
function flashScoreIfNeeded(currentScore) {
  const el = document.getElementById('scoreHUD');
  if (!el) return;
  const rounded = Math.round(currentScore);
  if (rounded !== lastDisplayedScore && rounded % 100 === 0 && rounded > 0) {
    el.classList.remove('score-flash');
    void el.offsetWidth; // reflow
    el.classList.add('score-flash');
  }
  lastDisplayedScore = rounded;
}

// Update DOM HUDs for score and ammo
function updateHUDs(currentScore) {
  try {
    const scoreEl = document.getElementById('scoreHUD');
    const ammoEl  = document.getElementById('ammoHUD');
    const s = typeof currentScore === 'number' ? Math.round(currentScore) : Math.round(myGameArea.frameNo / 4 * getSelectedShipCookie().at(7));
    if (scoreEl) scoreEl.textContent = 'SCORE: ' + s;
    if (ammoEl)  ammoEl.textContent = 'Ammo: ' + (myGamePiece && myGamePiece.ammo != null ? myGamePiece.ammo : 0) + '/8';
  } catch (e) { /* ignore */ }
}

function addScore(score) {
  let scorep = score * getSelectedShipCookie().at(7);
  let scoref = scorep + getScoreCookie();
  setScoreCookie(Math.round(scoref));
  console.log("Score: " + scoref);
  setScorebar();
}

function purchaseAttempt(purchasePrice, shipName) {
  if (getScoreCookie() >= purchasePrice) {
    console.log("Purchase complete!");
    let score = (getScoreCookie() - purchasePrice);
    setScoreCookie(Math.round(score));

    if (shipName == 'pixpro') {
      setPurchasedShipsCookie('yes', 'no', 'no');
      addPixProEquip();
      var x = document.getElementById('pixproPurchaseButton');
      if (x) x.style.display = "none";
    }

  } else {
    purchaseAttemptFailed(purchasePrice);
    console.log("Purchase impossible.");
  }
  setScorebar();
}

function purchaseAttemptFailed(price) {
  var x = document.getElementById('overlay');
  x.style.display = 'block';
  var y = document.getElementById('purchaseDialog');
  y.style.display = 'block';
  let pixelPieces = getScoreCookie();
  let needPixelPieces = (price - pixelPieces);
  let dialogHeader = `<span style="font-size: 40px; color: #e03a3a;">Purchase Attempt Failed <br><br></span>`;
  let dialogContent = `<span style="font-size: 20px; color: #c8c8d0;">You need ${needPixelPieces} more Pixel Pieces.</span>`;
  let dialog = dialogHeader + dialogContent;
  y.innerHTML = dialog + `<button onclick="hideDiv('overlay') || hideDiv('purchaseDialog')" style="font-size: 20; font-family: '8bit-font-text'" class="backbuttondialog" id="backbuttondialog">BACK</button>`;
}

//--------------------------SETTING COOKIES---------------------//

//--------------------------SAVE SYSTEM---------------------//

const SAVE_KEY = 'pixelPilotSave';

const DEFAULT_SAVE = {
  score: 0,

  selectedShip: {
    speed: 7,
    sensitivity: 1,
    guns: '1ast',
    cooldown: 1,
    fireModes: 'single-shot',
    gunPosX: 50,
    gunPosY: 50,
    multiplier: 1,
    width: 110,
    height: 90,
    image: './images/classic_spaceship_guns_removed_thrust.png',
    id: 'c',
  },

  purchasedShips: {
    pixpro: false,
    ship2: false,
    ship3: false,
  },

  settings: {
    musicVolume: 0.25,
    sfxVolume: 0.25,
    showHitboxes: false,
  },
};

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);

    if (!raw) {
      localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(DEFAULT_SAVE)
      );

      return structuredClone(DEFAULT_SAVE);
    }

    return {
      ...structuredClone(DEFAULT_SAVE),
      ...JSON.parse(raw),
    };
  } catch (err) {
    console.error('Failed to load save', err);
    return structuredClone(DEFAULT_SAVE);
  }
}

let saveData = loadSave();

settingsMusicVol = Number.isFinite(Number(saveData.settings.musicVolume))
  ? Math.min(1, Math.max(0, Number(saveData.settings.musicVolume)))
  : settingsMusicVol;
settingsSfxVol = Number.isFinite(Number(saveData.settings.sfxVolume))
  ? Math.min(1, Math.max(0, Number(saveData.settings.sfxVolume)))
  : settingsSfxVol;

function saveGame() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(saveData)
    );
  } catch (err) {
    console.error('Failed to save game', err);
  }
}

function setMusicVolume(value) {
  settingsMusicVol = parseFloat(value);
  saveData.settings.musicVolume = settingsMusicVol;
  saveGame();
}

function setSfxVolume(value) {
  settingsSfxVol = parseFloat(value);
  saveData.settings.sfxVolume = settingsSfxVol;
  saveGame();
}

/* ---------------- SCORE ---------------- */

function setScoreCookie(score) {
  saveData.score = Math.round(score);
  saveGame();
}

function getScoreCookie() {
  return Number(saveData.score) || 0;
}

/* ---------------- SELECTED SHIP ---------------- */

function setSelectedShipCookie(
  speed,
  sensitivity,
  guns,
  cooldown,
  fireModes,
  gunPosX,
  gunPosY,
  multiplier,
  width,
  height,
  url,
  ship
) {
  saveData.selectedShip = {
    speed,
    sensitivity,
    guns,
    cooldown,
    fireModes,
    gunPosX,
    gunPosY,
    multiplier,
    width,
    height,
    image: url,
    id: ship,
  };

  saveGame();

  console.log(
    'Selected ship saved:',
    saveData.selectedShip
  );
}

function getSelectedShipCookie() {
  const s = saveData.selectedShip;

  return [
    s.speed,
    s.sensitivity,
    s.guns,
    s.cooldown,
    s.fireModes,
    s.gunPosX,
    s.gunPosY,
    s.multiplier,
    s.width,
    s.height,
    s.image,
    s.id,
  ];
}

/* ---------------- PURCHASED SHIPS ---------------- */

function setPurchasedShipsCookie(
  pixpro,
  ship2,
  ship3
) {
  saveData.purchasedShips = {
    pixpro: pixpro === 'yes',
    ship2: ship2 === 'yes',
    ship3: ship3 === 'yes',
  };

  saveGame();
}

function getPurchasedShipsCookie() {
  return [
    saveData.purchasedShips.pixpro ? 'yes' : 'no',
    saveData.purchasedShips.ship2 ? 'yes' : 'no',
    saveData.purchasedShips.ship3 ? 'yes' : 'no',
  ];
}

/* ---------------- SPACESHIPS ---------------- */

function setSpaceshipsCookie(spaceShips) {
  saveData.spaceships = spaceShips;
  saveGame();
}

function getSpaceshipsCookie() {
  return saveData.spaceships || [];
}

/* ---------------- INITIALIZATION ---------------- */

function queryShipCookie() {
  if (!saveData.purchasedShips) {
    saveData.purchasedShips = {
      pixpro: false,
      ship2: false,
      ship3: false,
    };

    if (getSelectedShipCookie() = null) {
        console.log("Selected cookie set since none was found.")
        setSelectedShipCookie(7, 1, '1ast', 1, 'single-shot', 50, 50, 1, 110, 90, './images/classic_spaceship_guns_removed_thrust.png', 'c')
    }

    saveGame();
  }
}

//--------------------------- GAME MECHANICS UNDERNEATH ----------------------------------//

function startGame() {
  if (isPortraitMobile()) {
    pendingGameStart = true;
    document.getElementById('portraitGameBlocker').style.display = 'flex';
    return false;
  }

  myGamePiece = new component(
    Number(getSelectedShipCookie().at(8)),
    Number(getSelectedShipCookie().at(9)),
    getSelectedShipCookie().at(10),
    GAME_WIDTH * 0.05,
    GAME_HEIGHT * 0.50,
    "image",
    "gamePiece",
    "n/a"
  );
  myGamePiece.tiltAngle = 0;
  myGamePiece.tiltTarget = 0;
  myGamePiece.ammo = 8;
  // HUDs are now DOM elements, not drawn on canvas
  updateHUDs(0);
  myObstacle  = new component(30, 20, "black", 10, 0, "obstacle", "n/a", "n/a");
  myBackground = new component(
      GAME_WIDTH,
      GAME_HEIGHT,
      "./images/Pixel_Space.png",
      0,
      0,
      "background",
      "n/a",
      "n/a"
  );
  myGameArea.start();
  stopMenuMusic();
  gameoverSound  = new sound("./audio/lumora_studios-pixel-game-over-319170.mp3", "effect");
  shootingSound  = new sound("./audio/shooting.mp3", "effect");
  explosionSound = new sound("./audio/u_b32baquv5u-explosion-9-340460.mp3", "effect");
  pickUpSound    = new sound("./audio/pickup.mp3", "effect");
  startDynamicMusic();
  showTouchControls();

  // Show high-score HUD
  const hsEl = document.getElementById('highScoreHUD');
  if (hsEl) { hsEl.style.display = 'block'; hsEl.textContent = 'BEST: ' + getHighScore().toLocaleString(); }
}

function restartGame() {
  myGameArea.stop();
  myGamePiece.ammo = 8;
  firstShot = true;
  myGamePiece = null;
  myObstacles = [];
  myObstacles.spawnCount = 0;    
  myObstacles.lastGapCenterY = undefined; 
  barrierOpening = 300;
  myBarriers = [];
  myBullets = [];
  myObstacle = null;
  myBackground = null;
  explosions = [];
  speedLines = [];
  screenShake.active = false; 
  screenShake.intensity = 0;
  crashFlash.active = false;
  crashFlash.alpha = 0;
  crashFlash.elapsed = 0;
  crashSlowmo.active = false;
  crashSlowmo.elapsed = 0;
  lastDisplayedScore = 0;
  myGameArea.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  hideDiv('endScreen');
  startGame();
  setEndScreen();
  explosionSound.stop();
  myGameArea.lastTime = 0;
  gamePaused = false;
}

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

let GAME_WIDTH = BASE_WIDTH;
let GAME_HEIGHT = BASE_HEIGHT;

let worldScale = 1;

function updateGameSize() {
    worldScale = Math.min(
        window.innerWidth / BASE_WIDTH,
        window.innerHeight / BASE_HEIGHT
    );
}

var myGameArea = {
  canvas: document.createElement("canvas"),

  scaleX: 1,
  scaleY: 1,

  start: function() {

    this.context = this.canvas.getContext("2d");

    document.body.insertBefore(
      this.canvas,
      document.body.childNodes[0]
    );

    this.resize();

    window.addEventListener(
      "resize",
      () => this.resize()
    );

    this.frameNo = 0;
    this.lastTime = 0;
    this.rafId = null;

    const loop = (timestamp) => {

      const delta = this.lastTime
        ? (timestamp - this.lastTime) / 16.667
        : 1;

      this.lastTime = timestamp;

      updateGameArea(delta);

      this.rafId =
        requestAnimationFrame(loop);
    };

    this.rafId =
      requestAnimationFrame(loop);

    myGameArea.keys = {};

    window.addEventListener(
      "keydown",
      function(e) {
        myGameArea.keys[e.keyCode] = true;
      }
    );

    window.addEventListener(
      "keyup",
      function(e) {
        myGameArea.keys[e.keyCode] = false;
      }
    );
  },

  resize: function() {

    const scale = Math.max(
      window.innerWidth / GAME_WIDTH,
      window.innerHeight / GAME_HEIGHT
    );

    const cssW = GAME_WIDTH * scale;
    const cssH = GAME_HEIGHT * scale;
    const dpr = window.devicePixelRatio || 1;


    this.canvas.width = Math.round(GAME_WIDTH * scale * dpr);
    this.canvas.height = Math.round(GAME_HEIGHT * scale * dpr);


    this.canvas.style.width = cssW + "px";
    this.canvas.style.height = cssH + "px";
    this.canvas.style.position = "absolute";
    this.canvas.style.left = ((window.innerWidth - cssW) / 2) + "px";
    this.canvas.style.top =  ((window.innerHeight - cssH) / 2) + "px";


    this.scaleX = scale;
    this.scaleY = scale;
    this.context.setTransform(scale * dpr, 0, 0, scale * dpr, 0, 0);
    if (this.context.imageSmoothingEnabled !== undefined) this.context.imageSmoothingEnabled = false;
  },

  clear: function() {
    this.context.clearRect(
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT
    );
  },

  stop: function() {
    cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.lastTime = 0;
  }
};

function component(width, height, color, x, y, type, secondaryType, healthpoints) {
  this.type = type;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.healthpoints = healthpoints;
  this.secondaryType = secondaryType;
  this.update = function() {
    ctx = myGameArea.context;
    const sx = myGameArea.shakeX || 0;
    const sy = myGameArea.shakeY || 0;

    if (type == "image" || type == "background" || secondaryType == "mag") {
      this.image = new Image();
      this.image.src = color;
    }

    if (secondaryType == "gamePiece") {
      this.gunType    = getSelectedShipCookie().at(2);
      this.cooldown   = getSelectedShipCookie().at(3);
      this.fireModes  = getSelectedShipCookie().at(4);
      this.gunPosX    = getSelectedShipCookie().at(5);
      this.gunPosY    = getSelectedShipCookie().at(6);
    }

    if (secondaryType == "Trobstacle") {
      this.heighR = 0;
      this.gapR   = 0;
    }

    if (this.type == "text") {
      ctx.font = "30px '8bit-font-text', sans-serif";
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x + sx, this.y + sy);
    }

    if (type == "image") {
      if (this.secondaryType === "gamePiece" && this.tiltAngle !== undefined) {
        const cx = this.x + (this.width + 15) / 2 + sx;
        const cy = this.y + (this.height + 15) / 2 + sy;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(this.tiltAngle);
        ctx.drawImage(this.image, -(this.width + 15) / 2, -(this.height + 15) / 2, this.width + 15, this.height + 15);
        ctx.restore();
      } else {
        ctx.drawImage(this.image, this.x + sx, this.y + sy, this.width + 15, this.height + 15);
      }
    }

    if (secondaryType == "mag") {
      ctx.drawImage(this.image, this.x + sx, this.y + sy, this.width + 15, this.height + 15);
    }

    if (type == "background") {
      ctx.drawImage(this.image, this.x + sx, this.y + sy, this.width, this.height);
      ctx.drawImage(this.image, this.x + this.width + sx, this.y + sy, this.width, this.height);
    }

    if (type == "obstacles" || type == "bullets") {
      ctx.fillStyle = color;
      ctx.fillRect(this.x + sx, this.y + sy, this.width, this.height);
    }

    if (secondaryType == "gamePiece" && settingsShowHitbox) {
      const boxes = getShipHitboxes(this.x, this.y, this.width, this.height, this.tiltAngle || 0);
      ctx.strokeStyle = "lime";
      ctx.lineWidth = 2;
      for (let b = 0; b < boxes.length; b++) {
        const box = boxes[b];
        ctx.strokeRect(box.left + sx, box.top + sy, box.right - box.left, box.bottom - box.top);
      }
    }
  };

  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == "background") {
      if (this.x <= -(this.width)) { this.x = 0; }
    }
    this.hitBottom();
    this.hitTop();
  };

  this.hitBottom = function() {
    var rockbottom = (GAME_HEIGHT - this.height);
    if (this.y > rockbottom) { this.y = rockbottom; }
  };

  this.hitTop = function() {
    var maxScreenHeight = -10;
    if (this.y < maxScreenHeight) { this.y = maxScreenHeight; }
  };

  this.crashWith = function(otherobj) {
    if (this == myGamePiece) {
      const boxes = getShipHitboxes(this.x, this.y, this.width, this.height, this.tiltAngle || 0);
      for (let b = 0; b < boxes.length; b++) {
        const box = boxes[b];
        if (
          box.right  > otherobj.x &&
          box.left   < otherobj.x + otherobj.width &&
          box.bottom > otherobj.y &&
          box.top    < otherobj.y + otherobj.height
        ) {
          if (!this.crashed && otherobj.secondaryType !== "mag") {
            this.crashed = true;
            console.log(otherobj.secondaryType)
            this.onCrash();
          }
          return true;
        }
      }
      return false;
    }

    var myleft   = this.x;
    var myright  = this.x + this.width;
    var mytop    = this.y;
    var mybottom = this.y + this.height;
    var otherleft   = otherobj.x;
    var otherright  = otherobj.x + otherobj.width;
    var othertop    = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = !((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright));

    if (this.type === "bullets" && crash) {
      spawnExplosion(this.x + this.width / 2, this.y + this.height / 2);
    }

    return crash;
  };

  this.onCrash = function() {
  screenShake.active = true;
  screenShake.intensity = 14;
  screenShake.duration = 30;
  screenShake.elapsed = 0;

  crashFlash.active = true;
  crashFlash.alpha = 1.0;
  crashFlash.elapsed = 0;

  crashSlowmo.active = true;
  crashSlowmo.elapsed = 0;

  spawnExplosion(myGamePiece.x + myGamePiece.width / 2, myGamePiece.y + myGamePiece.height / 2);

  stopDynamicMusic();
  gameoverSound.play();
  hideTouchControls();
  const hsEl = document.getElementById('highScoreHUD');
  if (hsEl) hsEl.style.display = 'none';

  const shakeInterval = setInterval(function() {
    if (!screenShake.active) {
      clearInterval(shakeInterval);
      myGameArea.stop();
      showDiv('endScreen');
      setEndScreen();
      setScorebar();
    }
  }, 16);

  console.log("sensitivity is " + sensitivity);
};
}

function setEndScreen() {
  const rawScore     = myGameArea.frameNo / 4 * getSelectedShipCookie().at(7);
  const roundedScore = Math.round(rawScore);
  const prevScore    = getScoreCookie();
  const newTotal     = Math.round(rawScore + prevScore);
  const timeSecs     = Math.round(myGameArea.frameNo / 60);
  const multiplier   = getSelectedShipCookie().at(7);
  const isNewRecord  = setHighScore(roundedScore);

  // Update HUD best
  const hsEl = document.getElementById('highScoreHUD');
  if (hsEl) hsEl.textContent = 'BEST: ' + getHighScore().toLocaleString();

  let grade, gradeColor, gradeBg, tierLabel;
  if (roundedScore >= 5000)      { grade = 'S';  gradeColor = '#e8c84a'; gradeBg = '#2a1f00'; tierLabel = '— LEGENDARY PILOT —'; }
  else if (roundedScore >= 2000) { grade = 'A';  gradeColor = '#4adc6e'; gradeBg = '#0a2010'; tierLabel = '— ACE PILOT —'; }
  else if (roundedScore >= 1000) { grade = 'B';  gradeColor = '#4a9bdc'; gradeBg = '#0a1525'; tierLabel = '— SKILLED PILOT —'; }
  else if (roundedScore >= 300)  { grade = 'C';  gradeColor = '#b07adc'; gradeBg = '#180a25'; tierLabel = '— ROOKIE PILOT —'; }
  else                           { grade = 'D';  gradeColor = '#e03a3a'; gradeBg = '#250a0a'; tierLabel = '— CADET —'; }

  const quips = {
    'S': ["Unbelievable.", "Please go outside.", "Umemployed."],
    'A': ["Excellent flying, pilot.", "Your ancestors are proud.", "Well done. This is as far as you'll go."],
    'B': ["Solid run. You've got the stuff.", "Not bad. Not bad at all.", "The obstacles respect you."],
    'C': ["A decent attempt. The obstacles disagree.", "You survived... mostly.", "Room for improvement detected."],
    'D': ["The obstacles send their regards.", "Well, you tried.", "Even the obstacles felt bad for you."],
  };
  const quip = quips[grade][Math.floor(Math.random() * quips[grade].length)];

  addScore(rawScore);

  const newRecordBadge = isNewRecord
    ? `<div style="font-size:15px; font-family:'8bit-font-text'; color:#e8c84a; background:#2a1f00; border:1px solid #e8c84a; border-radius:8px; padding:4px 12px; display:inline-block; margin-bottom:8px;">NEW PERSONAL BEST!</div><br>`
    : `<div style="font-size:13px; font-family:'8bit-font-text'; color:#5a5a6a; margin-bottom:6px;">Best: ${getHighScore().toLocaleString()} PP</div>`;

  document.getElementById("endScreen").innerHTML = `
    <div style="font-size:38px; font-family:'8bit-font-text'; color:#e03a3a; margin-bottom:4px;">GAME OVER</div>
    <div style="font-size:14px; font-family:'8bit-font-text'; color:#6a3a3a; margin-bottom:12px;">You crashed.</div>
    ${newRecordBadge}
    <div class="grade-badge" style="color:${gradeColor}; background:${gradeBg}; border-color:${gradeColor};">${grade}</div>
    <div class="tier-label" style="color:${gradeColor};">${tierLabel}</div>
    <div style="font-size:16px; font-family:'8bit-font-text'; color:#7a7a8a; font-style:italic; margin-bottom:18px;">"${quip}"</div>

    <div style="background:#110808; border:1px solid #2a1212; border-radius:10px; padding:12px 16px; margin-bottom:16px; text-align:left;">
      <div class="stat-row"><span>This run</span>       <span class="stat-val">${roundedScore.toLocaleString()} PP</span></div>
      <div class="stat-row"><span>Time survived</span>  <span class="stat-val">${timeSecs}s</span></div>
      <div class="stat-row"><span>Multiplier</span>     <span class="stat-val">×${multiplier}</span></div>
      <div class="stat-row"><span>Previous total</span> <span class="stat-val">${prevScore.toLocaleString()} PP</span></div>
      <div class="stat-row" style="font-size:20px;"><span>New total</span><span style="color:#e8c84a; font-size:20px;">${newTotal.toLocaleString()} PP</span></div>
    </div>

    <button style="font-family:'8bit-font-text'; margin-right:8px;" class="restartGameButton" onclick="restartGame()">Restart</button>
    <button style="font-family:'8bit-font-text';" class="goHomeButton" onclick="goHome()">Main Menu</button>
  `;
}

function goHome() {
  showDiv('startScreen');
  myGameArea.stop();
  myGamePiece.ammo = null;
  firstShot = true;
  myGamePiece = null;
  myObstacles = [];
  myBullets = [];
  myBarriers = [];
  myObstacle = null;
  myBackground = null;
  // Clear DOM HUDs
  const _sEl = document.getElementById('scoreHUD'); if (_sEl) _sEl.textContent = '';
  const _aEl = document.getElementById('ammoHUD');  if (_aEl) _aEl.textContent = '';
  screenShake.active = false;
  screenShake.intensity = 0;
  speedLines = [];
  explosions = [];
  crashFlash.active = false;
  crashFlash.alpha = 0;
  crashFlash.elapsed = 0;
  crashSlowmo.active = false;
  crashSlowmo.elapsed = 0;
  lastDisplayedScore = 0;
  myGameArea.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  hideDiv('endScreen');
  showDiv('menuBackground')
  document.body.removeChild(myGameArea.canvas);
  explosionSound.stop();
  gamePaused = false;
  hideDiv('pauseScreen');
  hideTouchControls();
  stopDynamicMusic();
  const hsEl = document.getElementById('highScoreHUD');
  if (hsEl) hsEl.style.display = 'none';
}

function updateGameArea(delta = 1) {

  // ── CRASH SHAKE MODE ──
  if (myGamePiece && myGamePiece.crashed) {
    
    let slowDelta = delta;
    if (crashSlowmo.active) {
      crashSlowmo.elapsed += delta;
      const t = crashSlowmo.elapsed / crashSlowmo.duration;
      slowDelta = delta * Math.max(0.08, 1.0 - t * 0.92);
      if (crashSlowmo.elapsed >= crashSlowmo.duration) crashSlowmo.active = false;
    }

    let shakeX = 0, shakeY = 0;
    if (screenShake.active) {
      shakeX = (Math.random() - 0.5) * screenShake.intensity * 2;
      shakeY = (Math.random() - 0.5) * screenShake.intensity * 2;
      screenShake.elapsed += delta;
      screenShake.intensity = 14 * (1 - screenShake.elapsed / screenShake.duration);
      if (screenShake.elapsed >= screenShake.duration) {
        screenShake.active = false;
        screenShake.intensity = 0;
      }
    }
    myGameArea.shakeX = shakeX;
    myGameArea.shakeY = shakeY;
    myGameArea.clear();
    myBackground.update();
    for (let oi = 0; oi < myObstacles.length; oi++) myObstacles[oi].update();
    for (let bi = 0; bi < myBarriers.length; bi++) myBarriers[bi].update();
    for (let mi = 0; mi < myMags.length; mi++) myMags[mi].update();
    for (let bi = 0; bi < myBullets.length; bi++) myBullets[bi].update();
    myGamePiece.update();
    updateHUDs();
    updateExplosions();
    drawExplosions();
    drawCrashFlash();
    return;
  }

  // ── NORMAL GAMEPLAY ──
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;

  for (let ci = 0; ci < myObstacles.length; ci++) {
    if (myGamePiece.crashWith(myObstacles[ci])) {
      myGameArea.stop();
      return;
    }
  }

  for (let zi = 0; zi < myBarriers.length; zi++) {
    if (myGamePiece.crashWith(myBarriers[zi])) {
      myGameArea.stop();
      console.log('Spaceship hit barrier.');
      return;
    }
  }

  // shake offset
  let shakeX = 0, shakeY = 0;
  if (screenShake.active) {
    shakeX = (Math.random() - 0.5) * screenShake.intensity * 2;
    shakeY = (Math.random() - 0.5) * screenShake.intensity * 2;
    screenShake.elapsed += delta;
    screenShake.intensity = 14 * (1 - screenShake.elapsed / screenShake.duration);
    if (screenShake.elapsed >= screenShake.duration) {
      screenShake.active = false;
      screenShake.intensity = 0;
    }
  }
  myGameArea.shakeX = shakeX;
  myGameArea.shakeY = shakeY;

  myGameArea.clear();
  myBackground.speedX = -3 * delta;
  myGameArea.frameNo += 1;
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;

  const keys = myGameArea.keys || {};

  if (keys[38] || keys[87]) { // Up Arrow or W
    myGamePiece.speedY =
      -(Number(getSelectedShipCookie().at(1))) * 3 * delta;
  }

  if (keys[40] || keys[83]) { // Down Arrow or S
    myGamePiece.speedY =
      Number(getSelectedShipCookie().at(1)) * 3 * delta;
  }

  if (touchDY !== 0) {
    myGamePiece.speedY = touchDY * Number(getSelectedShipCookie().at(1)) * 3 * delta;
  }

  if (myGamePiece.speedY < 0)      myGamePiece.tiltTarget = -0.22;
  else if (myGamePiece.speedY > 0) myGamePiece.tiltTarget =  0.22;
  else                              myGamePiece.tiltTarget =  0;
  myGamePiece.tiltAngle += (myGamePiece.tiltTarget - myGamePiece.tiltAngle) * 0.08;

  if (everyinterval(300)) {
    x = GAME_WIDTH;

    if (myObstacles.spawnCount === undefined) myObstacles.spawnCount = 0;
    myObstacles.spawnCount++;

    const decayRate = 0.95;
    const decayFactor = Math.pow(decayRate, myObstacles.spawnCount - 1);

    const baseMinGap = 175;
    const baseMaxGap = 300;
    const capGap = 100;

    minGap = Math.max(capGap, capGap + (baseMinGap - capGap) * decayFactor);
    maxGap = Math.max(capGap, capGap + (baseMaxGap - capGap) * decayFactor);

    if (minGap >= maxGap) {
      myObstacles.gapR = 100;
    } else {
      myObstacles.gapR = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    }

    const maxReach = 600 * Number(getSelectedShipCookie().at(1)) * 5;
    const minHeightV = 100;
    const maxHeightV = GAME_HEIGHT - myObstacles.gapR - 100;

    let newHeight;
    if (myObstacles.lastGapCenterY === undefined) {
      newHeight = Math.floor(Math.random() * (maxHeightV - minHeightV + 1) + minHeightV);
    } else {
      const lastCenter = myObstacles.lastGapCenterY;
      const clampMin = Math.max(minHeightV + myObstacles.gapR / 2, lastCenter - maxReach);
      const clampMax = Math.min(maxHeightV + myObstacles.gapR / 2, lastCenter + maxReach);
      const newCenter = Math.floor(Math.random() * (clampMax - clampMin + 1) + clampMin);
      newHeight = newCenter - myObstacles.gapR / 2;
    }

    myObstacles.heightR = newHeight;
    myObstacles.lastGapCenterY = myObstacles.heightR + myObstacles.gapR / 2;

    myObstacles.push(new component(10, myObstacles.heightR, "#FF3F3F", x, 0, "obstacles", "Trobstacle", "n/a"));
    myObstacles.push(new component(10, x - myObstacles.heightR - myObstacles.gapR, "#FF3F3F", x, myObstacles.heightR + myObstacles.gapR, "obstacles", "Trobstacle", "n/a"));

    const barrierHeight = 100;
    const gapStart = myObstacles.heightR;
    const gapEnd   = myObstacles.heightR + myObstacles.gapR;
    const barrierY = gapStart + Math.floor(Math.random() * (gapEnd - gapStart - barrierHeight));
    myBarriers.push(new component(10, barrierHeight, "orange", x, barrierY, "obstacles", "n/a", 25));
  }

  const random200 = Math.floor(Math.random() * 200) + 1;
  const randomGap = myObstacles.heightR !== undefined
    ? Math.floor(Math.random() * myObstacles.gapR) + myObstacles.heightR
    : GAME_HEIGHT / 2;

  if (everyinterval(600)) {
    myMags.push(new component(10, 10, "./images/ammo_v1.png", GAME_WIDTH - random200, randomGap, "n/a", "mag", "n/a"));
  }

  myBackground.newPos();
  myBackground.update();
  updateAndDrawSpeedLines();

  for (let oi = 0; oi < myObstacles.length; oi++) {
    myObstacles[oi].x += -9 * delta;
    myObstacles[oi].update();
  }
  for (let bi = 0; bi < myBarriers.length; bi++) {
    myBarriers[bi].x += -9 * delta;
    myBarriers[bi].update();
  }
  for (let mi = 0; mi < myMags.length; mi++) {
    myMags[mi].x += -9 * delta;
    myMags[mi].update();
  }

  myGamePiece.newPos();
  myGamePiece.update();

  const currentScore = myGameArea.frameNo / 4 * getSelectedShipCookie().at(7);
  updateHUDs(currentScore);
  flashScoreIfNeeded(currentScore);
  updateDynamicMusic(currentScore);
  myObstacle.update();

  for (let bj = myBullets.length - 1; bj >= 0; bj--) {
    for (let bk = myBarriers.length - 1; bk >= 0; bk--) {
      if (myBullets[bj] && myBullets[bj].crashWith(myBarriers[bk])) {
        myBarriers.splice(bk, 1);
        myBullets.splice(bj, 1);
        break;
      }
    }
  }

  for (let bj = myBullets.length - 1; bj >= 0; bj--) {
    for (let bk = myObstacles.length - 1; bk >= 0; bk--) {
      if (myBullets[bj] && myBullets[bj].crashWith(myObstacles[bk])) {
        myBullets.splice(bj, 1);
        break;
      }
    }
  }

  for (let zi = myMags.length - 1; zi >= 0; zi--) {
    if (myGamePiece.crashWith(myMags[zi])) {
      myMags.splice(zi, 1);
      if (myGamePiece.ammo < 8) {
        let ammoToAdd = Math.min(5, 8 - myGamePiece.ammo);
        myGamePiece.ammo += ammoToAdd;
      }
      updateHUDs();
      pickUpSound.play();
    }
  }

  for (let bi = 0; bi < myBullets.length; bi++) {
    const spd = myBullets[bi].baseBulletSpeedX !== undefined ? myBullets[bi].baseBulletSpeedX : 15;
    myBullets[bi].x += spd * delta;
    myBullets[bi].y += (myBullets[bi].baseBulletSpeedY || 0) * delta;
    myBullets[bi].update();
  }

  updateExplosions();
  drawExplosions();
}

function everyinterval(n) {
  const prev = Math.floor((myGameArea.frameNo - 1) / n);
  const curr = Math.floor(myGameArea.frameNo / n);
  return curr > prev;
}

// ── SHOOTING ──
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup",   keyUpHandler);

var spaceDown   = false;
var lastShotTime = 0;
var firstShot    = true;

function keyDownHandler(e) {
  if (e.key == " " && spaceDown == false && Date.now() - lastShotTime >= 1000) {
    spaceDown = true;
    fireBullet();
  }
}

function keyUpHandler(e) {
  if (e.key == " ") {
    spaceDown = false;
    console.log(spaceDown);
  }
}

function fireBullet() {
  if (!myGamePiece || myGameArea.rafId === null) return;
  if (Date.now() - lastShotTime < 1000) return;

  if (firstShot == true) {
    firstShot = false;
    myGamePiece.ammo = 8;
  }

  if (myGamePiece.ammo >= 1) {
    updateHUDs();
    lastShotTime = Date.now();
    shootingSound.stop();
    shootingSound.play();

    const tilt = myGamePiece.tiltAngle || 0;
    const bulletSpeedX = 15 * Math.cos(tilt);
    const bulletSpeedY = 15 * Math.sin(tilt);

    if (getSelectedShipCookie().at(2).includes('1')) {
      const b = new component(30, 7, "yellow", myGamePiece.x + 110, (myGamePiece.y + Number(myGamePiece.gunPosY)), "bullets", "n/a", "n/a");
      b.baseBulletSpeedX = bulletSpeedX;
      b.baseBulletSpeedY = bulletSpeedY;
      myBullets.push(b);
      myGamePiece.ammo -= 1;
      updateHUDs();
    }

    if (getSelectedShipCookie().at(2).includes('2')) {
      const b1 = new component(30, 7, "yellow", myGamePiece.x + 110, (myGamePiece.y + Number(myGamePiece.gunPosY) - 7), "bullets", "n/a", "n/a");
      const b2 = new component(30, 7, "yellow", myGamePiece.x + 110, (myGamePiece.y + Number(myGamePiece.gunPosY) + 55), "bullets", "n/a", "n/a");
      b1.baseBulletSpeedX = bulletSpeedX;
      b1.baseBulletSpeedY = bulletSpeedY;
      b2.baseBulletSpeedX = bulletSpeedX;
      b2.baseBulletSpeedY = bulletSpeedY;
      myBullets.push(b1, b2);
      myGamePiece.ammo -= 2;
      updateHUDs();
    }
  }
}

// ── AUDIO ──
menuMusic = new sound("./audio/dstechnician-the-dying-110458.mp3", "menu");

function sound(src, type) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  if (type == 'menu') { this.sound.setAttribute("loop", "none"); }
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    if (type !== 'menu') {
      this.sound.volume = settingsSfxVol;
    }
    this.sound.play();
  };
  this.stop = function() { this.sound.pause(); };
}

window.addEventListener("click", function() { playMenuMusic(); });

function playMenuMusic() {
  console.log('Menu music function called.');
  try {
    if (musicStarted || document.getElementById('endScreen').style.display.includes('block')) {
      console.log('Menu music not playing — game active.');
    } else {
      menuMusic.sound.volume = settingsMusicVol;
      menuMusic.play();
    }
  } catch {
    menuMusic.play();
  }
}

function stopMenuMusic() {
  try { menuMusic.stop(); } catch(err) { console.log('stopping menu music error caught'); }
  console.log("Menu music pause called.");
}

const audioCtx = new AudioContext();

function hoverSound() {
  const osc  = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(180, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.3 * settingsSfxVol, audioCtx.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.18);
}

//Adds sound for all buttons
document.addEventListener("mouseover", e => {
  if (e.target.matches("button")) {
    hoverSound();
  }
});


function getShipHitboxes(x, y, w, h, angle) {
  angle = angle || 0;
  const shipCX = x + (w + 15) / 2;
  const shipCY = y + (h + 15) / 2;
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  function rotatePoint(px, py) {
    const dx = px - shipCX;
    const dy = py - shipCY;
    return {
      x: shipCX + dx * cosA - dy * sinA,
      y: shipCY + dx * sinA + dy * cosA
    };
  }

  function box(centerX, centerY, halfW, halfH) {
    const nudgeX = 12;
    const nudgeY = 0;
    const thickenX = 0.0;
    const thickenY = 0.2;
    const stretchCenterY = 0.1;
    const stretchCenterX = 0.5;
    const stretchedCenterY = centerY + (centerY - stretchCenterY) * thickenY;
    const stretchedCenterX = centerX + (centerX - stretchCenterX) * thickenX;
    const cx = x + w * stretchedCenterX + nudgeX;
    const cy = y + h * stretchedCenterY + nudgeY;
    const hw = w * halfW * (1 + thickenX);
    const hh = h * halfH * (1 + thickenY);

    // Four corners of the unrotated box
    const corners = [
      rotatePoint(cx - hw, cy - hh),
      rotatePoint(cx + hw, cy - hh),
      rotatePoint(cx + hw, cy + hh),
      rotatePoint(cx - hw, cy + hh),
    ];

    // AABB from rotated corners
    const xs = corners.map(c => c.x);
    const ys = corners.map(c => c.y);
    return {
      left:   Math.min(...xs),
      right:  Math.max(...xs),
      top:    Math.min(...ys),
      bottom: Math.max(...ys),
    };
  }

  return [
    box(0.721, 0.503, 0.271, 0.059),
    box(0.646, 0.410, 0.245, 0.025),
    box(0.547, 0.345, 0.197, 0.027),
    box(0.495, 0.285, 0.191, 0.024),
    box(0.369, 0.188, 0.222, 0.063),
    box(0.448, 0.094, 0.196, 0.026),
    box(0.647, 0.594, 0.246, 0.034),
    box(0.546, 0.659, 0.198, 0.028),
    box(0.498, 0.721, 0.199, 0.027),
    box(0.373, 0.816, 0.224, 0.061),
    box(0.447, 0.906, 0.201, 0.028),
    box(0.348, 0.971, 0.149, 0.025),
    box(0.347, 0.034, 0.147, 0.032),
  ];
}

//------------------------Pausing----------------------------//

// FIX: only pause on tab-out if the game is actively running (not crashed)
document.addEventListener("visibilitychange", function() {
  const endScreenVisible = document.getElementById('endScreen').style.display === 'block';
  if (document.hidden && myGameArea.rafId !== null && !endScreenVisible) {
    pauseGame();
  }
});

let gamePaused = false;
let orientationPausedGame = false;

function pauseGame() {
  if (!myGameArea.rafId) return;
  gamePaused = true;
  cancelAnimationFrame(myGameArea.rafId);
  myGameArea.rafId = null;
  myGameArea.lastTime = 0;
  showDiv('pauseScreen');
}

function resumeGame() {
  if (!gamePaused) return;
  gamePaused = false;
  hideDiv('pauseScreen');
  const loop = (timestamp) => {
    const delta = myGameArea.lastTime ? Math.min((timestamp - myGameArea.lastTime) / 16.667, 1) : 1;
    myGameArea.lastTime = timestamp;
    updateGameArea(delta);
    myGameArea.rafId = requestAnimationFrame(loop);
  };
  myGameArea.rafId = requestAnimationFrame(loop);
}

window.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && myGameArea.rafId !== null) pauseGame();
  else if (e.key === "Escape" && gamePaused) resumeGame();
});

//------------------------TOUCH CONTROLS----------------------------//

var touchDY = 0; // -1 = up, 0 = neutral, 1 = down (normalized)
var joystickActive = false;
var joystickStartY = 0;
var joystickCenterY = 0;
var pendingGameStart = false;

function isTouchDevice() {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

function isPortraitMobile() {
  return isTouchDevice() && window.matchMedia('(orientation: portrait)').matches;
}

function showTouchControls() {
  if (!isTouchDevice()) return;
  document.getElementById('touchControls').style.display = 'block';
  document.getElementById('touchFireBtn').style.display = 'flex';
}

function hideTouchControls() {
  document.getElementById('touchControls').style.display = 'none';
  document.getElementById('touchFireBtn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function setupJoystick() {
  const outer = document.getElementById('joystickOuter');
  const knob = document.getElementById('joystickKnob');

  if (!outer || !knob) {
    console.warn('Joystick elements not found');
    return;
  }

  const maxDist = 36;

  function onStart(e) {
    e.preventDefault();
    joystickActive = true;
    const touch = e.touches ? e.touches[0] : e;
    const rect = outer.getBoundingClientRect();
    joystickCenterY = rect.top + rect.height / 2;
    joystickStartY = touch.clientY;
  }

  function onMove(e) {
    e.preventDefault();
    if (!joystickActive) return;
    const touch = e.touches ? e.touches[0] : e;
    const dy = touch.clientY - joystickCenterY;
    const clamped = Math.max(-maxDist, Math.min(maxDist, dy));
    knob.style.transform = `translate(-50%, calc(-50% + ${clamped}px))`;
    touchDY = clamped / maxDist;
  }

  function onEnd(e) {
    joystickActive = false;
    touchDY = 0;
    knob.style.transform = 'translate(-50%, -50%)';
  }

  outer.addEventListener('touchstart', onStart, { passive: false });
  outer.addEventListener('touchmove',  onMove,  { passive: false });
  outer.addEventListener('touchend',   onEnd,   { passive: false });
  outer.addEventListener('touchcancel',onEnd,   { passive: false });
});

document.addEventListener('DOMContentLoaded', function setupFireBtn() {
  const btn = document.getElementById('touchFireBtn');

  if (!btn) {
    console.warn('Fire button not found');
    return;
  }

  btn.addEventListener(
    'touchstart',
    function (e) {
      e.preventDefault();
      fireBullet();
    },
    { passive: false }
  );
});

//------------------------SETTINGS----------------------------//

function buildSettingsPanel() {
  const panel = document.getElementById('settings');
  panel.innerHTML = `
    <p style="font-size: 60px; font-family: '8bit-font-text'; color: #e8c84a;">Settings</p>
    <div style="max-width:380px; margin: 0 auto; text-align:left;">

      <div class="settings-row">
        <label>Music Volume</label>
        <input type="range" min="0" max="1" step="0.05" value="${settingsMusicVol}"
          oninput="setMusicVolume(this.value); document.getElementById('mvLabel').textContent=Math.round(this.value*100)+'%'; if(musicMaster) musicMaster.gain.value=settingsMusicVol; menuMusic.sound.volume=settingsMusicVol;">
        <span id="mvLabel">${Math.round(settingsMusicVol * 100)}%</span>
      </div>

      <div class="settings-row">
        <label>SFX Volume</label>
        <input type="range" min="0" max="1" step="0.05" value="${settingsSfxVol}"
          oninput="setSfxVolume(this.value); document.getElementById('sfxLabel').textContent=Math.round(this.value*100)+'%';">
        <span id="sfxLabel">${Math.round(settingsSfxVol * 100)}%</span>
      </div>

      <div class="settings-row" style="margin-top:18px;">
        <label>Show Hitboxes</label>
        <button id="hitboxToggleBtn" class="settings-toggle ${settingsShowHitbox ? 'on' : ''}"
          onclick="settingsShowHitbox=!settingsShowHitbox; this.textContent=settingsShowHitbox?'ON':'OFF'; this.classList.toggle('on', settingsShowHitbox);">
          ${settingsShowHitbox ? 'ON' : 'OFF'}
        </button>
        <span></span>
      </div>

      <p style="font-size:13px; font-family:'8bit-font-text'; color:#5a5a6a; margin-top:20px;">
        Audio settings are applied immediately and save when you leave the game. Hitbox visibility is for debugging and will not save. 
      </p>
    </div>
    <br>
    <button style="font-family: '8bit-font-text'" class="button_hp button_hp1" onclick="hideDiv('settings') || hideDiv('panelBackdrop') || showDiv('startScreen')">BACK</button>
  `;
}

//------------------------End of Game Mechanics-------------------//

// build pane before showing it
    document.querySelector('.button5').addEventListener('click', function() {
      buildSettingsPanel();
    });

    function updatePortraitGameBlocker() {
      const blocker = document.getElementById('portraitGameBlocker');
      if (!blocker) return;

      if (isPortraitMobile()) {
        if (myGameArea.rafId !== null) {
          myGameArea.stop();
          gamePaused = true;
          orientationPausedGame = true;
          hideTouchControls();
        }
        blocker.style.display = 'flex';
        return;
      }

      if (blocker.style.display === 'flex') {
        blocker.style.display = 'none';
        if (pendingGameStart) {
          pendingGameStart = false;
          hideDiv('startScreen');
          hideDiv('menuBackground');
          startGame();
          return;
        }
        if (orientationPausedGame) {
          orientationPausedGame = false;
          showTouchControls();
          resumeGame();
          return;
        }

        hideTouchControls();
      }
    }

    window.addEventListener('resize', updatePortraitGameBlocker);
    window.addEventListener('orientationchange', updatePortraitGameBlocker);

  (function() {
    // Check if the current domain matches the dev site
    if (window.location.hostname === 'pixelpilotdev.w3spaces.com') {

      const banner = document.createElement('div');
      banner.textContent = 'Dev site: Expect unfinished features';
      
 
      Object.assign(banner.style, {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: '#ffeb3b',
        color: '#333',
        textAlign: 'center',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        zIndex: '9999',
        border: '1px solid #ffc107',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
      });

     
      document.body.appendChild(banner);
    }
  })();
