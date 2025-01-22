import Left from "../Left";
import styles from "./Background.module.css";

function Background({ children }) {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.left}>
          <div className={styles.traco}></div>
          <div className={styles.luz}></div>
          <Left />
        </div>
        <div className={styles.right}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Background;
