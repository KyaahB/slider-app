
// import Header from './components/header/Header'
import ColorBrowser from './components/colorBrowser/ColorBrowser';
import ColorSlider from './components/slider/ColorSlider';
import ColorOutput from './components/output/ColorOutput';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Color Browser</h2>
      </header>
      <ColorBrowser />
      <ColorSlider />
      <ColorOutput />
    </div>
  );
}

export default App;
