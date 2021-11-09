import './App.css';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <h1>Hello from react</h1>
      </AuthProvider>
    </div>
  );
}

export default App;
