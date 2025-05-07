import React from "react";
import TodoListForm from "@/components/TodoListForm";
import TodoList from "@/components/TodoList";

const page = () => {
  return (
    <div className="flex w-full lg:flex-row flex-col-reverse">
      <TodoList />
      <div className="lg:flex-1 lg:h-screen w-full">
        <TodoListForm />
      </div>
    </div>
  );
};

export default page;
