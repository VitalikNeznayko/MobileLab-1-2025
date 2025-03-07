import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import styles from "../styles/styles.js";

export default function HomeScreen({ navigation }) {
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
          <Text style={[styles.sectionTitle, styles.textBase]}>Новинки</Text>

          <View style={styles.itemContainer}>
            {[
              "Назва 1",
              "Назва 2",
              "Назва 3",
              "Назва 4",
              "Назва 5",
              "Назва 6",
            ].map((song, index) => (
              <View key={index} style={styles.itemCard}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.itemImage}
                    source={require("../assets/img/notFound.png")}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.itemTitle, styles.textBase]}>
                    {song}
                  </Text>
                  <Text style={[styles.itemDescription, styles.textBase]}>
                    Короткий опис
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Незнайко Віталій, група ВТк-24-1</Text>
      </View>
    </View>
  );
}
