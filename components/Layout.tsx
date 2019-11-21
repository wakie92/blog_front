import globalStyles from '../styles/global.js'

export default function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
