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
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { removeTodo } from "@/lib/store/slices/todoSlice";

export function TodoDeleteButton({ id, title }: { id: number; title: string }) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(removeTodo(id));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trash2Icon className="text-red-400 hover:text-white ml-auto mr-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="leading-8">
            Are you sure to delete the task - {title}?
          </DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <DialogFooter>
          <Button
            onClick={handleDeleteTodo}
            variant={"destructive"}
            className="mr-4"
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
