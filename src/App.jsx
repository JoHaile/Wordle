import { useEffect, useState } from "react";
import Guess from "./components/Guess";
import NavBar from "./components/NavBar";
import wordStore from "./services/index.json";

function App() {
  const [store, setStore] = useState({
    word: wordStore.words[Math.floor(Math.random() * wordStore.words.length)],
    guesses: ["", "", "", "", "", ""],
    currentGuess: 0,
  });

  console.log(store.word);

  // Use a named function for the keyup event so removal works correctly
  useEffect(() => {
    const keyPressHandler = (e) => handleKeypress(e);
    window.addEventListener("keyup", keyPressHandler);
    return () => window.removeEventListener("keyup", keyPressHandler);
  }, [handleKeypress]);

  function won() {
    // Compare the last submitted guess with the target word
    return store.guesses[store.currentGuess - 1] === store.word;
  }

  function lost() {
    // Lost when all 6 guess slots are used
    return store.currentGuess === 6;
  }

  function submitGuess() {
    if (wordStore.words.includes(store.guesses[store.currentGuess])) {
      setStore((prevStore) => ({
        ...prevStore,
        currentGuess: prevStore.currentGuess + 1,
      }));
    } else {
      // Even if word is invalid, proceed (or you can simply provide an alert)
      setStore((prevStore) => ({
        ...prevStore,
        currentGuess: prevStore.currentGuess + 1,
      }));
      console.log("Invalid Word!!");
    }
  }

  function handleKeypress(e) {
    // This call triggers a re-render if needed
    setStore({ ...store });

    if (won() || lost()) return;
    if (e.key === "Enter") {
      if (store.guesses[store.currentGuess].length === 5) {
        return submitGuess();
      } else {
        alert("Word Length should be 5 🖐");
      }
      return;
    }
    if (e.key === "Backspace") {
      store.guesses[store.currentGuess] = store.guesses[
        store.currentGuess
      ].slice(0, -1);

      return;
    }
    if (
      store.guesses[store.currentGuess].length < 5 &&
      e.key.match(/^[A-Za-z]$/)
    ) {
      store.guesses[store.currentGuess] =
        store.guesses[store.currentGuess] + e.key.toLowerCase();
      return;
    }
  }

  // New function to restart the game:
  function newGame() {
    setStore({
      word: wordStore.words[Math.floor(Math.random() * wordStore.words.length)],
      guesses: ["", "", "", "", "", ""],
      currentGuess: 0,
    });
  }

  return (
    <>
      <NavBar />

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
