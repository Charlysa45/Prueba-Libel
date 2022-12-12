import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Home/>
        </div>
      </Layout>
    </div>
  );
}

export default App;
