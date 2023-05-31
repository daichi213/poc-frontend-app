import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Sidebar from "./Sidebar";
import { Pagination, Stack } from "@mui/material";
import ArticleHeadline from "./ArticleHeadline";
import Header from "./Header";
import { useEffect, useState } from "react";

const headline = [
  {
    image: "/images/c_logo.jpg",
    title: "C#のフレームワークについて1",
    description:
      "はじめまして！社員のSと申します。本日はC＃のフレームワークについて、特徴を紹介します。",
    tags: ["技術", "やってみた", "解説"],
  },
  {
    image: "/images/c_logo.jpg",
    title: "C#のフレームワークについて2",
    description:
      "こんにちは！社員のSと申します。本日はC＃のフレームワークについて第二回となります。",
    tags: ["技術", "EntityFramework", "解説"],
  },
  {
    image: "/images/c_logo.jpg",
    title: "C#のフレームワークについて3",
    description:
      "こんにちは！社員のSと申します。本日はC＃のフレームワークについて第三回となります。",
    tags: ["技術", "やってみた", "デザイン"],
  },
];

const componentsPerPage: number = headline.length >= 4 ? 4 : headline.length; // 1ページに表示するコンポーネントの数,デフォルトは4で
const totalComponents: number = headline.length; // 全体のコンポーネントの数
const totalPages = Math.ceil(totalComponents / componentsPerPage);

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

//記事コンポーネント数が表示コンポーネント数を下回るページが出る場合、表示コンポーネント数をそれに適した数に設定する
function CheckComponentPerPage(currentPage: number) {
  if (
    !(totalComponents % componentsPerPage == 0 && currentPage == totalPages)
  ) {
    return totalComponents % componentsPerPage;
  } else {
    return componentsPerPage;
  }
}

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedComponents, setDisplayedComponents] = useState<
    React.ReactNode[]
  >([]);

  //
  useEffect(() => {
    const displayedComponentCount = CheckComponentPerPage(currentPage);
    const startIndex = (currentPage - 1) * displayedComponentCount;
    const components = Array.from(
      { length: displayedComponentCount },
      (_, index) => {
        const componentIndex = startIndex + index + 1;
        const headlineIndex = startIndex + index;
        return (
          <ArticleHeadline
            key={componentIndex}
            index={componentIndex}
            title={headline[headlineIndex].title ?? ""}
            image={headline[headlineIndex].image ?? ""}
            description={headline[headlineIndex].description ?? ""}
            tags={headline[headlineIndex].tags ?? []}
          />
        );
      }
    );
    setDisplayedComponents(components);
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Container maxWidth="lg">
      <Header title="WealSoftテックブログ" sections={sections} />
      <Grid container spacing={0} sx={{ mt: 3 }}>
        <Grid item xs={9}>
          <Stack spacing={4}>{displayedComponents}</Stack>
          <Pagination
            sx={{ my: 3 }}
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
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
