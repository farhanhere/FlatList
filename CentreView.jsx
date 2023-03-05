import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, TouchableOpacity,Alert,Image } from 'react-native';
import { useState } from 'react';
import burger0 from './assets/burger0.png';
import burger1 from './assets/burger1.png';
import burger2 from './assets/burger2.png';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CentreView() {

    const [myarray, setMyarray] = useState([
        {
        key:0, 
        rating:4.8,
        image: burger0,
        name:'Cheese Burger',
        price:'$7.00',
        },
        { key:1, 
          rating:4.7,
          image: burger1,
          name:'Beef Burger',
          price:'$11.00',
          },
          
          { key:2, 
            rating:4.9,
            image: burger2,
            name:'Chicken Burger',
            price:'$5.00',
            },
           
        ])

            const myOnClick = (item) => {
                Alert.alert('Selected: '+item.name)
              }
  return (
   
    <View style={styles.container}>
         <FlatList
          data={myarray}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(

            <TouchableOpacity style={styles.view}
            
            
            onPress={()=>myOnClick(item)} >

                <View style={styles.view1}>

                

                <AntDesign name='staro' style={styles.star}/>
                  <Text style={styles.text_r}>{item.rating}</Text>
                  <AntDesign name='hearto' style={styles.heart}/>
                </View>

                <View style={styles.view2}>
                    <Image style={styles.Images} source={item.image}/>
                    </View>

                <View style={styles.view3}>      
                <Text style={styles.text_n}>{item.name}</Text>
                <Text style={styles.text_p}>{item.price}</Text>
                    </View>
                
                
              

            </TouchableOpacity>
            
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: 'black',
    

  },
  view: {
    
   
        marginBottom:10, 
        backgroundColor:'#fff',
        flex:0.5, 
        display: 'flex',
        width: 200,
        height:200,
        marginTop:300,
        marginLeft: 10,
        borderRadius:10,
        borderColor:'black',
        
        },
  
  view1: {
    flex: 0.1,
    flexDirection:'row',
    
  },
  view2: {
    flex: 0.7,
    backgroundColor: '#fff',
  },
  view3: {
    flex: 0.2,
  },
  Images:{
    width: 200,
    height:140,
    borderRadius: 5,
  },
  text_r:{
    fontSize:15,
    fontWeight: 'bold',
    
  },
  text_n:{
    fontSize:15,
    fontWeight: 'bold',
    marginLeft:50,
  },
  text_p:{
    fontSize:15,
    fontcolor:'grey',
    marginLeft:70,
  },
  star:
    {color:'orange',
    paddingRight:2, 
    paddingTop:1, 
    fontSize:16,
    marginLeft:5,
  },
  heart:{color:'orange',
  paddingRight:4,
   paddingTop:1, 
   fontSize:16,
   marginLeft:130,
  },

});
