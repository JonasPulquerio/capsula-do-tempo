import styles from "./Left.module.css";
import Logo from "../../assets/Logo.png";
import Login from "../../assets/Frame.png";
import { Link } from "react-router-dom";

function Left() {
  return (
    <section className={styles.conteudo_left}>
      <div className={styles.header}>
        <img src={Login} alt="Login" />
        <p>
          <Link to="/" className={styles.login}>
            Crie sua conta
          </Link>{" "}
          e salve suas memórias!
        </p>
      </div>
      <div className={styles.main}>
        <img src={Logo} alt="Logomarca Spacetime" />
        <div>
          <h1>Sua cápsula do tempo</h1>
          <p>
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
        </div>
        <Link to="/memories" className={styles.link}>
          <p>Cadastrar lembrança</p>
        </Link>
      </div>
      <div className={styles.footer}>
        <p>
          Feito com 💜 no NLW da{" "}
          <Link
            className={styles.rocktseatLink}
            to="https://www.rocketseat.com.br/"
            target="_blank"
          >
            Rocketseat
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Left;
