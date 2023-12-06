import { useState } from "react"

export const Search = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <>
      <input alt="Search input" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}></input>
    </>
  )
}