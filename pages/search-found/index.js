import React from 'react'
import Background from '../../public/images/search.png'
import Banner from '../../components/Banner'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import styles from '../../styles/SearchFound.module.scss'
import Lady from '../../public/images/card-woman.png'
import Rating from '../../components/Rating'
import Link from "next/link";

const index = () => {
  return (
    <div className={styles.search}>
      <Banner background={Background} search={true} />
<div className={styles.showResult}>
  <div>
    <p>Showing search result for <b>"440419"</b></p>
  </div>

  <div className={styles.filters}>
  <Link href="/"><a><u>Clear filters</u></a></Link>
<div className={styles.clear}><Rating /></div>
  </div>
</div>

      <div className={styles.parentDiv}>

        <div className={styles.divide}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <Image src={Lady} alt="An icon of a lady" />
            </div>
            <div className={styles.leftText}>
              <h6>Patrice Tudor</h6>
              <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
              <div className={styles.rating}>
                <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
                  <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(5)</p></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.btn1}>
              <button>Message</button>
            </div>
            <div className={styles.btn2}>
              <button>View profile</button>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.parentDiv}>

<div className={styles.divide}>

  <div className={styles.left}>
    <div className={styles.icon}>
      <Image src={Lady} alt="An icon of a lady" />
    </div>
    <div className={styles.leftText}>
      <h6>James Brown</h6>
      <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
      <div className={styles.rating}>
        <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
          <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(20)</p></div>
    </div>
  </div>

  <div className={styles.right}>
    <div className={styles.btn1}>
      <button>Message</button>
    </div>
    <div className={styles.btn2}>
      <button>View profile</button>
    </div>
  </div>

</div>
</div>

<div className={styles.parentDiv}>

        <div className={styles.divide}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <Image src={Lady} alt="An icon of a lady" />
            </div>
            <div className={styles.leftText}>
              <h6>Melody Mix</h6>
              <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
              <div className={styles.rating}>
                <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
                  <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(5)</p></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.btn1}>
              <button>Message</button>
            </div>
            <div className={styles.btn2}>
              <button>View profile</button>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.parentDiv}>

        <div className={styles.divide}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <Image src={Lady} alt="An icon of a lady" />
            </div>
            <div className={styles.leftText}>
              <h6>Stephanie Solomon</h6>
              <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
              <div className={styles.rating}>
                <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
                  <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(50)</p></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.btn1}>
              <button>Message</button>
            </div>
            <div className={styles.btn2}>
              <button>View profile</button>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.parentDiv}>

        <div className={styles.divide}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <Image src={Lady} alt="An icon of a lady" />
            </div>
            <div className={styles.leftText}>
              <h6>Patrice Tudor</h6>
              <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
              <div className={styles.rating}>
                <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
                  <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(15)</p></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.btn1}>
              <button>Message</button>
            </div>
            <div className={styles.btn2}>
              <button>View profile</button>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.parentDiv}>

        <div className={styles.divide}>

          <div className={styles.left}>
            <div className={styles.icon}>
              <Image src={Lady} alt="An icon of a lady" />
            </div>
            <div className={styles.leftText}>
              <h6>William Burkie</h6>
              <p className={styles.leftP}>Ft. Lauderdale, Florida</p>
              <div className={styles.rating}>
                <p id={styles.span}><span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>
                  <span>&#9733;</span> <span>&#9733;</span></p><p className={styles.leftP}>(25)</p></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.btn1}>
              <button>Message</button>
            </div>
            <div className={styles.btn2}>
              <button>View profile</button>
            </div>
          </div>

        </div>
      </div>






    </div>
  )
}
export default index