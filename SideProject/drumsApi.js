

var stopLoop = function(){
Tone.Transport.stop();
}

var setBeatTime = function (beatObject, snare, kick, hihat) {
  snare.toMaster();
  snare.retrigger = true;
  kick.toMaster();
  kick.retrigger = true;
  hihat.toMaster();
  hihat.retrigger = true;
  hihat.volume.value=-8;

  kickLoop = new Tone.Part(function(time){
  	kick.start(time,0.001);
  	},beatObject.kick.Pattern.map(function(e,i,array){
	  return array.slice(0,i+1).join(" + ");
  }));
  kickLoop.loopEnd = beatObject.kick.LoopEnd;
  kickLoop.loop=true;
   

  snareLoop = new Tone.Part(function(time){
  snare.start(time,0.01);
  }, beatObject.snare.Pattern.map(function(e,i,array){
	  return array.slice(0,i+1).join(" + ");
  })
  );
  snareLoop.loopEnd = beatObject.snare.LoopEnd;
  snareLoop.loop=true;

  hihatLoop = new Tone.Part(function(time){
  hihat.start(time,0.01); 
  }, beatObject.hihat.Pattern.map(function(e,i,array){
	  return array.slice(0,i+1).join(" + ");
  })
  );
  hihatLoop.loopEnd = beatObject.hihat.LoopEnd;
  hihatLoop.loop=true;
  hihatLoop.start(0);
  kickLoop.start(0);
  snareLoop.start(0);
}
var setBeatTempo = function (tempo) {
  Tone.Transport.bpm.value = tempo;
}

var context = new AudioContext();

var setup = function (beats) {
var players = new Tone.Players(
  {"kick":"./Samples/_Kick.wav",
"snare":"./Samples/_Snare.wav",
"hihat":"./Samples/_HH.wav",},
function(players)
{
  setBeatTempo(120);
  setBeatTime(beats[0], players.get('snare'),players.get('kick'),
   players.get('hihat'));

});
};


window.playing = false;

$.getJSON("./DrumBeats.json", function (json) {
  setup(json);

  $(document).ready(function () {
    $('#pause').click(function () {
      if (window.playing == true) {
        window.playing = false;
        stopLoop();
      }
    });
  
    $('#play').click(function () {
      if (window.playing == false) {
        window.playing = true;
     	  Tone.Transport.start('+0.1');
      }
    });
  });
});