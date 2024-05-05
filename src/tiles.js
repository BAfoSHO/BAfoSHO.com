document.addEventListener("DOMContentLoaded", function () {
  const dismissButtons = document.querySelectorAll(".dismiss-btn");

  dismissButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tile = this.closest(".tile");
      if (tile) {
        tile.remove();
      }
    });
  });
});

