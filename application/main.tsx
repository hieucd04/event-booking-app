import { View } from "@miniskylab/antimatter-view";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { EventRow } from "./components";
import * as Styles from "./styles";
import * as TestData from "./test-data";

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
                    <EventRow.Component style={Styles.App__EventRow} title={"Test Title"} location={"Test Location"} date={new Date()} image={TestData.PlaceholderImage} />
                    <EventRow.Component style={Styles.App__EventRow} title={"Test Title"} location={"Test Location"} date={new Date()} image={TestData.PlaceholderImage} />
                    <EventRow.Component style={Styles.App__EventRow} title={"Test Title"} location={"Test Location"} date={new Date()} image={TestData.PlaceholderImage} />
                    <EventRow.Component style={Styles.App__EventRow} title={"Test Title"} location={"Test Location"} date={new Date()} image={TestData.PlaceholderImage} />
                    <EventRow.Component style={Styles.App__EventRow} title={"Test Title"} location={"Test Location"} date={new Date()} image={TestData.PlaceholderImage} />
                </DataList>
            </View>
        </View>
    );
}
