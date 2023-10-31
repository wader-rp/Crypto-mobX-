import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Divider } from "@mui/material";

export const NavBarLeft = () => (
  <>
    <AppBar position="relative" color="primary">
      <Container maxWidth="xl" sx={{ ml: 0 }}>
        <Toolbar disableGutters>
          <CurrencyBitcoinIcon sx={{ fontSize: 50 }} />
          <Typography variant="h4" noWrap sx={{ ml: 1, mr: 1, letterSpacing: "10px" }}>
            CryptASS
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "background.paper", m: 2 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{ ml: 1, mr: 1, fontFamily: "sans-serif", fontWeight: 600, letterSpacing: ".6rem" }}
          >
            Home
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  </>
);
