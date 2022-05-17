import {
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState, useEffect } from "react";

export default function SignUpScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendDataSignUp = async () => {
    try {
      const response = await axios.post(
        "https://express-airbnb-api.herokuapp.com/user/sign_up",
        {
          email,
          username,
          description,
          password,
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <KeyboardAwareScrollView>
        <View>
          <View>
            <View
              style={{
                marginTop: 40,
                marginBottom: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/img/logo.png")}
                style={{ height: 100, resizeMode: "contain" }}
              ></Image>
              <Text style={{ color: "#898989", fontSize: 30, marginTop: 15 }}>
                Sign Up
              </Text>
            </View>

            <View style={{ marginBottom: 10 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 2,
                    borderBottomColor: "red",
                  }}
                >
                  {/*         <Text>Name: </Text> */}
                  <TextInput
                    onChangeText={(email) => {
                      setEmail(email);
                      console.log("email :" + email);
                    }}
                    placeholderTextColor={"lightgrey"}
                    placeholder="email"
                    style={{
                      backgroundColor: "white",
                      width: "97%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 2,
                    borderBottomColor: "red",
                  }}
                >
                  {/*         <Text>Name: </Text> */}
                  <TextInput
                    onChangeText={(username) => {
                      setUsername(username);
                      console.log("username" + username);
                    }}
                    r
                    placeholderTextColor={"lightgrey"}
                    placeholder="username"
                    style={{
                      backgroundColor: "white",
                      width: "97%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "red",
                  }}
                >
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(description) => {
                      setDescription(description);
                      console.log("description" + description);
                    }}
                    placeholderTextColor={"lightgrey"}
                    placeholder="Describe yourself in a few words..."
                    style={{
                      backgroundColor: "white",
                      width: "97%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 2,
                    borderBottomColor: "red",
                  }}
                >
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => {
                      setPassword(password);
                      console.log("password" + password);
                    }}
                    placeholderTextColor={"lightgrey"}
                    placeholder="password"
                    style={{
                      backgroundColor: "white",
                      width: "97%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 2,
                    borderBottomColor: "red",
                  }}
                >
                  {/*         <Text>Name: </Text> */}
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={(confirmpassword) => {
                      setConfirmPassword(confirmpassword);
                      console.log("confirmpassword :" + confirmpassword);
                    }}
                    placeholderTextColor={"lightgrey"}
                    placeholder="confirm password"
                    style={{
                      backgroundColor: "white",
                      width: "97%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    borderColor: "red",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    width: 150,
                    borderRadius: 50,
                  }}
                  onPress={async () => {
                    const userToken = "secret-token";
                    setToken(userToken);
                    sendDataSignUp();
                  }}
                >
                  <Text
                    style={{ color: "grey", fontWeight: "800", fontSize: 15 }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={{
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text
                style={{
                  color: "lightcoral",
                  fontWeight: "700",
                }}
              >
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
