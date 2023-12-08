import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Items} from '../screens/Todos';

const generateId = () => {
  return Date.now().toString();
};

const InputForm = ({
  todos,
  setTodos,
}: {
  todos: Items[];
  setTodos: Dispatch<SetStateAction<Items[]>>;
}) => {
  const [inputValue, setInputValue] = useState('');

  const createTodo = (value: string) => {
    if (value.length < 1) return;
    return {id: generateId(), task: value, completed: false};
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        style={styles.input}
      />
      <Pressable
        onPress={() => {
          const todo = createTodo(inputValue);
          if (todo) {
            setTodos(prev => [...prev, todo]);
            setInputValue('');
          }
        }}
        style={styles.press}>
        <Text>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    padding: 7,
    borderRadius: 5,
    fontSize: 15,
    marginRight: 10,
    width: '80%',
  },
  press: {
    backgroundColor: '#d4d4d4',
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
