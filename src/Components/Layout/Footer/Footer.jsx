import { JsData } from '../../../Backend/Data'
import { FooterSection } from './FooterSection'

export const FooterSections = [
  { section: JsData.footerData.firstColumn, className: 'odd-link' },
  { section: JsData.footerData.secondColumn, className: 'first-link' },
  { section: JsData.footerData.thirdColumn, className: 'first-link' },
]

export const Footer = () => (
  <div className='footer'>
    <div className='footer-center'>
      <section className='logo-container'>
        <h1> {JsData.logo} </h1>
      </section>
      {FooterSections.map(({ section, className }, index) => (
        <FooterSection key={index} section={section} className={className} />
      ))}
    </div>
  </div>
)
