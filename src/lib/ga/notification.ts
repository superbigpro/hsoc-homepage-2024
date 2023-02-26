import { toast } from "react-toastify"

export const Success = (message: string) => {
    return toast.success(`${message}`, { position: "bottom-right", autoClose: 2000 })
}

export const Error = (message: string) => {
    toast.error(`${message}`, { position: "bottom-right", autoClose: 2000 })
}