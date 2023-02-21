import React, { useRef, useEffect } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField(props: Props) {
  const { todo, setTodo, handleAdd } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="input"
        placeholder="Enter a Todo"
        className="input__box"
      ></input>
      <button className="input_submit">Add</button>
    </form>
  );
}
