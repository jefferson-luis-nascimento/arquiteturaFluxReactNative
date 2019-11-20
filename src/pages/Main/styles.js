import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  background: #000;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  background: #000;
`;

export const ProductItem = styled.View`
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButtonView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;
export const AddButton = styled(RectButton)`
  flex-direction: row;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  align-items: center;
`;

export const AddButtonIconView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
`;

export const AddButtonIconText = styled.Text`
  margin-left: 6px;
  font-size: 16px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
