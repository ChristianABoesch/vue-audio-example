var app = new Vue({
  el: "#app",
  data: {
    message: "Christian"
  },
  methods: {
    playSound() {
      let url =
        "http://soundbible.com/mp3/Elevator%20Ding-SoundBible.com-685385892.mp3";
      let sound = new Audio(url);
      sound.play();
    }
  }
});
