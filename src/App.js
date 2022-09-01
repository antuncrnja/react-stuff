import './App.css';
import Form from './Form';
import Form2 from './Form2';
import Posts from './PostsPagination';
import TabContainer from './TabContainer';

function App() {
  return (
    <div className="App">
      <TabContainer>
        <div>
          <h3>Tab 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati.</p>
        </div>

        <div>
          <h3>Tab 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati.</p>
        </div>

        <div>
          <h3>Tab 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati.</p>
        </div>
       
      </TabContainer>
      <Form />
      <Posts type="home"/>

      <Form2 />
    </div>
  );
}

export default App;
