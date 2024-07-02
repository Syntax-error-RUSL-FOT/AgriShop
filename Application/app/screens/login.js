import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const login = () => {
    navigation.navigate('index');
  };
  return (
    <View>
      <SafeAreaView style={{ flex: 2 }}>
        <KeyboardAvoidingView style={{ flex: 2 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <ImageBackground source={require('../../assets/login_bg.png')} style={{
            height: hp(100),
            width: wp(100),
            position: 'absolute',
            flex: 1
          }} resizeMode='cover' />
          <Stack.Screen
            options={{
              title: 'Create an Account',
              statusBarColor: 'green',
              headerShown: false
            }}
          />

          <View style={styles.signup_view}>
            <View style={styles.signup_header}>
              <Text style={styles.title}>Login</Text>
            </View>
            {/* Signup form */}

            <View>
              <View style={styles.input_other}>
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} secureTextEntry />
              </View>
              <View>
                <Link href={{ pathname: '../screens/forgot_psw' }} style={{
                  fontSize: 18,
                  textAlign: 'center',
                  marginVertical: hp(2),
                  color: 'green',
                  fontWeight: '600'
                }}>
                  <Text>Forgot Password? </Text>
                </Link>
                <View style={{
                  flexDirection: 'row',
                  paddingHorizontal: wp(15)
                }}>
                  <Text style={{
                    fontSize: 18,
                    textAlign: 'center'
                  }}>Didn't have an account?  </Text>
                  <Link href={{ pathname: '../screens/signup' }} style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'green',
                    fontWeight: '600'
                  }}>
                    <Text>Create an account</Text>
                  </Link>
                </View>
                <View>
                  <TouchableOpacity style={styles.btn_signup} onPress={login}>
                    <View>
                      <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: '600',
                        // marginHorizontal: wp(30),
                        textAlign:'center',
                        marginTop: hp(2)
                      }}>Login</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  signup_view:
  {
    marginTop: hp(40),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    height: hp(80),
    width: wp(100),
    position: 'absolute',
    flex: 2
  },
  title:
  {
    fontSize: 32,
    fontWeight: '600',
    marginVertical: hp(2),
    textAlign: 'center'
  },
  signup_header:
  {
    textAlign: 'center'
  },
  input_name:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8)
  },
  input_other:
  {
    paddingHorizontal: wp(8)
  },
  input:
  {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    height: hp(8),
    alignItems: 'center',
    paddingLeft: wp(5),
    marginVertical: wp(2),
    fontSize: 18
  },
  btn_signup:
  {
    backgroundColor: '#3e8e23',
    height: hp(8),
    width: wp(90),
    marginHorizontal: 30,
    borderRadius: 15,
    marginTop: hp(15),
    textAlignVertical: 'center'
  }
})