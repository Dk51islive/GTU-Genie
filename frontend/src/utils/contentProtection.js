export const disableScreenshot = () => {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('')
      alert('Screenshot is disabled!')
      e.preventDefault()
    }
  })

  document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('')
      alert('Screenshot blocked!')
      e.preventDefault()
    }
  })
}

export const disableRightClick = () => {
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault()
  })
}
