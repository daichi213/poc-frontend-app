import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";

export default function ArticleHeadline1() {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/images/c_logo.jpg"
          alt="language"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            C＃のフレームワークについて
          </Typography>
          <Typography variant="body2" color="text.secondary">
            はじめまして！社員のSと申します。
            本日はC＃のフレームワークについて、特徴を紹介します。
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
