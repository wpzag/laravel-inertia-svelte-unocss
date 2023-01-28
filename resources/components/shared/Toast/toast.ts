export type Toast = {
    id: number
    title: string
    type: string
    duration: number
    position: string
    closable: boolean
    details?: string
}
const defaults = {
    type: "info",
    duration: 3000,
    position: "top-right",
    closable: true,
}
let id = 1
const createToast = (global = {}) => {
    const { subscribe, update } = writable<Toast[]>([])
    const add = (title: string, options: Partial<Toast> = {}) => {
        let toast: Toast = {
            id: id++,
            title,
            ...defaults,
            ...options,
        }
        update((items) => [...items, toast])
    }
    const remove = (id: number) => {
        update((items) => items.filter((item) => item.id !== id))
    }
    const success = (message: string, options: Partial<Toast> = {}) =>
        add(message, { ...options, type: "success" })
    const error = (message: string, options: Partial<Toast> = {}) =>
        add(message, { ...options, type: "error" })
    const warning = (message: string, options: Partial<Toast> = {}) =>
        add(message, { ...options, type: "warning" })
    const info = (message: string, options: Partial<Toast> = {}) =>
        add(message, { ...options, type: "info" })

    return {
        subscribe,
        success,
        error,
        warning,
        info,
        remove,
    }
}

export const toast = createToast()
