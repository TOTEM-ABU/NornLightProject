import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Breadcrumbs = styled.div`
  font-size: 14px;
  color: #888;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #222;
`;

export const BlockTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #222;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;

  a {
    color: #007bff;
    text-decoration: underline;
  }

  strong {
    color: #000;
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 12px;
`;
export const FlexGlobal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
export const FlexRow = styled.div`
  width: 50%;
`;

export const FlexCol = styled.div`
  min-width: 280px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const List = styled.ul`
  padding-left: 18px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    color: #007bff;
    font-size: 15px;
    line-height: 1.5;
    list-style: disc;
  }
`;
