// アプリ全体使われるグローバルなスタイルを定義していく
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // ここにCSSを記述していく
        backgroundColor: 'gray.100', // 背景色
        clor: 'gray.800', //文字色
      },
    },
  },
});

export default theme;
