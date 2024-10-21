
import { ScrollView } from 'react-native';
import HooksTest from './src/Telas/HooksTest';
import Prime from './src/Telas/Prime'
import Contador from './src/Components/Contador';
import CadNews from './src/Components/CadNews';

export default function App() {
  return (
    <ScrollView>
      <Prime/>
      <CadNews/>
      <Contador/>
    </ScrollView>
  )
}

