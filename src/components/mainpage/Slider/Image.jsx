import React from 'react'

const Image = ({ setofImages }) => {

  return (
    <>
      {
        setofImages.map(items =>
          <div key={items}>
            <img src={items} width="100%" />
          </div>
        )
      }
    </>
  )
}

export default Image
