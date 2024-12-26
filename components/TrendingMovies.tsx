import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
 const {height} = Dimensions.get('window');
const TrendingMovies = (props: any) => {
    const renderItem = ({item}: any)=>(
        <View>
            <Text>{item.title}</Text>
        </View>
    )
  return (
    <View>
      <Carousel 
      data={props.data}
      renderItem={renderItem}
      width={width}
      height = {height/3}
      />
    </View>
  )
}

export default TrendingMovies