import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cart }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="add-shopping-cart" size={24} color="#fff" />
        {cart.length > 0 && <ItemCount>{cart.length}</ItemCount>}
      </BasketContainer>
    </Container>
  );
}

/* Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cart: PropTypes.shape().isRequired,
}; */

export default connect(state => ({
  cart: state.cart,
}))(Header);
