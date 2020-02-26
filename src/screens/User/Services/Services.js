import React from 'react';

import {connect} from 'react-redux';

import {FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {recipes} from '../../../data/dataArrays';
import {getCategoryName} from '../../../data/MockDataAPI';

const Services = ({navigation}) => {
  function onPressRecipe(item) {
    navigation.navigate('Recipe', {item});
  }

  function renderRecipes({item}) {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{uri: item.photo_url}} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null,
)(Services);
