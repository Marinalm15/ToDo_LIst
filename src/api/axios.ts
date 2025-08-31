// src/api/axios.ts
import axios from "axios";

export const apiPrivate = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
});
