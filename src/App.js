import React from "react";
import { useState } from "react";
import ImgGrid from "./comps/ImgGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [file, setFile] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm file={file} setFile={setFile} />
      <ImgGrid file={file} />
    </div>
  );
}

export default App;
