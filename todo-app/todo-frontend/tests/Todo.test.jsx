import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { Todo } from "../src/Todos/List";

const todo = {
  text:"some task",
  done:false
}

test("renders content", () => {
  render(<Todo todo={todo} onComplete={()=>{}} onDelete={()=>{}}></Todo>)
    const condition = { exact: false };
    screen.getByText("some task", condition);
    screen.getByText("This todo is not done", condition);
  });