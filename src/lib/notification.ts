import { toast } from "react-toastify"

export const Success = (message: string) => {
    return toast.success(`${message}`)
}

export const Error = (message: string) => {
    toast.error(`${message}`)
}

export const Info = (message: any) => {
    toast.info(`${message}`)
}

export const CatchError = (message: any) => {
    toast.error(`${message}`)
}