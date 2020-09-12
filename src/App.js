import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import { NewsCards } from "./components/NewsCards/NewsCards";
import { Typography } from "@material-ui/core";
import logo from "./assets/alan-logo.png";
import useStyles from "./styles";

const alanKey =
  "507c67832cd473a456a87d83e1e474612e956eca572e1d8b807a3e2338fdd0dc/stage";

export const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parseNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parseNumber - 1];
          if (parseNumber > 20) {
            alanBtn().playText("Please make sure to say a number less than 20.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening article...");
          }
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <div className={classes.logoContainer}>
        <img src={logo} alt="logo" className={classes.alanLogo} />
        <h2 className="logoText">Alan AI News Reader</h2>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
