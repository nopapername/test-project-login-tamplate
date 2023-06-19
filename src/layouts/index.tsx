import { useMount } from 'ahooks';
import 'antd/dist/antd.less';
import {
  Outlet, useModel
} from 'umi';
import classnames from 'classnames';
import { initRem, setTitle } from '@/utils';
import styles from './index.less';

export default function Layout() {
  const {
    isMinScreen, setIsMinScreen, loading,
  } = useModel('usePublicState');

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('地图模块')
  });

  return (
    <section className={classnames(styles.layout)}>
      <Outlet />
    </section>
  );
}
