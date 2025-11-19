import React, { useState } from "react";
import { Pressable, Image, Text, View } from "react-native";
import Input from "@components/Input";
import { styles } from "./styles";

const Header = ({ title, onBackPress, onLogout, showBack, showSearch, showLogout, onSearchKeyword, keyword }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearch = () => {
        setShowSearchInput(search => !search);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require("../../assets/back.png")} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearch}>
                        <Image style={styles.icon} source={require("../../assets/search.png")} />
                    </Pressable>
                ) : <View style={styles.space} />}
                <Text style={styles.title}>{title}</Text>
                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require("../../assets/logout.png")} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>
            {showSearchInput ? (
                <View style={{ width: "100%" }}>
                    <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type your keyword" style={{ width: "100%" }} />
                </View>
            ) : null}
        </View>
    );
};

export default React.memo(Header);
