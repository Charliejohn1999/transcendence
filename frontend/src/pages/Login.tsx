import {useState} from "react";
import type { FormEvent } from "react";

function login(){
    const [message, setMessage] = useState("");
    async function handleLogin(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const userData = {
            email,
            password,
        };
        if (
            typeof email !== "string" ||
            typeof password !== "string"
        ){
            setMessage("données invalides");
            return;
        }
        if (!email || ! password){
            setMessage("Tous les champs sont obligatoires");
            return;
        }
        if (password.length < 8){
            setMessage("le mot de passe est trop court");
            return;
        }
        console.log(userData);
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if(!response.ok){
                setMessage(data.message || "Impossible de se connecter, email ou mot de passe incorrect")
                return;
            }
            setMessage(data.message);
        } catch (error) {
            console.error(error);
            setMessage("Impossible de contacter le serveur");
        }
    }

    return (
    <main className="min-h-screen bg-gray-400 text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Se connecter</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            className="p-3 rounded text-black"
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            className="p-3 rounded text-black"
          />

          <button
            type="submit"
            className="bg-blue-600 p-3 rounded mt-4"
          >
            Se connecter
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </main>
  );
}

export default login;