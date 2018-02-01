import React, { Component } from 'react';
import { Image } from 'react-native'

class TabbarItem extends Component {
    render() {
        let selectedImage = this.props.selectedImage ? 
                            this.props.selectedImage : 
                            this.props.normalImage
        return (
            <Image 
                style={{tintColor: this.props.tintColor, width: 25, height: 25}}
                source={this.props.focus ? selectedImage : this.props.normalImage}
            />
        );
    }
}

export default TabbarItem;