import { useState } from "react";

const TodoList = () => {
    const [listTask, setListTask] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === "") return;
        setListTask([...listTask, task]);
        setTask("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    const deleteTask = (indexToDelete) => {
        const updatedList = listTask.filter((_, index) => index !== indexToDelete);
        setListTask(updatedList);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" }}>
            <h1>Listas</h1>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="ingresa tu tarea"
                    style={{ padding: "10px", fontSize: "16px" }}
                />

                <button
                    style={{ width: "100px", height: "40px", marginLeft: "10px", fontSize: "16px" }}
                    onClick={() => addTask()}
                >
                    Añadir
                </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {listTask.length > 0 ? (
                    listTask.map((text, index) => (
                        <li key={index}>
                        <span style={{ marginRight: "10px" }}>{text}</span>
                            <button
                                onClick={() => deleteTask(index)}
                                
                            >
                                Eliminar
                            </button>
                            </li>
                        
                    ))
                ) : (
                    <li style={{ color: "gray" }}>No hay tareas</li>  // ⬅️ Solo aparece si está vacío
                )}
            </ul>
        </div>
    );
};

export default TodoList;
