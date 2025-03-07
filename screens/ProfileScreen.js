import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/styles.js";

export default function ProfileScreen({ navigation }) {
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
          <Text style={[styles.sectionTitle, styles.textBase]}>Реєстрація</Text>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Ел. пошта</Text>
            <TextInput style={styles.inputField} placeholder="Ел. пошту" />

            <Text style={styles.label}>Пароль</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Пароль"
              secureTextEntry
            />

            <Text style={styles.label}>Пароль (повторіть пароль)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Повторіть пароль"
              secureTextEntry
            />

            <Text style={styles.label}>Ваше прізвище</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Введіть ваше прізвище"
            />

            <Text style={styles.label}>Ваше ім'я</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Введіть ваше ім'я"
            />

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Незнайко Віталій, група ВТк-24-1</Text>
      </View>
    </View>
  );
}
