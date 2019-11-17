import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Baselayer extends Component {
  render() {
    let baselayerPic = {
      uri: 'https://www.gearhungry.com/wp-content/uploads/bfi_thumb/icebreaker-merino-crew-neck-base-layer-top-6qymgpqfbhk4qbwjlpwx2hdp40hxajxx4nglf2s4776.jpg'
    };
    return (
      <Image source={baselayerPic} style={{width: 193, height: 110}}/>
    );
  }
}
