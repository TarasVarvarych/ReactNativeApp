import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function MapScreen() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const latitude = params.item.location.latitude;
  const longitude = params.item.location.longitude;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Posts");
          }}
        >
          <Text>
            <AntDesign name="arrowleft" size={24} color="#151515cc" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Карта</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="Picture taken here"
          coordinate={{ latitude, longitude }}
          description="Picture taken here"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "100%",
    minHeight: 88,
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004d",
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: "RobotoMedium",
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: "center",
  },
});
