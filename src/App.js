import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* Pass the searchTerm state and setSearchTerm function to Header */}
      <Header setSearchTerm={setSearchTerm} />
      {/* Pass the searchTerm to Main */}
      <Main searchTerm={searchTerm} />
    </div>
  );
};

export default App;
