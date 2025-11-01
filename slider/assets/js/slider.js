// Model
// дані та ф-ції для работи з ними
class Slider {
  constructor(slides, currentIndex) {
    this.slides = slides;
    this.currentIndex = currentIndex;
  }

  set currentIndex(value) {
    const { length } = this.slides;

    if (typeof value !== "number") {
      throw TypeError("value must be number");
    }
    if (!Number.isInteger(value) || value < 0 || value >= length) {
      throw new RangeError(`index must be intager from 0 to ${length - 1}`);
    }

    this._currentIndex = value;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  decIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;

    this.currentIndex = (currentIndex - 1 + length) % length;
  }

  incIndex() {
    const {
      currentIndex,
      slides: { length },
    } = this;

    this.currentIndex = (currentIndex + 1) % length;
  }

  get currentSlide() {
    return slides[this.currentIndex];
  }
}
