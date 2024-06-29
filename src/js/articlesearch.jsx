import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import S_SearchContent from '../components/S_SearchContent/S_SearchContent.jsx'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.O_search')
  const root = createRoot(container)
  root.render(<S_SearchContent />)
})
