import styles from '../styles/Articles/Articles.module.scss'
import { Container, Row } from 'react-bootstrap';
const index = ({articleBody}) => {
    return (
        <Container>
            <Row>

           
<div className={styles.middleTexts}>
<div>
    <p>{articleBody?.body}</p>
              <div>< hr /></div>
                </div>
                </div>
                </Row>
        </Container>
        );
    }
    
    export default index