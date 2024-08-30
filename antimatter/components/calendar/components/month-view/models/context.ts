import {type ComponentContext} from "@miniskylab/antimatter-framework";
import {createContext} from "react";
import type {MonthInfo} from "../types";
import {type Props} from "./props";

export const MonthViewContext = createContext<MonthViewContext>(undefined);
export type MonthViewContext = ComponentContext<Props>;

export const MonthContext = createContext<MonthContext>(undefined);
export type MonthContext = MonthInfo | undefined;
