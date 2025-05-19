import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

const offerList = ['Cleaning', 'Odd Jobs', 'Errands', 'Gardening', 'Pool Cleaning'];

const HousekeeperForm = () => {
  const [fontsLoaded] = useFonts({
    'RobotoSlab-Medium': require('@/assets/fonts/RobotoSlab-Medium.ttf'),
    'RobotoSlab-Regular': require('@/assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Bold': require('@/assets/fonts/RobotoSlab-Bold.ttf'),
  });

  const [selectedoffers, setSelectedoffers] = useState<string[]>([]);

  if (!fontsLoaded) return null;

  const router = useRouter();

  const toggleoffer = (offer: string) => {
    setSelectedoffers(prev =>
      prev.includes(offer)
        ? prev.filter(s => s !== offer)
        : [...prev, offer]
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: { backgroundColor: '#020D19' },
          headerTintColor: 'white',
        }}
      />

      <View style={{ flex: 1, backgroundColor: '#020D19', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('@/assets/images/TNK_logo.png')} style={styles.imageStyle} />
        <View style={styles.formcont}>
          <Text style={styles.formhead}>Housekeeper Details</Text>

          <Text style={styles.formtxt}>Please enter your desired rate</Text>
          <TextInput
            placeholder="Rate"
            style={styles.inputcont}
          />

            <View style={styles.row}>
            <View style={styles.offersSection}>
                <Text style={styles.offerstxt}>Services Offered:</Text>
                {offerList.map(offer => (
                <TouchableOpacity
                    key={offer}
                    style={styles.checkboxContainer}
                    onPress={() => toggleoffer(offer)}
                >
                    <View style={[styles.checkbox, selectedoffers.includes(offer) && styles.checked]}>
                    {selectedoffers.includes(offer) && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.checkboxLabel}>{offer}</Text>
                </TouchableOpacity>
                ))}
            </View>

            <View style={styles.uploadContainer}>
                <Text style={styles.uploadLabel}>Profile</Text>
                <TouchableOpacity style={styles.uploadBox}>
                <Text style={styles.uploadIcon}>⬆</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={styles.submitcont}>
            <TouchableOpacity onPress={() => router.push('/(tabs)')}>
            <Text style={styles.submittxt}>
                Submit
            </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formcont: {
    paddingBottom: 10,
    backgroundColor: '#F7EDE1',
    width: '80%',
    borderRadius: 20,
    height: '65%',
    alignItems: 'center',
    paddingTop: 20,
  },
    imageStyle: {
        width: '160%',
        height: '30%',
        marginBottom: -10,
        marginTop: '-40%'
    },
  formhead: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Bold',
    marginBottom: '10%',
    marginTop: '12%',
  },
  formtxt: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'RobotoSlab-Regular',
    marginBottom: 2,
  },
  inputcont: {
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    marginBottom: '5%',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 11,
  },
  offersSection: {
    width: '65%',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: '5%',
  },
  offerstxt: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'RobotoSlab-Medium',
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,             
    backgroundColor: '#D9D9D9',  
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
  },
row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
},

uploadContainer: {
    alignItems: 'center',
    marginLeft: 20,
    width: '30%',
},

uploadLabel: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'RobotoSlab-Medium',
    marginBottom: 5,
    marginTop: '40%'
},

uploadBox: {
  width: 60,
  height: 60,
  borderRadius: 10,
  backgroundColor: '#D9D9D9',
  justifyContent: 'center',
  alignItems: 'center',
},

uploadIcon: {
  fontSize: 20,
  color: '#000',
},

submitcont: {
    backgroundColor: '#020D19',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: '20%',
    alignSelf: 'flex-end',
    marginRight: '10%',
},

submittxt: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'RobotoSlab-Bold',
}
});

export default HousekeeperForm;
