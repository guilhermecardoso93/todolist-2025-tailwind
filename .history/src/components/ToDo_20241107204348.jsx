import { useRef, useState } from "react";
import { ListTodo } from "lucide-react";
import { Item } from "./Item";

export function ToDo({ text }) {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  function add() {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  }

  function taskComplete(isComplete) {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  }

  function deleteItem(id) {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="bg-[#f2f2f2] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-lg gap-4">
      <div className="flex items-center mt-7 gap-2 flex flex-row justify-center">
        <ListTodo className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-2 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          ref={inputRef}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-green-400 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-green-600"
        >
          ADD +
        </button>
      </div>
      <div className="">
        {todoList.map((item) => (
          <Item
            text={item.text}
            key={item.id}
            id={item.id}
            isComplete={item.isComplete}
            deleteItem={deleteItem}
            taskComplete={taskComplete}
          />
        ))}
      </div>
    </div>
  );
}
