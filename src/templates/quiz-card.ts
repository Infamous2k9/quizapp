import type { QuizData } from "../interfaces/quiz";

export function getQuizHtml(quiz: QuizData, index: number, max: number) {
  return `
      <div class="quizcard__headline" data-quiz-head>
        <h1>${quiz.question}</h1>
      </div>
      <div class="quizcard__progressbar" data-quiz-progess></div>
      <div class="quizcard__answer-list" data-quiz-answers></div>
      <div class="quizcard__footer" data-quiz-current>
        <p>${index + 1} / ${max}</p>
      </div>
    `;
}

export function getAnswerHtml(answer: string, index: number) {
  return `
        <div class="quizcard__answer" data-quiz-answer="${index}">${answer}</div>
    `;
}
