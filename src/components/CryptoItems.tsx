import { Icon, TableCell, TableRow } from "@mui/material";
import { observer } from "mobx-react";
import cryptoStore from "../store";
import { useEffect } from "react";

export const CryptoItems = () => {
  const fetchCryptos = async () => {
    const res = await fetch(
      "https://fcsapi.com/api-v3/crypto/profile?symbol=BTC/USD,ETH/USD,XRP/USD&access_key=KxMPG7wAhSdzXxJi68Jfwpg",
    );
    const data = await res.json();
    console.log(data);
    cryptoStore.cryptos = data.response;
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      {cryptoStore.cryptos.map((crypto) => (
        <TableRow key={crypto.id}>
          <TableCell>
            <Icon>
              <img style={{ width: "100%", height: "100%" }} src={crypto.icon} alt={`icon ${crypto.icon}`} />
            </Icon>
          </TableCell>
          <TableCell>{crypto.name}</TableCell>
          <TableCell>{crypto.prize}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export const CryptoItemsObserver = observer(CryptoItems);
