import { useState,  useCallback } from "react";
import Form from "./Forma";
import dataContext from "./context";

const { Provider } = dataContext;


function App() {
  const [data, setData] = useState({
    mail: "name@example.com",
    text: "some text",
    forceChangeMail : forceChangeMail
  });

  const onLog = useCallback(() => {
    console.log("wow");
  }, []);


  function forceChangeMail() {
     setData({
      ...data, mail:'test@gmail.com'
     });
  }

  return (
    <Provider value={data}>
      <Form text={data.text} onLog={onLog} />
      <button
        className=""
        onClick={() =>
          setData({
            mail: "second@example.com",
            text: "another text",
            forceChangeMail : forceChangeMail
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default App;
