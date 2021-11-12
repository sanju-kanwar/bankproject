
import './App.css';
import Layout from './componets/layout/Layout';
import Burgerbuilder from './componets/containers/BurgerBuilder/Burgerbuilder';
function App() {
  return (
    <div className="App">
     <Layout>
      <Burgerbuilder/>
     </Layout>
    </div>
  );
}

export default App;
