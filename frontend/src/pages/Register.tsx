import type { FormEvent } from "react";

function Register() {
    async function handlesubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!username || !email || !password){
            alert("tous les champs sont obligatoires");
            return;
        }

        const userData = {
            username,
            email,
            password
        }
        console.log(userData);

        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userData),

            });
        
            const data = await response.json();
            if(!response.ok){
                alert(data.message || "Impossible de créer le compte");
                return;
            }
            alert("compte crée");
        } catch (error) {
            console.error(error);
            alert("impossible de contacter le serveur");
        }
    }
  return (
    <main className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Créer un compte</h1>

        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Votre nom d'utilisateur"
            className="p-3 rounded text-black"
          />

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
            Créer mon compte
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;