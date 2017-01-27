import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import {TodoForm} from './TodoForm';
import {connect} from 'react-redux';
import {createTodo, getTodos} from './actionCreators'


export class _Todo extends Component {

  static defaultProps = {
    todos: []
  }
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  componentDidMount(){
    this.props.getTodos();
  }

  handleChange(text) {
    this.setState({newTodo: text});
  }
  
  handlePress() {

    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }
  
  render() {
    return (
      <View 
        style = {styles.container}>
        <TodoForm 
          handlePress = {this.handlePress.bind(this)}
          handleChange = {this.handleChange.bind(this)}
          value = {this.state.newTodo}/>
        <ScrollView style = {styles.todos}>
          {this.props.todos.map((todo, i) => (
            <View 
            style = {styles.todo} key={i}>
	            <Text
	              style = {styles.todoText} 
	              >{todo.name}
	            </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}

//inline action no action creator
const mapActionsToProps = (dispatch) => ({
  
  createTodo: (todo) => {
    dispatch(createTodo({name: todo}))
  },
  getTodos(){
    dispatch(getTodos())
  }
});

const mapStateToProps  = (state) => ({
  todos: state.todos
})
export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo)

const styles = StyleSheet.create({

	container: {
    flex: 1,
    padding: 20
	},
	
	todos: {
		marginTop: 60
	},
	todo: {
		marginBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey'
	},
	todoText: {
		fontSize: 24
	}
})