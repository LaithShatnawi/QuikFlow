import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum ipsa consequuntur animi numquam, consectetur minus
        cupiditate cum saepe blanditiis temporibus doloribus ipsam esse quasi harum quia impedit eius error!
      </div>
    </div>
  );
};

export default Home;
