import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import { NewsCard } from "../NewsCard/NewsCard";
import useStyles from "./styles.js";
import Reader from "../../assets/reader.png"

export const infoCards = [
  { color: "#ffffff", title: "Latest News | Weather", text: "Get me the latest news or What's the weather like in Berlin" },
  {
    color: "#ffffff",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Get me the latest Technology news",
  },
  {
    color: "#ffffff",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Jacinda Ardern, Cryptocurrency ...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#ffffff",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News, Bloomberg ...",
    text: "Get me the news from CNN",
  },
];

export const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
      <Grid className={classes.container} container spacing={3}>
        {infoCards.map((infoCard) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
              <Typography className={classes.title}>{infoCard.title}</Typography>
              {infoCard.title === "Latest News | Weather" ? <img className={classes.reader} src={Reader}  alt="reader"/> : null}
              {infoCard.info ? <Typography className={classes.description}><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
              <Typography className={classes.bottomText}><strong>Try saying:</strong> <br /> <i>{infoCard.text}</i></Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
    );
  }
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard i={i} article={article} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};
