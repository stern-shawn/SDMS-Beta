import { combineEpics } from 'redux-observable';
import {
  signInEpic,
} from 'clientAuth/epic';
import {
  closeMobileNavEpic,
} from 'containers/App/epic';
// import {
//   getBlogPostBySlugEpic,
//   getPageOfPostsEpic,
// } from 'containers/Blog/epic';
// import * as blogApi from 'utils/blogApi';

const rootEpic = (...args) => combineEpics(
  closeMobileNavEpic,
  signInEpic,
)(...args, { });

export default rootEpic;
