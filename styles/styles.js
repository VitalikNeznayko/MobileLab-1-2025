import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    flex: 1,
    backgroundColor: "rgb(241, 241, 241)",
    padding: 10,
  },
  headerSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textBase: {
    color: "rgb(59, 59, 59)",
  },
  navigationPanel: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
  },
  navigationIcon: {
    width: 40,
    height: 40,
  },
  contentSection: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    gap: 10,
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "white",
  },
  contentSection: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  galleryBlock: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    flexDirection: "row",
  },

  galleryImg: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
    margin: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formContainer: {
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "rgb(59, 59, 59)",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
});
