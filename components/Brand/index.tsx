import styled from "styled-components";

const Brand = () => {
  return (
    <Container>
      <BrandLogo
        src={"https://onruntime.com/static/images/logo/onruntime.svg"}
        draggable={false}
        height={48}
        width={48}
      />
      <BrandTitle>onRuntime</BrandTitle>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  filter: brightness(0.75);
  transition: all 0.2s;

  :hover {
    filter: brightness(1);
  }
`;

const BrandLogo = styled.img`
  height: 30px;
  width: auto;
  transform: scale(0.75);
`;

const BrandTitle = styled.h1`
  position: absolute;
  font-size: 18px;
  right: -350%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Brand;
