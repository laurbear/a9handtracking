ALL_TASKS["orderFood"] = {
  desc: "Ask for food (bread/vegetables/protein) or plates using hand gestures!",

  // Add classifier options to do classification,
  // or comment out for 5 sliders for continuous values
  classifierOptions: ["🥖", "🍽", "🥬", "🍳"],

  // How long you want to train for
  // Find an accuracy that works for you
  epochCount: 20,

  modelDetails: {
    model: "slash/model.json",
    metadata: "slash/model_meta.json",
    weights:
      //"https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/model.weights.bin?v=1669775994921",
      "https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/model.weights.bin?v=1669775994921",
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
  },

  setup(p) {
    // Do any setup work here
    this.osc = new p5.Oscillator("sine");
    // this.osc.start()
    // this.osc.stop()
    this.color = [100, 100, 80];
    this.points = 10;
  },

  onChangeLabel(hand, newLabel, oldLabel) {
    // An event happened!
    console.log(`Changed from ${oldLabel} to ${newLabel}`);

    // Lots of options
    // Change some state, play a sound,
    // change some value....

    // Make a theremin!
    //    if (newLabel === "🗡")
    //    this.osc.start()
    // if (newLabel === "🛡")
    //    this.osc.stop()

    // Play a sound
    //  if (newLabel === "🗡")
    //    this.swordHitSound.play()
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
        p.fill(0);
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
          p.textSize(pred.certainty * 25);
          p.fill(0);
          if (pred.label === "🥖")
            p.text("I would like to have bread", 50, 100);
          if (pred.label === "🍽")
            p.text("I would like to have a plate and utensils", 50, 100);
          if (pred.label === "🥬") p.text("I would like vegetables", 50, 150);
          if (pred.label === "🍳") p.text("I would like protein", 50, 200);
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
