import TodoList from "./TodoList";

export default function TodoListWrapper({ todos, setTodos }) {
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </>
  );
}
