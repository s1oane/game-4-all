import React from "react";

const Settings = () => {
  return (
    <main>
      <iframe
        src={`${process.env.PUBLIC_URL}/settings/settings.html`}
        title="Settings"
        width="100%"
        style={{
          border: "none",
          margin: "0",
          padding: "0",
          height: "46.875rem",
        }}
      ></iframe>
    </main>
  );
};

export default Settings;
