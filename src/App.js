import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

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
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1)
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else {
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
