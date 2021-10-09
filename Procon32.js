import { create } from "https://js.sabae.cc/stdcomp.js";
import { fix0 } from "https://js.sabae.cc/fix0.js";

const w = 1.190;
const h = 1.683;

class Procon32 {
  static get length() {
    return 172;
  }
  static createPage(page, x, y, z, rx, ry, rz, parent) {
    const plane = create("a-plane", parent);
    plane.setAttribute("position", { x, y, z });
    plane.setAttribute("rotation", { x: rx, y: ry, z: rz });
    plane.setAttribute("width", w);
    plane.setAttribute("height", h);
    plane.setAttribute("src", "./img/" + fix0(page, 4) + ".png");
    return plane;
  }
}

export { Procon32 };
