//styles
//img
import luna from '../assets/luna.png'

import './styles.css'


const root = document.getElementById('root')
const title = document.createElement('h1')
title.textContent = 'intocode'

//img src
const img = document.createElement('img')
img.src = luna


title.className = 'int'

root.append(title, img)