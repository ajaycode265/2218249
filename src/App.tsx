// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShortenPage from './pages/ShortenPage';
import RedirectHandler from './pages/RedirectHandler';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:code" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;