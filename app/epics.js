import { combineEpics } from 'redux-observable';
import {
  getAboutPageEpic,
} from 'containers/AboutPage/epic';
import {
  closeNavEpic,
  fetchPageEpic,
} from 'containers/App/epic';
import {
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
// import * as blogApi from 'utils/blogApi';

const rootEpic = (...args) => combineEpics(
  closeNavEpic,
  fetchPageEpic,
  getAboutPageEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
)(...args, { });

export default rootEpic;
