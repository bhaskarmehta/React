import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import Container from './components/Container';
import styles from './App.module.css'

function App() {
  return (
    <Fragment>
      <Container>
      <h1>Healthy Food</h1>
        <ul className="list-group">
          <li className="list-group-item">Dal</li>
          <li className="list-group-item">Roti</li>
          <li className="list-group-item">Salad</li>
          <li className="list-group-item">Vegetable</li>
          <li className="list-group-item">Milk</li>
        </ul>
      </Container>
      <Container>
        <p>Above is the list of Items</p>
      </Container>
    </Fragment>
  );
}
export default App
