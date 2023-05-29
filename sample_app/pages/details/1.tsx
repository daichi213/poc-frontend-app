import { Container } from "@mui/material";
import React from "react";
import DetailFooter from "./DetailFooter";
import DetailHeader from "./DetailHeader";

const Article1 = () => {
  return (
    <Container maxWidth="lg">
      <DetailHeader></DetailHeader>
      <div>
        <h1>C#のフレームワークについて1</h1>
        <p>
          ブログ記事の内容はここに記述されます。Reactを使ってコンポーネントベースで作成することができます。
        </p>
        <p>
          ブログ記事の本文は適宜段落や見出しを使って整形することができます。HTMLタグを埋め込むことで必要な構造やスタイルを適用できます。
        </p>
        <h2>セクション見出し</h2>
        <p>セクションの内容はここに記述されます。</p>
        <p>さらに詳細な説明やリスト、画像などを追加することも可能です。</p>
        <ul>
          <li>リスト項目1</li>
          <li>リスト項目2</li>
          <li>リスト項目3</li>
        </ul>
      </div>
      <DetailFooter></DetailFooter>
    </Container>
  );
};

export default Article1;
