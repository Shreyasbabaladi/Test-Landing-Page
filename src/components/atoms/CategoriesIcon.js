import React from 'react'
import { Card,CardBody,CardSubtitle } from 'reactstrap';
import { FaLaptop, FaTshirt, FaUtensils, FaBook, FaDumbbell, FaGamepad, FaShoppingBasket, FaGem, FaCar } from 'react-icons/fa';

const components = {
  FaLaptop: FaLaptop,
  FaTshirt: FaTshirt,
  FaUtensils:FaUtensils,
  FaBook:FaBook,
  FaDumbbell:FaDumbbell,
  FaGamepad:FaGamepad,
  FaShoppingBasket:FaShoppingBasket,
  FaGem:FaGem,
  FaCar:FaCar
};

const CategoriesIcon = ({categorie}) => {
    const {name, icon} = categorie;

    //dynamicaly importing icon
    const SpecificStory = components[icon];
  return (
    <Card className='icon-penal py-4'>
        <SpecificStory />
        <CardBody>
            <CardSubtitle className='text-center'>
                {name}
            </CardSubtitle>
        </CardBody>
    </Card>
  )
}

export default CategoriesIcon
