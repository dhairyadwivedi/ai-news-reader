import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { NewsCards } from './components/NewsCards/NewsCards' 

const alanKey =
  "507c67832cd473a456a87d83e1e474612e956eca572e1d8b807a3e2338fdd0dc/stage";

export const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <NewsCards articles={newsArticles}/>
    </div>
  );
};
