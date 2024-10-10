import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./home/HomePage"
import { NotFoundPage } from "./notFound/NotFoundPage"
import StartPage from "./start/StartPage"
import { AuthProvider } from "./context/AuthProvider"

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App