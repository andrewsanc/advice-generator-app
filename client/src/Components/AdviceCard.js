import { useCallback, useEffect, useState } from "react";

export default function AdviceCard() {
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = useCallback(() => fetchData(), []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    setAdvice(slip);
  };

  return (
    <div className='card'>
      {advice === null ? (
        <h5>Loading...</h5>
      ) : (
        <>
          <h5>advice #{advice.id}</h5>
          <h4>{advice.advice}</h4>
          <img src='/images/pattern-divider-desktop.svg' />
          <button onClick={() => fetchData()} className='dice-btn'>
            <img className='dice' src='images/icon-dice.svg' />
          </button>
        </>
      )}
    </div>
  );
}
