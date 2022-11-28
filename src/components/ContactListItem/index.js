import { Text, Image, StyleSheet, Pressable, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactListItem = ({user}) => {
const navigation = useNavigation ();


  return (
    <Pressable onPress={() => {}} style={styles.container} >
      <Image source={{ uri: user.image }} style={styles.image}/>

          <View style={styles.content} >
            <Text numberOfLines={1} style={styles.name}>{user.name} 
            </Text>
            <Text numberOfLines={1} style={styles.subTitle}>{user.status} 
            </Text> 
            </View >
    </Pressable>
  );
};

const styles= StyleSheet.create ({
    container:{
        flexDirection : 'row',
        marginHorizontal: 20,
        marginVertical: 5,

        height: 70,

       
    },
    image: {
        width: 50, 
        height: 50,
        borderRadius: 50,
        marginRight: 10, 
        marginTop: 1,
    },
    name:{
        flex: 1,
        fontWeight: 'bold',
        marginTop: 15,
    },

    content: {
    },
    subTitle:{
      color: 'gray',
    },


})

export default ContactListItem;
