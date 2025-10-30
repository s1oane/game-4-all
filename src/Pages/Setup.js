import React from "react";

// setup step template
const SetupStep = ({ stepNumber, text, imageSrc, textColor }) => (
  <section className="instruction nextdoor-parent centered setup-card">
    <img
      className="nextdoor-child"
      src={imageSrc}
      alt={`Step ${stepNumber}`}
    />
    <p className={`${textColor} nextdoor-child medium-font paragraph-font`}>
      <div className="about-badge black-font ">Step {stepNumber}:</div>
      <br />
      {text}
    </p>
  </section>
);

const Setup = () => {
  return (
    <main id="setup-page">
      <section>
        {/* Steps */}
        <SetupStep
          stepNumber={1}
          text="Plug the console into your device's USB-C port."
          imageSrc={`${process.env.PUBLIC_URL}/images/setup-visuals/plug-in.png`}
          textColor="red-font"
        />
        <SetupStep
          stepNumber={2}
          text="A popup like this will appear. Click 'allow' to finish connecting the console."
          imageSrc={`${process.env.PUBLIC_URL}/images/setup-visuals/popup.png`}
          textColor="blue-font"
        />
      </section>
    </main>
  );
};

export default Setup;
