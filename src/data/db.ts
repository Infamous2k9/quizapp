import type { QuizData } from "@root/interfaces/quiz";

export const quizDataEasy: QuizData[] = [
  {
    question: "Wofür wird JavaScript hauptsächlich verwendet?",
    answers: [
      "Für interaktive Webseiten",
      "Für Bildbearbeitung",
      "Für Betriebssysteme",
      "Für Textverarbeitung",
    ],
    isRight: 0,
  },
  {
    question: "Wie gibt man Text in der Konsole aus?",
    answers: ["console.log()", "print()", "alertBox()", "log()"],
    isRight: 0,
  },
  {
    question: "Wie erstellt man ein Array?",
    answers: ["{}", "[]", "()", "<>"],
    isRight: 1,
  },
  {
    question: "Welche Schreibweise erstellt eine Variable?",
    answers: ["let x = 5;", "x := 5;", "int x = 5;", "var: x = 5;"],
    isRight: 0,
  },
  {
    question: "Welcher Datentyp speichert true oder false?",
    answers: ["string", "number", "boolean", "object"],
    isRight: 2,
  },
  {
    question: "Wie heißt der Vergleichsoperator für 'gleich'?",
    answers: ["=", "==", "===", "!="],
    isRight: 2,
  },
  {
    question: "Wie greift man auf das erste Element eines Arrays zu?",
    answers: ["array[1]", "array[0]", "array.first()", "array.start()"],
    isRight: 1,
  },
  {
    question: "Welche Schleife wird oft genutzt, um Arrays zu durchlaufen?",
    answers: ["for", "if", "switch", "break"],
    isRight: 0,
  },
  {
    question: "Wie fügt man ein Element zu einem Array hinzu?",
    answers: ["add()", "insert()", "push()", "join()"],
    isRight: 2,
  },
  {
    question: "Welche Datei-Endung hat JavaScript?",
    answers: [".java", ".js", ".jsx", ".script"],
    isRight: 1,
  },
];

export const quizDataHard: QuizData[] = [
  {
    question: "Was ist das Ergebnis von: typeof null?",
    answers: ["null", "object", "undefined", "number"],
    isRight: 1,
  },
  {
    question: "Was gibt folgender Code aus?\n\nconsole.log([] == false);",
    answers: ["true", "false", "TypeError", "undefined"],
    isRight: 0,
  },
  {
    question: "Was ist ein Closure in JavaScript?",
    answers: [
      "Eine Funktion mit Zugriff auf ihren äußeren Scope",
      "Eine geschlossene Schleife",
      "Ein privates Objekt",
      "Ein blockierter Speicherbereich",
    ],
    isRight: 0,
  },
  {
    question: "Was passiert bei folgendem Code?\n\nconsole.log(a);\nvar a = 5;",
    answers: ["5", "undefined", "ReferenceError", "null"],
    isRight: 1,
  },
  {
    question: "Was ist der Unterschied zwischen call() und apply()?",
    answers: [
      "Kein Unterschied",
      "apply() akzeptiert Argumente als Array",
      "call() akzeptiert Argumente als Array",
      "apply() funktioniert nur mit Arrow Functions",
    ],
    isRight: 1,
  },
  {
    question: "Was gibt folgender Ausdruck zurück?\n\n0.1 + 0.2 === 0.3",
    answers: ["true", "false", "NaN", "TypeError"],
    isRight: 1,
  },
  {
    question: "Welche Aussage über Arrow Functions ist korrekt?",
    answers: [
      "Sie haben ihr eigenes this",
      "Sie können als Konstruktor genutzt werden",
      "Sie erben this aus dem äußeren Scope",
      "Sie benötigen immer ein return",
    ],
    isRight: 2,
  },
  {
    question: "Was bewirkt Object.freeze(obj)?",
    answers: [
      "Das Objekt wird tiefen-kopiert",
      "Eigenschaften können nicht mehr geändert werden",
      "Das Objekt wird gelöscht",
      "Das Objekt wird versiegelt und tief eingefroren",
    ],
    isRight: 1,
  },
  {
    question: "Was passiert bei JSON.stringify() mit Funktionen?",
    answers: [
      "Sie werden als String gespeichert",
      "Sie verursachen einen Fehler",
      "Sie werden ignoriert",
      "Sie werden zu null",
    ],
    isRight: 2,
  },
  {
    question: "Was ist das Ergebnis von:\n\n[1,2,3].map(parseInt)",
    answers: ["[1,2,3]", "[1, NaN, NaN]", "[1,1,1]", "[NaN, NaN, NaN]"],
    isRight: 1,
  },
];
