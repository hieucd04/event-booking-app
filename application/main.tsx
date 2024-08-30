import { View } from "@miniskylab/antimatter-view";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import * as Styles from "./styles";

export function Application()
{
    return (
        <View style={Styles.App__Root}>
            <View style={Styles.App__MainContent}>
                <DataList
                    button1={{
                        icon: DefaultIconSet.PlusCircle,
                        text: "Add New",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                    button2={{
                        icon: DefaultIconSet.Eye,
                        text: "Read-Only",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                    button3={{
                        icon: DefaultIconSet.XMarkInsideCircle,
                        text: "Cancel",
                        onPress: () => { alert("Lorem Ipsum"); }
                    }}
                >
                </DataList>
            </View>
        </View>
    );
}
