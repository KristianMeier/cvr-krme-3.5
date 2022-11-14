export const FooterSection = ({ section, className }) => (
  <section className='footer-section'>
    {section.map((paragraph) => (
      <p className={className} key={paragraph}>
        {paragraph}
      </p>
    ))}
  </section>
)
