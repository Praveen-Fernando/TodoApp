import styles from "./styles/TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDeleteItem() {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            className={styles.deletebutton}
            onClick={() => handleDeleteItem(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
