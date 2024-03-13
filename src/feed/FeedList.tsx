import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { Article } from "./FeedContainer";

export const FeedList: FC<Omit<Article, "id">> = ({ title, image, link }) => {
  return (
    <ListItem>
      <ListItemButton component="a" color="primary" href={link} target="_blank">
        <ListItemAvatar>
          <Avatar alt="thumbnail" src={image} />
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
