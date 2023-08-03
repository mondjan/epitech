import { useState } from "react";
import { View, Text, Image } from "react-native";
import { WebView } from "react-native-webview";
import base64 from "react-native-base64";
import Search from "../../../components/SearchBar";

const Home = () => {
  const [accessToken, setAccessToken] = useState();
  const clientID = "fZMgMaW-dmhwlI-rq1E9dA";
  const clientSecret = "t_vvSJvr2FVvN-mSKwY7mYmNQIsvpg";
  const redirectURL = "https://www.npmjs.com";

  const authEncoded = base64.encode(clientSecret + ":" + redirectURL);

  const authURL = `https://www.reddit.com/api/v1/authorize?client_id=${clientID}&response_type=code&state=myRandomString&redirect_uri=${redirectURL}&duration=permanent&scope=identity,edit,flair,history,modconfig,modflair,modlog,modposts,modwiki,mysubreddits,privatemessages,read,report,save,submit,subscribe,vote,wikiedit,wikiread`;

  const handleNavigationStateChange = (navState) => {
    console.log("⤵️");
    const url = navState.url;
    console.log(url);
    if (url.startsWith(redirectURL)) {
      console.log("🚀 REDIRECTION");
      console.log(url);

      const redirectionCode = url.split("code=")[1];
      console.log(redirectionCode);
      const bodyData = `grant_type=authorization_code&code=${redirectionCode}&redirect_uri=${redirectURL}`;
      // return;

      // const urlParams = new URLSearchParams(url.split("?")[1]);
      // const authCode = urlParams.get("code");

      fetch(`https://www.reddit.com/api/v1/access_token`, {
        method: "POST",
        headers: {
          grant_type: "authorization_code",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Basic + ${authEncoded}`,
        },
        body: bodyData,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("RES 🔥");
          console.log(res);
          console.log(res.access_token);
          setAccessToken(res.access_token);
        })
        .catch((err) => {
          console.log("❌");
          console.log(err);
        });
    }
  };

  // if (!accessToken) {
  //   return (
  //     <WebView
  //       source={{ uri: authURL }}
  //       onNavigationStateChange={handleNavigationStateChange}
  //     />
  //   );
  // }

  return (
    <View>
      <Search />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/dbivyjzla/image/upload/v1684692305/image-1591947482_q3wbem.png",
          }}
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default Home;
