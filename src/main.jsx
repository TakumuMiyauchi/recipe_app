import './assets/styles/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Register from './Register.jsx'
import List from './List.jsx'
import ListMore from './ListMore.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
		<Register />
		<List />
		<ListMore />
  </StrictMode>,
)
