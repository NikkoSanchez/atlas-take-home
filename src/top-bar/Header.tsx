import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(to bottom, transparent, #221756) rgb(43 48 141)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              color: "rgb(255,255,255)",
            }}
          >
            Atlas News Feed
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
