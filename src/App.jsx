import { useState } from "react";

const flashcards = [
  { front: "What is the probability of drawing a red card from a standard deck?", back: "0.5" },
  { front: "What is the median of the data set: [3, 7, 8, 5, 12, 14, 21, 13, 18]?", back: "12" },
  { front: "What is a Type I error?", back: "Rejecting a true null hypothesis" },
  { front: "What is the purpose of a confidence interval?", back: "To estimate a population parameter" },
  { front: "What does an r-squared value of 0.85 mean?", back: "85% of variation in y is explained by x" },
  { front: "What does a boxplot show?", back: "Five-number summary" },
  { front: "If P(A) = 0.4 and P(B) = 0.3 and A and B are independent, what is P(A and B)?", back: "0.12" },
  { front: "What kind of relationship does a residual plot with a pattern suggest?", back: "Non-linear" },
  { front: "What is the main advantage of a simple random sample?", back: "It eliminates selection bias" },
  { front: "What does the slope of a regression line represent?", back: "Change in y per unit change in x" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const handleNext = () => {
    setIndex((index + 1) % flashcards.length);
    setShowBack(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", justifyContent: "center", padding: "2rem" }}>
      <div
        onClick={() => setShowBack(!showBack)}
        style={{ width: "100%", maxWidth: "500px", border: "1px solid black", padding: "2rem", fontSize: "1.5rem", textAlign: "center", cursor: "pointer" }}
      >
        {showBack ? flashcards[index].back : flashcards[index].front}
      </div>
      <button onClick={handleNext} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>Next</button>
    </div>
  );
}

export default App;
