import { ListTodo } from "lucide-react";

export function ToDo() {
  return (
    <div className="bg-[#f2f2f2] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-lg">
      <div className="flex items-center mt-7 gap-2 flex"></div>
      <ListTodo className="w-8" />
      <h1 className="text-3xl font-semibold">To-Do List</h1>
    </div>
  );
}
