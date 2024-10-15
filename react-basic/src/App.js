import './App.css';
import Item from './components/Item';

const Title =()=><h1>Income-Spending</h1>
const Description =()=> <p>Detail of daily spending</p>

const Transaction=()=>{
  return (
    <ul>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </ul>
  );
}



function App() {
  return (
    <section>
      <article>
        <Title/>
        <Description/>
        <Transaction/>
      </article>
    </section>
  );
}

export default App;
