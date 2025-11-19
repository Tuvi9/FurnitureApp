import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@components/AuthHeader";
import Input from "@components/Input";
import Button from "@components/Button";
import Separator from "@components/Separator";
import GoogleLogin from "@components/GoogleLogin";
import { styles } from "./styles";

const Signin = ({ navigation, setIsSignedIn }) => {

    const onBack = () => {
        navigation.goBack()
    };

    const onSignup = () => {
        navigation.navigate("Signup")
    };

    const onSuccess = () => {
        setIsSignedIn(true)
        navigation.navigate("Home")
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign in"></AuthHeader>
                <Input label="Email" placeholder="example@gmail.com" />
                <Input isPassword label="Password" placeholder="******" />
                <Button onPress={onSuccess} style={styles.button} title="Sign In"></Button>
                <Separator text=" Or sign in with "></Separator>
                <View style={styles.googleLogin}>
                    <GoogleLogin />
                </View>
                <Text onPress={onSignup} style={styles.footerText}>Don't have an account?
                    <Text onPress={onSignup} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
};

export default Signin;