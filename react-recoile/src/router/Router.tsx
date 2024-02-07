import { Route, Routes } from 'react-router-dom';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import UserManagement from '../components/pages/UserManagement';
import Setting from '../components/pages/Setting';
import Page404 from '../components/pages/Page404';

function Router() {
  return (
    // react-router-domのver6からはSwitchは廃止されている点に注意する
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path="home">
          <Route index element={<Home />} />
          {/* // indexを設定したRouteが最初に表示される */}
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        {/* 404エラーのページ */}
        <Route>
          <Route path="*" element={<Page404 />} />
        </Route>
        {/* end 404エラーのページ */}
      </Routes>
    </>
  );
}
export default Router;
