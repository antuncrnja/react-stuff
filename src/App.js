import './App.css';
import Form from './Form';
import Form2 from './Form2';
import Posts from './PostsPagination';
import Search from './Search';
import Tab from './Tab';
import TabContainer from './TabContainer';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <TabContainer>
        <Tab title='Tab 1' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati.'/>
        <Tab title='Tab 2' content='Bla bla'/>
        <Tab title='Tab 3' content='Hello world'/>
      </TabContainer>

      <Form />

      <Search />
      <Posts type="home"/>

      <Form2 />
    </div>
    </Router>
  );
}

export default App;
