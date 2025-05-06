import { useState } from "react";

const flashcards = [
  { front: "What is the probability of drawing a red card from a standard deck?", back: "0.5" },
  { front: "What is the main advantage of a simple random sample?", back: "It eliminates selection bias" },
  { front: "If P(A) = 0.4 and P(B) = 0.3 and A and B are independent, what is P(A and B)?", back: "0.12" },
  { front: "What type of bias occurs when individuals choose to respond to a survey?", back: "Voluntary response bias" },
  { front: "What is a Type I error?", back: "Rejecting a true null hypothesis" },
  { front: "What does a boxplot show?", back: "Five-number summary" },
  { front: "What is the IQR of the data: [4, 6, 7, 9, 10, 12, 15, 18]?", back: "6" },
  { front: "What does an r-squared value of 0.85 mean?", back: "85% of variation in y is explained by x" },
  { front: "What is the purpose of a confidence interval?", back: "To estimate a population parameter" },
  { front: "What does the slope of a regression line represent?", back: "Change in y per unit change in x" },
  { front: "Which measure of center is most affected by outliers?", back: "Mean" },
  { front: "What kind of relationship does a residual plot with a pattern suggest?", back: "Non-linear" },
  { front: "If events A and B are mutually exclusive, what is P(A and B)?", back: "0" },
  { front: "What does double-blind mean in an experiment?", back: "Neither subjects nor experimenters know who gets treatment" },
  { front: "If p-value < alpha, what should you do?", back: "Reject the null hypothesis" },
  { front: "In a histogram, what does the height of each bar represent?", back: "Frequency" },
  { front: "What condition must be met for a large sample z-test for a proportion?", back: "np and n(1-p) must both be > 10" },
  { front: "What is the correlation coefficient a measure of?", back: "Strength and direction of linear relationship" },
  { front: "What does statistically significant mean?", back: "Unlikely to occur by chance alone" },
  { front: "What is a confounding variable?", back: "A variable related to both explanatory and response variables" },
  { front: "What is the probability of rolling a sum of 7 on two fair six-sided dice?", back: "6/36" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const handleNext = () => {
    setIndex((index + 1) % flashcards.length);
    setShowBack(false);
  };

  return (
    <div style={ { display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", justifyContent: "center", padding: "2rem" } }>
      <div
        onClick={() => setShowBack(!showBack)}
        style={ { width: "100%", maxWidth: "600px", border: "1px solid black", padding: "2rem", fontSize: "1.25rem", textAlign: "center", cursor: "pointer" } }
      >
        {showBack ? flashcards[index].back : flashcards[index].front}
      </div>
      <button onClick={handleNext} style={ { marginTop: "1rem", padding: "0.5rem 1rem" } }>Next</button>
      <p style={ { marginTop: "1rem" } }>Card {index + 1} of {flashcards.length}</p>
    </div>
  );
}

export default App;
