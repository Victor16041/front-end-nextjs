"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    onSend: (email: string, password: string) => Promise<void | string>;
}

export default function LoginForm({ onSend }: Props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(true);
        const response = await onSend(email, password);
        setLoading(false);
        if (response) {
            alert(response);
            return;
        }
        router.push("/");
    }

    return (
        <div className="w-full max-w-xs mx-auto py-8 px-6 bg-white rounded-xl border border-neutral-100">
            <div className="space-y-3 mb-4">
                <div>
                    <input
                        type="email"
                        placeholder="Coloque seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-neutral-200 rounded-md px-3 py-2
                            text-xs text-black placeholder-neutral-300
                            focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                            transition-all bg-white"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Coloque sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-neutral-200 rounded-md px-3 py-2
                            text-xs text-black placeholder-neutral-300
                            focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                            transition-all bg-white"
                    />
                </div>
            </div>
            <button
                onClick={handleSubmit}  
                disabled={loading}
                className="w-full bg-black text-white text-xs font-medium
                    rounded-md py-2 px-4
                    hover:bg-neutral-800 active:scale-[0.99]
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-all"
            >
                {loading ? "Entrando..." : "Acessar"}
            </button>
        </div>
    );
}