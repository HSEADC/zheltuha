import React from 'react'

const M_card = ({ title, description, url, tags, images }) => {
  return (
    <a className="M_card" href={url}>
      <img className="A_img" src={images} />
      <h4>{title}</h4>
      <div className="M_commons_teg for_cards">
        {tags.map((tag, index) => (
          <div key={index} className="A_commons_teg p3">
            {tag}
          </div>
        ))}
      </div>
      <p>{description}</p>
    </a>
  )
}

export default M_card
