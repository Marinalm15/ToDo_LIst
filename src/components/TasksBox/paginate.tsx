import { useTasks } from "../../hooks/useTask";

interface PaginateProps {
    totalItems: number;          // total de tarefas
    itemsPerPageOptions?: number[]; // opções de itens por página
    onPageChange?: (page: number, perPage: number) => void; // callback ao mudar de página
}

export function Paginate({
    totalItems,
    itemsPerPageOptions = [8, 16, 24],
    onPageChange,
}: PaginateProps) {
    const { setCurrentPage, setItemsPerPage, currentPage, itemsPerPage } = useTasks();

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            onPageChange?.(newPage, itemsPerPage);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            onPageChange?.(newPage, itemsPerPage);
        }
    };

    const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage = parseInt(e.target.value);
        setItemsPerPage(perPage);
        setCurrentPage(1); // resetar página
        onPageChange?.(1, perPage);
    };

    return (
        <div className="d-flex justify-content-between align-items-center align-self-end gap-3 mt-2">
            <div className="text-gray-700">
                Página {currentPage} de {totalPages || 1}
            </div>
            <div className="d-flex gap-1">
                <button
                    className="btn bg-white border border-gray-200 btn-paginate"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    <span className="text-gray-700">
                        Anterior
                    </span>
                </button>
                <button className="btn bg-primary text-white btn-paginate">
                    {currentPage}
                </button>
                <button
                    className="btn bg-white border border-gray-200 btn-paginate"
                    onClick={handleNext}
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    <span className="text-gray-700">
                        Seguinte
                    </span>
                </button>
                <select
                    className="form-select"
                    value={itemsPerPage}
                    onChange={handlePerPageChange}
                >
                    {itemsPerPageOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
