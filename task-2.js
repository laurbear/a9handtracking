ALL_TASKS["music"] = {
  desc: "Play/Pause an instrumental version of 34+35 by Ariana Grande",

  // Add classifier options to do classification,
  // or comment out for 5 sliders for continuous values
  classifierOptions: ["✌🏼", "🤌🏼", "✋🏼", "🖕🏼"],

  // How long you want to train for
  // Find an accuracy that works for you
  epochCount: 20,

  modelDetails: {
    model: "song/model3.json",
    metadata: "song/model3_meta.json",
    weights:
      "https://cdn.glitch.global/7a832bfe-c85d-4724-8415-22899c3694eb/model.weights.bin3.bin?v=1670391916871",
  },

  preload(p) {
    // Any extra asset loading
    // free sound effects: https://freesound.org/
    // Be sure to cite in your .md!

    this.swordHitSound = p.loadSound(
      "https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/536104__eminyildirim__sword-hit-heavy.wav?v=1669823017308"
    );
    this.pianoNote = p.loadSound(
      "https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/573512__gamedrix974__54.wav?v=1669823019716"
    );
    this.bubblePopSound = p.loadSound(
      " https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/376968__elmasmalo1__bubble-pop.wav?v=1669823025748"
    );

    this.idfwu = p.loadSound(
      "https://cdn.glitch.global/7a832bfe-c85d-4724-8415-22899c3694eb/Big%20Sean%20-%20I%20don't%20fuck%20with%20you%20ft.%20E-40%20%23IDFWU%20LYRICS.mp3?v=1670392237213"
    );

    this.ariana = p.loadSound(
      "https://cdn.glitch.global/7a832bfe-c85d-4724-8415-22899c3694eb/ariana-grande-3435-melody-instrumental.mp3?v=1670392822458"
    );
  },

  setup(p) {
    // Do any setup work here
    this.osc = new p5.Oscillator("sine");
    // this.osc.start()
    // this.osc.stop()
    this.color = [100, 100, 80];
    this.points = 10;
  },

  onChangeLabel(hand, newLabel, oldLabel, p) {
    // An event happened!
    console.log(`Changed from ${oldLabel} to ${newLabel}`);

    // Lots of options
    // Change some state, play a sound,
    // change some value....

    // Make a theremin!
    // if (newLabel === "✌🏼")
    //  this.idfwu.play()

    // this.osc.start()
    // if (newLabel === "🖕🏼")
    //    this.bubblePopSound.play()

    // Play a sound
    if (newLabel === "✋🏼")
      // this.swordHitSound.play()
      // this.bubblePopSound.play()
      this.ariana.play();
    if (newLabel === "🖕🏼")
      this.ariana.stop();
  
    // else
    //   this.bubblePopSound.play()

    //Play a pitch-shifted sound

    //      if (newLabel === "👊"){
    //       let pitch = (400 - hand.center[1])*.002 + 1
    //        this.pianoNote.play()
    //     this.pianoNote.rate(pitch)
    //     }

    // Random color?
    this.color = [260 * Math.random(), 100, 50];
    this.points++;
  },

  draw(p, hands, face) {
    p.background(...this.color);

    hands.forEach((hand) => {
      // Draw each hand
      if (hand.isActive) {
        // Test drawing
        hand.points.forEach((pt) => p.circle(...pt, 10));
        // hand.points.forEach((pt, index) => p.text(index, ...pt))

        p.circle(...hand.center, 50);

        hand.fingers.forEach((f, index) => {
          let fingertip = f[3];
          p.noStroke();
          p.fill(index * 50, 100, 50, 60);
          p.circle(...fingertip, 10);
        });

        let pitch = 200 - hand.center[1];
        // console.log("Pitch", pitch)
        this.osc.freq(pitch);

        if (hand.prediction) {
          // Use the label and uncertainty to draw
          // console.log(hand.prediction);
          let pred = hand.prediction;
          p.textSize(pred.certainty * 30);
          p.text(pred.label, ...hand.center);
          // p.text("I would like to have" + pred.label, 150, 250);
          p.textSize(pred.certainty * 20);
        }
      }
    });

    // Show text if you want!
    p.fill(0);
    // p.text(this.points + " points", 350, 250);
    // p.text("I would like to have" + pred.label, 350, 250);
  },

  track: "HAND",
  // Options: "HAND", "HANDS", "HANDS AND FACE", "FACE"
};
