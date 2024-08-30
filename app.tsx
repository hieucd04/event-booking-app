import { registerRootComponent } from "expo";
import { View } from "react-native";
import { Color } from "@miniskylab/antimatter-color-scheme";
import { DataList } from "@miniskylab/antimatter-data-list";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";

registerRootComponent(() => <App />);

function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: Color.Ambient }}>
      <View style={{ flex: 1, width: "100%", maxWidth: 600 }}>
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
        />
      </View>
    </View>
  );
}
