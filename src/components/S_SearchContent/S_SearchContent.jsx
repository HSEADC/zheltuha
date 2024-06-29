import React, { useState, useEffect } from 'react'
import M_card from '../M_card/M_card.jsx'
import { getPostTeasers } from '../../js/searchdata.js'
import A_search from '../A_search/A_search.jsx'

const S_SearchContent = () => {
  const [postTeasers, setPostTeasers] = useState([])
  const [filteredTeasers, setFilteredTeasers] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')

  useEffect(() => {
    getPostTeasers().then((data) => {
      setPostTeasers(data)
      console.log(searchInputValue)
      filterTeasers(data, searchInputValue)
    })
  }, [searchInputValue])

  const filterTeasers = (teasers, query) => {
    console.log(query)
    const lowercasedQuery = query.toLowerCase()
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_~()]/gm

    const filtered = teasers.filter((teaser) => {
      const title = teaser.title
        .replace(nbspRegex, ' ')
        .replace(punctuationRegex, '')
        .toLowerCase()

      const description = teaser.description
        .replace(nbspRegex, ' ')
        .replace(punctuationRegex, '')
        .toLowerCase()

      const titleMatches = title.includes(lowercasedQuery)
      const descriptionMatches = description.includes(lowercasedQuery)

      const tagMatches = teaser.tags.some((tag) => {
        const tagDescription = tag
          .replace(nbspRegex, ' ')
          .replace(punctuationRegex, '')
          .toLowerCase()
        return tagDescription.includes(lowercasedQuery)
      })

      return titleMatches || descriptionMatches || tagMatches
    })
    setFilteredTeasers(filtered)
  }

  const handleSearchInputChange = (value) => {
    setSearchInputValue(value)
  }

  const handleFindButtonClick = () => {
    setSearchInputValue(value)
    filterTeasers(postTeasers, searchInputValue)
  }

  return (
    <>
      <div className="M_search">
        <A_search onEnter={handleSearchInputChange} />
      </div>
      <div className="O_cards">
        {filteredTeasers.map((teaser) => (
          <M_card
            title={teaser.title}
            description={teaser.description}
            key={teaser.id}
            url={teaser.url}
            images={teaser.image}
            tags={teaser.tags}
          />
        ))}
      </div>
    </>
  )
}

export default S_SearchContent
