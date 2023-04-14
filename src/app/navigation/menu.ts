interface SubMenuItemProps {
  text: string;
  href: string;
}

interface MenuItemProps {
  text: string;
  subMenuItems: SubMenuItemProps[];
}

export const MenuData: MenuItemProps[] = [
  {
    text: "Infractions",
    subMenuItems: [
      {
        text: "Action Required",
        href: "/internal-admin/infractions/awaiting-admin",
      },
    ],
  },
];
