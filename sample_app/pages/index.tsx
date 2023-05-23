import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Sidebar from "./Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ArticleHeadline1 from "./articleHeadline1";
import ArticleHeadline2 from "./articleHeadline2";
import Header from "./Header";
//Reduxを導入する

const sections = [
  { title: "技術", url: "#" },
  { title: "デザイン", url: "#" },
  { title: "やってみた", url: "#" },
];

const sidebar = {
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Header title="WealSoftテックブログ" sections={sections} />
      <Grid container spacing={0} sx={{ mt: 3 }}>
        <Grid item xs={9}>
          <Box sx={{ my: 4 }}>
            <ArticleHeadline2 />
            <ArticleHeadline2 />
            <ArticleHeadline2 />
            <ArticleHeadline2 />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ my: 4 }}>
            <Sidebar archives={sidebar.archives} social={sidebar.social} />
          </Box>
        </Grid>
      </Grid>
      <Footer description={"a"} title={"a"} />
    </Container>
  );
}
