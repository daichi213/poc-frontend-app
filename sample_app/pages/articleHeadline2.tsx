import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const tags = [
  { tag: "技術", url: "#" },
  { tag: "デザイン", url: "#" },
  { tag: "やってみた", url: "#" },
];

export default function ArticleHeadline1() {
  const slug = 1;

  const router = useRouter();

  const handleCardClick = () => {
    const targetPage = `/details/${slug}`; // 遷移先のページパス
    console.log("Navigating to:", targetPage); // コンソールログでURLを出力
    router.push(targetPage); // ページ遷移
  };

  return (
    <Grid item xs={10} sx={{ mt: 5 }}>
      <Card variant="outlined">
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image="/images/c_logo.jpg"
            alt="language"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              C＃のフレームワークについて
            </Typography>
            <Link
              color="inherit"
              noWrap
              variant="body2"
              sx={{ p: 1, flexShrink: 0 }}
            >
              {tags[0].tag}
            </Link>
            <Typography variant="body2" color="text.secondary">
              はじめまして！社員のSと申します。
              本日はC＃のフレームワークについて、特徴を紹介します。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
