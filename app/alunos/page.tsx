import AlunoItem from "@/components/AlunoItem";
import { getAlunos } from "./action";
import Link from "next/link";

export default async function AlunosPage() {
    const alunos = await getAlunos();
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-white">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-200">
                <h1 className="text-3xl font-semibold text-center mb-6 text-black">
                    Lista de Alunos
                </h1>
                <ul className="flex flex-col gap-2 overflow-auto max-h-96">
                    {alunos.map((aluno) => (
                        <AlunoItem key={aluno.id} nome={aluno.nome} id={aluno.id} />
                    ))}
                </ul>
            </div>
            <Link
                href="/aluno/cadastro"
                className="px-5 py-2 bg-white text-black mt-5 rounded-lg"
            >
                + Cadastrar aluno
            </Link>
        </div>
    );
}