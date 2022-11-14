export const VirkopediaTab = ({ heading, index, value, setValue }) => (
  <button
    onClick={() => setValue(index)}
    className={`article-btn ${index === value && 'active-btn'}`}
  >
    {heading}
  </button>
)
