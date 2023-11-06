export class TaskSpoiler {
  constructor(config) {
    this.config = config;
    this.spoilerContainer = document.querySelector(
      this.config.spoilerListSelector
    );
    this.spoilerList = this.spoilerContainer.querySelectorAll(
      this.config.spoilerSelector
    );
  }

  setElementHeight(element, height) {
    element.style.height = `${height}px`;
  }

  toggleSpoiler(e) {
    const target = e.target;

    const spoiler = target.parentNode.querySelector(
      this.config.spoilerSelector
    );
    if (!spoiler) return;

    const isSpoilerButton = target.classList.contains(
      this.config.spoilerBtnClass
    );
    const shortSpoiler = spoiler.querySelector(
      this.config.shortSpoilerSelector
    );
    const longSpoiler = spoiler.querySelector(this.config.longSpoilerSelector);
    const isLongActive = longSpoiler.classList.contains(
      this.config.activeSpoilerClass
    );

    if (isSpoilerButton) {
      this.setElementHeight(
        spoiler,
        isLongActive ? shortSpoiler.offsetHeight : longSpoiler.offsetHeight
      );

      shortSpoiler.classList[isLongActive ? 'add' : 'remove'](
        this.config.activeSpoilerClass
      );
      longSpoiler.classList[isLongActive ? 'remove' : 'add'](
        this.config.activeSpoilerClass
      );

      target.classList.toggle(this.config.activeSpoilerBtnClass);
    }
  }

  init() {
    this.spoilerList.forEach(spoiler => {
      const shortSpoiler = spoiler.querySelector(
        this.config.shortSpoilerSelector
      );

      this.setElementHeight(spoiler, shortSpoiler.offsetHeight);
    });

    this.spoilerContainer.addEventListener('click', e => this.toggleSpoiler(e));
  }
}
