import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import './config/DevToolsConfig';
import './config/ReactotronConfig';

import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Gabriel Batista',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed suscipit mauris. Curabituid urna volutpat, suscipit ante et, semper elit. Nulla at felis feugiat, eleifend lorem eu, auctor neque.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Gabriel Batista',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed suscipit mauris. Curabituid urna volutpat, suscipit ante et, semper elit. Nulla at felis feugiat, eleifend lorem eu, auctor neque.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Gabriel Batista',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed suscipit mauris. Curabituid urna volutpat, suscipit ante et, semper elit. Nulla at felis feugiat, eleifend lorem eu, auctor neque.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Gabriel Batista',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed suscipit mauris. Curabituid urna volutpat, suscipit ante et, semper elit. Nulla at felis feugiat, eleifend lorem eu, auctor neque.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Gabriel Batista',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed suscipit mauris. Curabituid urna volutpat, suscipit ante et, semper elit. Nulla at felis feugiat, eleifend lorem eu, auctor neque.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
