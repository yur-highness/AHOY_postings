import Footer from "@/components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container min-w-full">
            <Header />
            <Outlet />
            <Footer />
        </main>
      
     
     
    </div>
  )
}

export default AppLayout;