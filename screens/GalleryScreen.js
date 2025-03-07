import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles.js";

export default function CustomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerMain}>
        <View style={styles.headerSection}>
          <Image
            style={styles.navigationIcon}
            source={require("../assets/img/logo.png")}
          />
          <Text style={[styles.titleHeader, styles.textBase]}>FirstApp</Text>
        </View>

        <View style={styles.navigationPanel}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.navigationIcon}
              source={require("../assets/img/home.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
            <Image
              style={styles.navigationIcon}
              source={require("../assets/img/gallery.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.navigationIcon}
              source={require("../assets/img/profile.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentSection}>
          <Text style={[styles.sectionTitle, styles.textBase]}>Галерея</Text>

          <View style={styles.galleryBlock}>
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
            <Image
              style={styles.galleryImg}
              source={require("../assets/img/notFound.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Незнайко Віталій, група ВТк-24-1</Text>
      </View>
    </View>
  );
}
