import { Box, List, Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FeedCard } from "./FeedCard";
import { FC, useState } from "react";
import { FeedList } from "./FeedList";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface Article {
  id: string;
  title: string;
  image: string;
  link: string;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};
export const FeedContainer: FC<{ articles: Article[] }> = ({
  articles = [],
}) => {
  const [tabIdx, setTabIdx] = useState(0);
  return (
    <Box sx={{ width: { lg: "1200px", md: "900px" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIdx}
          onChange={(_, newTabIdx: number) => setTabIdx(newTabIdx)}
          aria-label="basic tabs example"
        >
          <Tab icon={<GridViewIcon />} label="Grid" id="simple-tab-1" />
          <Tab icon={<ListIcon />} label="List" id="simple-tab-2" />
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1 }} padding="16px" maxWidth="1200px" display="flex">
        <CustomTabPanel value={tabIdx} index={0}>
          <Grid container spacing={3} justifyContent="left">
            {articles.map(({ id, title, image, link }) => {
              return (
                <Grid
                  key={id}
                  xs={12}
                  sm={6}
                  md={6}
                  minWidth={300}
                  justifyContent="center"
                >
                  <FeedCard title={title} image={image} link={link} />
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={tabIdx} index={1}>
          <List>
            {articles.map(({ id, title, image, link }) => {
              return (
                <FeedList key={id} title={title} image={image} link={link} />
              );
            })}
          </List>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
