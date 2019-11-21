import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

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
  AddButtonText,
} from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`products`);

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  hanleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
              <AddButton onPress={() => this.hanleAddToCart(item.id)}>
                <AddButtonView>
                  <AddButtonIconView>
                    <Icon name="add-shopping-cart" size={20} color="#fff" />
                    <AddButtonIconText>
                      {amount[item.id] || 0}
                    </AddButtonIconText>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
