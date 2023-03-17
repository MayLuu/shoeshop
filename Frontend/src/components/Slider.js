import React from "react";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <main>
      <div className="text-center">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide h-25"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="5000"
              style={{ height: "700px" }}
            >
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BC82/production/_120685284_gettyimages-1234888588.jpg"
                className="d-block w-100"
                style={{ backgroundSize: "cover" }}
                alt="slide1"
              />
              <div className="carousel-caption d-flex d-md-block text-white h-75 align-items-center">
                <h1 style={{ fontSize: 90, fontWeight: 600 }}>NIKE</h1>
                <h3>
                  Nike AG is a German multinational corporation, founded and
                  headquartered in Herzogenaurach, Bavaria, that designs and
                  manufactures shoes, clothing and accessories.
                </h3>
                <Link to="https://www.nike.com/vn">
                  <button className="btn btn-danger m-5">Discovery</button>
                </Link>
              </div>
            </div>
            <div
              className="carousel-item"
              data-bs-interval="5000"
              style={{ height: "700px" }}
            >
              <img
                src="https://file.hstatic.net/1000376021/file/adidas_5e6140db556045199b4e4803416415df.jpg"
                className="d-block w-100"
                alt="slide2"
              />
              <div className="carousel-caption d-flex d-md-block text-white h-75 align-items-center">
                <h1 style={{ fontSize: 90, fontWeight: 600 }}>ADIDAS</h1>
                <h3>
                  Adidas AG is a German multinational corporation, founded and
                  headquartered in Herzogenaurach, Bavaria, that designs and
                  manufactures shoes, clothing and accessories.
                </h3>
                <Link to="https://www.adidas.com.vn/vi">
                  <button className="btn btn-danger m-5">Discovery</button>
                </Link>
              </div>
            </div>
            <div
              className="carousel-item"
              data-bs-interval="5000"
              style={{ height: "700px" }}
            >
              <img
                src="https://static-my.zacdn.com/cms/pumaawtwenty/MEN-CAROUSEL(996x350px)_V2.jpg"
                className="d-block w-100"
                alt="slide3"
              />
              <div className="carousel-caption d-flex d-md-block text-white h-75 align-items-center">
                <h1 style={{ fontSize: 90, fontWeight: 600 }}>PUMA</h1>
                <h3>
                  PUMA is a German multinational corporation that designs and
                  manufactures athletic and casual footwear, apparel and
                  accessories.
                </h3>
                <Link to="https://www.adidas.com.vn/vi">
                  <button className="btn btn-danger m-5">Discovery</button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
            style={{ zIndex: "revert" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
            style={{ zIndex: "revert" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Slider;
