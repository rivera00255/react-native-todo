import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PostItem} from '../screens/Posts';

const Post = ({item}: {item: PostItem}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.body}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    margin: 10,
    borderWidth: 2,
    borderColor: '#d4d4d4',
    borderRadius: 5,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  content: {
    marginTop: 8,
  },
});
