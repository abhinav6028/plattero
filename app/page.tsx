import Image from "next/image";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import HomePage from "./Components/HomePage/HomePage";

export default function Home() {

  console.log("AAAAAAAAAAAAAAAAAAAAA");


  return (
    <Grid container sx={{ mt: { xs: 30, sm: 30, md: 0, lg: 0 } }}>
      <HomePage />
    </Grid>
  );
}
