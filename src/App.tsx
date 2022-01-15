import { useEffect } from "react";
import { useAppContext } from "./hooks/useAppContext";
import { HomePage } from "./pages/HomePage"


function App() {
  const context = useAppContext();

 

  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      img: 'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/15/the-mandalorian-season-2-details.jpg',
      name: 'Eduardo Silva'
    }
  }

  useEffect(() => {
    getData().then((data) => {
      context.updateUser(data)
    })
  }, []);

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
