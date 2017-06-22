import { combineEpics } from 'redux-observable';
// import {
//   getAboutPageEpic,
// } from 'containers/AboutPage/epic';
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
)(...args, { });

export default rootEpic;
