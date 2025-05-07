"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/lib/store/slices/todoSlice";

const TodoListForm = () => {
  const dispatch = useAppDispatch();
  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title") as string;
    const description = form.get("description") as string;

    if (!title || !description) return;
    dispatch(addTodo({ title, description, completed: false, id: Date.now() }));
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={createTask}
      className="bg-secondary-2-dark mx-[5%] py-6 px-6"
    >
      <h1 className="text-3xl text-center mb-4">Add Task</h1>
      <div className="flex flex-col gap-3">
        <Input
          name="title"
          placeholder="Title of Task"
          type="text"
          className="bg-secondary-2"
        />
        <Textarea
          name="description"
          placeholder="Description of Task"
          style={{ resize: "none" }}
          className="h-56 bg-secondary-2"
        />
      </div>
      <Button className="mt-4" type="submit">
        <span>+</span> Add Task
      </Button>
    </form>
  );
};

export default TodoListForm;
