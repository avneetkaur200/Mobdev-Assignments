import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
 
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        
        
        <View style={styles.headerIcons}>
          
            <Text style={styles.icon}></Text>
         
        </View>
      </View>

   

      <Text style={styles.headerTitle}>Group Profile</Text>
      <Text style={styles.headertext}>ootd_everyday</Text>
      <View style={styles.profileInfo}>

        
        <Image
          source={require('./assets/insta.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>OOTD Everyday</Text>
        <Text style={styles.profileBio}>Fit check! 👕</Text>
        <Text style={styles.profileBio}>You know we’ll hype you up.</Text>
        <Text style={styles.MemberButton}><Button 
          title="Member"
          
        /></Text>
        
        <Image
          source={require('./assets/insta-post.jpeg')}
          style={styles.Image}
        />
        <Text style={styles.alert}><Button 
          title="Alert"
          onPress={() => Alert.alert('Alert Button pressed')}
        /></Text>
      </View>

      <View style={styles.footer}>
      <Image
          source={require('./assets/Home-Icon.jpeg')}
          style={styles.footerIcon1}
        />
        <Image
          source={require('./assets/Search-icon.png')}
          style={styles.footerIcon2}
        />
        <Image
          source={require('./assets/Search-icon.png')}
          style={styles.footerIcon2}
        />
        <Image
          source={require('./assets/icon4.jpeg')}
          style={styles.footerIcon2}
        />
        <Image
          source={require('./assets/icon5.jpeg')}
          style={styles.footerIcon2}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    marginTop:40,
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
    textAlign:"center"
  },
  headertext:{
    fontSize: 12,
    color: "#555",
    marginLeft:156,
  },

  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  profileInfo: {
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    marginRight:280,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    fontSize: 14,
    color: "#555",
  },
  MemberButton: {
    height:40,
    paddingHorizontal: 130,
    paddingVertical: 2,
    borderWidth: 1,
  },
  alert: {
    width: '100%',
    marginTop:5,
    paddingHorizontal: 150,
    backgroundColor: '#ddd',

  },

  Image:{
    marginTop:5,
    width: "100%",
    height: 450,
  },
  footer: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    paddingVertical: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerIcon1: {
    width: "12%",
    height: 45,
  },
  footerIcon2: {
    width: "12%",
    height: 45,
  },footerIcon3: {
    width: "12%",
    height: 45,
  },

});

export default App;