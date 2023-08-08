import React from "react";
import Image from "next/image";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

export const PublicNavigationBar: React.FC = () => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <MenuItem disableRipple>
          <Image
            priority={true}
            src="/internal-admin/images/wish.svg"
            alt="Wish Logo"
            width={88}
            height={64}
          />
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
