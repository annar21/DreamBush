import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProfileLink from '@/components/ProfileLink';


// 6F60EF
const ProfilePage = () => {
  return (
    <View style={{backgroundColor: '#F1F4F9', height: '100%', padding: 15, paddingTop: 25}}>
      
      <View style={{width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 15}}>
        <View style={{backgroundColor: '#fff', width: 95, height: 95, borderRadius: '50%', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={40} color="#777" />
        </View>

        <View style={{marginTop: 25,}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 600, marginBottom: 5}}>egsdf grsd</Text>
          <Text style={{textAlign: 'center', color: '#777'}}>grsdf</Text>
          <Text style={{textAlign: 'center', color: '#777'}}>grdf@grsd.com</Text>
        </View>
      </View>

      <View style={{width: '100%', paddingVertical: 15, backgroundColor: '#6F60EF', borderRadius: 15, marginTop: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <View>
          <Text style={{color: 'white', fontWeight: 700, fontSize: 55}}>0</Text>
        </View>
        <View style={{transform: [{translateY: 5}]}}>
          <Text style={{color: 'white', fontWeight: 600, fontSize: 20, lineHeight: 21}}>Images</Text>
          <Text style={{color: 'white', fontWeight: 600, fontSize: 20, lineHeight: 21}}>Generated</Text>
        </View>
    </View>

      <View style={{marginTop: 25, gap: 10}}>
        <ProfileLink title='Edit Profile' icon={() => <Text>Icon</Text>} onPress={() => {}} />
        <ProfileLink title='Share' icon={() => <Text>Icon</Text>} onPress={() => {}} />
        <ProfileLink title='Leave a Review' icon={() => <Text>Icon</Text>} onPress={() => {}} />
        <ProfileLink title='Legal' icon={() => <Text>Icon</Text>} onPress={() => {}} />
      </View>

    </View>
  );
}

export default ProfilePage;