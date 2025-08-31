import { useEffect } from "react";
import { useTasks } from "../../hooks/useTask";
import { Paginate } from "./paginate";

export const TasksTable = () => {
    const { tasks, fetchTasks, deleteTask, updateTaskCompleted, itemsPerPage, currentPage } = useTasks();

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const totalItems = tasks.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const pagedTasks = tasks.slice(startIndex, startIndex + itemsPerPage);


    return (
        <div className="table-responsive">
            <table className="table table-light pb-3">
                <thead>
                    <tr className="fw-bolder align-middle">
                        <th scope="col">Tarefa</th>
                        <th scope="col">Data de criação</th>
                        <th scope="col">Data de conclusão</th>
                        <th scope="col" style={{ width: "100px" }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedTasks.map(task => (
                        <tr key={task.id} className="align-middle">
                            <td className="text-gray-700">
                                <input
                                    type="checkbox"
                                    className="form-check-input mx-2"
                                    checked={task.completed === true}
                                    onChange={() => updateTaskCompleted(task.id, !task.completed)}
                                />
                                <span className={task.completed ? "text-decoration-line-through" : ""}>
                                    {task.title}
                                </span>
                                {task.completed && (
                                    <span className="ms-2 badge bg-success text-white fw-semibold small rounded-4">Concluída</span>
                                )}
                            </td>
                            <td className="text-gray-700">
                                {task.createdAt
                                    ? new Date(task.createdAt).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
                                    : "-"}
                            </td>
                            <td className="text-gray-700">
                                {task.finishedAt
                                    ? new Date(task.finishedAt).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
                                    : "-"}
                            </td>
                            <td>
                                <button
                                    className="btn bg-red-100 text-red-700 btn-delete fw-semibold btn-sm w-100"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-gray-700">Total de tarefas: {totalItems}</p>
                <Paginate totalItems={tasks.length} />
            </div>
        </div>
    );
};
