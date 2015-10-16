var self = this;

function connect(){
  var pepperIP = $("#pepperIP").val();

  var setupIns_ = function(){
    self.session.service("ALTextToSpeech").done(function(ins){
      self.tts = ins;
    });
  }
  self.session = new QiSession(pepperIP);
  self.session.socket().on('connect', function(){
    self.session.service("ALTextToSpeech").done(function(tts){
      tts.say("Connected");
    });
    document.getElementById('connectionStatus').text = "Connected";
  }).on('disconnect', function(){
    alert("disconnected");
  });




}
