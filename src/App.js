import logo from './logo.svg';
import Home from './pages/Home'
import './App.css';
import './styles/style.min.css'
import './styles/stylefinal.min.css'
import './styles/stylelibs.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Team from './pages/Team'
import Payment from './pages/Payment';
import Register from './pages/Register';
import Project from './pages/Project';
import Profile from './pages/Profile';
import Partner from './pages/Partner';
import CoinOverview from './pages/CoinOverview';
import FAQ from './pages/FAQ';
import Email from './pages/Email';
import CourseDetail from './pages/CourseDetail';
import Error404 from './pages/404';
import Course from './pages/Course';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Payment /> */}
      {/* <Register /> */}
      {/* <Project /> */}
      {/* <Profile /> */}
      {/* <Partner /> */}
      {/* <CoinOverview /> */}
      {/* <FAQ /> */}
      {/* <Email /> */}
      {/* <CourseDetail /> */}
      {/* <Error404 /> */}
      <Course />
      <Footer />
    </>
  );
}

export default App;
