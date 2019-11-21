import React from 'react';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartList,
  CartItem,
  CartItemDetails,
  ItemImage,
  ItemDetails,
  ItemTitle,
  ItemPrice,
  RemoveItemButton,
  CartItemTotals,
  AddAmountButton,
  AmountInput,
  SubtractAmountButton,
  CartItemAmount,
  CartItemSubtotal,
  Total,
  TotalText,
  TotalValue,
  FinalizeOrderButton,
  FinalizeOrderButtonText,
  EmptyCartText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function handleFinalizeOrder() {
    Alert.alert('Pedido feito com sucesso.');
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <>
          <Icon name="remove-shopping-cart" size={48} color="#c1c1c1" />
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </>
      ) : (
        <>
          <CartList
            data={cart}
            keyExtractor={(product, index) => String(index)}
            renderItem={({ item }) => (
              <CartItem>
                <CartItemDetails>
                  <ItemImage source={{ uri: item.image }} />
                  <ItemDetails>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>{item.priceFormatted}</ItemPrice>
                  </ItemDetails>
                  <RemoveItemButton onPress={() => removeFromCart(item.id)}>
                    <Icon name="delete-forever" color="#7159c1" size={24} />
                  </RemoveItemButton>
                </CartItemDetails>
                <CartItemTotals>
                  <CartItemAmount>
                    <SubtractAmountButton onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={24}
                      />
                    </SubtractAmountButton>
                    <AmountInput value={String(item.amount)} />
                    <AddAmountButton onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={24}
                      />
                    </AddAmountButton>
                  </CartItemAmount>
                  <CartItemSubtotal>{item.subtotalFormatted}</CartItemSubtotal>
                </CartItemTotals>
              </CartItem>
            )}
          />
          <Total>
            <TotalText>Total</TotalText>
            <TotalValue>{total}</TotalValue>
            <FinalizeOrderButton onPress={handleFinalizeOrder}>
              <FinalizeOrderButtonText>
                Finalizar Pedido
              </FinalizeOrderButtonText>
            </FinalizeOrderButton>
          </Total>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.amount * product.price,
    subtotalFormatted: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
