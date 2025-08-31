import { useTasks } from "../../hooks/useTask";
import { ToastMessage } from "../Layout/toast";
import { TaskForm } from "./task_form";
import { TasksTable } from "./tasks_table";

export function TasksBox() {
    const { toast, setToast } = useTasks();

    return (
        <main className="w-1100 bg-gray-100 rounded shadow-top-custom p-32">
            <h1 className="fw-bold pb-3 mb-0 text-gray-900">As minhas tarefas</h1>
            <TaskForm />
            <TasksTable />
            {toast && (
                <ToastMessage message={toast.message} type={toast.type} onClose={() => setToast(null)} />
            )}
        </main>
    );
}
