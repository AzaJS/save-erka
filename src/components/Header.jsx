import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="appbar"
        style={{
          backgroundColor: "white",
          height: "35px",
        }}>
        <Typography
          variant="h6"
          component="div"
          id="header-text"
          sx={{
            flexGrow: 1,
          }}>
          #Эркаядолжнажить #saveErkaim
          <div>
            <FavoriteBorderIcon className="fav" style={{ color: "black" }} />
            <a
              href="https://instagram.com/save_erkaim?igshid=YmMyMTA2M2Y="
              target="_blank">
              <InstagramIcon className="insta" style={{ color: "black" }} />
            </a>
            {/* <a></a>
            <HelpOutlineIcon style={{ color: "black" }} /> */}
          </div>
        </Typography>
      </AppBar>
    </Box>
  );
}
