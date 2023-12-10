const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
      <div style={{
        fontSize: "24px",
        margin: "20px",
      }}
      >
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    );
  };
  
  export default Statistics;