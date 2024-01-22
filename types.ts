// // types.ts
// export type RootStackParamList = {
//     Home: undefined;
//     Login: undefined;
//     Profile: undefined;
//     MyLoans: undefined;
//     loans:undefined;
    
//   };
  // types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Profile: undefined;
  MyLoans: undefined;
  loans: undefined;
  Splash:undefined;
};

export type LoansScreenNavigationProp = StackNavigationProp<RootStackParamList, 'loans'>;
