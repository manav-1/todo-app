import React, { useState } from "react";
import styled from "styled-components";

import { AntDesign } from "@expo/vector-icons";

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState("");
  const [tValue, setTValue] = useState("");

  const onChangeText = (text) => {
    setTValue(text);
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          value={tValue}
          onChangeText={onChangeText}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setTValue("");
          if (tValue.trim()) setValue(submitHandler(value));
        }}
      >
        <AntDesign name="plus" size={24} color="midnightblue" />
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-family: poppins-regular;
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  padding-top: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`;
