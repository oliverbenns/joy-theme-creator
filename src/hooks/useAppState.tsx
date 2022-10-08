import React, { useEffect, useContext, useCallback, useState } from "react";
import { CssVarsThemeOptions } from "@mui/joy/styles/extendTheme";
import { Theme } from "@mui/joy/styles";
import { extendTheme } from "@mui/joy/styles";
import {
  PaletteVariant,
  DefaultColorScheme,
  DefaultColorPalette,
  FontFamily,
} from "@mui/joy/styles/types";
import { useColorScheme } from "@mui/joy/styles";
import { set } from "lodash/fp";
import {
  isFunction,
  isObject,
  isEmpty,
  isArray,
  isPlainObject,
  fromPairs,
} from "lodash";
import pkg from "../../package.json";

const joyVersion = pkg.dependencies["@mui/joy"];

// https://stackoverflow.com/questions/42736031/remove-empty-objects-from-an-object
const removeEmptyObjects = (o: any): any => {
  if (isFunction(o) || !isPlainObject(o)) return o;

  if (isArray(o)) return o.map(removeEmptyObjects);

  return fromPairs(
    Object.entries(o)
      .map(([k, v]) => [k, removeEmptyObjects(v)])
      .filter(([k, v]) => !(v == null || (isObject(v) && isEmpty(v))))
  );
};

type SetColorHandler = (
  colorId: DefaultColorPalette,
  key: keyof PaletteVariant,
  value: string
) => void;

type ClearColorHandler = (
  colorId: DefaultColorPalette,
  key: keyof PaletteVariant
) => void;

type FontType = keyof Pick<FontFamily, "body" | "display">;

type SetFontFamilyHandler = (fontType: FontType, familyName: string) => void;

type ClearFontFamilyHandler = (fontType: FontType) => void;

interface AppState {
  themeOptions: CssVarsThemeOptions;
  setThemeOptions: (th: CssVarsThemeOptions) => void;
  theme: Theme;
  setColor: SetColorHandler;
  clearColor: ClearColorHandler;
  reset: () => void;
  setFontFamily: SetFontFamilyHandler;
  clearFontFamily: ClearFontFamilyHandler;
}
// @NOTE: This is a really primitive way of version handling
// Once a version bump happens on this project, the theme options
// set already just won't be used. This is ok for this hobby piece
// and will at least prevent type errors which is likely with joy
// in alpha stage at time of writing.
const lsKey = `themeOptions-${joyVersion}`;
const ls = window.localStorage.getItem(lsKey);
const defaultThemeOptions: CssVarsThemeOptions = ls ? JSON.parse(ls) : {};
const defaultTheme = extendTheme(defaultThemeOptions);

const Context = React.createContext<AppState>({
  themeOptions: defaultThemeOptions,
  setThemeOptions: (th: CssVarsThemeOptions) => {},
  theme: defaultTheme,
  setColor: () => {},
  clearColor: () => {},
  reset: () => {},
  setFontFamily: () => {},
  clearFontFamily: () => {},
});

interface AppStateProviderProps {
  children: React.ReactNode;
}

export const AppStateProvider = (props: AppStateProviderProps) => {
  const [themeOptions, setThemeOptions] = useState(defaultThemeOptions);
  const [theme, _setTheme] = useState(defaultTheme);
  const { colorScheme } = useColorScheme();
  const _colorScheme = colorScheme as DefaultColorScheme;

  const setTheme = useCallback(
    (opts: CssVarsThemeOptions) => {
      const theme = extendTheme(opts);

      // @NOTE: Possibility of timing issue. Unlikely
      (async () => {
        window.localStorage.setItem(lsKey, JSON.stringify(opts));
      })();

      _setTheme(theme);
    },
    [_setTheme]
  );

  useEffect(() => {
    setTheme(themeOptions);
  }, [setTheme, themeOptions]);

  const setColor: SetColorHandler = (colorId, key, value) => {
    const path = `colorSchemes.${_colorScheme}.palette.${colorId}.${key}`;
    const opts = set(path, value, themeOptions);
    setThemeOptions(opts);
  };

  const clearColor: ClearColorHandler = (colorId, key) => {
    const path = `colorSchemes.${_colorScheme}.palette.${colorId}.${key}`;
    let opts = set(path, undefined, themeOptions);

    // hack to remove all undefined values
    const json = JSON.stringify(opts);
    opts = JSON.parse(json);

    // now remove all empty objects
    opts = removeEmptyObjects(opts);

    setThemeOptions(opts);
  };

  const reset = () => {
    setThemeOptions({});
  };

  const setFontFamily: SetFontFamilyHandler = (fontType, familyName) => {
    const path = `fontFamily.${fontType}`;
    const opts = set(path, familyName, themeOptions);
    setThemeOptions(opts);
  };

  const clearFontFamily: ClearFontFamilyHandler = (fontType) => {
    const path = `fontFamily.${fontType}`;
    let opts = set(path, undefined, themeOptions);

    // hack to remove all undefined values
    const json = JSON.stringify(opts);
    opts = JSON.parse(json);

    // now remove all empty objects
    opts = removeEmptyObjects(opts);

    setThemeOptions(opts);
  };

  return (
    <Context.Provider
      value={{
        themeOptions,
        setThemeOptions,
        theme,
        setColor,
        clearColor,
        reset,
        setFontFamily,
        clearFontFamily,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const useAppState = () => {
  return useContext(Context);
};

export default useAppState;
