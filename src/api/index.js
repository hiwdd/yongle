import { http } from '@utils/http';

//default.json
export const defaultJson = () => http('get', '/server/category/default.json');

//index.json
export const indexJson = () => http('get', '/server/content/index.json');

//list.json
export const listJson = () => http('get', '/server/content/city/list.json');

//getCityByName.json
export const getCityByNameJson = () =>
  http('post', '/server/content/getCityByName.json');

//moreSearch.json
export const moreSearchJson = () =>
  http('post', '/server/search/moreSearch.json');
