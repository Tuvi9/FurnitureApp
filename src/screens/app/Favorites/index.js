import React, { useState, useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getFavorites, removeFromFavorites } from "@data/favorites";
import FavoriteItem from "@components/FavoriteItem";
import Header from "@components/Header";
import { styles } from "./styles";

const Favorites = () => {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = () => {
        setFavorites(getFavorites());
    };

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", {product: item})
        }

        const onRemovePress = () => {
            removeFromFavorites(item.id);
            loadFavorites(); // Refresh the list
        }

        return (
            <FavoriteItem 
                onPress={onProductPress}
                onRemove={onRemovePress}
                {...item} 
            />
        )
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" />
                {favorites.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No favorites yet</Text>
                        <Text style={styles.emptySubtext}>Add items to your favorites to see them here</Text>
                    </View>
                ) : (
                    <FlatList 
                        showsVerticalScrollIndicator={false} 
                        data={favorites} 
                        renderItem={renderItem} 
                        keyExtractor={(item) => String(item.id)} 
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Favorites);