import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {onToggleSidebar && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onToggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Platinum Payment Portal
        </Typography>
        {/* Add user profile or logout buttons here */}
        <Box>{/* Placeholder for user actions */}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
