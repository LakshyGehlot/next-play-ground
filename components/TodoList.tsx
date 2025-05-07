"use client";

import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckSquare, XSquare, PlusCircleIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TodoState } from "@/lib/types";
import { setTodos, toggleTodo } from "@/lib/store/slices/todoSlice";
import { TodoEditButton } from "./TodoEditButton";
import { TodoDeleteButton } from "./TodoDeleteButton";

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let todos = localStorage.getItem("todos") || "[]";
    let parsedTodos: TodoState[] = JSON.parse(todos) as TodoState[];
    dispatch(setTodos(parsedTodos));
  }, []);

  return (
    <div className="lg:w-[60vw] lg:h-[85vh] w-full p-4 overflow-auto">
      {todoList.length === 0 && (
        <div className="flex justify-center items-center h-full flex-col">
          <PlusCircleIcon className="mb-4" size={100} />
          <p className="text-3xl">No tasks available. Start by creating one!</p>
        </div>
      )}

      {todoList.map((todo) => (
        <Accordion
          type="single"
          key={todo.title}
          collapsible
          className="bg-secondary-2-dark hover:bg-secondary-2 mx-[5%] my-3 px-6"
        >
          <AccordionItem value={`item-${todo.id}`}>
            <AccordionTrigger className="flex items-center w-full">
              <div
                className="mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleTodo(todo.id));
                }}
              >
                {todo.completed ? (
                  <CheckSquare className="text-green-400" />
                ) : (
                  <XSquare className="text-red-400" />
                )}
              </div>

              <span>{todo.title}</span>
              <TodoDeleteButton id={todo.id} title={todo.title} />
              <TodoEditButton todo={todo} />
            </AccordionTrigger>
            <AccordionContent>{todo.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default TodoList;
