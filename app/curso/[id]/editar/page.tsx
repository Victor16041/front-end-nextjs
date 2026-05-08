"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso, updateCurso } from "../actions";

export default function CursoEditarPage() {
  const params = useParams();
  const router = useRouter();

  const idParam =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : undefined;

  const [curso, setCurso] = useState<Partial<Curso>>({
    nome: "",
    professor: "",
    cargaHoraria: "",
    descricao: "",
  });

  useEffect(() => {
    if (!idParam) return;
    getCurso(Number(idParam))
      .then((data) => setCurso(data))
      .catch((err) => console.error("Erro ao buscar curso:", err));
  }, [idParam]);

  function handleChange<K extends keyof Curso>(value: Curso[K], key: K) {
    setCurso((old) => ({ ...old, [key]: value }));
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!idParam) return;
    const result = await updateCurso(Number(idParam), curso as Curso);
    if (result) {
      alert(result);
      return;
    }
    router.push(`/curso/${idParam}`);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Editar Curso</h1>
      <form
        className="px-10 py-5 flex flex-col gap-2 bg-white rounded-lg"
        onSubmit={handleUpdate}
      >
        <input
          className="border border-black text-black pl-1"
          value={curso.nome ?? ""}
          placeholder="Nome do Curso"
          onChange={(e) => handleChange(e.target.value, "nome")}
        />
        <input
          className="border border-black text-black pl-1"
          value={curso.professor ?? ""}
          placeholder="Nome do Professor"
          onChange={(e) => handleChange(e.target.value, "professor")}
        />
        <textarea
          className="border border-black text-black pl-1"
          value={curso.descricao ?? ""}
          placeholder="Descrição"
          onChange={(e) => handleChange(e.target.value, "descricao")}
        />
        <input
          type="number"
          className="border border-black text-black pl-1"
          value={curso.cargaHoraria ?? ""}
          placeholder="Carga Horária"
          onChange={(e) => handleChange(e.target.value, "cargaHoraria")}
        />
        <button
          type="submit"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}