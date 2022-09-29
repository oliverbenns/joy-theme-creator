import * as React from "react";
import { GlobalStyles } from "@mui/system";
import { Theme } from "@mui/joy/styles";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Preview from "./components/Preview";
import Controls from "./components/Controls";
import { Helmet } from "react-helmet";
import fonts from "./fonts";

const App = () => {
  return (
    <>
      <GlobalStyles<Theme>
        styles={(theme) => ({
          body: {
            margin: 0,
            fontFamily: theme.vars.fontFamily.body,
          },
        })}
      />
      <Helmet>
        {fonts.map((font) => {
          const urlName = font.name.replace(" ", "+");
          const url = `https://fonts.googleapis.com/css2?family=${urlName}`;

          return [
            <link href={url} rel="preload" as="style" />,
            <link rel="stylesheet" href={url} />,
          ];
        })}
      </Helmet>
      <Layout>
        <Header />
        <Navigation />
        <Preview />
        <Controls />
      </Layout>
    </>
  );
};

export default App;
