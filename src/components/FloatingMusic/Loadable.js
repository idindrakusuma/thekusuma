import loadable from '@loadable/component';

const FloatingMusic = loadable(() => import(/* webpackChunkName: "floating-music" */ './index'));
export default FloatingMusic;
