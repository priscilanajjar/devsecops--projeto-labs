import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    onAddTask(task);
    setTask("");
  };

  return (
    <div className="nova-tarefa">
      <h3>+ NOVA TAREFA</h3>

      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default TaskInput;
