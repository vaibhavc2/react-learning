import React from 'react'

// const Heading = (props) => {
const Heading = ({name, text, price = 99}) => {
  // const { name, text, price } = props;
  return (
    <>
      <h1>Heading</h1>
      {/* <p>{props.name}</p> */}
      {/* <p>{props.text}</p> */}
      {/* <p>{props.price}</p> */}
      <p>{name}</p>
      <p>{text}</p>
      <MiddleHeading value={price} />
    </>
  )
}

export const MiddleHeading = ({value = 99}) => <h3>Price: {value}</h3>

export const SmallHeading = () => <h5>Small Heading</h5>

// export {middleHeading, smallHeading};
export default Heading