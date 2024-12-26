import { View, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import  { useState } from 'react';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles } from '../styles/styles';
import TrendingMovies from './TrendingMovies';
const Homescreen = () => {
  const ios = Platform.OS == 'ios';
  const[trending, set_trending]= useState([
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ])
  return (
  <View className='flex-1 bg-neutral-800'>
   <SafeAreaView className={ios?'-mb-2': 'mb-5'}>
    <StatusBar barStyle='light-content' />
    <View className='flex-row justify-between items-center mx-3'>
       <Bars3CenterLeftIcon size={30} strokeWidth={2} color='white'/>
       <Text className='text-3xl text-white font-bold'>
        <Text style={styles.titleText}>M</Text>ovies
       </Text>
       <TouchableOpacity>
        <MagnifyingGlassIcon size={30} strokeWidth={2} color='white'/>
       </TouchableOpacity>
    </View>
   </SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
   <TrendingMovies data={trending}/>
   </ScrollView>
  </View>
  );
}

export default Homescreen