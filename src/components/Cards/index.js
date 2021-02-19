import React from 'react';
import { StyleSheet, View, ScrollView } from "react-native";
import { Card, Text, Paragraph } from 'react-native-paper';


const Cards = () => {

  return (  
    <>

    <View>

        {/* Carne */}
        <View>
          <Paragraph style={styles.subtitle}>Carne</Paragraph>
        </View>

        <View style={styles.cards}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false} >

          <Card.Content >
            <Text style={styles.txt}>Costela Bovina</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Filé ao Molho Madeira</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Picanha Suína</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Maminha na Cerveja</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Torta de Carne Moída</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/5908064/pexels-photo-5908064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content> 

          <Card.Content >
            <Text style={styles.txt}>Bisteca Alla Fiorentina</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content> 
          </ScrollView>      
        </View>


        {/* Frango */}
        <View>
          <Paragraph style={styles.subtitle}>Frango</Paragraph>
        </View>

        <View style={styles.cards}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false} >
           
          <Card.Content >
            <Text style={styles.txt}>Frango Caprese</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Teriyaki</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Peito Recheado</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/1352274/pexels-photo-1352274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Strogonoff de Frango</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>   

          <Card.Content >
            <Text style={styles.txt}>Frango Glaceado</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content> 

          <Card.Content >
            <Text style={styles.txt}>Frango com Quiabo</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>
          </ScrollView>     
        </View>


        {/* Peixe */}
        <View>
          <Paragraph style={styles.subtitle}>Peixe</Paragraph>
        </View>

        <View style={styles.cards}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false} >

          <Card.Content >
            <Text style={styles.txt}>Bacalhau</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/688803/pexels-photo-688803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Moqueca de Camarão</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Salmão com molho</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Peixe Assado</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>    

          <Card.Content >
            <Text style={styles.txt}>Sushi</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content> 

          <Card.Content >
            <Text style={styles.txt}>Peixe ao Molho Cítrico</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/2597565/pexels-photo-2597565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>
          </ScrollView>      
        </View>


        {/* Massa */}
        <View>
          <Paragraph style={styles.subtitle}>Massa</Paragraph>
        </View>

        <View style={styles.cards}> 
          <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false} >

          <Card.Content >
            <Text style={styles.txt}>Fettuccine</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Spaguetti</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/2204771/pexels-photo-2204771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Gnocchi</Text>
            <Card.Cover style={styles.images}
            source={{ uri: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Tortelli</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>

          <Card.Content >
            <Text style={styles.txt}>Goulash com Spaetzle</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content> 

          <Card.Content >
            <Text style={styles.txt}>Tagliatelli</Text>
            <Card.Cover style={styles.images} 
            source={{ uri: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
          </Card.Content>   
          </ScrollView>               
        </View>  

      </View>
    </>
  )
};

const styles = StyleSheet.create({   
  subtitle: {
    marginTop: 10,
    marginLeft: 8,
    color: "#682C0E",
    fontWeight: 'bold',
  },
  cards: {    
    flexDirection: "row",
    backgroundColor: '#EBECF1',
  },
  images: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  txt: {
    marginTop: 10,
    width: 80,
    height: 40,
    fontSize: 10,
    textAlign: "center",    
  }
});

export default Cards;