import * as React from "react";
import HomePage from '@pages/homePage/homePage';
import "./app.less";

const App: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <HomePage />
      </div>
    </>
  );
};

export default App;
