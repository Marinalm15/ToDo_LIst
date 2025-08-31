import { useForm } from "react-hook-form";
import { useTasks } from "../../hooks/useTask";
import { Paginate } from "./paginate";

interface TaskFormInputs {
    title: string;
}

export function TaskForm() {
    const { createTask, tasks } = useTasks();
    const { register, handleSubmit, reset } = useForm<TaskFormInputs>();

    const onSubmit = async (data: TaskFormInputs) => {
        if (!data.title.trim()) return;
        try {
            await createTask({ title: data.title });
            reset();
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    };

    return (
        <>
            <form className="d-flex flex-row gap-5 pb-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row gap-1 flex-grow-1">
                    <div className="form-group flex-grow-1">
                        <label htmlFor="taskTitle" className="fw-bold pb-6">Descrição da Tarefa</label>
                        <input
                            type="text"
                            id="taskTitle"
                            className="form-control"
                            {...register("title", { required: true })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-add-task align-self-end">
                        Adicionar Tarefa
                    </button>
                </div>
                <div className="d-flex align-items-end ms-auto">
                    <Paginate totalItems={tasks.length} />
                </div>
            </form>
            <hr className="border-top border-1 my-0" />
        </>
    );
}
