import {Props} from "../models";

export type SongData = Omit<Props, "style" | "isSelected" | "onPress">;
