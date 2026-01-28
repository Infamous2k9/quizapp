export function getEndScreenHtml(points: number, maxPoints: number) {
  return `
        <div class="end">
            <p class="end__msg">Du hast ${points} von ${maxPoints} möglichen Punkten erreicht!</p>
            <img class="end__image" src="./assets/images/winner.png" alt="Win img">
            <button onclick="location.reload();" class="end__btn">Nochmal Spielen</button>
        </div>
    `;
}
