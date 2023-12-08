import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';

export type Items = {
  id: string;
  task: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Items[]>([]);

  const filterTodos = (completed: boolean) => {
    if (completed) {
      return todos.filter(todo => todo.completed === true);
    }
    if (!completed) {
      return todos.filter(todo => todo.completed === false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={styles.title}>ToDo</Text>
      <InputForm todos={todos} setTodos={setTodos} />
      <View style={styles.list}>
        <Text>할 일</Text>
        {todos.length > 0 && (
          <FlatList
            data={filterTodos(false)}
            renderItem={({item}) => (
              <TodoItem item={item} todos={todos} setTodos={setTodos} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <View style={styles.list}>
        <Text>완료된 일</Text>
        {todos.length > 0 && (
          <FlatList
            data={filterTodos(true)}
            renderItem={({item}) => (
              <TodoItem item={item} todos={todos} setTodos={setTodos} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={() => setTodos([])} style={styles.button}>
          <Text>reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '700',
  },
  list: {
    flex: 1,
    padding: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 20,
    borderColor: '#d4d4d4',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
