import { BsEmojiExpressionless } from 'react-icons/bs'

import { Poem } from 'types/poem'

import Card from './card'

type Props = {
  items: Poem[]
}

const Poems = ({ items }: Props) => {
  const nothing = (
    <div className="flex flex-row justify-center items-center text-main text-xl">
      <BsEmojiExpressionless />
      <span className="ml-2">ポエムが見つかりません…</span>
    </div>
  )

  const cards = (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((e) => (
        <Card key={e.text} poem={e} shouldShowButton={true} />
      ))}
    </div>
  )

  return <div className="mb-16 font-kiwi">{items.length ? cards : nothing}</div>
}

export default Poems
