const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div style={{
        display: "flex",
        gap: "20px",
      }}>
        <button onClick={() => onLeaveFeedback("good")} type="button"style={{
        width: "100px",
        fontSize: "18px",
        padding: "5px",
        border: "1px solid #ccc",
        color: "black",
        backgroundColor: "green",

      }}>
          GOOD
        </button>
        <button onClick={() => onLeaveFeedback("neutral")} type="button"style={{
        width: "100px",
        fontSize: "18px",
        padding: "5px",
        border: "1px solid #ccc",
        color: "black",
        backgroundColor: "yellow",
      }}>
          NEUTRAL
        </button>
        <button onClick={() => onLeaveFeedback("bad")} type="button"style={{
        width: "100px",
        fontSize: "18px",
        padding: "5px",
        border: "1px solid #ccc",
        color: "black",
        backgroundColor: "red",

      }}>
          BAD
        </button>
      </div>
    );
  };
  export default FeedbackOptions;