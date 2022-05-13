import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import music_data from './app-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'



function App() {
  
  const renderSong = ({item}) => <SongCard song={item}/>   //gelen item objesi json formatında olduğundan dolayı objeyi parçalamak için bir kere daha süslü paranteze alınmalı
  const renderSeparator = () => <View style={styles.separator}></View>
  const [songData, setSongData] = useState(music_data);
  const handleSearch = text => {
    const filteredSong = music_data.filter(song => {
      const searchedSong = text.toLowerCase();
      const musicData = song.title.toLowerCase();

      return musicData.includes(searchedSong)
    })

    setSongData(filteredSong)
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <FlatList
      ItemSeparatorComponent={renderSeparator} 
      data={songData}
      renderItem ={renderSong}  //dışarı tarafa sabit olarak taşınmalı
      keyExtractor={item => item.id}                                                        
      />
    </View>  
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  separator:{
    borderWidth: 0.7,
    borderColor: '#D9D9D9'
  }
})

export default App;