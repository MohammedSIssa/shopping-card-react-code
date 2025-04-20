import '../components/styles/home.css'
import { NavLink } from 'react-router-dom';
import { DynamicIcon } from 'lucide-react/dynamic';

function Home() {
  return (
    <div className="home-page">
      <h1>Buy Whatever makes you Happy!</h1>
      <button><NavLink to='/shop'>Visit our shop <DynamicIcon name='move-up-right' /> </NavLink></button>
    </div>
  )
}

// TODO: [] Make a good-looking home page.

export default Home;
