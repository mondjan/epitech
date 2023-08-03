import { Component, useEffect, useState } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./style";
import {
  Avatar,
  Button,
  Card,
  Text,
  ActivityIndicator,
  MD2Colors,
  Badge,
  Surface,
} from "react-native-paper";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeEn from "dayjs/locale/en";
import Post from "../../../components/Post";
// import { ACCESS_TOKEN } from "@env";
// import snoowrap from "snoowrap";

const User = () => {
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState(undefined);
  const [birthday, setBday] = useState();
  const [submitted, setSubmitted] = useState();

  console.log("user page");
  // console.log(ACCESS_TOKEN);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const getSubmitted = async (name) => {
    try {
      const data = await fetch(
        `https://oauth.reddit.com/user/${name}/submitted`,
        {
          headers: {
            Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njg2Njk3LjY1MTE2MiwiaWF0IjoxNjg0NjAwMjk3LjY1MTE2MSwianRpIjoiMzIyMDE3MTAzMjA2ODMtOXBzcHExRVFnVVV2elRseTNoT01vR1FBR1NDVTF3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.mDVC0yNj53mg603rM9GI-ISCtyjZWzRzyJOEAMF8bRfz0_kvyCtp970zxwP6ppK3Qorwdz_3-qUeZ8otk66YrJ3wm4ExStC8F22pNAUSIdnR5LUNt8Z4eDP2juUoO6nQtHtRUzkA9HES9RTzp5bbvsjM1c8QOkh0FceUOx8xb7bFQPkOMXobUSZgqwtIld3cNM2PDK0BZoqKkaf08IJpDN_qyAny-7QmvRiUW8rj5A6gjsqSuhJs_bAYIxD6zlCo2-cB_LHUI-w5MdceGHcFJFIZAG9T2rqYU4pCR7FATxKtUSl0LrAH9PPScPMNJd5YiP91pj9KOiQHrBVFVDM1vw`,
          },
        }
      );

      // console.log(data);
      const dataParsed = await data.json();

      if (dataParsed) {
        setSubmitted(dataParsed.data.children);
      }
    } catch (err) {
      console.log("🤔");
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const data = await fetch("https://oauth.reddit.com/api/v1/me", {
        headers: {
          Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njg2Njk3LjY1MTE2MiwiaWF0IjoxNjg0NjAwMjk3LjY1MTE2MSwianRpIjoiMzIyMDE3MTAzMjA2ODMtOXBzcHExRVFnVVV2elRseTNoT01vR1FBR1NDVTF3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.mDVC0yNj53mg603rM9GI-ISCtyjZWzRzyJOEAMF8bRfz0_kvyCtp970zxwP6ppK3Qorwdz_3-qUeZ8otk66YrJ3wm4ExStC8F22pNAUSIdnR5LUNt8Z4eDP2juUoO6nQtHtRUzkA9HES9RTzp5bbvsjM1c8QOkh0FceUOx8xb7bFQPkOMXobUSZgqwtIld3cNM2PDK0BZoqKkaf08IJpDN_qyAny-7QmvRiUW8rj5A6gjsqSuhJs_bAYIxD6zlCo2-cB_LHUI-w5MdceGHcFJFIZAG9T2rqYU4pCR7FATxKtUSl0LrAH9PPScPMNJd5YiP91pj9KOiQHrBVFVDM1vw`,
        },
      });

      // console.log(data);
      const dataParsed = await data.json();
      console.log("user info ⤵️");
      console.log(dataParsed);
      if (dataParsed) {
        setData(dataParsed);
        // console.log(dataParsed.created);
        const date = new Date(dataParsed.created * 1000);
        const bdayDate = date.toDateString();
        // console.log(bdayDate);
        setBday(bdayDate);
        setLoading(false);
      }
    } catch (err) {
      console.log("🤔");
      console.log(err);
    }
  };

  // DATA FETCHING
  useEffect(() => {
    if (!data) {
      getData();
    }
    if (data && !submitted) {
      getSubmitted(data.name);
    }
  }, [data]);

  // useEffect(() => {
  //   if (!collections) getCollections();
  // }, [collections]);

  //DAYJS library
  const daysago = (postDate, bool) => {
    dayjs.extend(relativeTime).locale(localeEn);
    var fromNowOn = dayjs(postDate).fromNow(bool);
    return fromNowOn;
  };

  useEffect(() => {
    if (submitted) console.log(submitted);
  }, [submitted]);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          color={MD2Colors.red800}
        />
      ) : (
        <ScrollView>
          <View style={styles.bannerCont}>
            <Image
              source={{ uri: data.snoovatar_img }}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <Text style={styles.txt}>
              {data.subreddit.display_name_prefixed}
            </Text>

            <View style={styles.bannerTxt}>
              <Text style={styles.smallTxt}>{data.total_karma} karma</Text>
              <Text style={styles.txtBold}>· {daysago(birthday, true)}</Text>
              <Text style={styles.smallTxt}> on Reddit</Text>
            </View>
          </View>
          {/* <View>
            <Card>
              <Card.Title title={data.name} />
              <Card.Title title={data.subreddit.display_name_prefixed} />
              <Card.Cover source={{ uri: data.snoovatar_img }} />
            </Card>
            <Badge>{data.total_karma} Karma</Badge>
            <Badge>Cake day {birthday}</Badge>
          </View> */}
          {submitted &&
            submitted.map((post, index) => {
              const date = new Date(post.data.created * 1000);
              const postDate = date.toDateString();
              return (
                <Post
                  key={index}
                  author={post.data.subreddit}
                  title={post.data.title}
                  content={post.data.selftext}
                  when={daysago(postDate)}
                  vote={post.data.score}
                  num_comments={post.data.num_comments}
                  id={post.data.id}
                  fname={post.data.name}
                />
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};

export default User;
