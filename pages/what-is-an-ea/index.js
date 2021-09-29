import React from 'react'
import styles from '../../styles/WhatIsAnEA.module.scss'

const index = () => {
  return (
    <div>
      {/* Banner */}
      <div className={styles.bgBanner}></div>

      {/* Who is an enrolled agent */}
      <div className={`${styles.eaText} container text-center`}>
        <h1>Who is an Enrolled Agent?</h1>
        <p>
          An Enrolled Agent is a tax professional that has unlimited right to
          practice before the Internal Revenue Service and can represent clients
          throughout the United States. Enrolled Agents help with tax-related
          issues that include audit, collections, and appeals.
        </p>
      </div>

      {/* Border Bottom */}
      <div className={styles.borderBtm}>
        <div></div>
      </div>

      {/* Becoming an agent */}
      <div className={`${styles.eaText} container text-center`}>
        <h1>Becoming an Enrolled Agent</h1>
        <ul>
          <li>
            You must obtain a Preparer Tax Identification Number (PTIN), which
            you are required to use on all our clients’ filed tax returns to
            ensure maximum privacy as a tax.{' '}
          </li>
          <li>
            You are required to take the Special Enrollment Examination (SEE)
            and achieve passing scores on all three.{' '}
          </li>
          <li>
            You must file form 23 within one year of completing your exam which
            prompts the IRS to begin conducting a background check and a full
            review of the applicant's personal and business taxes.{' '}
          </li>
        </ul>
      </div>

      {/* Border Bottom */}
      <div className={styles.borderBtm}>
        <div></div>
      </div>

      {/* Maintaining Status */}
      <div className={`${styles.eaText} container text-center`}>
        <h1>Maintaining an Enrolled Agent Status</h1>
        <ul>
          <li>
            To qualify for renewal as an active Enrolled Agent, EAs must
            complete 72 hours of Continuing Professional Education (CPE) every
            three year.s
          </li>
          <li>
            EAs must renew their PTIN annually between October 16 and December
            31. You must file form 8854.
          </li>
          <li>
            EAs that fail to file a renewal application will be considered as
            inactive enrolled individuals. The inactive EAs are ineligible to
            practice before the IRS.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default index
