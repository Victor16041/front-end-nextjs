"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);

    useEffect(() => {
        if (!id) return;
        const cursoId = Array.isArray(id) ? id[0] : id;
        getCurso(Number(cursoId))
            .then(setCurso)
            .catch((err) => console.error("Erro ao buscar curso:", err));
    }, [id]);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold mb-4">{curso.nome}</h1>
                    <Link href={`/curso/${id}/editar`}>
                        <PenBox />
                    </Link>
                </div>
                <p>{curso.nome || "Carregando..."}</p>
                <p>{curso.descricao || "Carregando..."}</p>
            </div>
        </div>
    );
}