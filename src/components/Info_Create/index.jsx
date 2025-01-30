import styles from "./Info_Create.module.css";
import RapazConcentrado from "../../assets/RapazConcentrado.png";
import { Link } from "react-router-dom";
import CaretLeft from "../../assets/CaretLeft.png";
import ImagesSquare from "../../assets/ImagesSquare.png";

function Info_Create() {
  return (
    <section className={styles.conteudo_create}>
      <div className={styles.descricao_create}>
        <p className={styles.datas_create}>Hoje, 13 de Abril</p>
        <Link to="/memories" className={styles.botao_voltar}>
          <p><img src={CaretLeft} /> voltar à timeline</p>
        </Link>
        <div className={styles.botao_opcoes}>
          <p>
            <img src={ImagesSquare} /> Adivionar foto ou vídeo de capa
          </p>
          <div>
            <input  className={styles.checkBox_create} type="checkbox" name="memoria" />
            <label>Tornar memória pública</label>
          </div>
        </div>
        <img
          className={styles.img_rapaz_create}
          src={RapazConcentrado}
          alt=""
        />
        <p className={styles.texto_create}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
          <br />
          <br />
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est, omnis dolor repellendus.
          <br />
          <br />
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
      </div>
    </section>
  );
}

export default Info_Create;
