import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Article } from "./FeedContainer";

export const FeedCard: FC<Omit<Article, "id">> = ({ title, image, link }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 300,
        borderRadius: "8px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 150 }}
        image={image}
        title="News Feed Image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            lineClamp: 2,
            whiteSpace: "normal",
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component="a" size="medium" href={link} target="_blank">
          Read Story
        </Button>
      </CardActions>
    </Card>
  );
};
