import React, { useState } from "react";
import { Section } from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const makeFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const percentage = Math.round((good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <>
          <FeedbackOptions options={feedback} onLeaveFeedback={makeFeedback} />
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              "There is no feedback else"
            </div>
          )}
        </>
      </Section>
    </div>
  );
};

export default App;