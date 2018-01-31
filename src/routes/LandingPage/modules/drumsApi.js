import Tone from 'tone'

var players,kickLoop,snareLoop,hihatLoop,clickOneLoop,clickBeatLoop

// Pattern normalie based on how many playMeasures
var playMeasureNormalize = function (pattern, playMeasures) {
  var completedArray = []
  for (let index = 0; index < playMeasures; index++) {
    completedArray = completedArray.concat(Array.from(pattern).map(function (e, i, array) {
      if (i === 0) { array[i] = index + 'm + ' + array[i] }
      return array.slice(0, i + 1).join(' + ')
    }))
  }
  return completedArray
}

var init = function () {
    // Load samples
  players = new Tone.Players(
    {
      'kick': './Samples/_Kick.wav',
      'snare': './Samples/_Snare.wav',
      'hihat': './Samples/_HH.wav',
      'clickone': './Samples/ClickOne.wav',
      'clickbeat': './Samples/ClickBeat.wav'
    },
    function (players) {
      players.get('snare').toMaster()
      players.get('snare').retrigger = true
      players.get('kick').toMaster()
      players.get('kick').retrigger = true
      players.get('hihat').toMaster()
      players.get('hihat').retrigger = true
      players.get('hihat').volume.value = -8
      players.get('clickone').toMaster().retrigger = true
      players.get('clickbeat').toMaster().retrigger = true
      players.get('clickone').volume.value = -50
      players.get('clickbeat').volume.value = -50

      setTempo(120)
    })
  window.playing = false
}

export function setBeat (beatObject) {
  // Disposes Beat that have started
if (kickLoop !=undefined)
{
  kickLoop.dispose()
}
if (snareLoop !=undefined)
{
  snareLoop.dispose()
}
if (hihatLoop !=undefined)
{
  hihatLoop.dispose()
}
  Tone.Transport.timeSignature = beatObject.timeSignature
  
  kickLoop = new Tone.Part(function (time) {
    players.get('kick').start(time, 0.001)
  },
    playMeasureNormalize(beatObject.kick.Pattern, beatObject.PlayMeasures)
  )
  kickLoop.loopEnd = beatObject.PlayMeasures + 'm+' +
    beatObject.SilenceMeasures + 'm'
  kickLoop.loop = true

  snareLoop = new Tone.Part(function (time) {
    players.get('snare').start(time, 0.01)
  },

    playMeasureNormalize(beatObject.snare.Pattern, beatObject.PlayMeasures)
  )
  snareLoop.loopEnd = beatObject.PlayMeasures + 'm+' +
    beatObject.SilenceMeasures + 'm'
  snareLoop.loop = true

  hihatLoop = new Tone.Part(function (time) {
    players.get('hihat').start(time, 0.01)
  },

    playMeasureNormalize(beatObject.hihat.Pattern, beatObject.PlayMeasures)
  )
  hihatLoop.loopEnd = beatObject.PlayMeasures + 'm+' +
    beatObject.SilenceMeasures + 'm'
  hihatLoop.loop = true

  // creating the click
  if (clickOneLoop != undefined) {
    clickOneLoop.dispose()
  }

  if (clickBeatLoop != undefined) {
    clickBeatLoop.dispose()
  }

  clickOneLoop = new Tone.Loop(function (time) {
    players.get('clickone').start(time)
  }, '1m').start(0)

  clickBeatLoop = new Tone.Loop(function (time) {
    players.get('clickbeat').start(time)
  }, '8n').start(0)

  hihatLoop.start(0)
  kickLoop.start(0)
  snareLoop.start(0)
}

export function setTempo (tempo) {
  Tone.Transport.bpm.value = tempo
}

export function stopLoop () {
  Tone.Transport.stop()
  turnClickOff()
}

export function startLoop () {
  Tone.Transport.start('+0.1')
  turnClickOn()
}

export function setInstVol (instrumentName, Volume) {
  players.get(instrumentName).volume.value = Volume
}

export function turnClickOn () {
  players.get('clickone').volume.value = 0
  players.get('clickbeat').volume.value = 0
}

export function turnClickOff () {
  players.get('clickone').volume.value = -50
  players.get('clickbeat').volume.value = -50
}

// inits this Api
init()
