import type { QuestionType } from '../types';

function normalize(s: string): string {
  return s
    .replace(/\s+/g, ' ')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\left\|/g, '|')
    .replace(/\\right\|/g, '|')
    .trim()
    .toLowerCase();
}

export function checkAnswer(
  userAnswer: string,
  correctAnswer: string,
  type: QuestionType
): boolean {
  // Self-judgement: 'correct' means user thinks they got it right
  if (userAnswer === 'correct') return true;
  if (userAnswer === 'incorrect') return false;

  // Choice questions: compare selected letter with answer letter
  if (type === 'choice') {
    return normalize(userAnswer) === normalize(correctAnswer);
  }

  // Legacy: direct text comparison for fill/calculation (fallback)
  const ua = normalize(userAnswer);
  const ca = normalize(correctAnswer);
  return ua === ca;
}
