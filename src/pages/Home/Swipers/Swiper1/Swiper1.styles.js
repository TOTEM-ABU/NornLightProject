import styled from "styled-components";

export const Container = styled.div`
  max-width: 1730px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;

  .swiper-container {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
`;

export const SwiperSlide = styled.div`
  min-width: 100%;
  height: 100%;
`;

export const SwiperCardsWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 20px;
  }
`;

export const TextSide = styled.div`
  padding: 4rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 0;
  margin-left: 200px;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-left: 0;
    align-items: center;
    text-align: center;
    order: 2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    color: rgba(69, 69, 69, 1);
    margin: 0 0 1rem 0;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  .badge {
    text-align: center;
    width: 450px;
    height: 80px;
    background-color: rgba(69, 69, 69, 1);
    color: white;
    font-size: 3.3rem;
    font-weight: 600;
    border-radius: 50px;
    padding-bottom: 60px;
    cursor: pointer;
    padding-bottom: 60px;

    @media (max-width: 768px) {
      width: 90%;
      max-width: 300px;
      height: 60px;
      font-size: 1.5rem;
      line-height: 1;
    }
  }
`;

export const ImageSide = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    order: 1;
    padding: 20px 0;
  }

  img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }

    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.25));
    }
  }
`;

export const PaginationDots = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
`;

export const PaginationDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => (props.$active ? "rgba(69, 69, 69, 1)" : "gray")};
  transform: ${(props) => (props.$active ? "scale(1.2)" : "scale(1)")};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(69, 69, 69, 1);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: absolute;
  ${(props) => (props.$direction === "left" ? "left: 20px" : "right: 20px")};

  &:hover {
    background-color: rgba(69, 69, 69, 1);
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;
