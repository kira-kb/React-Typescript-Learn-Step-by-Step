import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  return (
    <>
      <div>this page has been opend for {timer} seconds</div>
    </>
  );
};

export default Timer;
