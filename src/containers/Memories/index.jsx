import styles from "./Memories.module.css";
import Background from "../../components/Background";
import InfoMemories from "../../components/InfoMemories";

function Memories() {

  return (
    <section className={styles.main_Memories}>
      <Background>
        <InfoMemories />
      </Background>
    </section>
  );
}

export default Memories;
