import Guess from "./components/Guess";
import NavBar from "./components/NavBar";
import Instruction from "./components/Instruction";
import useGuess from "./hooks/useGuess";

function App() {
  const { won, lost, store, newGame } = useGuess();

  return (
    <>
      <NavBar />

      {store.currentGuess === 0 && <Instruction />}

      <div className="parent">
        <div className="container">
          {/* Show the restart button when the game is over */}
          {(won() || lost()) && (
            <button className="btn" onClick={newGame}>
              Play Again
            </button>
          )}

          {/* to show the user the correct word */}
          {lost() && (
            <h3>
              Correct Word: <span>{store.word.toUpperCase()}</span>
            </h3>
          )}

          {/* giving the user the hint of the first letter */}
          <p>
            {!(won() || lost()) &&
              store.currentGuess >= 4 &&
              "Hint✅: Word starts with " + store.word[0].toUpperCase()}
          </p>
        </div>

        {store.guesses.map((g, i) => (
          <Guess
            word={store.word}
            guess={g}
            isGuessed={i < store.currentGuess}
            key={i}
          />
        ))}

        <h2>
          {(won() && "YOU WON Congrats 👏👏") ||
            (lost() && "YOU LOST 🤦‍♂️ Better luck next time 😔")}
        </h2>
      </div>
    </>
  );
}

export default App;
