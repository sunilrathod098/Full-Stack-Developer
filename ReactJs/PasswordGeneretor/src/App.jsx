import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // State hooks
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]/?'~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); // we pick characters
    }
    setPassword(pass);
    //DEPENDENCIES work like- The list of all reactive values referenced inside of the setup code.
    // here in dependencies why we use setPassword just for optimization
    // if we us password it is forming infinite loops password generate
    // while infinity does't stop thats why we optimized
  }, [length, numberAllowed, charAllowed]);

  // This method is used for copying the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // Select and copy the password
    //this selection method are use for select the password in between the range
    // and show a effect to see user the password is copied or not?
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);

    // Show the copied feedback
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  // useEffect hook to regenerate the password when any of the settings change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-white bg-gray-800">
        <h1 className="test-white text-center">Password Generator</h1>
        <br />

        {/* This is Length and cursor */}
        <div className="flex shadow rounded-lg overflow-hidden text-black mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none px-3 py-0.5 shrink-0 transition-colors duration-300 ${
              copied ? "bg-green-500" : "bg-blue-700"
            } text-white`} // this conditional styling for copied state
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          {/* This is length cursor */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* This is Number checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          {/* This is Character Checkbox*/}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1" htmlFor="characterInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
