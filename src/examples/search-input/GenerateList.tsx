import { useState, ChangeEvent, useTransition, useDeferredValue } from "react";

const size = 8000;

export const GenerateList: React.FC<{ concurrentModeDefault?: boolean }> = ({
  concurrentModeDefault = false,
}) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<Array<string>>([]);
  const [concurrentMode, setConcurrentMode] = useState<boolean>(
    concurrentModeDefault
  );
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const slowComputation = () => {
      const arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(inputValue);
      }

      setList(arr);
    };

    if (concurrentMode) {
      startTransition(slowComputation);
    } else {
      slowComputation();
    }
  };

  // can also do deferred instead of startTransition
  // const deferredList = useDeferredValue(list);

  return (
    <>
      This is an example of blocking interactivity - user typing in input box
      <br /> <br />
      <input type="search" value={input} onChange={handleInputChange} />
      <input
        type="checkbox"
        id="concurrent_rendering"
        name="concurrent_rendering"
        checked={concurrentMode}
        onChange={() => setConcurrentMode((prev) => !prev)}
      />
      <label htmlFor="concurrent_rendering">
        Enable concurrent rendering mode
      </label>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};
