import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [categoriesList, setCategoriesList] = useState(null);
  const getCategories = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const result = await data.json();
    setCategoriesList(result);
  };
  useEffect(() => {
    getCategories();
    console.log("categoriesList", categoriesList);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-screen-xl mx-auto px-10">
          <div className="w-full">
            <Slider {...settings}>
              {categoriesList?.recipes.slice(0, 6).map((categories, index) => {
                return (
                  <>
                    <div key={index} className="w-full h-full max-h-[500px]">
                      <div className="w-full relative h-[500px] overflow-hidden">
                        <img
                          src={categories.image}
                          alt={categories.mealType}
                          className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                        />
                        <div className=" flex items-end absolute bottom-0 left-0 w-full h-full p-10 bg-gradient-to-b to-black from-black/0">
                          <h2 className="text-white font-semibold text-3xl text-center w-full">
                            {categories.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-screen-xl mx-auto px-10 py-16">
          <h2 className="text-3xl font-extrabold text-center mb-7">
            Receipe Categories
          </h2>
          <ul className="grid grid-cols-6 items-center gap-5">
            {categoriesList?.recipes.slice(0, 12).map((categories, index) => {
              return (
                <>
                  <li key={index}>
                    <Link to="/">
                      <img
                        src={categories.image}
                        alt={categories.mealType}
                        className="max-w-full rounded-xl"
                      />
                      <h6 className="text-sm font-semibold mt-2">
                        {categories.mealType}
                      </h6>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
