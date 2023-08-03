import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Moment from "react-moment";
import SegmentBtn from "./SegmentBtn";

import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
  Button,
  Text,
  Surface,
} from "react-native-paper";

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
} from "react-native";

// const LeftContent = () => (
//   <Avatar.Icon
//     color="white"
//     icon="camera"
//     style={{ backgroundColor: "green" }}
//     size={45}
//   />
// );

// left={LeftContent}

export default function Post(props) {
  const [copied, setCopied] = useState(false);

  const navigation = useNavigation();

  console.log(props);
  const author = props.author;
  const title = props.title;
  const content = props.content;
  const vote = props.vote;
  const when = props.when;
  const num_comments = props.num_comments;
  const fname = props.fname;
  const thumbnail = props.thumbnail;
  const id =props.id;

  // console.log("thumbnail",thumbnail);
  // const vote = props.vote;

  return (
    <PaperProvider>
      <SafeAreaView style={styles.MainContainer}>
        <Card mode="outlined" style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SinglePost", {
                  author:author,
                  title:title,
                  thumbnail:thumbnail,
                  content:content,
                  when:when,
                  vote:vote,
                  num_comments:num_comments,
                  fname:fname,
                  id:id,
              })
            }
          >
            <Card.Title
              title=<Text style={styles.card}>{author}</Text>
              subtitle=<Text style={styles.card}>{when}</Text>
            />
            {/* {thumbnail && (
              <Card.Cover
                source={{
                  uri: { thumbnail },
                }}
              />
            )} */}

            <Card.Content>
              <Title style={styles.cardTitle}>{title}</Title>
              <View style={styles.row}>
                <Paragraph style={styles.cardTitle}>{content}</Paragraph>
                {thumbnail && (
                  <Image
                    source={{ uri: thumbnail }}
                    style={{ width: 80, height: 80, resizeMode: "contain" }}
                  />
                )}
              </View>
            </Card.Content>
          </TouchableOpacity>
          <Card.Actions>
            <SegmentBtn fname={fname} vote={vote} />
            {/* <Button icon="arrow-down-bold-outline" mode="contained" />
            <Text>1300</Text>
            <Button icon="arrow-up-bold-outline" mode="contained" /> */}
            <Button style={styles.btn} icon="chat-outline">
              {num_comments}
            </Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </PaperProvider>
  );
}

// <TouchableOpacity
// onPress={() =>
//   navigation.navigate("SinglePost", { postId: "addPostIdHere" })
// }
// ></TouchableOpacity>

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: "black",
    color: "white",
  },
  cardTitle: { color: "white" },
  btn: {
    backgroundColor: "orange",
    color: "white",
  },

  Buttons: {
    justifycontent: "center",
  },
  row: {
    flex: 1,
    justifycontent: "space-between",
    flexDirection: "row",
  },
});
