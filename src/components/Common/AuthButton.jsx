import { Link } from 'react-router-dom'

const AuthButton = ({text,className}) => {
  return (
    <div>
      <Link className={`text-[#FFF] text-[16px] text-center font-medium py-[14px] px-10 bg-buttonBg shadow-buttonSHadow rounded-[12px] inline-block w-full ${className}`}>
              <span className='font-Inter'>{text}</span>

      </Link>
    </div>
  )
}

export default AuthButton
