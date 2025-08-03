import Navbar from './components/ui/Navbar';
import { Outlet } from 'react-router-dom';


export default function layout() {
  return (
    <>
    <Navbar />
    <main>
        <Outlet />
    </main>
    </>
  )
}
