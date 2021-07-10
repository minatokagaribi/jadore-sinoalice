import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Jadore</h1>
      <h2>ギルド概要</h2>
      <Link to="/page_a">PageA</Link><br></br>
      <Link to="/battlelog">バトルログ</Link><br></br>
      <Link to="/nightmare">ナイトメア</Link>
    </div>
  );
}