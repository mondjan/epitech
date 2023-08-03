import React, { useState, useEffect, useContext } from "react";
import SegmentBtn from "./../../../components/SegmentBtn";

import {
  Avatar,
  withTheme,
  Card,
  Title,
  Paragraph,
  List,
  Button,
  Text,
} from "react-native-paper";
import HTML from "react-native-render-html";
import ImageLoad from "react-native-image-placeholder";
import {
  Share,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import moment from "moment";

const SinglePost = ({ route, navigation }) => {
  const {
    author,
    title,
    thumbnail,
    content,
    when,
    vote,
    num_comments,
    fname,
    id,
    SubReddit,
  } = route.params;
  const [isLoading, setisLoading] = useState(true);
  const [post, setpost] = useState([]);
  const [comments, setComments] = useState([]);
  const image = JSON.stringify(thumbnail);
  //   console.log(id);

  const getComments = async () => {
    try {
      const data = await fetch(
        "https://oauth.reddit.com/r/" + SubReddit + "/comments/" + id,
        {
          headers: {
            Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njg2Njk3LjY1MTE2MiwiaWF0IjoxNjg0NjAwMjk3LjY1MTE2MSwianRpIjoiMzIyMDE3MTAzMjA2ODMtOXBzcHExRVFnVVV2elRseTNoT01vR1FBR1NDVTF3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.mDVC0yNj53mg603rM9GI-ISCtyjZWzRzyJOEAMF8bRfz0_kvyCtp970zxwP6ppK3Qorwdz_3-qUeZ8otk66YrJ3wm4ExStC8F22pNAUSIdnR5LUNt8Z4eDP2juUoO6nQtHtRUzkA9HES9RTzp5bbvsjM1c8QOkh0FceUOx8xb7bFQPkOMXobUSZgqwtIld3cNM2PDK0BZoqKkaf08IJpDN_qyAny-7QmvRiUW8rj5A6gjsqSuhJs_bAYIxD6zlCo2-cB_LHUI-w5MdceGHcFJFIZAG9T2rqYU4pCR7FATxKtUSl0LrAH9PPScPMNJd5YiP91pj9KOiQHrBVFVDM1vw`,
          },
        }
      );

      // console.log(data);
      const dataParsed = await data.json();
      //   console.log(dataParsed)
      //   console.log(SubReddit)
      //   console.log('hey')
      if (dataParsed) {
        console.log(dataParsed.data);
        // setComments(dataParsed.data.children);
        setisLoading(false);
      }
    } catch (err) {
      console.log("raou");
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  if (isLoading) {
    return (
      <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
        <Button onPress={() => setisLoading(false)}>loading</Button>
        {/* <ContentPlaceholder /> */}
      </View>
    );
  } else {
    return (
      <ScrollView>
        <Card>
          <Card.Content>
            <Title> {JSON.stringify(title)} </Title>

            <List.Item
              title={JSON.stringify(author)}
              description={JSON.stringify(when)}
              left={(props) => {
                return (
                  <Avatar.Image
                    size={55}
                    source={{
                      uri: JSON.stringify(thumbnail),
                    }}
                  />
                );
              }}
            />
            <List.Item title="" />
            <Paragraph />
          </Card.Content>
          <Image
            source={{ uri: thumbnail }}
            style={{ width: 240, height: 200, justifyContent: "center" }}
          />

          <Card.Content>
            <HTML html="HTML" imagesMaxWidth={Dimensions.get("window").width} />
          </Card.Content>
          <Card.Actions>
            <SegmentBtn fname={fname} vote={vote} />
            {/* <Button icon="arrow-down-bold-outline" mode="contained" />
            <Text>1300</Text>
            <Button icon="arrow-up-bold-outline" mode="contained" /> */}
            <Button
              style={styles.btn}
              icon="chat-outline"
              onPress={() => getComments()}
            >
              {num_comments}
            </Button>
          </Card.Actions>
        </Card>
        <View>
          {comments
            ? comments.map((post, index) => {
                return (
                  <View>
                    <Button>hey</Button>
                  </View>
                );
              }) 
            : () => {
                return <View> wow such empty </View>;
              }}
        </View>
      </ScrollView>
    );
  }
};
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

export default SinglePost;
