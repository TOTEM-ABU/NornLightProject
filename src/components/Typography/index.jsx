import React from 'react'
import { H1, H2, H3, H4, H5, Text, Text2, Menu, Menu2 } from './Typography.styles'

const Typography = ({type, text = 'Text Berilmadi', styled}) => {

  const textTypes = ['H1', 'H2', 'H3', 'H4', 'H5', 'Text', 'Text2', 'Menu', 'Menu2'];

  const textObj = {
    H1: <H1 style={styled} >{text}</H1>,
    H2: <H2 style={styled} >{text}</H2>,
    H3: <H3 style={styled} >{text}</H3>,
    h4: <H4 style={styled} >{text}</H4>,
    H5: <H5 style={styled} >{text}</H5>,
    Text: <Text style={styled} >{text}</Text>,
    Text2: <Text2 style={styled} >{text}</Text2>,
    Menu: <Menu style={styled} >{text}</Menu>,
    Menu2: <Menu2 style={styled} >{text}</Menu2>
  }

  if(!textTypes.includes(type)){
    return <H2> Text Type Xato berilgan </H2>
  } else {
    return textObj[type];
  }

}

export default Typography;