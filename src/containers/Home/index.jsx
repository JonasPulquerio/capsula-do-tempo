import styles from "./Home.module.css";

import Background from "../../components/Background";
import SemRegistro from "../../components/SemRegistro";

function Home() {

  return (
    <section className={styles.main}>
      <Background>
        <SemRegistro />
      </Background>
    </section>
  );
}

export default Home;
