export default function TodoItem({ todo, toggleTodoItem, deleteTodoItem }) {
  const { id, title, content, isDone } = todo;

  return (
    <li style={{ border: "1px solid black" }}>
      <p>제목: {title}</p>
      <p>내용: {content}</p>
      <div>
        <button onClick={() => toggleTodoItem(id)}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => deleteTodoItem(id)}>삭제</button>
      </div>
    </li>
  );
}
