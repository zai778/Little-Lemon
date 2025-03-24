import React from "react";
import { useNavigate } from "react-router-dom";
import menuItems from "../data/menu";
function Home() {
  const navigate = useNavigate();

  return (
   < div className="home-page-wrapper">
      <div className="home-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Little Lemon 🍋</h1>
            <p>Experience authentic Mediterranean flavors, crafted fresh just for you.</p>
            <button onClick={() => navigate("/reserve")}>Reserve a Table</button>
          </div>
        </div>
      </div>

    
      <section className="menu-preview">
        <h2>Popular Dishes</h2>
        <div className="menu-grid">
          {menuItems.map((dish) => (
            <div className="menu-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
   </div>
  );
}

export default Home;