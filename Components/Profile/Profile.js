import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const Profile = () => {
  const [followingList, setFollowingList] = useState([])

  useEffect(() => {
    getFollowingList()
  }, [])

  const getFollowingList = (s) => {

    fetch('https://api.github.com/users/denizyesilirmak/following')
      .then(res => res.json())
      .then(data => {
        setFollowingList(data)
      })
  }


  return (
    <ScrollView style={{
      flex: 1,
      padding: 10
    }}>

      {
        followingList.map((user, index) => {
          return (
            <View style={{
              backgroundColor: '#cacaca',
              width: '100%',
              height: 60,
              padding: 5,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 10
            }}>
              <Image
                source={{ uri: user.avatar_url }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: '#000000'
                }}
              />
              <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 20
              }}>{user.login}</Text>
            </View>
          )
        })
      }



    </ScrollView>

  )
}

export default Profile