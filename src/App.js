import './App.css';
import Form from './Form';
import Form2 from './Form2';
import Posts from './PostsPagination';

function App() {
  return (
    <div className="App">
      <Form />
      <Posts type="home"/>

      <Form2 />
    </div>
  );
}

export default App;
