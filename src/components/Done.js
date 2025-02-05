import Card from './Card'
import Wrapper from './Wrapper'

const cards = [
  {title: 'play game'},
]

function Done() {
   return <Wrapper heading="DONE">
    {cards.length && cards.map((card, index) => <Card key={index} title={card.title}/>)}
  </Wrapper>
}

export default Done