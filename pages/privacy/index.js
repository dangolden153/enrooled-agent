import React from 'react'
import styles from '../../styles/Privacy.module.scss'
import Banner from '../../components/Banner'
import Image from 'next/image'
import Background from '../../public/images/policy.png'
import { Container } from 'react-bootstrap';

const index = () => {
  return (
    <div className={styles.privacy}>
      <Banner background={Background}>
        <h6 className={styles.header}>Enrolled Agent Privacy Policy</h6>
      </Banner>
      <div>
        <p className={styles.P}><i>Current version published: December 1st, 2020</i></p>
      </div>

      <Container>
        <div className={styles.policy}>
          <p className={styles.P1}>Your privacy is important to EnrolledAgent.
            This Privacy Policy covers what we collect and how we use, disclose,
            transfer and store your information.</p>
          <p className={styles.P2}>At EnrolledAgent.com LLC (“we”, “us”, or “our”), we take your privacy seriously, and we are committed to ensuring the overall privacy and security of every personal
            information you give us, or we collect from you. As a result,
            we have prepared this Privacy Notice to explain to you how we collect, use, disclose, process, store, and handle your personal information provided to us or acquired in respect of your visit to, use,
            access of our website, or use of our service, and how you can exercise your privacy rights. Through this Privacy Notice, we also explain the types of information EnrolledAgent.com LLC obtains about Enrolled Agents (EA) listed on this website,
            how the information is obtained, how it is used, how it may be disclosed to others, how EAs can restrict its use or disclosure, and exercise their privacy rights. You can always contact Enrolledagent.com LLC at C/O:
            Kenneth Omoruyi, 100 Church St., New York, NY 10007.</p>
          <p className={styles.P2}>
            When you use of EnrolledAgent.com website, and our directory services you are affirming that you have read this Privacy Notice and are aware of the terms. Any personal information you share while using our direct.</p>
        </div>

        <div>
          <p className={styles.subHead1}><b>Personally Identifiable Information</b></p>
          <p className={styles.P2}>As regards EAs, we only disclose EA's name, firm
            affiliation, city, state, and ZIP code in our basic listing.
            This basic information is provided to allow for a user or
            potential customer to accurately identify an EA and review
            his or her services, and other relevant information before deciding on engaging such EA. Although, we try our best, EnrolledAgent.com is not responsible for the accuracy of any information in our directory. All other information found in listings available to users through our website is supplied voluntarily and knowingly made accessible to the public by the EAs themselves who have updated their professional listings. With the exception of a name and state, which cannot be deleted for public interest purposes and to avoid misrepresentation, generally, EAs interacting with our website may delete or modify other information found in their professional listings on EnrolledAgent.com. This includes their firm affiliation, address, telephone number, email address, credentials, or other personally identifiable information. When EAs update their listings, they accept that their personal information would be shared with users/potential customers. Enrolledagent.com LLC may share such information with users of this website, its partners and agents for purposes related to the EnrolledAgent.com’s products and services, including to contact them via email about
            products and services that may be of interest to them.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>1. Personal Data</b></p>
          <p className={styles.P2}>Personally identifiable information is information about you
            such as name, postal address, email address, company name, credit
            card number, birth date, social security number, etc. Generally, we may use your personally identifiable information in the following ways:</p>

          <p className={styles.P2}>We collect your zip code on our website to determine appropriate EA suggestions for you,
            and also suggest other financial resources that might be of interest.</p>
          <ol className={styles.list}>

            <li>To communicate with you about your account or the website.</li>
            <li>To pre-populate online forms for your convenience.</li>
            <li>To personalize various aspects of the website.</li>
            <li>To build quality and useful services by analyzing user trends and by measuring demographics and interests.</li>
            <li>To provide you with prompt and effective customer service.</li>
          </ol>
        </div>

        <div>
          <p className={styles.subHead2}><b>  2. Disclosing your Personal Information</b></p>

          <p className={styles.P2}>We may disclose personally identifiable information about you to third parties without asking
            for explicit consent from you as follows:</p>
          <ol className={styles.list}>
            <li>We will perform research on our end users' demographics, interests, and behavior based on the information we collect, for example during registration, from our server log files and user surveys. We do this to better understand and serve our users. This research is compiled and analyzed on an aggregated basis.</li>
            We may share this aggregated data with current or potential advertisers, business partners, investors and other third parties interested in our business.
            <li>We share website usage information about visitors to the website who have received a targeted email promotional campaign from us with a third-party advertising company for the sole purpose of targeting future email campaigns and upgrading visitor information used in reporting statistics.</li>
            <li>To allow third parties to provide website features and services. These third parties are not allowed to use personally identifiable information except to provide these services.</li>
            <li>To our contractors, consultants, and professional advisors so they can provide a service to us. For example, from time to time we may use third parties to help us collect information about our users. In those cases, we will prohibit the third parties from using the information they collect for any purpose other than providing the service to us.</li>
            <li>As we believe necessary to comply with the law and protect the rights, property, or safety of others.</li>
            <li>If you engage in illegal activity and we respond to a subpoena, warrant or other court order.</li>
            <li>In connection with the sale or transfer of EnrolledAgent.com LLC or substantially all of its assets, we will share your data with the acquiring party or transferee.</li>
            <li>We shall, under applicable law, regulation, or legal process, such as a search warrant, subpoena or court order, allow access to all available and relevant information we hold in order to comply with such process and protect our rights and property. We may also allow access to this information in special emergencies where physical safety is at risk.</li>
          </ol>
        </div>

        <div>
          <p className={styles.subHead2}><b>  3. Transfer of Information</b></p>
          <p className={styles.P2}>Currently, EnrolledAgent.com LLC do not transfer any data
            internationally, and all data are maintained in the United
            States. However, in an instance where we intend to transfer data internationally, we shall use an appropriate cross-border mechanism such as a standard contract carrying terms focused on the security of your data,
            non-transference to another jurisdiction, etc.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>  4. Data Retention</b></p>
          <p className={styles.P2}>For every personal information we collect or maintain aside from the EAs information which is a part of our service,
            the storage will be encrypted and stored for 5 years.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>  5. Legal basis for processing</b></p>
          <p className={styles.P2}>For users of our service, the legal basis for processing your personal information
            is contract by virtue of you reading and agreeing to our terms and
            conditions. We process your personal information because it is necessary for the performance of the contract. For other services like receiving marketing information from us, and accessing your location, the basis for processing is consent, which you can retrieve at any time.</p>

          <p className={styles.P2}>For EAs, the legal basis for processing your personal information is public interest. That is why we collect your publicly available information from the IRS so that users can know who a licensed EA is and who is not in order to prevent false representations by impostor.
            When you provide additional personal information to us, the basis for processing is consent, and contract as detailed in our terms and conditions.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>  6. Privacy Rights</b></p>
          <p className={styles.P2}>Both EAs and our service users have the following rights:</p>

          <p className={styles.P2}><b>a. the right to be informed:</b> you have the right to receive fair processing information about any or all personal information processed by us, including the recipients or categories of recipients to whom your personal information has been or will be disclosed, transfers to recipients in third countries or international organizations, and the appropriate safeguards relating to such transfers. We have tried to provide that information through this Privacy Notice for example.</p>

          <p className={styles.P2}><b>b. the right of access:</b> you possess the right to request and be given access to your personal information that we hold about you.</p>

          <p className={styles.P2}><b>c. the right to rectification:</b> you have the right to ensure that any or all inaccurate or incomplete information with us is rectified.</p>

          <p className={styles.P2}><b>d. the right to erasure:</b> you may request that any or all your information with us is deleted when there is no compelling reason for its continued processing.</p>

          <p className={styles.P2}><b>e. the right to restrict processing:</b> you have the right to restrict the processing of your personal information as prescribed by law.</p>

          <p className={styles.P2}><b>f. the right to data portability:</b> you may request to receive, free of charge, a copy of your personal information in our custody in a structured, commonly used, and machine-readable format or have us transmit the information directly to another entity (if this is technically feasible).</p>

          <p className={styles.P2}><b>g. the right to object:</b> you possess the right to object to the processing of your personal information generally. Each objection request would be treated peculiarly.</p>

          <p className={styles.P2}><b>h. the right to lodge a complaint with a Supervisory Authority:</b> you can lodge a complaint about our privacy practices, or the exercise of any of your rights concerning your personal information as stated in this Privacy Notice, with your local Supervisory Authority, such as Federal Trade Commission (FTC) in the United States.</p>

          <p className={styles.P2}><b>i. the right to withdraw consent:</b> where consent is the legal basis for processing, you can withdraw your consent to our processing of your personal information at any time by contacting us via the channel outlined in this Privacy Notice.</p>

          <p className={styles.P2}><b>j. the right to opt-out of the sale of your personal information:</b> we currently do not sell your data, if we ever plan to do so, we shall inform you, and you can exercise the right to opt-out of the sale of your data.</p>
        </div>

        <div>
          <p className={styles.P2}>Please send all requests to exercise your privacy rights to:
            privacy@enrolledagent.com or 1-855-22-AGENT</p>
        </div>

        <div>
          <p className={styles.subHead1}><b>Non-Personally Identifiable Information</b></p>
          <p className={styles.P2}>EnrolledAgent.com LLC does collect and use some non-personally
            identifiable, generic information about our users as a mean of measuring the effectiveness of our website. Our servers identify certain user information in the normal course of operation, but such information does not reveal a user's identity. We collect this information only in the aggregate and use it to evaluate and improve our website and to provide targeted information that may be of interest to users of our website. The following are examples
            of non-personally identifiable generic information.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>  1. Cookies</b></p>
          <p className={styles.P2}>Cookies are pieces of information that are used for record-keeping purposes. Cookies allow us to save certain information about a user, such as a password or individual. We will not use cookies to retrieve information from a user's
            computer other than that voluntarily supplied by the user.</p>
        </div>

        <div>
          <p className={styles.subHead2}><b>  2. Computer Settings</b></p>
          <p className={styles.P2}>Settings, technical and other information from your computer
            or other device, such as your operating system, browser version, connectivity, various communication parameters and other information related to the operation and interaction of EnrolledAgent.com may be collected by us. Except as otherwise provided in this statement, we will use such information solely in order to provide technically appropriate formatting of information provided by our website and access to it. The collection of this information will not include any personally identifiable
            information about you or any individual user.</p>
        </div>

        <div>
          <p className={styles.subHead1}><b>Children</b></p>
          <p className={styles.P2}>Our services are not intended for use by children under the
            ge of 18, and such use is prohibited by our Terms of use. We do not knowingly collect Personal Information from children under 18. If you become aware that a child has provided us wuth Personal Information,
            please contact us as sef forth in this Policy</p>
        </div>

        <div>
          <p className={styles.subHead1}><b>Other Websites</b></p>
          <p className={styles.P2}>We are committed to protecting user privacy and expects the same from all of our partners, co-sponsors, and suppliers. We, however, is not responsible for the content or the privacy practices of other websites, including websites reached through a link on our website.
            Other websites may have different privacy policies, or no policy. Users should review the privacy policies of
            any website before providing personal information to them.</p>
        </div>

        <div>
          <p className={styles.subHead1}><b>Changes to the Policy</b></p>
          <p className={styles.P2}>We may change the provisions of this policy at any time,
            and we will always post the most up-to-date version on our
            website. If we determine, in out sole discretion, that a modification to this
            policy materially affects your right, we will notify you directly or by posting a message on our website.</p>

          <p className={styles.P2}>If you have any questions or comments about this policy, or you wish to change, correct or delete any personal information we have collected,
            please contact us via email at privacy@enrolledagent.com.</p>
        </div>
      </Container>
    </div>
  )
}

export default index
