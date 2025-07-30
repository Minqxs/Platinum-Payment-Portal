import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Capture Invoice", icon: <ReceiptIcon />, path: "/invoices/new" },
    {
      text: "Upload Documents",
      icon: <UploadFileIcon />,
      path: "/invoices/upload",
    },
    { text: "Sign Off", icon: <CheckCircleIcon />, path: "/invoices/signoff" },
    { text: "Invoices List", icon: <ReceiptIcon />, path: "/invoices" },
  ];

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": { width: drawerWidth },
      }}
    >
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItemButton
            key={text}
            selected={location.pathname === path}
            onClick={() => {
              navigate(path);
              onClose();
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
