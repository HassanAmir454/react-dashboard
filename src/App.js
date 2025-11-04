// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header/Header";
// import Sidebar from "./Sidebar/Sidebar";
// import Footer from "./Footer/Footer";
// import HomePage from "./pages/HomePage";
// import UploadPage from "./pages/UploadPage";
// import SettingsPage from "./pages/SettingsPage";



// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <Router>
//       <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
//       <div className={darkMode ? "app dark" : "app"}>
//         <Sidebar />
//         <div className="main-content">
//           {/* <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/upload" element={<UploadPage />} />
//             <Route path="/settings" element={<SettingsPage />} />
//           </Routes> */}
//           <Routes>
//   <Route path="/" element={<HomePage darkMode={darkMode} />} />
//   <Route path="/upload" element={<UploadPage darkMode={darkMode} />} />
//   <Route path="/settings" element={
//     <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />
//   } />
// </Routes>
//         </div>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import SettingsPage from "./pages/SettingsPage";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className={darkMode ? "app dark-mode" : "app"}>
        <Sidebar darkMode={darkMode} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/upload" element={<UploadPage darkMode={darkMode} />} />
            <Route path="/settings" element={
              <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />
            } />
          </Routes>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;
