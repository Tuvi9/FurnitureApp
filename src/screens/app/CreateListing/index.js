import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, ActivityIndicator, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Header from "@components/Header";
import Input from "@components/Input";
import Button from "@components/Button";
import { categories } from "@data/categories";
import { styles } from "./styles";

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});

    const goBack = () => {
        navigation.goBack();
    };

    const uploadNewImage = async () => {
        setLoading(true);
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Permission denied! Please allow access to photos.");
            setLoading(false);
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            multiple: true,
        });

        if (!result.canceled) {
            setImages((prevImages) => [
                ...prevImages,
                ...result.assets.map((asset) => asset.uri),
            ]);
        }
        setLoading(false);
    };

    const onDeleteImage = (imageUri) => {
        setImages((prevImages) => prevImages.filter((uri) => uri !== imageUri));
    };

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <Header showBack={true} onBackPress={goBack} title="Create a new listing" />
                        <Text style={styles.sectionTitle}>Upload photos</Text>
                        <View style={styles.imageRow}>
                            <TouchableOpacity style={styles.uploadContainer} onPress={uploadNewImage}>
                                <View style={styles.uploadCircle}>
                                    <Text style={styles.uploadPlus}>+</Text>
                                </View>
                            </TouchableOpacity>

                            {loading ? (
                                <ActivityIndicator size="large" color={styles.uploadCircle.backgroundColor} />
                            ) : (
                                images.map((imageUri, index) => (
                                    <View style={styles.imageContainer} key={index}>
                                        <Image style={styles.image} source={{ uri: imageUri }} />
                                        <Pressable hitslop={20} onPress={() => onDeleteImage(imageUri)}>
                                            <Image style={styles.delete} source={require("../../../assets/close.png")} />
                                        </Pressable>
                                    </View>
                                ))
                            )}
                        </View>
                        <Input label="Title" placeholder="Listing Title" value={values.title} onChangeText={(v) => onChange(v, "title")} />
                        <Input label="Category" placeholder="Select the category" value={values.category} onChangeText={(v) => onChange(v, "category")} type="picker" options={categories} />
                        <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangeText={(v) => onChange(v, "price")} keyboardType="numeric" />
                        <Input label="Description" placeholder="Tell us more..." value={values.description} onChangeText={(v) => onChange(v, "description")} multiline style={styles.textarea} />
                        <Button title="Submit" />
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);
