import * as React from 'react'

const textForLevel = level => {
  switch (level) {
    case 'beginner':
      return 'bg-green'
    case 'intermediate':
      return 'bg-grey-dark'
    case 'advanced':
      return 'bg-red'
    default:
      return 'bg-black'
  }
}

const TalkLevel = ({ level }) => (
  <span
    className={`text-white font-bold p-2 rounded-full uppercase ${textForLevel(
      level
    )}`}
  >
    {level}
  </span>
)

export default TalkLevel
