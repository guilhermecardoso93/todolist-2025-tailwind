import { Badge, BadgeCheck, Trash2 } from "lucide-react";

export function Item({text, id, isComplete, deleteItem}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <Badge className="w-7" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <Trash2 className="hover:text-red-600 w-5 cursor-pointer" onClick={deleteItem} />
    </div>
  );
}
