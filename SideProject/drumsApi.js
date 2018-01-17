var context = new AudioContext();
var players;

var init = function(){
    $.getJSON("./DrumBeats.json", function (json) { // remove outer Json loader
    // Load samples
    players = new Tone.Players(
      {"kick":"./Samples/_Kick.wav",
    "snare":"./Samples/_Snare.wav",
    "hihat":"./Samples/_HH.wav",},
    function(players)
    {
      players.get('snare').toMaster();
      players.get('snare').retrigger = true;
      players.get('kick').toMaster();
      players.get('kick').retrigger = true;
      players.get('hihat').toMaster();
      players.get('hihat').retrigger = true;
      players.get('hihat').volume.value=-8;
      setTempo(120);
      setBeat(json[0]); //remove
    });
    
      $(document).ready(function () {
        $('#stop').click(function () {
          if (window.playing == true) {
            window.playing = false;
            stopLoop();
          }
        });
      
        $('#play').click(function () {
          if (window.playing == false) {
            window.playing = true;
             startLoop();
          }
        });
      });
    });

    window.playing = false;
};

var setBeat = function (beatObject) {
  
  kickLoop = new Tone.Part(function(time){
  	players.get('kick').start(time,0.001);
  	},beatObject.kick.Pattern.map(function(e,i,array){
	  return array.slice(0,i+1).join(" + ");
  }));
  kickLoop.loopEnd = beatObject.kick.LoopEnd;
  kickLoop.loop=true;
   

  snareLoop = new Tone.Part(function(time){
    players.get('snare').start(time,0.01);
  }, beatObject.snare.Pattern.map(function(e,i,array){
	  return array.slice(0,i+1).join(" + ");
  })
  );
  snareLoop.loopEnd = beatObject.snare.LoopEnd;
  snareLoop.loop=true;

  hihatLoop = new Tone.Part(function(time){
    players.get('hihat').start(time,0.01); 
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

var setTempo = function (tempo) {
  Tone.Transport.bpm.value = tempo;
}

var stopLoop = function(){
  Tone.Transport.stop();
  }

var startLoop = function(){
  Tone.Transport.start('+0.1');
};  

init();