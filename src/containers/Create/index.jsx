import styles from "./Create.module.css";
import Background from "../../components/Background";
import Info_Create from "../../components/Info_Create";

function Create() {

  return (
    <section className={styles.main_create}>
      <Background>
        <Info_Create />
      </Background>
    </section>
  );
}

export default Create;
