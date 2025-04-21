import '../components/styles/home.css'
import { NavLink } from 'react-router-dom';
import { MoveUpRight } from 'lucide-react';

function Home() {
  return (
    <div className="home-page">
      <h1>Buy Whatever makes you Happy!</h1>
      <button><NavLink to='/shop'>Visit our shop <MoveUpRight /></NavLink></button>
    </div>
  )
}

// TODO: [x] Make a good-looking home page.

export default Home;
