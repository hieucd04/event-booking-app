import { type ComponentContext } from "@miniskylab/antimatter-framework";
import { createContext } from "react";
import { type Props } from "./props";

export const EventRowContext = createContext<EventRowContext>(undefined);
export type EventRowContext = ComponentContext<Props>;
