import { getUserInfo } from '@/api/user';
import storage from '@/utils/storage';
/**
 * 页面鉴权
 * 加载用户信息，生成token
 */
export default async function AuthLoader() {
  try {
    const userInfo: any = await getUserInfo();
    return userInfo;
  } catch (error) {
    return '';
  }
}
