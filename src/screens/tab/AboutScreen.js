import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AboutScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the About Screen</Text>
            </View>
        );
    }
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
About