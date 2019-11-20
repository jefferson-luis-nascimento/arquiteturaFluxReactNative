import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #666;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 20px;
  background: #fff;
`;

export const ProductItem = styled.View`
  flex: 1;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;
export const ProductImage = styled.Image`
  align-self: center;
  width: 250px;
  height: 250px;
  border-radius: 4px;
  background: #eee;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
  font-weight: bold;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;
export const AddButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
`;

export const AddButtonView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
