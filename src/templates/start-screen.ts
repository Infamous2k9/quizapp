export function getStartScreenHtml() {
  return `
    <div class="start">
        <h1 class="start__headline">Wähle dein Modus aus:</h1>
        <div class="start__content">
            <p class="modus-btn" data-game-modus>EASY</p>
            <p class="modus-btn" data-game-modus>HARD</p>
        </div>
    </div>
    `;
}
