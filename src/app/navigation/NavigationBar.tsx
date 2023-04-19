import { MenuData } from "@app/navigation/menu";
import { AppBar, Menu, MenuItem, Toolbar } from "@mui/material";
import Link from "next/link";
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
        <MenuItem
          component="a"
          href="/"
          sx={{
            ":visited": {
              color: "white",
            },
          }}
        >
          Home
        </MenuItem>
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
                  onClick={handleClose}
                >
                  <Link href={subItem.href}>{subItem.text}</Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};
