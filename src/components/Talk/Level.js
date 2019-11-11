import * as React from 'react'

const textForLevel = level => {
  switch (level) {
    case 'beginner':
      return 'bg-green-600'
    case 'intermediate':
      return 'bg-gray-600'
    case 'advanced':
      return 'bg-red-400'
    default:
      return 'bg-black'
  }
}

const TalkLevel = ({ level }) => (
  <span
    className={`shadow-inner text-white font-bold px-4 py-2 rounded-full uppercase ${textForLevel(
      level
    )}`}
  >
    {level}
  </span>
)

export default TalkLevel
