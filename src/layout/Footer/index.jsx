import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  ContactInfo,
  PhoneNumber,
  PaymentMethods,
  PaymentIcon,
  PolicyLinks,
  PolicyLink,
  SocialIcons,
  SocialIcon,
  FooterColumn,
  ColumnTitle,
  FooterLinksList,
  FooterLinkItem,
  FooterLink,
} from "./Footer.styles"
import VMM from "./images/VisaMasterCardWorld.png";
const Footer = () => {
  const buyersLinks = [
    { title: "О компании", href: "/about" },
    { title: "Доставка и оплата", href: "/shipping" },
    { title: "Возврат", href: "/return" },
    { title: "Гарантии", href: "/garant" },
    { title: "Контакты", href: "/contacts" },
    { title: "Блог", href: "/blog" },
  ]

  const productsLinks = [
    { title: "Люстры", href: "/chandeliers" },
    { title: "Светильники", href: "/lamps" },
    { title: "Бра", href: "/wall-lamps" },
    { title: "Торшеры", href: "/floor-lamps" },
    { title: "Комплект уличное", href: "/outdoor-sets" },
    { title: "Настольные лампы", href: "/table-lamps" },
  ]
  const sportsLinks = [
    { title: "Споты", href: "/spots" },
    { title: "Трековые светильники", href: "/track-lighting" },
    { title: "Уличные светильники", href: "/outdoor-lighting" },
    { title: "Технические светильники", href: "/technical-lighting" },
    { title: "Светодиодные ленты", href: "/led-strips" },
  ]
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src="header-icon.svg" alt="" />
          </FooterLogo>

          <ContactInfo>
            <PhoneNumber href="tel:+78008904656">8 (800) 890-46-56</PhoneNumber>
          </ContactInfo>

          <PaymentMethods>
            <PaymentIcon>
              <img src={VMM} alt="Visa" />
            </PaymentIcon>
          </PaymentMethods>

          <PolicyLinks>
            <PolicyLink href="/privacy">Политика конфиденциальности</PolicyLink>
            <PolicyLink href="/user-agreement">Пользовательское соглашение</PolicyLink>
          </PolicyLinks>

          <SocialIcons>
            <SocialIcon href="#" aria-label="VKontakte">
              VK
            </SocialIcon>
            <SocialIcon href="#" aria-label="VK">
              VK
            </SocialIcon>
            <SocialIcon href="#" aria-label="VK">
              VK
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterColumn>
          <ColumnTitle>Покупателям</ColumnTitle>
          <FooterLinksList>
            {buyersLinks.map((link, index) => (
              <FooterLinkItem key={index}>
                <FooterLink to={link.href}>
                  {link.title}
                </FooterLink>
              </FooterLinkItem>
            ))}
          </FooterLinksList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Товары</ColumnTitle>
          <FooterLinksList>
            {productsLinks.map((link, index) => (
              <FooterLinkItem key={index}>
                <FooterLink to={link.href}>  
                  {/* as={NavLink} is bad code */}
                  {link.title}
                </FooterLink>
              </FooterLinkItem> 
            ))}
          </FooterLinksList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Спортивные товары</ColumnTitle>
          <FooterLinksList>
            {sportsLinks.map((link, index) => (
              <FooterLinkItem key={index}>
                <FooterLink to={link.href}>
                  {link.title}
                </FooterLink>
              </FooterLinkItem>
            ))}
          </FooterLinksList>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer;