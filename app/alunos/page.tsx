export default function AlunosPage() {
  return (
        <div className="flex flex-col text-black font-sans items-center justify-center w-full min-h-screen p-6 bg-linear-to-br from-[#000000] to-[#535353]">
      <h1 className="text-3xl text-white font-bold absolute top-6 font-sans">Lista de alunos</h1>
        <div className="bg-white rounded-2xl px-12 py-8 shadow-[rgba(0,0,0,0.4)_0px_30px_90px]">
        <ul className="flex flex-col gap-3">
          <li className="border-b border-gray-200 pb-2 text-gray-700">Aluno 1</li>
          <li className="border-b border-gray-200 pb-2 text-gray-700">Aluno 2</li>
          <li className="pb-2 text-gray-700">Aluno 3</li>
        </ul>
      </div>
    </div>
  );
}