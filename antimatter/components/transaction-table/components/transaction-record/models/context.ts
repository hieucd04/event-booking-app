import {type ComponentContext} from "@miniskylab/antimatter-framework";
import {createContext} from "react";
import {type Props} from "./props";

export const TransactionRecordContext = createContext<TransactionRecordContext>(undefined);
export type TransactionRecordContext = ComponentContext<Props>;
