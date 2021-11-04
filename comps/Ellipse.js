import React from 'react'
import { Image } from 'react-native'

const Ellipse = ({
    imgUrl = 'https://thumbs.dreamstime.com/b/beautiful-woman-headshot-over-white-background-101850107.jpg',
}) => {
    return (
        <Image 
            source={{uri:imgUrl}}
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                margin: 10,
            }}
        />
    )
}

export default Ellipse
