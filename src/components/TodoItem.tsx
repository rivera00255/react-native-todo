import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {Items} from '../screens/Todos';

const TodoItem = ({
  item,
  todos,
  setTodos,
}: {
  item: Items;
  todos: Items[];
  setTodos: Dispatch<SetStateAction<Items[]>>;
}) => {
  const toggleComplete = (item: Items) => {
    return todos.map(todo => {
      return todo.id === item.id ? {...todo, completed: !todo.completed} : todo;
    });
  };

  return (
    <View style={styles.container}>
      <Text>{item.task}</Text>
      <Pressable
        style={styles.button}
        onPress={() => setTodos(toggleComplete(item))}>
        <Text style={styles.text}>{!item.completed ? 'Done' : 'Undo'}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#737373',
    borderRadius: 5,
    padding: 8,
  },
  text: {
    color: '#fff',
  },
});
