import {useContextOrThrow} from "@miniskylab/antimatter-framework";
import {EventRowContext} from "../models";

export function useEventRowContext(): NonNullable<EventRowContext> { return useContextOrThrow(EventRowContext); }
