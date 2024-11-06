import { useEffect, useMemo, useRef, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  console.log("DEMO PAGE RENDERING STARTED");

  let users = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "San Francisco" },
    { name: "Charlie", city: "Los Angeles" },
    { name: "Dave", city: "Chicago" },
  ];

  users.sort((a, b) => {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });

  // users.sort((a, b) => a.city - b.city); //this wont work

  console.log("users:", users);

  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const factorialRes = useRef(0);
  //   const factorialRes = useMemo(() => findNthPrime(text), [text]);

  useEffect(() => {
    console.log("Inside useEffect");

    factorialRes.val = findNthPrime(text);
  }, [text]);

  console.log("DEMO PAGE RENDERING ENDS");
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-500")
      }
    >
      <div>
        <button
          className=" p-5 m-4 border border-black bg-green-200"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 p-2"
          type="number"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <p>Result: {factorialRes.val}</p>
      </div>
    </div>
  );
};

export default Demo;
