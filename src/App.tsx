import { useState } from 'react'
import './App.css'

function App() {
  const testWords = ['할아버지', '사과', '브라운', '계란', '도시어부', '1박2일', '에르메스', '텔레비전', '헬리콥터', '올림픽', '키보드', '소보로빵', '오징어게임', '사촌동생', '스테레오', '소화제', '낙찰', '카메라', '터미널'];
  const [count, setCount] = useState(0)

  if (count == 8) {
    setCount(0);
  }

  let buttonLabel = "Start";
  if (count > 0) {
    buttonLabel = "Next";
  }

  if (count == 7) {
    buttonLabel = "Finish"
  }

  let testLabel = <></>;
  if (count == 7) {
    testLabel = <>
      <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
      <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
      <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
      <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
      <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
    </>
  } else if (count > 0 && count < 6) {
    testLabel = <p>{testWords[Math.floor(Math.random() * testWords.length)]}</p>
  }

  function handleClick() {
    if (count == 0) {
      console.timeEnd('test');
      console.time('test');
    }
    console.timeLog('test');
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>
        <h2>
          {testLabel}
        </h2>
      </div>
      <div className="card">
        <button onClick={handleClick}>
          {buttonLabel}
        </button>
      </div>
    </>
  )
}

export default App
