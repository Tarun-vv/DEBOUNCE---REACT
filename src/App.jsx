import { useMemo, useState } from "react";

const callApi = (e) => console.log("calling API", e.target.value);

const debounce = (func, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debouncedCallApi = debounce(callApi, 500);

function App() {
  // NOTE: add state after adding normal debounce functionality
  const [inputValue, setInputValue] = useState("");

  // const debouncedCallApi = useMemo(() => debounce(callApi, 500), []);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedCallApi(e);
        }}
      />
    </div>
  );
}

export default App;
