import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaInicio from './TelaInicio';
import TelaRespostaCorreta from './TelaRespostaCorreta';
import TelaRespostaErrada from './TelaRespostaErrada';
import TelaTabuada from './TelaTabuada';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="RespostaCorreta" component={TelaRespostaCorreta} />
        <Stack.Screen name="RespostaErrada" component={TelaRespostaErrada} />
        <Stack.Screen name="Tabuada" component={TelaTabuada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
