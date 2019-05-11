import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Post = ({ post }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{post.title}</Text>
    <Text>{post.author}</Text>
    <Text style={styles.postText}>{post.text}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Post;
