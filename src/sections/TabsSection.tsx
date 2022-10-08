import * as React from "react";
import Box from "@mui/joy/Box";
import options from "./options";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Typography from "@mui/joy/Typography";

// You can mix and match tablist and tab styles. Following
// what they have on joy docs for now.
const tabVariants = options.variants.filter(
  (v) => v.id === "soft" || v.id === "solid"
);

const TabsSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {tabVariants.map((variant) => {
        return (
          <Box key={variant.label} sx={{ mb: 3 }}>
            <Typography component="span" level="body1" sx={{ mb: 1 }}>
              {variant.label}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {options.colors.map((color) => {
                // The way tab props work is strange. When you want to
                // define the Tab variant, you have to make it stateful
                // and do your own 'selection' style logic on the <Tab>
                return (
                  <Tabs defaultValue={2} key={color.id} value={1}>
                    <TabList
                      variant={variant.id === "soft" ? "outlined" : "soft"}
                      color={"neutral"}
                    >
                      <Tab>Lorem</Tab>
                      <Tab variant={variant.id} color={color.id}>
                        Ipsum
                      </Tab>
                      <Tab>Dolor</Tab>
                    </TabList>
                  </Tabs>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TabsSection;
