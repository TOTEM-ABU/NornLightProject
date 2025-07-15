import {
  BlockTitle,
  Breadcrumbs,
  Container,
  Paragraph,
  Section,
  Title,
  Wrapp,
  FlexRow,
  FlexCol,
  FlexGlobal,
  List,
} from "./Garant.styles";

const GarantPage = () => {
  return (
    <Section>
      <Container>
        <FlexGlobal>
          <Wrapp>
            <Breadcrumbs>
              Главная &gt;{" "}
              <i style={{ color: "black", fontWeight: "bold" }}>Гарантии</i>
            </Breadcrumbs>
            <Title>Гарантии</Title>
          </Wrapp>

          <FlexRow>
            <FlexCol>
              <Wrapp>
                <BlockTitle>Обмен и возврат по желанию покупателя</BlockTitle>

                <Paragraph>
                  Все товары в магазине «NornLight» имеют гарантию. Она
                  заявляется производителем и имеет определенный ...и имеет
                  определённый срок действия на различные группы товаров.
                  Если товар по каким-то причинам вышел из строя в течение
                  гарантийного срока, вы можете обратиться к нам и получить
                  бесплатный ремонт. Для этого нужно:
                </Paragraph>

                <List>
                  <li>
                    Предоставить чек, накладную или сообщить почту или номер
                    телефона, указанные при оформлении заказа.
                  </li>
                  <li>
                    Привезти товар к нам на склад или отправить его транспортной
                    компанией.
                  </li>
                  <li>
                    После этого товар отправляется на экспертизу и ремонт. Если
                    ремонт невозможен, мы обменяем изделие на аналогичное либо
                    вернём деньги.
                  </li>
                </List>

                <Paragraph>
                  Обращаем внимание, что «NornLight» не является сервисным
                  центром, а выполняет роль посредника между клиентом и
                  поставщиком. Поэтому сроки проведения ремонта могут отличаться
                  для товаров различных брендов.
                </Paragraph>
              </Wrapp>
            </FlexCol>
          </FlexRow>
        </FlexGlobal>
      </Container>
    </Section>
  );
};

export default GarantPage;
