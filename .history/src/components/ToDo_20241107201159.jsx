import { ListTodo } from "lucide-react";
import { Item } from "./Item";

export function ToDo() {
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
        />
        <button className="border-none rounded-full bg-green-400 w-32 h-14 text-white text-lg font-medium cursor-pointer">
          ADD +
        </button>
      </div>
      <div className="">
        <Item />
      </div>
    </div>
  );
}
