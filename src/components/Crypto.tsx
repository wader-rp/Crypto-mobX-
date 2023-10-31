import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CryptoItemsObserver } from "./CryptoItems";

export const Crypto = () => (
  <React.Fragment>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" color="initial">
            CRYPTOS
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>*</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Prize</TableCell>
                <TableCell>USD Value</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <CryptoItemsObserver />
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Container>
  </React.Fragment>
);
