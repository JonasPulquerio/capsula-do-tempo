import styles from "./SemRegistro.module.css";

function SemRegistro() {
  return (
    <section className={styles.conteudo_semRegistro}>
      <p className={styles.texto_semRegistro}>
        Você ainda não registrou nenhuma lembrança, comece a criar agora!
      </p>
    </section>
  );
}

export default SemRegistro;
