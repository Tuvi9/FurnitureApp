import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { products } from "@data/products";
import FavoriteItem from "@components/FavoriteItem";
import Header from "@components/Header";
import { styles } from "./styles";

const Favorites = () => {
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", {product: item})
        }

        return (
            <FavoriteItem onPress={onProductPress}
            {...item} />
        )
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" />
                <FlatList showsVerticalScrollIndicator={false} data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites);