import { useEffect, useRef } from "react";
import Video from "./components/Video";

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}

export default App;
