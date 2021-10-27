import React from 'react'
import { Image } from 'react-native'

const Ellipse = ({
    imgUrl = '../assets/icon.png',
}) => {
    return (
        <Image 
            source={require(imgUrl)}
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
            }}
        />
    )
}

export default Ellipse
