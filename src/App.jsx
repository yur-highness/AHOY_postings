import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import LandingPage  from './pages/LandingPage.jsx';
import OnBoarding from './pages/OnBoarding.jsx';
import JobListing from './pages/JobListing.jsx';
import PostJob from './pages/PostJob.jsx';
import SaveJob from './pages/SaveJob.jsx';
import JobsPage from './pages/JobsPage.jsx';
import MyJob from './pages/MyJob.jsx';
import  {ThemeProvider } from "./components/theme_provider.jsx";
import './App.css';
import ProtectedRoutes from './components/Protected-routes.jsx';



const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children: [
      {
        path: "/",
        element:<LandingPage />
      },
      {
        path: "/onboarding",
        element:(
          <ProtectedRoutes>
            <OnBoarding />
          </ProtectedRoutes>
        
        ),
      },
      {
        path: "/job",
        element:
        (
          <ProtectedRoutes>
             <JobListing />
          </ProtectedRoutes>
       
      ),
      },
      {
        path: "/postjob",
        element:(
          <ProtectedRoutes>
            <PostJob />
          </ProtectedRoutes>
          
        ),
      },
      {
        path: "/savejob",
        element:
        (
          <ProtectedRoutes>
            <SaveJob />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/job/:id",
        element:(
          <ProtectedRoutes>
            <JobsPage />
          </ProtectedRoutes>
          ),
      },
      {
        path: "/myjob",
        element:(
          <ProtectedRoutes>
            <MyJob />
          </ProtectedRoutes>
          ),
      },
    ],
  },
]);



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router} />
    </ThemeProvider>
  )
}


export default App;
