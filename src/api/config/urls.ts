// https://github.com/Vagoalex/starter-templates/blob/vue3_ts_pinia/src/api/config/urls.ts
const alexLinkGit = process.env.VUE_APP_ALEX_GIT;
// console.log(process.env);
// console.log(process.env.VUE_APP_TEST);
const fakeDb = process.env.VUE_APP_BASE_API_URL;
const fakeTodoUrl = process.env.VUE_APP_BASE_API_FAKE;

const urlTemplateParts = {
  id: "{id}",
  subId: "{subId}",
  thirdId: "{thirdId}",
};

// замена айди старый на новый
const productId = "5757";
const userId = "111";
const getSingleProductByNumber = `/products/${urlTemplateParts.id}/users/${urlTemplateParts.subId}`;
const URL = getSingleProductByNumber
  .replace(urlTemplateParts.id, productId)
  .replace(urlTemplateParts.subId, userId);
// ???
export const urls = {
  tasks: {
    // localhost
    getTasks: `${fakeTodoUrl}`,
    getTaskId: `${fakeDb}/task/${urlTemplateParts.id}`,
  },
};
