import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`products`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProduct();
  }, []);

  function hanleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
            <AddButton onPress={() => hanleAddToCart(item.id)}>
              <AddButtonView>
                <AddButtonIconView>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <AddButtonIconText>{amount[item.id] || 0}</AddButtonIconText>
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
