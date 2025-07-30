import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="min-h-screen big-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
</div>
</Router>
  );
}
export default App;
