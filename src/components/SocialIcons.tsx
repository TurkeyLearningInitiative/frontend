import Link from 'next/link'
import {FaTwitterSquare, FaDiscord, FaGithubSquare} from 'react-icons/fa'

export function SocialIcons(){
    return (            <div className="social-icon flex items-center space-x-4">
    <Link
      className="twitter-share-button"
      href="https://twitter.com/intent/tweet"
    >
      <FaTwitterSquare className='text-4xl text-[#1DA1F2]'/>
    </Link>
    <Link
      className="twitter-share-button"
      href="https://twitter.com/intent/tweet"
    >
      <FaDiscord className='text-4xl text-[#7289da]'/>
    </Link>
    <Link
      className="twitter-share-button"
      href="https://twitter.com/intent/tweet"
    >
      <FaGithubSquare className='text-4xl text-black'/>
    </Link>
  </div>)
}