// import { View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Searchbar, Text, Divider } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// /api/subreddit_autocomplete
// /api/search_subreddits

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigation = useNavigation();

  console.log("search bar");
  // getSubInfo(searchQuery);

  const getSubInfo = async (searchQuery) => {
    console.log(searchQuery);
    try {
      const data = await fetch(
        `https://oauth.reddit.com/api/search_reddit_names?query=${searchQuery}`,
        {
          method: "POST",
          headers: {
            Authorization: `bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0Njk3Mjg0LjU3NzEwNSwiaWF0IjoxNjg0NjEwODg0LjU3NzEwNCwianRpIjoiMzIyMDE3MTAzMjA2ODMtSklsTGJobTM4VDJLX1IzdWxsejExUm1RVU1CSUZ3IiwiY2lkIjoiNno2Nkp3QUxiUldUSFoxN0ZFLXk0QSIsImxpZCI6InQyX2JleDlld2c4YiIsImFpZCI6InQyX2JleDlld2c4YiIsImxjYSI6MTY4NDI0ODExMjk1Nywic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.bQ5VdkjBOCEPJ8t57ImBp52UHkNUUB7WNYaxIBNw4-OG8TEf9IasY3jJo30hhT1qIs-SGY5jEZC2gvrCxVLlcKGKTr9hk6zkxCXybdjR02_Pfc05qV5sPkzdzUNxMHPI9yJaEbnOCyJlbgGa5HDA9gztTjEoVYtwhrXkfupFLtjZr16rFFX5xVb8tsAtsPTVgH_w35W60Qn74Oq3tIZNJ77yfHzOB2mxttpEVIndx8LAB_QqOY32Zka7E1hV_DOuiNgLs7iW_y6GQEUsiNNb1KoAFpk4ZtoRw3PEsYLYbT0esGlOH7yCOZPQWEHqSYVy9eT7A6NlEUBbht1A_PQUnw`,
          },
        }
      );
      const dataParsed = await data.json();
      console.log(dataParsed);
      setSearchResult(dataParsed.names);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchQuery !== "") getSubInfo(searchQuery);
  }, [searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Seek and you shall find 🍿"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View>
        {searchResult &&
          searchResult.map((subName, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SubReddit", {
                      subName: subName,
                    })
                  }
                >
                  <Text
                    style={[styles.txt, styles.center, styles.searchResult]}
                  >
                    r/{subName}
                  </Text>
                  <Divider />
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  center: {
    textAlign: "center",
  },
  searchResult: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
