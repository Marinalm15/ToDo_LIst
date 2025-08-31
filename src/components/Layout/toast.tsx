import { useEffect } from "react";

type ToastProps = {
    message: string;
    type?: "success" | "danger" | "warning" | "info";
    onClose: () => void;
    duration?: number;
};

export function ToastMessage({ message, type = "success", onClose, duration = 3000 }: ToastProps) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const bgColor =
        type === "success"
            ? "bg-green-500"
            : type === "danger"
                ? "bg-red-500"
                : "bg-dark";

    return (
        <div
            className={`toast align-items-center ${bgColor} text-white border-0 show position-fixed top-0 end-0 m-3`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 9999 }}
        >
            <div className="d-flex">
                <div className="toast-body">{message}</div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}
