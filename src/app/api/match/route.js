import historicalFigures from '../../data/historicalFigures.json';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const userAnswers = req.body.answers; // Array of selected options indices

  // Scoring logic
  const scores = historicalFigures.map(figure => ({
    name: figure.name,
    score: 0
  }));

  userAnswers.forEach((answer, index) => {
    // Question 1: How do you handle conflicts?
    if (index === 0) {
      if (answer === 0) { // With force and dominance
        scores[0].score += 1; // Genghis Khan
        scores[1].score += 1; // Ivan the Terrible
        scores[3].score += 1; // Pol Pot
        scores[6].score += 1; // Vlad the Impaler
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // With cunning and manipulation
        scores[2].score += 1; // Adolf Hitler
        scores[9].score += 1; // Benito Mussolini
      } else if (answer === 2) { // With direct confrontation
        scores[4].score += 1; // Nero
        scores[5].score += 1; // Caligula
        scores[8].score += 1; // Henry VIII
      }
    }

    // Question 2: What is your approach to leadership?
    if (index === 1) {
      if (answer === 0) { // Strict and authoritarian
        scores[0].score += 1; // Genghis Khan
        scores[1].score += 1; // Ivan the Terrible
        scores[3].score += 1; // Pol Pot
        scores[6].score += 1; // Vlad the Impaler
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // Charismatic and persuasive
        scores[2].score += 1; // Adolf Hitler
        scores[9].score += 1; // Benito Mussolini
      } else if (answer === 2) { // Pragmatic and practical
        scores[4].score += 1; // Nero
        scores[5].score += 1; // Caligula
      }
    }

    // Question 3: What motivates you?
    if (index === 2) {
      if (answer === 0) { // Power and control
        scores[0].score += 1; // Genghis Khan
        scores[2].score += 1; // Adolf Hitler
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // Revenge
        scores[1].score += 1; // Ivan the Terrible
        scores[6].score += 1; // Vlad the Impaler
      } else if (answer === 2) { // Wealth and luxury
        scores[4].score += 1; // Nero
        scores[5].score += 1; // Caligula
        scores[8].score += 1; // Henry VIII
      }
    }

    // Question 4: How do you deal with opposition?
    if (index === 3) {
      if (answer === 0) { // Ruthless suppression
        scores[3].score += 1; // Pol Pot
        scores[7].score += 1; // Joseph Stalin
        scores[9].score += 1; // Benito Mussolini
      } else if (answer === 1) { // Manipulation and propaganda
        scores[2].score += 1; // Adolf Hitler
      } else if (answer === 2) { // Public humiliation
        scores[4].score += 1; // Nero
        scores[5].score += 1; // Caligula
      }
    }

    // Question 5: What is your view on laws and rules?
    if (index === 4) {
      if (answer === 0) { // They are tools to control others
        scores[0].score += 1; // Genghis Khan
        scores[3].score += 1; // Pol Pot
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // They are meant to be broken
        scores[5].score += 1; // Caligula
      } else if (answer === 2) { // They should be strict and followed
        scores[1].score += 1; // Ivan the Terrible
        scores[6].score += 1; // Vlad the Impaler
      }
    }

    // Question 6: How do you view your enemies?
    if (index === 5) {
      if (answer === 0) { // As obstacles to be destroyed
        scores[0].score += 1; // Genghis Khan
        scores[2].score += 1; // Adolf Hitler
        scores[3].score += 1; // Pol Pot
      } else if (answer === 1) { // As tools to be manipulated
        scores[4].score += 1; // Nero
        scores[9].score += 1; // Benito Mussolini
      } else if (answer === 2) { // As rivals to be humiliated
        scores[5].score += 1; // Caligula
        scores[8].score += 1; // Henry VIII
      }
    }

    // Question 7: What is your main goal in life?
    if (index === 6) {
      if (answer === 0) { // Absolute power
        scores[0].score += 1; // Genghis Khan
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // Immortality through legacy
        scores[2].score += 1; // Adolf Hitler
        scores[4].score += 1; // Nero
      } else if (answer === 2) { // Personal pleasure and indulgence
        scores[5].score += 1; // Caligula
        scores[8].score += 1; // Henry VIII
      }
    }

    // Question 8: How do you treat your followers?
    if (index === 7) {
      if (answer === 0) { // As expendable assets
        scores[0].score += 1; // Genghis Khan
        scores[3].score += 1; // Pol Pot
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // As loyal subjects
        scores[1].score += 1; // Ivan the Terrible
        scores[6].score += 1; // Vlad the Impaler
      } else if (answer === 2) { // As friends and confidants
        scores[8].score += 1; // Henry VIII
      }
    }

    // Question 9: What is your greatest strength?
    if (index === 8) {
      if (answer === 0) { // Ruthlessness
        scores[0].score += 1; // Genghis Khan
        scores[3].score += 1; // Pol Pot
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // Charisma
        scores[2].score += 1; // Adolf Hitler
        scores[9].score += 1; // Benito Mussolini
      } else if (answer === 2) { // Intelligence
        scores[4].score += 1; // Nero
        scores[5].score += 1; // Caligula
      }
    }

    // Question 10: What is your greatest weakness?
    if (index === 9) {
      if (answer === 0) { // Overambition
        scores[0].score += 1; // Genghis Khan
        scores[2].score += 1; // Adolf Hitler
        scores[7].score += 1; // Joseph Stalin
      } else if (answer === 1) { // Paranoia
        scores[1].score += 1; // Ivan the Terrible
        scores[6].score += 1; // Vlad the Impaler
      } else if (answer === 2) { // Excessive cruelty
        scores[3].score += 1; // Pol Pot
        scores[5].score += 1; // Caligula
      }
    }
  });

  // Find the figure with the highest score
  const matchedFigure = scores.reduce((max, figure) => figure.score > max.score ? figure : max, scores[0]);

  res.status(200).json(matchedFigure);
}