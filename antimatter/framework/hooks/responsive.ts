import "@expo/match-media";
import {useEffect, useState} from "react";
import {ImageStyle, Platform, TextStyle, ViewStyle} from "react-native";
import {MediaQueryAllQueryable, useMediaQuery} from "react-responsive";
import {isEnvironment} from "../core";
import {getScreenSizeFromBreakpoint} from "../functions";
import type {Breakpoint, PlatformEnvironment, ResponsiveEnvironment} from "../types";

export function useEnvironment(environment: ResponsiveEnvironment | PlatformEnvironment): boolean
{
    switch (environment)
    {
        case "MobileApp":
            return (Platform.OS === "ios" || Platform.OS === "android") &&
                   useSsrSupportedMediaQuery({maxWidth: getScreenSizeFromBreakpoint("Medium")});

        case "MobileWeb":
            return Platform.OS === "web" &&
                   useSsrSupportedMediaQuery({maxWidth: getScreenSizeFromBreakpoint("Medium")});

        case "TabletApp":
            return (Platform.OS === "ios" || Platform.OS === "android") &&
                   useSsrSupportedMediaQuery({
                       minWidth: getScreenSizeFromBreakpoint("Medium"),
                       maxWidth: getScreenSizeFromBreakpoint("Large")
                   });

        case "TabletWeb":
            return (Platform.OS === "web") &&
                   useSsrSupportedMediaQuery({
                       minWidth: getScreenSizeFromBreakpoint("Medium"),
                       maxWidth: getScreenSizeFromBreakpoint("Large")
                   });

        case "DesktopWeb":
            return Platform.OS === "web" &&
                   useSsrSupportedMediaQuery({minWidth: getScreenSizeFromBreakpoint("Large")});

        case "NativeApp":
        case "WebBrowser":
        case "WebSSR":
        case "Web":
            return isEnvironment(environment);

        default:
            return false;
    }
}

export function useBreakpoint(breakpoint: Breakpoint): boolean
{
    return useSsrSupportedMediaQuery({minWidth: getScreenSizeFromBreakpoint(breakpoint)});
}

export function useResponsiveStyle(breakpoint: Breakpoint, style: ViewStyle | TextStyle | ImageStyle): typeof style
{
    const mediaQueryMatched = useMediaQuery({minWidth: getScreenSizeFromBreakpoint(breakpoint)});
    if (ssrIsEnabled())
    {
        const [componentDidMount, setComponentDidMount] = useState(false);
        useEffect(() => { setComponentDidMount(true); }, []);

        return componentDidMount
            ? mediaQueryMatched ? style : {}
            : {};
    }

    return mediaQueryMatched ? style : {};
}

export function ssrIsEnabled(): boolean
{
    return isEnvironment("WebBrowser") && !!(window as never)?.["ANTIMATTER"]?.["ssr"];
}

function useSsrSupportedMediaQuery(settings: MediaQueryAllQueryable): boolean
{
    if (ssrIsEnabled())
    {
        const [componentDidMount, setComponentDidMount] = useState(false);
        useEffect(() => { setComponentDidMount(true); }, []);

        return componentDidMount
            ? useMediaQuery(settings)
            : useMediaQuery({all: false});
    }

    return useMediaQuery(settings);
}
