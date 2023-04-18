import { MenuData } from "@app/navigation/menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";

export const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedIndex(-1);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          variant="text"
          href="/"
        >
          Home
        </Button>
        {MenuData.map((item, index) => (
          <div key={`menu-item-${index}`}>
            <MenuItem
              onClick={(event) => handleClick(event, index)}
              sx={{ color: "inherit" }}
            >
              {item.text}
            </MenuItem>
            <Menu
              anchorEl={anchorEl}
              open={selectedIndex === index && Boolean(anchorEl)}
              onClose={handleClose}
            >
              {item.subMenuItems.map((subItem, subIndex) => (
                <MenuItem
                  key={`submenu-item-${subIndex}`}
                  component="a"
                  href={subItem.href}
                  onClick={handleClose}
                >
                  {subItem.text}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};
