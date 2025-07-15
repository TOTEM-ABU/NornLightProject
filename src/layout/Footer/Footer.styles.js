import styled from "styled-components";
import {NavLink} from "react-router-dom"
export const FooterContainer = styled.footer`
  background-color: #F2F2F2;
  border-top: 1px solid #e9ecef;
  padding: 70px 0 20px;
  margin-top: auto;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 153px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FooterLogo = styled.div`
  /* display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #333;

  i {
    font-size: 20px;
    color: #ffd700;
  } */
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PhoneNumber = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const PaymentIcon = styled.div`
  img {
    height: 24px;
    width: auto;
    border-radius: 4px;
  }
`

export const PolicyLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const PolicyLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  margin-bottom: 4px;
`

export const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 27px;
`

export const FooterLinkItem = styled.li``

export const FooterLink = styled(NavLink)`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;