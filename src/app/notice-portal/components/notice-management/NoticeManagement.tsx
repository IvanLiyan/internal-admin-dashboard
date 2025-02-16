import React, { useState } from "react";
import { Box, Tab, TabProps, Tabs } from "@mui/material";
import { QueryBuilder, Feedback, Check } from "@mui/icons-material";
import NoticeManagementTable from "./NoticeManagementTable";
import NoticeSearch, { NoticeSearchProps, SearchOption } from "./NoticeSearch";
import { Option } from "@app/core/components/TextFieldWithSelect";

type Tab = "PENDING_REVIEW" | "IN_DISPUTE" | "RESOLVED";

type TabPanelProps = {
  readonly value: Tab;
  readonly tab: Tab;
  readonly children?: React.ReactNode;
};

const TabPanel = ({ value, tab, children }: TabPanelProps) => {
  return (
    <Box id={tab} hidden={value !== tab}>
      {children}
    </Box>
  );
};

const NoticeManagement: React.FC = () => {
  const [tab, setTab] = useState<Tab>("PENDING_REVIEW");
  const [option, setOption] = useState<SearchOption>("NOTICE_ID");
  const [text, setText] = useState<string | null>(null);

  const baseTabProps: TabProps = {
    disableRipple: true,
    iconPosition: "start",
    sx: {
      textTransform: "capitalize",
      width: 200,
      minHeight: 0,
    },
  };

  const searchOptions: Option[] = [
    { value: "NOTICE_ID", text: "Notice ID" },
    { value: "PRODUCT_ID", text: "Product ID" },
  ];

  const noticeSearchProps: NoticeSearchProps = {
    options: searchOptions,
    option: option,
    onOptionChange: (s) => setOption(s as SearchOption),
    text: text,
    onTextChange: setText,
    placeholder:
      option === "NOTICE_ID" ? "Enter notice id" : "Enter product id",
    width: 500,
  };

  return (
    <Box>
      <NoticeSearch {...noticeSearchProps} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={(e: React.SyntheticEvent, value: Tab) => setTab(value)}
        >
          <Tab
            label="Pending Review"
            value={"PENDING_REVIEW"}
            icon={<QueryBuilder />}
            {...baseTabProps}
          />
          <Tab
            label="In Dispute"
            value={"IN_DISPUTE"}
            icon={<Feedback />}
            {...baseTabProps}
          />
          <Tab
            label="Resolved"
            value={"RESOLVED"}
            icon={<Check />}
            {...baseTabProps}
          />
        </Tabs>
      </Box>
      <Box sx={{ pt: 3, pb: 3 }}>
        <TabPanel value={tab} tab={"PENDING_REVIEW"}>
          <NoticeManagementTable
            option={option}
            searchQuery={text}
            states={["PENDING_REVIEW", "UNDER_REVIEW"]}
          />
        </TabPanel>
        <TabPanel value={tab} tab={"IN_DISPUTE"}>
          <NoticeManagementTable
            option={option}
            searchQuery={text}
            states={["DISPUTE_PENDING_REVIEW", "DISPUTE_UNDER_REVIEW"]}
          />
        </TabPanel>
        <TabPanel value={tab} tab={"RESOLVED"}>
          <NoticeManagementTable
            option={option}
            searchQuery={text}
            states={["REJECTED", "RESOLVED", "PARTIALLY_REJECTED"]}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default NoticeManagement;
