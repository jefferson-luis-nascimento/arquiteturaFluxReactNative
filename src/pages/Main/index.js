import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonView,
  AddButtonText
} from './styles';

// import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    // const response = await api.get(`products`);

    this.setState({
      products: [
        {
          id: 1,
          title: 'Tênis de Caminhada Leve Confortável',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
        },
        {
          id: 2,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
        },
        {
          id: 3,
          title: 'Tênis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
        },
        {
          id: 5,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
        },
        {
          id: 6,
          title: 'Tênis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
        },
        {
          id: 4,
          title: 'Tênis de Caminhada Leve Confortável',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
        }
      ]
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton>
                <AddButtonView>
                  <MdShoppingCart size={20} />
                  <AddButtonText>Adicionar ao carrinho</AddButtonText>
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
