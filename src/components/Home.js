// import { Home } from "@mui/icons-material";
import * as React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">

        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61PETT2hegL._SX1500_.jpggmp-1rrEL._SX3000_.jpg"
          alt="Bachground banner"
        />

        <div className="home_row">
          <Product
            title="This is a wonderful product"
            price="49588"
            rating="🌟"
            image="https://m.media-amazon.com/images/I/31Kk2yy1x5L._AC_SY200_.jpg"
          />

          <Product 
            title="hello world"
            price="84578475"
            rating="🌟🌟"
          />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

      </div>
    </div>
  );
};

export default Home;
