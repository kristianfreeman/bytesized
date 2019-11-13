import React from 'react'
import c from 'classnames'

const Paragraph = ({ children, ...props }) => {
  return <p className={c("measure-wide", "text-xl", "py-4")} {...props}>{children}</p>
}

const TitleContainer = ({ alignment = "left", children }) => (
  <div className={c("my-8", [{'text-align': `text-${alignment}`}])}>{children}</div>
)

const Title = ({ alignment, children, size, ...props }) => {
  const baseClasses = ["font-bold", "measure-narrow"]
  let tag
  switch (size) {
    case 'h1':
      tag = <h1 {...props} className={c("text-4xl", "leading-tight", baseClasses)}>{children}</h1>
      break
    case 'h2':
      tag = <h2 {...props} className={c("text-3xl", baseClasses)}>{children}</h2>
      break
    case 'h3':
      tag = <h3 {...props} className={c("text-2xl")}>{children}</h3>
      break
    case 'h4':
      break
      tag = <h4 {...props} className={c("text-xl")}>{children}</h4>
    default:
      break
      tag = <p {...props}>{children}</p>
  }

  return <TitleContainer alignment={alignment}>{tag}</TitleContainer>
}

const System = {
  h1: props => <Title {...props} size="h1" />,
  h2: props => <Title {...props} size="h2" />,
  h3: props => <Title {...props} size="h3" />,
  h4: props => <Title {...props} size="h4" />,
  p: Paragraph
}

export default System
