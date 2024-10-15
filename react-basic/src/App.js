import Item from './components/Item';

// inline css
const Title =()=> <h1 style={{color:'red',textAlign:'center'}}>Income-Spending</h1>
const Description =()=>{
  const design ={color:'brown',textAlign:'center'}
  return(
    <p style={design}>Detail of daily spending</p>
  );
}

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
