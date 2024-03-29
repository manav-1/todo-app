import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components";
import AddInput from "./Components/AddInput";
import TodoList from "./Components/TodoList";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Empty from "./Components/Empty";
import Header from "./Components/Header";
import db from "./Components/FirebaseConfig";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    db.ref("To-do").on("value", (snap) => {
      var data = snap.val();
      var dataVal = [];

      for (let id in data) {
        dataVal.push({ firebaseId: id, ...data[id] });
      }
      setData(dataVal);
    });
  }, []);

  const submitHandler = (value) => {
    const dbRef = db.ref("To-do");
    dbRef.push({
      value: value,
      key: Math.random().toString(),
    });
  };

  const deleteItem = (key) => {
    const node = db.ref("To-do").child(data[key].firebaseId);
    node.remove();
  };

  if (fontsLoaded) {
    return (
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item) => item.key}
            renderItem={({ item, index }) => (
              <TodoList item={item} deleteItem={deleteItem} index={index} />
            )}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
