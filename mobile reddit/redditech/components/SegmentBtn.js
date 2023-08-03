import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons, Text } from "react-native-paper";

const SegmentBtn = (props) => {
  const [value, setValue] = useState("");
  const [voteN, setVote] = useState();
  const [upBtnOn, setUpBtnOn] = useState(false);
  const [downBtnOn, setDownBtnOn] = useState(false);

  const { fname } = props;

  // console.log("in segment btn");

  useEffect(() => {
    if (fname) console.log({ fname });
  }, [fname]);
  //   console.log(fname);

  const upvote = async () => {
    setUpBtnOn(true);
    console.log("click");
    // setVote(voteN + 1);

    const body = {
      id: fname,
      dir: 0,
    };

    try {
      const data = await fetch(`https://oauth.reddit.com/api/vote`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0NjgyNjA3LjA2Nzg0NiwiaWF0IjoxNjg0NTk2MjA3LjA2Nzg0NiwianRpIjoiMzIyMDE3MTAzMjA2ODMtLV9nSUsxMUhDNnF2dER2aG0zU1h0MTMyOWhoU0JRIiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.HFoAThZPPkNKc3-HePVrfaGukO1sVUNDKnkLa1dCP3EVefqGOeukCdkU6jGGMptwrdPSgj9M-3pkSLWT2LtBEz5nUPoTeGj7asOQsJm2rrbVfd6WkYr9_sFuYhCXyu3f-tmCQJA3DdUlfjgqtj4vDr7LOVFh1W7j_2FeTx5rbshYUb705ZbfQDQoQugx8XPVM21aWaevejPmRbbtoEw2xe_npWLCNLGkPUhhXTmpbW2hHsquUOcII3JGPF3ySavigSwO0Q_mJI1V-Cuu5lubPJSGXEDK64cc3-Sq8lPAx1QZQHFcaV5Cu2oH4X73ibPVCcf2x5HXPVKw9pvOfpdpnw`,
        },
        body: JSON.stringify(body),
      });

      // console.log(data);
      const dataParsed = await data.json();
      // console.log("collections ⤵️");
      // console.log(dataParsed);
    } catch (err) {
      console.log("🤔");
      console.log(err);
    }
  };

  const downvote = async () => {
    setDownBtnOn(true);
    console.log("click");
    setVote(voteN - 1);
    try {
      const data = await fetch(
        `https://oauth.reddit.com/api/vote?id=${fname}?dir=-1`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0NjgyNjA3LjA2Nzg0NiwiaWF0IjoxNjg0NTk2MjA3LjA2Nzg0NiwianRpIjoiMzIyMDE3MTAzMjA2ODMtLV9nSUsxMUhDNnF2dER2aG0zU1h0MTMyOWhoU0JRIiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.HFoAThZPPkNKc3-HePVrfaGukO1sVUNDKnkLa1dCP3EVefqGOeukCdkU6jGGMptwrdPSgj9M-3pkSLWT2LtBEz5nUPoTeGj7asOQsJm2rrbVfd6WkYr9_sFuYhCXyu3f-tmCQJA3DdUlfjgqtj4vDr7LOVFh1W7j_2FeTx5rbshYUb705ZbfQDQoQugx8XPVM21aWaevejPmRbbtoEw2xe_npWLCNLGkPUhhXTmpbW2hHsquUOcII3JGPF3ySavigSwO0Q_mJI1V-Cuu5lubPJSGXEDK64cc3-Sq8lPAx1QZQHFcaV5Cu2oH4X73ibPVCcf2x5HXPVKw9pvOfpdpnw`,
          },
        }
      );

      // console.log(data);
      const dataParsed = await data.json();
      // console.log("collections ⤵️");
      console.log(dataParsed);
    } catch (err) {
      console.log("🤔");
      console.log(err);
    }
  };

  useEffect(() => {
    const { vote } = props;
    if (!voteN) setVote(vote);
  }, [voteN]);

  //   const vote = props.vote;

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "up",
            icon: "arrow-up-bold-outline",
            onPress: upvote,
            uncheckedColor: "orange",
          },
          {
            value: "vote",
            disabled: true,
            label: <Text style={styles.makeWhite}>{voteN}</Text>,
          },
          {
            value: "down",
            icon: "arrow-down-bold-outline",

            onPress: downvote,
            uncheckedColor: "orange",
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  makeWhite: {
    color: "white",
  },
});

export default SegmentBtn;
