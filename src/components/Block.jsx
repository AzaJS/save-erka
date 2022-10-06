import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import "./SliderHome.css";
import AOS from "aos";
import "aos/dist/aos.css";
const slides = [
  {
    url: "https://i.pinimg.com/564x/0c/29/ce/0c29cee6c9d34a3c68d17dc74119bec5.jpg",
    title: "2",
  },
  {
    url: "https://i.pinimg.com/564x/a6/e7/39/a6e739dbd32157d0dfc1043c13c4387b.jpg",
    title: "1",
  },
  {
    url: "https://i.pinimg.com/564x/2f/9c/e1/2f9ce1f4a4a90ef5199d903a17476551.jpg",
    title: "3",
  },
  {
    url: "https://i.pinimg.com/564x/f7/ab/57/f7ab574fe232fc12c52c38ac5449f744.jpg",
    title: "4",
  },
];
const containerStyles = {
  width: "100%",
  height: "450px",
  margin: "0 auto",
  transition: "0.7s",
};
const overlaySlide = {
  width: "50%",
  position: "absolute",
  left: 0,
  top: "0px",
  height: "450px",
  zIndex: "1",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
};

const Block = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <SliderHome /> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <div style={overlaySlide}>
          <div className="overlayContent">
            <p>СПАСИТЕ ЭРКЕАЙЫМ!</p>
            <p>Дорогие друзья, в столь сложное для всех время,</p>
            <p>
              мы вынуждены просить помощи у вас в надежде спасти жизнь маленькой
              Эркеайым.
            </p>
            <a href="#help" style={{ textDecoration: "none" }}>
              <button>Помочь финансово</button>
            </a>
          </div>
        </div>
      </div>
      <div className="block1">
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src="https://taplink.st/p/2/e/a/6/48243345.jpg?0"
          alt="Photo of Erkaim"
          style={{ width: "250px" }}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          src="https://taplink.st/p/3/9/4/0/48243372.jpg?0"
          alt="Photo of Erkaim"
          style={{ width: "250px" }}
        />
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}>
          <Typography className="txt-diagnosis">
            Диагноз: нейробластома С2 Т3 N1 M1A 4 Б стадии с лейкемизацией в
            костный мозг. Эркеайым требуется срочная пересадка костного мозга в
            клинике Турции 100 000$ и 8 химиотерапий на сумму 250 000$. В
            Кыргызстане такого рода операции не проводятся, врачами
            рекомендовано пройти лечение за рубежом. Девочке всего 2,5 года,
            просим вас подарить жизнь нашей малышке.
          </Typography>
        </div>
      </div>
      <Box className="box-w-requisits">
        <Typography className="requisits">
          <h1 id="help">Как помочь финансово?</h1>
          <h2>Реквизиты для граждан Кыргызстана:</h2>
          <ul type="none">
            <li>
              📲 Элсом: 0505240681 Получатель: Asel Aliakbarovna Bektemirova
            </li>
            <li>
              📲О!Деньги (можно как единицы): 0505240681 Получатель: Отонбаев
              Маратбек
            </li>
            <li>📲МБанк: 996505240681 Получатель: Бектемирова Асель </li>
            <li>
              💳 Оптима Банк (VISA):
              <br />
              ⚪️ ДОЛЛАРОВАЯ КАРТА - 4169 5853 5288 0032 Получатель: Bektemirova
              Asel
              <br />
              ⚪️ СОМОВАЯ КАРТА - 4169 5853 5801 4420 Получатель: Bektemirova
              Aziza
            </li>
            <li>
              💳 Бакай Банк (VISA): 4714 2400 6583 5713 Получатель: Ayday
              Toktomambetova
            </li>

            <li>
              💳 Элкарт (Айыл Банк): 9417 3785 0870 9464 Получатель: Bektemirova
              Asel
            </li>
            <li>
              💳 Керемет банк: Карта: 9417 2591 1530 6938 Счет: 1360360003852119
            </li>
            <li> Получатель: Бектемирова Айжаркын Алиакбаровна</li>
            <li>
              💳 ДемирБанк (VISA): Карта: 4215 8901 1534 6071 Счёт (Сом):
              1180000218988824
            </li>
            <li>
              Счёт: (Доллар): 1180000218988825 Получатель: Bektemirova Asel
            </li>
          </ul>
          <h2>Реквизиты для зарубежных стран:</h2>
          <a href="https://taplink.cc/save_erkaim">
            <button id="btn-foreign">Посмотреть здесь</button>
          </a>
          <h2>Реквизиты можно также сохранить себе:</h2>
          <img
            width={"100%"}
            src="https://i.pinimg.com/564x/af/40/9c/af409c7041650d004dc2fd36dceda5de.jpg"
            alt="Реквизиты"
          />
        </Typography>
      </Box>
    </>
  );
};

export default Block;
