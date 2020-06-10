var app = new Vue({
  el: "#app",
  data: {
    message: "Christian"
  },
  methods: {
    playSound(url) {
      let sound = new Audio(url);
      sound.play();
    }
  }
});
