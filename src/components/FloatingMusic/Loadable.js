import loadable from '@loadable/component';

const FloatingMusic = loadable(() => import(/* webpackChunkName: "chunk-floating-music" */ './index'));
export default FloatingMusic;
