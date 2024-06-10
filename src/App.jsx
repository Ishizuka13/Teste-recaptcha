import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    if (isPassword === isPasswordConfirmed) {
      setIsLogged(true);
    } else {
      console.log("valores diferem");
    }
  };

  return (
    <>
      {isLogged && <h1>Logado</h1>}
      {isLogged === false && (
        <>
          <p>Não logado.</p>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
            onSubmit={SignIn}
          >
            <label>
              nome
              <input
                type="text"
                placeholder="nome"
                value={isName}
                required="true"
                onChange={(e) => setIsName(e.target.value)}
              />
            </label>
            <label>
              email
              <input
                type="text"
                placeholder="email"
                value={isEmail}
                required="true"
                onChange={(e) => setIsEmail(e.target.value)}
              />
            </label>
            <label>
              senha
              <input
                type="text"
                placeholder="senha"
                value={isPassword}
                required="true"
                onChange={(e) => setIsPassword(e.target.value)}
              />
            </label>
            <label>
              confirmar senha
              <input
                type="text"
                placeholder="confirmar senha"
                value={isPasswordConfirmed}
                required="true"
                onChange={(e) => setIsPasswordConfirmed(e.target.value)}
              />
            </label>
            <button type="submit">Registrar</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
