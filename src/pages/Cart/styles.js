import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
  padding: 10px;
  background: #fff;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  border-radius: 4px;
`;

export const CartItem = styled.View`
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  flex: 1;
`;

export const CartItemDetails = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  align-content: center;
`;

export const ItemDetails = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const ItemTitle = styled.Text`
  margin-left: 10px;
  text-align: left;
  font-size: 16px;
`;

export const ItemPrice = styled.Text`
  margin-left: 10px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  border-radius: 4px;
  width: 28px;
  height: 28px;
`;

export const CartItemTotals = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e9e9e9;
  border-radius: 4px;
  padding: 10px;
`;

export const CartItemAmount = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AddAmountButton = styled.TouchableOpacity`
  border-radius: 4px;
  width: 28px;
  height: 28px;
`;

export const AmountInput = styled.TextInput.attrs({
  readonly: true,
})`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  width: 50px;
  background: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;
export const SubtractAmountButton = styled.TouchableOpacity`
  border-radius: 4px;
  width: 28px;
  height: 28px;
`;

export const CartItemSubtotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Total = styled.View`
  margin: 10px;
  background: #fff;
  height: 300px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: #666;
`;
export const TotalValue = styled.Text`
  font-size: 36px;
  font-weight: bold;
`;
export const FinalizeOrder = styled(RectButton)`
  margin-top: 20px;
  border: 0;
  border-radius: 4px;
  background: #7159c1;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const FinalizeOrderText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const EmptyCartText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
