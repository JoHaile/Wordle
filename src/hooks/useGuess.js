import { useEffect, useState } from "react";
import wordStore from "../services/index.json";

function useGuess() {
  const [store, setStore] = useState({
    word: wordStore.words[Math.floor(Math.random() * wordStore.words.length)],
    guesses: ["", "", "", "", "", ""],
    currentGuess: 0,
  });

  // console.log(store.word);

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

  return { newGame, won, lost, store };
}

export default useGuess;
