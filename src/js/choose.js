document.addEventListener('DOMContentLoaded', function () {
  const knopka = document.getElementsByClassName('knopka')[0]
  const knopka2 = document.getElementsByClassName('knopka2')[0]
  const deepfakes = document.getElementsByClassName('deepfakes')[0]
  const zagolovki = document.getElementsByClassName('zagolovki')[0]

  knopka.addEventListener('click', () => {
    zagolovki.style.display = 'none'
    deepfakes.style.display = 'flex'
    knopka.style.backgroundColor = '#FBF448'
    knopka2.style.backgroundColor = '#d4d3c0'
  })
  knopka2.addEventListener('click', () => {
    zagolovki.style.display = 'flex'
    deepfakes.style.display = 'none'
    knopka2.style.backgroundColor = '#FBF448'
    knopka.style.backgroundColor = '#d4d3c0'
  })
})
