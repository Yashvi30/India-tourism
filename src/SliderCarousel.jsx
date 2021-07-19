// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

//import images
import Kolkata from "../src/assets/image/kolkata.jpeg";
import Mussoorie from "../src/assets/image/mussoorie.jpeg";
import Varanasi from "../src/assets/image/varanasi.jpeg";
import Kanpur from "../src/assets/image/kanpur.jpeg";
import Jaipur from "../src/assets/image/jaipur.jpeg";
import Patiala from "../src/assets/image/patiala.jpeg";
import Nasik from "../src/assets/image/nasik.jpeg";
import Pune from "../src/assets/image/pune.jpeg";
import Mumbai from "../src/assets/image/mumbai.jpeg";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderCarousel = () => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <img src={Kolkata} alt="..." />
              <h2>Kolkata</h2>
              <h3>City of Joy</h3>
              <p>
                Kolkata is popularly known as City of Joy because of a 1985
                novel which was set in Kolkata.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Mussoorie} alt="..." />
              <h2>Mussoorie</h2>
              <h3>Queen of the Mountains</h3>
              <p>
                There is a plethora of mountains and abundance of scenic beauty,
                Mussoorie is often regarded as the Queen of the Mountains.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Varanasi} alt="..." />
              <h2>Varanasi</h2>
              <h3>The City of Light</h3>
              <p>
                According to a legend Varanasi is the place from which first
                ever Shiva Jyotirling emanated from Earth and flared straight
                into the sky. This is why Varanasi is also known as the City of
                Lights.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Kanpur} alt="..." />
              <h2>Kanpur</h2>
              <h3>Leather city of the World</h3>
              <p>
                In earlier times, Kanpur was home to several big and small
                tanneries. Since then the city is nick-named as the Leather City
                of the World.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperdiv">
              <img src={Jaipur} alt="..." />
              <h2>Jaipur</h2>
              <h3> Pink City</h3>
              <p>
                {" "}
                Once a king named Ram Singh painted the whole city pink (as pink
                denotes the colour of hospitality) in order to show hospitality
                and welcome his guests. Since then the city is regarded as the
                pink city.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Patiala} alt="..." />
              <h2>Patiala</h2>
              <h3>Royal City</h3>
              <p>
                In this city Bala Ala Singh founded the royal dynasty of Patiala
                and laid the foundation of “Quila Mubarak” around which the
                state of Patiala developed.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Nasik} alt="..." />
              <h2>Nasik</h2>
              <h3>Wine capital of India</h3>
              <p>
                Half of India’s vineyards and wineries are located in Nasik so
                it is called as Wine capital of India.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Pune} alt="..." />
              <h2>Pune</h2>
              <h3>Queen of Deccan</h3>
              <p>
                Pune was an extremely clean and green city and was therefore
                nick-named as the Queen of the Deccan.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Mumbai} alt="..." />
              <h2>Mumbai</h2>
              <h3>Financial capital of India</h3>
              <p>
                The Economic Hub of India lies in Mumbai and is also the
                wealthiest city which is why it is regarded as the Financial
                capital of India.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Mussoorie} alt="..." />
              <h2>Bhopal</h2>
              <h3>City of Lakes</h3>
              <p>
                Bhopal is called the city of lakes because of presence of
                various natural and artificial lakes.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Jaipur} alt="..." />
              <h2> Kozhikode</h2>
              <h3>City of Spices</h3>
              <p>
                Kozhikode is regarded as the major trading point of spices
                because of which it is nick-named as the city of spices.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Patiala} alt="..." />
              <h2>Mangalore</h2>
              <h3>Ice Cream City of India</h3>
              <p>
                Mangalore has a flourishing dairy industry. It is the ice-creams
                of Mangalore which give it a space on the food map of India.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Kolkata} alt="..." />
              <h2>Bengaluru</h2>
              <h3> Silicon Valley of India</h3>
              <p>
                Bengaluru is the hub for Information and Technology companies in
                India just like the original Silicon Valley of the San Francisco
                Bay Area in US.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Pune} alt="..." />
              <h2>Kashmir</h2>
              <h3>Heaven on Earth</h3>
              <p>
                Kashmir has sparkling lakes, snow caped mountains, lush green
                flowerbeds which are mesmerizing. Because of its magnificent
                beauty,
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Mumbai} alt="..." />
              <h2>Nalanda</h2>
              <h3>The land of Knowledge</h3>
              <p>
                Nalanda district which is one of the thirty-eight districts of
                Bihar is known as the land of knowledge because of the presence
                of Nalanda University which is also a UNESCO world heritage
                site.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default SliderCarousel;
