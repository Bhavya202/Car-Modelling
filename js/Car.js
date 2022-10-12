AFRAME.registerComponent("car", {
  schema: {
    modelRef: { type: "string", default: "../assets/car.gltf" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: -3.5, y: 0, z: 80 };
    const rotation = { x: 0, y: 180, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
