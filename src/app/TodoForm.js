import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

//stateless component
export const TodoForm = (props) => (
	<View style = {styles.form}>
    <TextInput
      placeholder = 'Enter Todo'
      style = {styles.input}
      value = {props.value}
      onChangeText = {props.handleChange}
    />
    <TouchableOpacity 
      style={styles.button}
      onPress={props.handlePress}>
      <Text style = {styles.text}>create</Text>
    </TouchableOpacity>
  </View>
  
)

const styles = StyleSheet.create({
	form: {
		flexDirection: 'row',
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 4,
	},
	input: {
		flex: 0.7,
		margin: 30,
		height: 30,
		fontSize: 24,
		
	},
	button: {
		flex: 0.3,
		margin: 30,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
		height: 30

	},

	buttonText: {
		fontSize: 24,
		fontWeight: 'bold'
	}
});


