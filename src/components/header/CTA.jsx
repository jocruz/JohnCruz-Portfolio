import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Download CV </a>
        <a href="https://johncruz.info/appsec" className='btn btn-primary'>
        View Web App Sec Gitbook
      </a>
    </div>
  )
}

export default CTA