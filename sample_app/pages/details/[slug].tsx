import React, { useEffect, useState } from "react";
import Header from "../detailsHeader";
import Footer from "../detailsFooter";
import { useRouter } from "next/router";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const DetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [markdownContent, setMarkdownContent] = useState("");
  const markdownFilePath = `/post${slug}.md`;

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownFilePath);
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdown();
  }, [markdownFilePath]);

  return (
    <>
      <Header />
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <Footer />
    </>
  );
};

export default DetailsPage;
