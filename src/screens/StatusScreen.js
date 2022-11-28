import { FlatList } from "react-native";
import status from "../../assets/data/status.json";
import ChatListItem from "../components/ChatListItem";

const ChatsScreen = () => {
  return (
    <FlatList
      data={status}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{backgroundColor:'white' }}
    />
  );
};

export default ChatsScreen;
