import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Image
        src="/background_teste.jpg"
        alt="background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <main className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Coiso de login
          </h1>
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            href="/alunos"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-white/90 hover:scale-105 transition-all duration-200"
          >
            Ver Alunos
          </Link>

          <Link
            href="/cursos"
            className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
          >
            Ver Cursos
          </Link>
        </div>
      </main>
    </div>
  );
}