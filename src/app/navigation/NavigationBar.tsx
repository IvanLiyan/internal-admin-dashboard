import { MenuData } from "@app/navigation/menu";
import { AppBar, Menu, MenuItem, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

export const NavigationBar: React.FC = () => {
  const router = useRouter();
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
        <MenuItem disableRipple>
          <Image
            priority={true}
            src="/internal-admin/images/wish-logo-white.svg"
            alt="Wish Logo"
            width={88}
            height={64}
          />
        </MenuItem>
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
                  onClick={() => {
                    handleClose();
                    router.push(subItem.href);
                  }}
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
