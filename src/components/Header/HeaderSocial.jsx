import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/zaky-wahyu-oktavianto-b15m1114h/" target="_blank"><BsLinkedin/> </a>
        <a href="https://github.com/zakywahyu07?tab=repositoriesithub.com" target ="__blank"><BsGithub/> </a>
    </div>
  )
}

export default HeaderSocial