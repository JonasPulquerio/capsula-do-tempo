import styles from "./InfoMemories.module.css";
import RapazConcentrado from "../../assets/RapazConcentrado.png";
import RapazDiscursando from "../../assets/RapazDiscursando.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function InfoMemories() {
  return (
    <section className={styles.conteudo}>
      <div className={styles.descricao}>
        <p className={styles.datas}>13 de Abril, 2022</p>
        <img src={RapazConcentrado} alt="" />
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...</p>
        <p>Ler mais <FontAwesomeIcon style={{ color: "red" }} icon={faArrowRight} /></p>
      </div>
      <div className={styles.descricao}>
        <p className={styles.datas}>20 de Maio, 2022</p>
        <img src={RapazDiscursando} alt="" />
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique...</p>
      </div>
    </section>
  );
}

export default InfoMemories;
