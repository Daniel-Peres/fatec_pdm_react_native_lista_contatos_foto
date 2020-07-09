import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaContatosTela from '../telas/ListaContatosTela';


const ContatoNavigator = createStackNavigator({
    ListaDeContatos: ListaContatosTela,
    NovoContato: NovoContatoTela
});

export default createAppContainer(ContatoNavigator);