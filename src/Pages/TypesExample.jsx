import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';




function TypesExample() {
  return (
    <>

<Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Primary</Badge>
      <Badge bg="secondary">Secondary</Badge>
      <Badge bg="success">Success</Badge>
      <Badge bg="danger">Danger</Badge>
      <Badge bg="warning" text="dark">
        Warning
      </Badge>
      <Badge bg="info">Info</Badge>
      <Badge bg="light" text="dark">
        Light
      </Badge>
      <Badge bg="dark">Dark</Badge>
    </Stack>

      <br /><br /><br />

      <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button> <Button>6</Button> <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
    <br /><br /><br />

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://play-lh.googleusercontent.com/xAcsQph2V8-o0te7Vvmu-zKTqU0N677r_USEWsMIneEml_mZBz0R6m4lCUiIfoNwHA"
      />
      <Figure.Caption>
        Hi, I am Alfa Bank
      </Figure.Caption>
    </Figure>
    <br /><br />

    
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>


    </>

    
  );
}

export default TypesExample;