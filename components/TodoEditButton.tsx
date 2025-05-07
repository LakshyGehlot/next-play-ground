import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { PencilIcon } from "lucide-react";
import { TodoState } from "@/lib/types";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { updateTodo } from "@/lib/store/slices/todoSlice";

export function TodoEditButton({ todo }: { todo: TodoState }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleEditTodo = () => {
    if (!title || !description) return;
    if (title === todo.title && description === todo.description) return;

    dispatch(updateTodo({ ...todo, title, description }));
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <PencilIcon className="text-blue-400 hover:text-white mr-3" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit your Task</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className="py-4">
          <Input
            placeholder="Title"
            className="mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ resize: "none", height: "100px" }}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleEditTodo}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
