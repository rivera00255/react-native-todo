import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import Post from '../components/Post';

export type PostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  const getPosts = async () => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => setPosts(res.data))
    //   .catch(err => console.log(err));
    try {
      const response: AxiosResponse<PostItem[]> = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <View style={styles.list}>
        {posts.length > 0 ? (
          <FlatList
            data={posts}
            renderItem={({item}) => <Post item={item} />}
            keyExtractor={item => item.id.toString()}
            disableVirtualization={false}
          />
        ) : (
          <Text>No Data</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Posts;

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
    padding: 10,
  },
});
