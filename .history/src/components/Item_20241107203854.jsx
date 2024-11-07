import { Badge, BadgeCheck, Trash2 } from "lucide-react";

export function Item({ text, id, isComplete, deleteItem, toggleComplete }) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggleComplete(id)}
      >
        {isComplete ? (
          <BadgeCheck className="w-7 text-green-600" />
        ) : (
          <Badge className="w-7" />
        )}
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "line-through text-slate-500" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>
      <Trash2
        className="hover:text-red-600 w-5 cursor-pointer"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
}
