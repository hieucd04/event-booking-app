import {useSuspense} from "@miniskylab/antimatter-framework";
import {type IconStyle} from "../models";

export const Default: IconStyle = function ()
{
    return {
        alignItems: "center",
        justifyContent: "center",
        ...useSuspense()
    };
};
