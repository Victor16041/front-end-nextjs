"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center">
                
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold mb-4">{aluno.nome}</h1>
                    <Link href={`/aluno/${id}/editar`}>
                        <PenBox />
                    </Link>
                </div>

                <p>{aluno.nome || "Carregando..."}</p>
                <p>{aluno.email || "Carregando..."}</p>

            </div>
        </div>
    );
}