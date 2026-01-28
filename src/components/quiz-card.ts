import { quizDataEasy, quizDataHard } from "../data/db";
import { getQuizHtml, getAnswerHtml } from "../templates/quiz-card";
import { getStartScreenHtml } from "../templates/start-screen";
import type { QuizData } from "../interfaces/quiz";
import { getEndScreenHtml } from "../templates/end-screen";

const quizCardRef = document.querySelector<HTMLElement>("[data-quiz-card]");

export let card = {
  vars: {
    currentQuestion: 0,
    rightAnswers: 0,
    gameMode: "easy",
    data: quizDataEasy,
  },

  init() {
    this.startScreen();
  },
  startScreen() {
    quizCardRef!.innerHTML = getStartScreenHtml();
    const gameModusRef =
      document.querySelectorAll<HTMLParagraphElement>("*[data-game-modus]");
    for (const element of gameModusRef) {
      element.addEventListener("click", () => {
        this.setGameModus(element.innerText);
      });
    }
  },
  startEndScreen() {
    quizCardRef!.innerHTML = getEndScreenHtml(
      this.vars.rightAnswers,
      this.vars.data.length,
    );
  },
  setGameModus(input: string) {
    if (input == "HARD") {
      this.vars.data = quizDataHard;
      this.renderCard(this.vars.currentQuestion);
    } else if (input == "EASY") {
      this.vars.data = quizDataEasy;
      this.renderCard(this.vars.currentQuestion);
    }
  },
  changeGameModus(modus: string) {
    this.vars.gameMode = modus;
  },
  renderCard(index: number) {
    let oneQuestion: QuizData = this.vars.data[index];
    quizCardRef!.innerHTML = "";
    quizCardRef!.innerHTML = getQuizHtml(
      oneQuestion,
      index,
      this.vars.data.length,
    );
    const quizCardAnswersRef: HTMLElement | null = document.querySelector(
      "[data-quiz-answers]",
    );
    quizCardAnswersRef!.innerHTML = "";
    for (const answer of this.vars.data[index].answers) {
      quizCardAnswersRef!.innerHTML += getAnswerHtml(
        answer,
        this.vars.data[index].answers.indexOf(answer),
      );
    }
    this.addEventTrigger(index);
  },
  addEventTrigger(index: number) {
    const answerRef = document.querySelectorAll<HTMLDivElement>(
      "*[data-quiz-answer]",
    );

    for (const element of answerRef) {
      element.addEventListener("click", () => {
        let check = this.checkAnswer(element.getAttribute("data-quiz-answer")!.toString(), this.vars.currentQuestion,);
        let clickedAnwer: string | null = element.getAttribute("data-quiz-answer");

        this.highligthAnswer(check, clickedAnwer, index);
        setTimeout(() => {
            this.nextQuestion()
        }, 1000);
      });
    }
  },
  highligthAnswer(checked: boolean, clickedAnwer: string|null, index: number) {
    let clickElement = document.querySelector(`[data-quiz-answer="${clickedAnwer}"]`)
    let rigthElement = document.querySelector(`[data-quiz-answer="${this.vars.data[index].isRight}"]`)
    if (checked) {
      clickElement!.classList.add("right")
    }else{
      clickElement!.classList.add("wrong")
      rigthElement!.classList.add("right")
    }
  },
  checkAnswer(input: string, index: number) {
    let currentQuestion: QuizData = this.vars.data[index];
    if (currentQuestion.isRight == Number(input)) {
      this.vars.rightAnswers += 1;
      return true;
    } else {
      return false;
    }
  },
  nextQuestion() {
    this.vars.currentQuestion += 1;
    if (this.vars.currentQuestion < this.vars.data.length) {
      this.renderCard(this.vars.currentQuestion);
    } else {
      this.startEndScreen();
    }
  },
};
