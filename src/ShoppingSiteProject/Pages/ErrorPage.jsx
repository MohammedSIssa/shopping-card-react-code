import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>404 This Page Does Not Exist<Link to='/'>{' '}Go Back to Home Page.</Link></div>
  )
}

export default ErrorPage