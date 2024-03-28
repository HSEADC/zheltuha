import { list } from 'postcss'
import './index.css'

//   GetContentCardDataTags()
//   function GetContentCardDataTags() {
//     const contentCards = document.getElementsByClassName('M_card')
//     const tags = []
//     const transformedTags = []
//     for (let index = 0; index < contentCards.length; index++) {
//       const contentCard = contentCards[index]
//       const ContentCardsTags = contentCard.dataset.tags.split(',')
//       tags.push(...ContentCardsTags)
//     }
//     tags.forEach((tags) => {
//       transformedTags.push(tags.toLowerCase())
//     })
//     const UniqueTags = [...new Set(transformedTags)]
//     return UniqueTags.sort()
//   }
//   function updateContent() {
//     const contentCards = document.querySelectorAll('.M_card')
//     const SelectedTags = []
//     MultiSelectOptions.forEach((obj) => {
//       if (obj.active) {
//         SelectedTags.push(obj.text)
//       }
//       console.log(SelectedTags)
//     })
//   }
//   const MultiSelectOptions = []
//   GetContentCardDataTags().forEach((tag) => {
//     MultiSelectOptions.push({
//       text: tag,
//       active: false
//     })
//     console.log(MultiSelectOptions)
//   })
//   document.querySelectorAll('A_button').addEventListener('click') {
//   }

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('.A_button')
  const image = document.querySelector('.A_answer')

  button.addEventListener('click', function () {
    button.classList.add('.active')
    if (image.style.display === 'none') {
      // Если картинка скрыта, отображаем её
      image.style.display = 'block'
    } else {
      // Если картинка отображается, скрываем её
      image.style.display = 'none'
    }

    // Button.classList.add('active')
    // document.querySelector('.A_deepfake').classList.add('.visible')
  })
  console.log(button)
})
