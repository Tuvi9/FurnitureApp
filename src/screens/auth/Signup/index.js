import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@components/AuthHeader";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";
import Button from "@components/Button";
import Separator from "@components/Separator";
import GoogleLogin from "@components/GoogleLogin";
import { styles } from "./styles";

const Signup = ({ navigation, setIsSignedIn }) => {
    const [checked, setChecked] = useState(false);

    const onBack = () => {
        navigation.goBack()
    };

    const onSignin = () => {
        navigation.navigate("Signin")
    };

    const onSuccess = () => {
        setIsSignedIn(true)
        navigation.navigate("Home")
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign up"></AuthHeader>
                <Input label="Name" placeholder="John Doe" />
                <Input label="Email" placeholder="example@gmail.com" />
                <Input isPassword label="Password" placeholder="******" />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button onPress={onSuccess} style={styles.button} title="Sign Up"></Button>
                <Separator text=" Or sign up with "></Separator>
                <GoogleLogin />
                <Text onPress={onSignin} style={styles.footerText}>Already have an account?
                    <Text onPress={onSignin} style={styles.footerLink}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Signup;