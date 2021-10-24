import styles from "../../../styles/agents/ViewByStates.module.scss";
import { Search } from "react-bootstrap-icons";
import background from "../../../public/images/banners/view.png";
import TopRated from "../../../components/TopRated";

const index = () => {
  return (
    <div
      className={`${styles.viewBy} d-flex flex-column justify-content-center`}
    >
      <div
        className="banner"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className={` ${styles.bannerInner} banner-inner`}>
          <h1>Find the best EAs</h1>
          <h5>Browse through our directory and get an expert in New York</h5>

          <div className={`${styles.searchbar} searchbar`}>
            <form
              className="input-group input-group-nowrap mb-3"
              action=""
              method="post"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search for answers"
                aria-label="Search for answers"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                {" "}
                <Search />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.letters}>
        <h6>Search States by letters</h6>
        <div className={styles.letterz}>
          <button type="button" className={`${styles.letter}`}>
            A
          </button>
          <button type="button" className={`${styles.letter}`}>
            B
          </button>
          <button type="button" className={`${styles.letter}`}>
            C
          </button>
          <button type="button" className={`${styles.letter}`}>
            D
          </button>
          <button type="button" className={`${styles.letter}`}>
            E
          </button>
          <button type="button" className={`${styles.letter}`}>
            F
          </button>
          <button type="button" className={`${styles.letter}`}>
            G
          </button>
          <button type="button" className={`${styles.letter}`}>
            H
          </button>
          <button type="button" className={`${styles.letter}`}>
            I
          </button>
          <button type="button" className={`${styles.letter}`}>
            J
          </button>
          <button type="button" className={`${styles.letter}`}>
            K
          </button>
          <button type="button" className={`${styles.letter}`}>
            L
          </button>
          <button type="button" className={`${styles.letter}`}>
            M
          </button>
          <button type="button" className={`${styles.letter}`}>
            N
          </button>
          <button type="button" className={`${styles.letter}`}>
            O
          </button>
          <button type="button" className={`${styles.letter}`}>
            P
          </button>
          <button type="button" className={`${styles.letter}`}>
            Q
          </button>
          <button type="button" className={`${styles.letter}`}>
            R
          </button>
          <button type="button" className={`${styles.letter}`}>
            S
          </button>
          <button type="button" className={`${styles.letter}`}>
            T
          </button>
          <button type="button" className={`${styles.letter}`}>
            U
          </button>
          <button type="button" className={`${styles.letter}`}>
            V
          </button>
          <button type="button" className={`${styles.letter}`}>
            W
          </button>
          <button type="button" className={`${styles.letter}`}>
            X
          </button>
          <button type="button" className={`${styles.letter}`}>
            Y
          </button>
          <button type="button" className={`${styles.letter}`}>
            Z
          </button>
        </div>
      </div>

      <TopRated />
    </div>
  );
};

export default index;
