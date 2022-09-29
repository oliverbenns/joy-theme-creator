import * as React from "react";
import Box from "@mui/joy/Box";
import options from "./options";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";

const TabsSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {options.colors.map((color) => {
        return (
          <Tabs value={2} key={color.id} onChange={() => {}}>
            <TabList variant="soft" color="primary">
              <Tab color="primary" variant="solid">
                Lorem
              </Tab>
              <Tab>Ipsum</Tab>
              <Tab>Dolor</Tab>
            </TabList>
          </Tabs>
        );
      })}
    </Box>
  );
};

export default TabsSection;
