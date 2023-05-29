import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

interface articleHeadlineProps {
  image: string;
  index: number;
  title: string;
  description: string;
  tags: string[];
}

export default function ArticleHeadline(props: articleHeadlineProps) {
  const { index, image, title, description, tags } = props;

  const router = useRouter();

  const handleCardClick = () => {
    const targetPage = `/details/${index}`; // 遷移先のページパス
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
            image={image}
            alt="language"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            {/* タグのボタンを表示 */}
            {tags &&
              tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="contained"
                  color="secondary"
                  sx={{ m: 1 }}
                >
                  {tag}
                </Button>
              ))}
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
