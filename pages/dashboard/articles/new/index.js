import React from "react";
import styles from "../../../../styles/Articles/NewArticle.module.scss";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
const index = () => {
  return (
    <div className={styles.new}>
      <div>
        <h2>New Article</h2>
        <p>
          Drive additional traffic to your site by creating posts. We include
          your profile details, links to your profile page, and a link to your
          website for every tax article you post to our site. Your profile will
          show article contributions which boosts your credibility for potential
          clients. You will also be ranked higher in our search results due to
          the quality of the contents you published.
        </p>
      </div>
      <div className={`${styles.cards} card`}>
        <div className="card-body">
          <div className="w-75">
            <label required className="form-control-label  ">
              Title<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="Title of Article"
              className="form-control"
              name="title"
              required
            />
          </div>
          <div className="w-75">
            <label className="form-control-label ">
              Category<span className="text-danger">*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Article Category </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="w-75">
            <label className="form-control-label ">
              Body <span className="text-danger">*</span>
            </label>
            <textarea
              rows="20"
              style={{ height: "285px" }}
              placeholder="Your message"
              className={`form-control ${styles.control}`}
              name="body"
              required
            />
          </div>
          <div className="w-75">
            <label className="form-control-label ">
              Upload File<span className="text-danger">*</span>
            </label>
            <input
              required
              type="file"
              className="form-control"
              name="file"
              required
            />
            <p
              style={{
                fontSize: "13px !important",
                textAlign: "left !important",
                padding: "0",
              }}
            >
              Upload a picture to be used as your article image. Image should
              not be larger than 1mb
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px !important",
                textAlign: "left !important",
                padding: "0",
              }}
            >
              Note: By publishing your content, you permit us to make editings
              as we so please, and post your content on our site. The credit
              will still be yours regardless of the editings, and this will
              enhance your profile position in all searches made on our site. In
              a situation whereby your answer isn't approved, any earned rep
              score will be reverted. Also, the use of offensive language or any
              suspected abuse of our system may lead to a loss of reputation,
              deactivation of account, or both.
            </p>
            <button className="btn">Post Article</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
