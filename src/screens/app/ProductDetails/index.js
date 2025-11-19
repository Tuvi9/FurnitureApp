import React from "react";
import { ScrollView, Image, View, Text, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarusel from "@components/ImageCarusel";
import Button from "@components/Button";
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
    const { product } = route.params || {}

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        // phone call
        let phone = "real phone number"
        Linking.openURL(`tel:${phone}`)

        // email
        let email = "real email"
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{ uri: product?.image }} />
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require("../../../assets/back.png")} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require("../../../assets/favorite2.png")} />
                </Pressable>
                <Button onPress={onContact} style="button" title="Contact Seller"></Button>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);