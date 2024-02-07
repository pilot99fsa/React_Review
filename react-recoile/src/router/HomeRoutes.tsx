import Home from '../components/pages/Home';
import Page404 from '../components/pages/Page404';
import Setting from '../components/pages/Setting';
import UserManagement from '../components/pages/UserManagement';

// ここではユーザーのパスを設定していく
const homeRoutes = [
  {
    path: '/', // ルートのパスを意味する。
    exact: 'true', // ルートに厳密に一致するかどうかを指定する。tureと指定しているので、パスが完全一致する時だけこのルートを適用する
    children: <Home />, // ルートに一致した時に表示されるコンポーネントを指定する
  },
  // "/"は<Home />のルートであると指定している
  {
    path: '/user_management',
    exact: 'false', // 指定したパスがURLの一部として含まれている場合にも対応するコンポーネントが表示されるようになる
    children: <UserManagement />,
  },
  {
    path: '/setting',
    exact: 'false',
    children: <Setting />,
  },
  {
    path: '*',
    exact: 'false',
    children: <Page404 />,
  },
];
export default homeRoutes;
