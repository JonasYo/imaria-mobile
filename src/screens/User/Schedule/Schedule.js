import React from 'react';

import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../../data/MockDataAPI';
import { recipes } from '../../../data/dataArrays';

const Schedule = ({ navigation }) => {
  const ingredientsArray = getAllIngredients([1]);

  function onPressIngredient(item) {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate('Ingredient', { ingredient, name });
  }

  function renderIngredient({ item }) {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        onPress={() => onPressIngredient(item[0])}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
          <Text style={styles.title}>{item[0].name}</Text>
          <Text style={{ color: 'grey' }}>{item[1]}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

const mapStateToProps = state => ({});

export default Schedule;
