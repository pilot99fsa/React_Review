// Chakra UIを使うには、１.まずChakraProviderをimportする
import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// コンポーネント全体に適用されるグローバルなスタイル
import theme from './theme/theme';

function App() {
  return (
    // Chakra UIを使うには、2.<ChakraProvider>でChakra UIを使っていきたいコンポーネントを囲む
    // theme.tsで記述したCSSが、ChakraProviderで囲ったコンポーネント全体に適用される
    <ChakraProvider theme={theme}>
      {/* React-router-domを使うにはアプリ全体を囲む、chakraproviderはページのコンポーネントではなので囲まなくても良い*/}
      <BrowserRouter>
        <Button colorScheme="teal">ボタン</Button>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
