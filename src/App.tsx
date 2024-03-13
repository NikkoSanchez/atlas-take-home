import { Box } from "@mui/material";
import { Header } from "./top-bar/Header";
import { Article, FeedContainer } from "./feed/FeedContainer";
import { useEffect, useState } from "react";
import { db } from "./firebase/db";
import { getArticles } from "./firebase/api/articles";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    getArticles(db).then((qrySnapshot) => {
      setArticles(qrySnapshot);
    });
  }, []);

  return (
    <Box width="100%">
      <Header />
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            width: {
              lg: "calc(100% - 400px)",
              md: "calc(100% - 200px)",
              xs: "100%",
            },
          }}
          display="flex"
          justifyContent="center"
        >
          <FeedContainer articles={articles} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
