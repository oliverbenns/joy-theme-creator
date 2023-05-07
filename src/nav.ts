import React from "react";
import AvatarSection from "./sections/AvatarSection";
import BadgeSection from "./sections/BadgeSection";
import BreadcrumbsSection from "./sections/BreadcrumbsSection";
import ButtonSection from "./sections/ButtonSection";
import CheckboxSection from "./sections/CheckboxSection";
import ChipSection from "./sections/ChipSection";
import LinkSection from "./sections/LinkSection";
import ListSection from "./sections/ListSection";
import MenuSection from "./sections/MenuSection";
import RadioSection from "./sections/RadioSection";
import SelectSection from "./sections/SelectSection";
import SliderSection from "./sections/SliderSection";
import SwitchSection from "./sections/SwitchSection";
import TabsSection from "./sections/TabsSection";
import InputSection from "./sections/InputSection";
import TypographySection from "./sections/TypographySection";

interface NavItem {
  id: string;
  label: string;
  component: React.FC;
  description: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: "Inputs",
    items: [
      {
        id: "button",
        label: "Button",
        component: ButtonSection,
        description:
          "Buttons allow users to take actions, and make choices, with a single tap.",
      },
      {
        id: "input",
        label: "Input",
        component: InputSection,
        description:
          "The Input component facilitates the entry of text data from the user.",
      },
      {
        id: "checkbox",
        label: "Checkbox",
        component: CheckboxSection,
        description:
          "Checkboxes allow the user to select one or more items from a set.",
      },
      {
        id: "radio-button",
        label: "Radio button",
        component: RadioSection,
        description:
          "Radio buttons allow the user to select one option from a set.",
      },
      {
        id: "select",
        label: "Select",
        component: SelectSection,
        description:
          "Select components are used for collecting user provided information from a list of options.",
      },
      {
        id: "slider",
        label: "Slider",
        component: SliderSection,
        description:
          "Slider generates a background element that can be used for various purposes.",
      },
      {
        id: "switch",
        label: "Switch",
        component: SwitchSection,
        description: "Switches toggle the state of a single setting on or off.",
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      //{
      //  id: "aspect-ratio",
      //  label: "Aspect ratio",
      //  description:
      //    "The aspect ratio component shapes the content with the specified ratio.",
      //},
      {
        id: "avatar",
        label: "Avatar",
        component: AvatarSection,
        description:
          "Avatar represents a person that contains an image or initials which can also be presented in a group with multiple avatars.",
      },
      {
        id: "badge",
        label: "Badge",
        component: BadgeSection,
        description:
          "Badge generates a small badge to the top-right of its child(ren).",
      },

      {
        id: "chip",
        label: "Chip",
        component: ChipSection,
        description:
          "Chip generates a compact element that can represent an input, attribute, or action.",
      },
      {
        id: "list",
        label: "List",
        component: ListSection,
        description:
          "Lists are continuous, vertical indexes of text or images.",
      },
      {
        id: "typography",
        label: "Typography",
        component: TypographySection,
        description:
          "Use typography to present your design and content as clearly and efficiently as possible.",
      },
    ],
  },
  //{
  //  title: "Surfaces",
  //  items: [
  //    {
  //      id: "card",
  //      label: "Card",
  //      description:
  //        "Cards contain content and actions about a single subject.",
  //    },
  //    {
  //      id: "sheet",
  //      label: "Sheet",
  //      description:
  //        "Sheet is a generic container that supports Joy UI's global variants.",
  //    },
  //  ],
  //},
  {
    title: "Navigation",
    items: [
      {
        id: "breadcrumbs",
        label: "Breadcrumbs",
        component: BreadcrumbsSection,
        description:
          'Breadcrumbs consist of a list of links that help a user visualize a page\'s location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".',
      },
      {
        id: "link",
        label: "Link",
        component: LinkSection,
        description:
          "The Link component allows you to customize anchor tags with theme colors and typography styles.",
      },
      {
        id: "menu",
        label: "Menu",
        component: MenuSection,
        description: "Menus display a list of choices on temporary surfaces.",
      },
      {
        id: "tabs",
        label: "Tabs",
        component: TabsSection,
        description:
          "Tabs make it easy to explore and switch between different views.",
      },
    ],
  },
];
