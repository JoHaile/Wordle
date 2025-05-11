import "./guess.css";

function Guess({ guess, word, isGuessed }) {
  function className(i) {
    const bg = !isGuessed
      ? "box "
      : word[i] === guess[i]
      ? "box right"
      : word.includes(guess[i])
      ? "box may"
      : "box wrong";

    return bg;
  }

  return (
    <div className="parent-box">
      {new Array(5).fill(0).map((_, i) => (
        <div className={className(i)} key={i}>
          {guess[i]}
        </div>
      ))}
    </div>
  );
}

export default Guess;
