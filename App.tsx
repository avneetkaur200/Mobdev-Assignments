import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const App = () => {

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Group Profile</Text>
      </View>
      
      <View style={styles.profileInfo}>
        <Image
          source={require('./assets/insta.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>OOTD Everyday</Text>
        <Text style={styles.profileBio}>Fit check! </Text>
        <Text style={styles.profileBio}>You know we’ll hype you up.</Text>
        
        
        <Image
          source={require('./assets/insta-post.jpg')}
          style={styles.Image}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex:0.1,
    padding:1,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems:"center",
  },
 
  profileInfo: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    fontSize: 14,
    color: "#555",   
  },
  
  Image:{  
    width: "100%",
    height: 450,
  },

});

export default App;
