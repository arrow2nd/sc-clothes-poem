import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import LinkButton from './link-button'

const Footer = () => (
  <footer className="flex flex-col items-center justify-center text-center w-full h-80 md:h-64 px-5 bg-shiny text-white">
    <div className="flex flex-row mb-8">
      <LinkButton href="https://twitter.com/arrow_2nd">
        <AiFillTwitterCircle />
      </LinkButton>
      <LinkButton href="https://github.com/arrow2nd/shiny-poems">
        <AiFillGithub />
      </LinkButton>
    </div>
    <div className="mb-2">
      <span>
        {'Logo icon made by '}
        <a
          className="font-bold"
          title="Pixel perfect"
          href="https://www.flaticon.com/authors/pixel-perfect"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixel perfect
        </a>
        {' from '}
        <a
          className="font-bold"
          title="Flaticon"
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.flaticon.com
        </a>
      </span>
    </div>
    <div>
      <p>
        The copyright of all content related to THE IDOLM@STER belongs to BANDAI
        NAMCO Entertainment Inc.
      </p>
    </div>
  </footer>
)

export default Footer
