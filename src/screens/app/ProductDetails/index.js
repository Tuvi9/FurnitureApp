import React, { useState, useEffect } from "react";
import { ScrollView, Image, View, Text, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarusel from "@components/ImageCarusel";
import Button from "@components/Button";
import { toggleFavorite, isFavorite } from "@data/favorites";
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
    const { product } = route.params || {}
    const [favorite, setFavorite] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        setFavorite(isFavorite(product?.id));
    }, [product?.id]);

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

    const onFavoritePress = () => {
        if (product) {
            toggleFavorite(product);
            setFavorite(isFavorite(product.id));
        }
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
                <Pressable 
                    onPress={onFavoritePress}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    android_ripple={null}
                    style={styles.bookmarkContainer}
                >
                    <Image 
                        style={styles.bookmarkIcon} 
                        source={
                            isPressed 
                                ? require("../../../assets/tabs/bookmark.png") 
                                : favorite 
                                    ? require("../../../assets/tabs/bookmarkActive.png") 
                                    : require("../../../assets/tabs/bookmark.png")
                        } 
                    />
                </Pressable>
                <Button onPress={onContact} style="button" title="Contact Seller"></Button>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails);