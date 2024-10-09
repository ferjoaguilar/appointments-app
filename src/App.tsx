import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./home/HomePage"
import { NotFoundPage } from "./notFound/NotFoundPage"
import StartPage from "./start/StartPage"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/start',
      element: <StartPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App