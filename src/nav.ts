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
import TextFieldSection from "./sections/TextFieldSection";
import TypographySection from "./sections/TypographySection";

interface NavItem {
  href: string;
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
        href: "#button",
        label: "Button",
        component: ButtonSection,
        description:
          "Buttons allow users to take actions, and make choices, with a single tap.",
      },
      {
        href: "#text-field",
        label: "Text field",
        component: TextFieldSection,
        description: "Text fields let users enter and edit text.",
      },
      {
        href: "#checkbox",
        label: "Checkbox",
        component: CheckboxSection,
        description:
          "Checkboxes allow the user to select one or more items from a set.",
      },
      {
        href: "#radio-button",
        label: "Radio button",
        component: RadioSection,
        description:
          "Radio buttons allow the user to select one option from a set.",
      },
      {
        href: "#select",
        label: "Select",
        component: SelectSection,
        description:
          "Select components are used for collecting user provided information from a list of options.",
      },
      {
        href: "#slider",
        label: "Slider",
        component: SliderSection,
        description:
          "Slider generates a background element that can be used for various purposes.",
      },
      {
        href: "#switch",
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
      //  href: "#aspect-ratio",
      //  label: "Aspect ratio",
      //  description:
      //    "The aspect ratio component shapes the content with the specified ratio.",
      //},
      {
        href: "#avatar",
        label: "Avatar",
        component: AvatarSection,
        description:
          "Avatar represents a person that contains an image or initials which can also be presented in a group with multiple avatars.",
      },
      {
        href: "#badge",
        label: "Badge",
        component: BadgeSection,
        description:
          "Badge generates a small badge to the top-right of its child(ren).",
      },

      {
        href: "#chip",
        label: "Chip",
        component: ChipSection,
        description:
          "Chip generates a compact element that can represent an input, attribute, or action.",
      },
      {
        href: "#list",
        label: "List",
        component: ListSection,
        description:
          "Lists are continuous, vertical indexes of text or images.",
      },
      {
        href: "#typography",
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
  //      href: "#card",
  //      label: "Card",
  //      description:
  //        "Cards contain content and actions about a single subject.",
  //    },
  //    {
  //      href: "#sheet",
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
        href: "#breadcrumbs",
        label: "Breadcrumbs",
        component: BreadcrumbsSection,
        description:
          'Breadcrumbs consist of a list of links that help a user visualize a page\'s location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".',
      },
      {
        href: "#link",
        label: "Link",
        component: LinkSection,
        description:
          "The Link component allows you to customize anchor tags with theme colors and typography styles.",
      },
      {
        href: "#menu",
        label: "Menu",
        component: MenuSection,
        description: "Menus display a list of choices on temporary surfaces.",
      },
      {
        href: "#tabs",
        label: "Tabs",
        component: TabsSection,
        description:
          "Tabs make it easy to explore and switch between different views.",
      },
    ],
  },
];
