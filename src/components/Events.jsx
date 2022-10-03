import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import AOS from "aos";
import React, { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="events-block">
        <h3 style={{ paddingBottom: "10px" }}>
          Ближайшие мероприятия в поддержку Эркеайым
        </h3>
        <Card
          className="card"
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ maxWidth: 345, borderRadius: "30px" }}>
          <CardMedia
            component="img"
            height="420"
            image="https://i.pinimg.com/564x/ac/44/69/ac44695ccb799d8df6cbfebadfefa4f3.jpg"
            alt="Акция в поддержку Эркеайым"
          />
          <CardContent className="card-content">
            <Typography
              sx={{ fontFamily: "Rubik" }}
              gutterBottom
              variant="h5"
              color="white"
              component="div">
              Спасем жизнь Эркеайым вместе!
            </Typography>
            <Typography
              sx={{ fontFamily: "Rubik" }}
              variant="body2"
              color="white">
              Мы искренне молимся за вашу поддержку и заранее благодарим вас за
              ваши пожертвования! Любая сумма приветствуется! Отчетность
              гарантируем.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <hr />
      <p className="footer">
        Подпишитесь на страницу в Инстаграм, нажав на иконку выше, чтобы следить
        за Эркеайым!
      </p>
    </>
  );
};

export default Events;
