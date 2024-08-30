import {type ComponentContext} from "@miniskylab/antimatter-framework";
import {createContext} from "react";
import {type Props} from "./props";

export const PipsContext = createContext<PipsContext>(undefined);
export type PipsContext = ComponentContext<Props>;

export const PipIndexContext = createContext<PipIndexContext>(undefined);
export type PipIndexContext = number | undefined;
