export const VirkopediaTab = ({
  heading,
  arrayIndex,
  activeButtonIndex,
  setActiveButtonIndex,
}) => (
  <button
    onClick={() => setActiveButtonIndex(arrayIndex)}
    className={`article-btn ${
      arrayIndex === activeButtonIndex && 'active-btn'
    }`}
  >
    {heading}
  </button>
)
