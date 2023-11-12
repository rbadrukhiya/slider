import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutVariableExample() {
  return (
    <Container>
      <Row >
        <Col xs={6} md={12} lg={12} xl={12}  className='bg-success'>1</Col>
        <Col xs={6} md={12} lg={12} xl={12} className='bg-danger'>1</Col>
      </Row>

    </Container>
  );
}

export default AutoLayoutVariableExample;