
import React, { Component } from "react";
import { Section } from "./Section";
import FeedbackOptions  from "./FeedbackOptions";
import Statistics from "./Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makeFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = Math.round((good / total) * 100);

    return (
      <div>
        <Section title="Please leave feedback">
          <>
            <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={this.makeFeedback} />
            {total > 0 ? (
              <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage} />
            ) : (
              <div style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "25px",
        
              }}>"There is no feedback else"</div>
            )}
          </>
        </Section>
      </div>
    );
  }
}

export default App;
