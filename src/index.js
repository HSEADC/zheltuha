import { list } from 'postcss'
import './index.css'
// ФИЛЬТРАЦИЯ

document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.A_commons_teg')
  const cards = document.querySelectorAll('.M_card')
  const cardsContainer = document.querySelector('.C_archive_cards')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      const filter = tag.textContent.trim()
      tags.forEach((t) => (t.style.backgroundColor = ''))
      tag.style.backgroundColor = '#fcf549'
      let visibleCardsCount = 0

      cards.forEach((card) => {
        const cardTags = card.querySelectorAll('.A_commons_teg')
        if (
          Array.from(cardTags).some(
            (cardTag) => cardTag.textContent.trim() === filter
          )
        ) {
          card.style.display = ''
          visibleCardsCount++
        } else {
          card.style.display = 'none'
        }
      })

      if (visibleCardsCount > 0 && visibleCardsCount <= 4) {
        cardsContainer.style.gridTemplateColumns = `repeat(${visibleCardsCount}, 315.55px)`
      } else {
        cardsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
      }
    })
  })

  // ВЕРЮ НЕ ВЕРЮ
  const buttons = document.querySelectorAll('.A_button')

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const card = button.closest('.M_card')

      const image = card.querySelector('.A_answer')
      image.style.display = 'none'

      if (image.style.display === 'none') {
        image.style.display = 'block'
      } else {
        image.style.display = 'none'
      }
      button.classList.add('active')

      const allButtonsInContainer = card.querySelectorAll('.A_button')
      allButtonsInContainer.forEach((btn) => {
        if (btn !== button) {
          btn.disabled = true
          btn.style.pointerEvents = 'none'
        }
      })
    })
  })
  // МЕНЮ

  if (window.innerWidth < 1024) {
    const burger = document.getElementsByClassName('A_menu')[0]
    const burgerbig = document.getElementsByClassName('S_nav_bar')[0]
    burger.addEventListener('click', () => {
      if (
        burgerbig.style.height === '17.52vw' ||
        burgerbig.style.height === ''
      ) {
        burgerbig.style.height = 'fit-content'
      } else {
        burgerbig.style.height = '17.52vw'
      }
    })
  }

  // ХОВЕР

  // ТЕСТЫ
  const buttons2 = document.querySelectorAll('.A_button')

  buttons2.forEach((button) => {
    button.addEventListener('click', function (event) {
      const buttonText = button.textContent.trim().toLowerCase()
      const cardContainer = document.querySelector('.O_test_page_right_cards')
      cardContainer.style.opacity = '1'
    })
  })
})
