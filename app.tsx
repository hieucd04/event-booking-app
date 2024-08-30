import { registerRootComponent } from "expo";
import { View } from "react-native";
import { Color } from "@miniskylab/antimatter-color-scheme";
import { DefaultIconSet } from "@miniskylab/antimatter-typography";
import { TransactionTable } from "@miniskylab/antimatter-transaction-table";

registerRootComponent(() => <App />);

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: Color.Ambient }}>
      <TransactionTable
        addNewTransactionButton={{
          icon: DefaultIconSet.PlusCircle,
          text: "Add New",
          onPress: () => { alert("Lorem Ipsum"); }
        }}
        saveTransactionButton={{
          icon: DefaultIconSet.FloppyDisk,
          text: "Save",
          onPress: () => { alert("Lorem Ipsum"); }
        }}
        deleteTransactionButton={{
          icon: DefaultIconSet.TrashCan,
          text: "Delete",
          onPress: () => { alert("Lorem Ipsum"); }
        }}
        cancelButton={{
          icon: DefaultIconSet.XMarkInsideCircle,
          text: "Cancel",
          onPress: () => { alert("Lorem Ipsum"); }
        }}
        customButton={{
          icon: DefaultIconSet.Group,
          text: "Lorem Ipsum: 99",
          onPress: () => { alert("Lorem Ipsum"); }
        }}
        onSwitchMode={newMode => { alert("Lorem Ipsum"); }}
        onChangeTransaction={newTransactionData => { alert("Lorem Ipsum"); }}
        onSelectDate={newDate => { alert("Lorem Ipsum"); }}
        onSelectTransaction={transactionId => { alert("Lorem Ipsum"); }}
      />
    </View>
  );
}
