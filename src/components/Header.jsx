import upload from '../assets/upload.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header--image'>
        <img src={upload} alt='Upload a logo' />
        <div className='header--text'>
          <h5>Upload Logo</h5>
          <p>240 x 240 pixels @ 72 DPI,</p>
          <p>Maximum size of 1MB.</p>
        </div>
      </div>
      <h1>TAX INVOICE</h1>
    </div>
  )
}

export default Header
