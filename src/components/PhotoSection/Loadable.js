import loadable from '@loadable/component';

const PhotoSection = loadable(() => import(/* webpackChunkName: "chunk-photo-section" */ './index'));
export default PhotoSection;
