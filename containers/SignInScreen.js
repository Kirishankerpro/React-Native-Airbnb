import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState([]);

  const sendDataSignIn = async () => {
    try {
      const response = await axios.post(
        "https://express-airbnb-api.herokuapp.com/user/log_in",
        {
          email,
          password,
        }
      );
      setAnswer(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigation = useNavigation();

  if (answer) {
    console.log(answer);
  }
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
                {" "}
                Sign In{" "}
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
                    onChangeText={(text) => {
                      setEmail(text);
                      /* console.log(text); */
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
                  {/*         <Text>Password: </Text> */}
                  <TextInput
                    onChangeText={(password) => {
                      setPassword(password);
                      /* console.log(password); */
                    }}
                    placeholderTextColor={"lightgrey"}
                    placeholder="Password"
                    secureTextEntry={true}
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
                    sendDataSignIn();
                  }}
                >
                  <Text
                    style={{ color: "grey", fontWeight: "800", fontSize: 15 }}
                  >
                    Sign In
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
                navigation.navigate("SignUp");
              }}
            >
              <Text
                style={{
                  color: "lightcoral",
                  fontWeight: "700",
                }}
              >
                No account ? Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
