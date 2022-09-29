import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";

import PaletteControl from "../controls/PaletteControl";
import TypographyControl from "../controls/TypographyControl";
import EditorControl from "../controls/EditorControl";

type TabId = "palette" | "typography" | "editor";

const Controls = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>("palette");

  return (
    <Sheet
      sx={{
        display: { xs: "none", sm: "initial" },
        borderLeft: "1px solid",
        borderColor: "neutral.outlinedBorder",
        bgcolor: "background.componentBg",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Tab
          active={activeTab === "palette"}
          onClick={() => setActiveTab("palette")}
        >
          Palette
        </Tab>
        <Tab
          active={activeTab === "typography"}
          onClick={() => setActiveTab("typography")}
        >
          Typography
        </Tab>
        <Tab
          active={activeTab === "editor"}
          onClick={() => setActiveTab("editor")}
        >
          Editor
        </Tab>
      </Box>
      <Box sx={{ p: 2 }}>
        {activeTab === "palette" && <PaletteControl />}
        {activeTab === "typography" && <TypographyControl />}
        {activeTab === "editor" && <EditorControl />}
      </Box>
    </Sheet>
  );
};

interface TabProps {
  active: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Tab = (props: TabProps) => {
  return (
    <Button
      variant={props.active ? "soft" : "plain"}
      color={props.active ? "primary" : "neutral"}
      sx={{
        borderRadius: 0,
        flex: 1,
        py: "1rem",

        borderBottom: props.active ? "2px solid" : null,
        borderColor: props.active ? "primary.solidBg" : null,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default Controls;
