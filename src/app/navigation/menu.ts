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
        text: "Requires Review",
        href: "/infractions/requires-review",
      },
      {
        text: "Action Required",
        href: "/infractions/action-required",
      },
      {
        text: "Payment Release Review",
        href: "/infractions/payment-release-review",
      },
      {
        text: "CN Payment Release Review",
        href: "/infractions/cn-payment-release-review",
      },
      {
        text: "US Payment Release Review",
        href: "/infractions/us-payment-release-review",
      },
      {
        text: "Awaiting Merchant",
        href: "/infractions/awaiting-merchant",
      },
      {
        text: "Closed",
        href: "/infractions/closed",
      },
      {
        text: "All",
        href: "/infractions/all",
      },
      {
        text: "Bulk Processing Status",
        href: "/infractions/bulk-status",
      },
    ],
  },
  {
    text: "Seller Identity",
    subMenuItems: [
      {
        text: "Bank Account Verification",
        href: "/seller-identity/bank-verifications",
      },
    ],
  },
  {
    text: "Notice Portal",
    subMenuItems: [
      {
        text: "Notice Intake",
        href: "/notice-portal/intake",
      },
      {
        text: "Notice Management",
        href: "/notice-portal/notice-management",
      },
    ],
  },
];
