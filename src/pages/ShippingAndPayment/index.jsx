import {
  BlockTitle,
  Breadcrumbs,
  Container,
  Paragraph,
  Section,
  Title,
  Wrapp,
  MapFrame,
  FlexRow,
  FlexCol,
  FlexGlobal,
} from "./ShippingAndPayment.styles";

const ShippingPage = () => {
  return (
    <Section>
      <Container>
        <FlexGlobal>

        <Wrapp>
          <Breadcrumbs>
            Главная &gt; <i style={{color:"black",fontWeight:"bold"}}>Доставка и оплата</i>
          </Breadcrumbs>
          <Title>Доставка и оплата</Title>
        </Wrapp>

        <FlexRow>
          <FlexCol>
            <Wrapp>
              <BlockTitle>Доставка</BlockTitle>
              <Paragraph>
                Мы осуществляем доставку со склада по Москве и Московской области
                собственной курьерской службой. Транспортными компаниями нашу продукцию
                мы доставляем по всей территории РФ, а также по всем странам СНГ.{" "}
                <a href="#">Сроки доставки: 4—6 недель</a>
              </Paragraph>
            </Wrapp>
          </FlexCol>

          <FlexCol>
            <Wrapp>
              <BlockTitle>Курьерская доставка</BlockTitle>
              <Paragraph>
                <strong>БЕСПЛАТНО</strong> доставим в пределах МКАД любой заказ от{" "}
                <a href="#">5 000 ₽</a>. Заказы свыше <a href="#">30 000 ₽</a> имеют
                бесплатную доставку, включительно 15 км от МКАД.
              </Paragraph>
            </Wrapp>
          </FlexCol>

          <FlexCol>
            <Wrapp>
              <BlockTitle>Самовывоз</BlockTitle>
              <Paragraph>
                Любой заказ можно забрать самостоятельно по адресу: <br />
                г. Москва, Дмитровское шоссе д.100с2
              </Paragraph>
            </Wrapp>
          </FlexCol>
        </FlexRow>
        </FlexGlobal>
        <Wrapp>
          <BlockTitle>Карта</BlockTitle>
          <MapFrame
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd65db3792b4acb5d79e5f4760b84db68f12fd5d2f0f4bca56e262d2632aa85c&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Wrapp>
      </Container>
    </Section>
  );
};

export default ShippingPage;
