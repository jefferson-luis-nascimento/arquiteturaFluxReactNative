import React, { Component } from 'react';
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
  FinalizeOrder,
  FinalizeOrderText,
  EmptyCartText,
} from './styles';

export default class Cart extends Component {
  state = {
    cart: [
      /* {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        priceFormatted: 'R$ 139,90',
        amount: 2,
        subtotal: 279.8,
        subtotalFormatted: 'R$ 279,80',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      }, */
    ],
  };

  render() {
    const { cart } = this.state;
    console.tron.log(cart);
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
              keyExtractor={product => product.id}
              renderItem={({ item }) => (
                <CartItem>
                  <CartItemDetails>
                    <ItemImage source={{ uri: item.image }} />
                    <ItemDetails>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{item.priceFormatted}</ItemPrice>
                    </ItemDetails>
                    <RemoveItemButton onPress={() => {}}>
                      <Icon name="delete-forever" color="#7159c1" size={24} />
                    </RemoveItemButton>
                  </CartItemDetails>
                  <CartItemTotals>
                    <CartItemAmount>
                      <AddAmountButton onPress={() => {}}>
                        <Icon
                          name="add-circle-outline"
                          color="#7159c1"
                          size={24}
                        />
                      </AddAmountButton>
                      <AmountInput value={String(item.amount)} />
                      <SubtractAmountButton onPress={() => {}}>
                        <Icon
                          name="remove-circle-outline"
                          color="#7159c1"
                          size={24}
                        />
                      </SubtractAmountButton>
                    </CartItemAmount>
                    <CartItemSubtotal>
                      {item.subtotalFormatted}
                    </CartItemSubtotal>
                  </CartItemTotals>
                </CartItem>
              )}
            />
            <Total>
              <TotalText>Total</TotalText>
              <TotalValue>R$ 690,80</TotalValue>
              <FinalizeOrder>
                <FinalizeOrderText>FinalizarPedido</FinalizeOrderText>
              </FinalizeOrder>
            </Total>
          </>
        )}
      </Container>
    );
  }
}
