"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

interface Curso {
    nome: string;
    descricao: string;
    cargaHoraria: number;
    professor: string;
}

export async function createCurso(curso: Curso) {
    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;

        const response = await fetch(`http://localhost:8080/cursos`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(curso)
        });

        if (response.status === 401) {
            redirect("/login");
        }

        if (response.status === 201) {
            return;
        }

        const data = await response.json();
        return typeof data === "string" ? data : JSON.stringify(data);

    } catch (e) {
        console.error(e);
        return "Erro ao criar curso";
    }
}