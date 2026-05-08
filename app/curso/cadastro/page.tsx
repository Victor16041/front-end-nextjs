"use client";
import { useState, FormEvent } from "react";
import { createCurso } from "./actions";
import { useRouter } from "next/navigation";

export default function CursoCadastroPage() {
  const router = useRouter();
  const [curso, setCurso] = useState("");
  const [professor, setProfessor] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await createCurso({
      nome: curso,
      professor,
      cargaHoraria: Number(cargaHoraria),
      descricao,
    });
    if (response) {
      alert(response);
      return;
    }
    setCurso("");
    setProfessor("");
    setCargaHoraria("");
    setDescricao("");
    router.push("/cursos");
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Cadastro de Curso</h1>
      <form
        className="px-10 py-5 flex flex-col gap-2 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-black text-black pl-1"
          type="text"
          placeholder="Nome do Curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
        <input
          className="border border-black text-black pl-1"
          type="number"
          placeholder="Carga Horária"
          value={cargaHoraria}
          onChange={(e) => setCargaHoraria(e.target.value)}
        />
        <input
          className="border border-black text-black pl-1"
          type="text"
          placeholder="Nome do Professor"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
        />
        <input
          className="border border-black text-black pl-1"
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}