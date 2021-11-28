import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { suggestEnd } from "../utils/suggestEnd";

const SuggestedInput = React.forwardRef(({ inputProps }, ref) => {
  // Локальное состояние поля ввода
  const [value, setValue] = useState("");

  // Локальное состояние массива возможных подсказок
  const [suggestions, setSuggestions] = useState([]);

  // Ограничить ввод только цифровыми символами
  const onChange = (event) => {
    const result = event.target.value
      ?.split("")
      ?.find((elem) => Number.isNaN(Number(elem)));
    if (!result) {
      setValue(event.target.value);
    }
  };

  // Функции для компонента Autosuggest
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    if (method === "click") {
      setValue(suggestionValue);
    }
  };

  return (
    <div ref={ref}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{ ...inputProps, value, onChange }}
      />
    </div>
  );
});

export default SuggestedInput;

// Функции для компонента Autosuggest
function getSuggestionValue(suggestion) {
  return suggestion.name;
}
function renderSuggestion(suggestion) {
  return <span className="suggestion">{suggestion.name}</span>;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength !== 19 && inputLength !== 24
    ? []
    : [{ name: `${inputValue}${suggestEnd(inputValue)}` }];
}
