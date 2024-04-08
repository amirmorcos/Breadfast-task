import {Image} from 'react-native';

const Images = {
  logo: Image.resolveAssetSource(require('../../assets/images/logo.png')),
  backIcon: Image.resolveAssetSource(
    require('../../assets/images/backIcon.png'),
  ),
};

export default Images;
