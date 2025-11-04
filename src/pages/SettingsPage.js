// import React from "react";
// import { motion } from "framer-motion";

// function SettingsPage() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h1>⚙️ Settings</h1>
//       <p>Here you can manage dashboard preferences.</p>
//     </motion.div>
//   );
// }

// export default SettingsPage;

import React from "react";
import { motion } from "framer-motion";
import "./SettingsPage.css";

function SettingsPage({ darkMode, setDarkMode }) {  // ✅ accept darkMode and setDarkMode as props
  const [notifications, setNotifications] = React.useState(true);

  const handleSave = () => {
    alert(`Settings Saved!\nDark Mode: ${darkMode}\nNotifications: ${notifications}`);
  };

  // decide text color
  const textColor = darkMode ? "white" : "black";

  return (
    <motion.div
      className="settings-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 style={{ color: textColor }}>⚙️ Settings</h1>
      <p style={{ color: textColor }}>Manage your dashboard preferences and profile settings.</p>

      <div className="settings-card">
        <h3 style={{ color: textColor }}>Profile Information</h3>
        <div className="profile-field">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>

      <div className="settings-card">
        <h3 style={{ color: textColor }}>Preferences</h3>
        <div className="toggle-field">
          <span style={{ color: textColor }}>Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}             // ✅ use prop darkMode
              onChange={() => setDarkMode(!darkMode)}  // ✅ toggle app darkMode
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="toggle-field">
          <span style={{ color: textColor }}>Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Settings
      </button>
    </motion.div>
  );
}

export default SettingsPage;
