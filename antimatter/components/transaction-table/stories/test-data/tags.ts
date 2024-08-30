import {Ts} from "@miniskylab/antimatter-framework";
import {DefaultIconSet} from "@miniskylab/antimatter-typography";
import {TransactionRecord} from "../../components";

export const Tags: TransactionRecord.Props["tags"] = {
    "viverra": {name: "viverra"},
    "metus": {name: "metus"},
    "iaculis": {
        name: "iaculis",
        icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Money),
        metadata: new Set([
            TransactionRecord.TagMetadata.HighlightTarget,
            TransactionRecord.TagMetadata.ExplicitPlusSymbol,
            TransactionRecord.TagMetadata.MutuallyExclusive
        ])
    },
    "sagittis": {name: "sagittis"},
    "dolore": {name: "dolore", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Apple)},
    "tortor": {name: "tortor"},
    "feugiat": {name: "feugiat", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Basket)},
    "volutpat": {name: "volutpat", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Road)},
    "mauris": {name: "mauris", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Alarm)},
    "interdum": {name: "interdum", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Plane)},
    "semper": {name: "semper", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Group)},
    "imperdiet": {name: "imperdiet", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Lightning)},
    "massa": {name: "massa", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.Droplet)},
    "adipiscing": {name: "adipiscing", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.WiFi)},
    "faucibus": {name: "faucibus", icon: Ts.Enum.getName(DefaultIconSet, DefaultIconSet.PriceTag)}
};
