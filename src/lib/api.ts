import axios from "axios";

export const Instance = (baseURL: string) => {
    const instance = axios.create({
        baseURL: `${baseURL}`,
        headers: {
            'Content-Type': 'application/json',
            'dataType': 'json'
        }
    });
    return instance;
}