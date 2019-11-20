import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonIconView,
  AddButtonIconText,
  AddButtonView,
  AddButtonText
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get(`products`);

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <AddButtonView>
                  <AddButtonIconView>
                    <Icon name="add-shopping-cart" size={20} color="#fff" />
                    <AddButtonIconText>3</AddButtonIconText>
                  </AddButtonIconView>
                  <AddButtonText>Adicionar</AddButtonText>
                </AddButtonView>
              </AddButton>
            </ProductItem>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Rocketshoes'
};
