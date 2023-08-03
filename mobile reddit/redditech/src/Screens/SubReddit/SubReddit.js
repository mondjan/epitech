import { useState, useEffect, useContext } from "react";
import {
  Avatar,
  withTheme,
  Card,
  Title,
  Paragraph,
  List,
  Button,
  Text,
  ActivityIndicator,
  MD2Colors,
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
} from "react-native";
import styles from "./style";
import Post from "../../../components/Post";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeEn from "dayjs/locale/en";

const SubReddit = ({ route }) => {
  const [subData, setSubData] = useState();
  const [subMetaData, setSubMetaData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [arePostLoading, setPostsLoading] = useState(true);

  // console.log("In SubReddit");
  let { subName } = route.params;
  // console.log(route.params);

  // console.log(subName);

  const subMetaInfo = async () => {
    try {
      const data = await fetch(`https://oauth.reddit.com/r/${subName}/about`, {
        headers: {
          Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njg2Njk3LjY1MTE2MiwiaWF0IjoxNjg0NjAwMjk3LjY1MTE2MSwianRpIjoiMzIyMDE3MTAzMjA2ODMtOXBzcHExRVFnVVV2elRseTNoT01vR1FBR1NDVTF3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.mDVC0yNj53mg603rM9GI-ISCtyjZWzRzyJOEAMF8bRfz0_kvyCtp970zxwP6ppK3Qorwdz_3-qUeZ8otk66YrJ3wm4ExStC8F22pNAUSIdnR5LUNt8Z4eDP2juUoO6nQtHtRUzkA9HES9RTzp5bbvsjM1c8QOkh0FceUOx8xb7bFQPkOMXobUSZgqwtIld3cNM2PDK0BZoqKkaf08IJpDN_qyAny-7QmvRiUW8rj5A6gjsqSuhJs_bAYIxD6zlCo2-cB_LHUI-w5MdceGHcFJFIZAG9T2rqYU4pCR7FATxKtUSl0LrAH9PPScPMNJd5YiP91pj9KOiQHrBVFVDM1vw`,
        },
      });

      // console.log(data);
      const dataParsed = await data.json();

      if (dataParsed) {
        // console.log(dataParsed.data.id);
        setSubMetaData(dataParsed.data);
        setLoading(false);
      }
    } catch (err) {
      console.log("🤔");
      console.log(err);
    }
  };

  const getSubPosts = async () => {
    try {
      const data = await fetch(`https://oauth.reddit.com/r/${subName}/new`, {
        headers: {
          Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njg2Njk3LjY1MTE2MiwiaWF0IjoxNjg0NjAwMjk3LjY1MTE2MSwianRpIjoiMzIyMDE3MTAzMjA2ODMtOXBzcHExRVFnVVV2elRseTNoT01vR1FBR1NDVTF3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.mDVC0yNj53mg603rM9GI-ISCtyjZWzRzyJOEAMF8bRfz0_kvyCtp970zxwP6ppK3Qorwdz_3-qUeZ8otk66YrJ3wm4ExStC8F22pNAUSIdnR5LUNt8Z4eDP2juUoO6nQtHtRUzkA9HES9RTzp5bbvsjM1c8QOkh0FceUOx8xb7bFQPkOMXobUSZgqwtIld3cNM2PDK0BZoqKkaf08IJpDN_qyAny-7QmvRiUW8rj5A6gjsqSuhJs_bAYIxD6zlCo2-cB_LHUI-w5MdceGHcFJFIZAG9T2rqYU4pCR7FATxKtUSl0LrAH9PPScPMNJd5YiP91pj9KOiQHrBVFVDM1vw`,
        },
      });

      // console.log(data);
      const dataParsed = await data.json();

      if (dataParsed) {
        console.log(dataParsed.data.children);
        setSubData(dataParsed.data.children);
        setPostsLoading(false);
      }
    } catch (err) {
      console.log("🤔 SR");
      console.log(err);
    }
  };

  useEffect(() => {
    if (!subMetaData) subMetaInfo();
    if (!subData) getSubPosts();
  }, []);

  //DAYJS library
  const daysago = (postDate, bool) => {
    dayjs.extend(relativeTime).locale(localeEn);
    var fromNowOn = dayjs(postDate).fromNow(bool);
    return fromNowOn;
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          color={MD2Colors.red800}
        />
      ) : (
        <View>
          <View style={styles.bannerCont}>
            {subMetaData.icon_img && (
              <Image
                source={{ uri: subMetaData.icon_img }}
                style={{ width: 80, height: 80, resizeMode: "contain" }}
              />
            )}

            <Text style={styles.txt}>{subMetaData.display_name}</Text>
            <Text style={styles.smallTxt}>
              {subMetaData.display_name_prefixed}
            </Text>
            <Text style={styles.smallTxt}>
              {subMetaData.public_description}
            </Text>

            <View style={styles.bannerTxt}>
              <Text style={styles.smallTxt}>
                {subMetaData.accounts_active} members
              </Text>
              {/* <Text style={styles.txtBold}>· {daysago(birthday, true)}</Text> */}
              {/* <Text style={styles.smallTxt}> on Reddit</Text> */}
            </View>
          </View>
        </View>
      )}

      {arePostLoading ? (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          color={MD2Colors.red800}
        />
      ) : (
        <View>
          {subData &&
            subData.map((post, index) => {
              const date = new Date(post.data.created * 1000);
              const postDate = date.toDateString();
              return (
                <Post
                  key={index}
                  author={post.data.author}
                  title={post.data.title}
                  thumbnail={post.data.thumbnail}
                  content={post.data.selftext}
                  when={daysago(postDate)}
                  vote={post.data.score}
                  num_comments={post.data.num_comments}
                  id={post.data.id}
                  fname={post.data.name}
                  SubReddit={post.data.subreddit}
                  
                />
              );
            })}
        </View>
      )}
    </ScrollView>
  );
};

export default SubReddit;
