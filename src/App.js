import logo from './logo.svg';
import './App.css';
import Carousel from './components/website/carousel/carousel'
import Signup from './components/website/Signup/Signup';

function App() {
  return (
    <div>
      <Carousel/>
      <Signup/>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>        
      </table>
    </div>
  );
}

export default App;
