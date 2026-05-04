"use client";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getAluno, updateAluno } from "../actions";
import { useRouter } from "next/navigation";

export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const router = useRouter();

    useEffect(() => {
        getAluno(Number(id)).then((response) => setAluno(response));
    }, [id]);

    function handleChange(value: string | number, key: keyof Aluno) {
        setAluno(oldState => ({ ...oldState, [key]: value }));
    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateAluno(Number(id), aluno);
        if (response) {
            alert(response);
            return;
        }
        router.push(`/aluno/${id}`);
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center w-full gap-4">
                
                <h1 className="text-2xl font-bold text-black">
                    Editar Aluno
                </h1>

                <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleUpdate}>
                    <input
                        placeholder="Nome"
                        value={aluno.nome || ""}
                        onChange={(e) => handleChange(e.target.value, "nome")}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                        placeholder="CPF"
                        value={aluno.cpf || ""}
                        onChange={(e) => handleChange(Number(e.target.value), "cpf")}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                        placeholder="Email"
                        value={aluno.email || ""}
                        onChange={(e) => handleChange(e.target.value, "email")}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                        placeholder="Idade"
                        value={aluno.idade || ""}
                        onChange={(e) => handleChange(Number(e.target.value), "idade")}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded transition">
                        Salvar
                    </button>
                </form>

            </div>
        </div>
    );
}