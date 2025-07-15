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
} from "./Return.styles";

const ReturnPage = () => {
  return (
    <Section>
      <Container>
        <FlexGlobal>
          <Wrapp>
            <Breadcrumbs>
              Главная &gt;{" "}
              <i style={{ color: "black", fontWeight: "bold" }}>Возврат</i>
            </Breadcrumbs>
            <Title>Возврат</Title>
          </Wrapp>

          <FlexRow>
            <FlexCol>
              <Wrapp>
                <BlockTitle>Обмен и возврат по ошибке продавца</BlockTitle>
                <Paragraph>
                  Если товар по каким-то причинам не подошел вам, вы имеете
                  право вернуть его или обменять на другой в течение 7 дней* с
                  момента покупки при соблюдении следующих условий:
                </Paragraph>
                <List>
                  <li>
                    Товар имеет первоначальный вид, имеется товарная кондиция
                  </li>
                  <li>
                    Товар имеет полную комплектацию, включая упаковочные
                    материалы
                  </li>
                  <li>Товар не имеет следов подключения и признаков монтажа</li>
                  <li>
                    Упаковка товара не имеет повреждений, присутствует
                    первоначальный вид
                  </li>
                  <li>
                    Есть документ, подтверждающий покупку в интернет-магазине
                  </li>
                </List>
                <Paragraph>
                  Для возврата товара необходимо привезти его в офис. Товары из
                  других городов можно прислать транспортной компанией — услуги
                  оплачивает клиент. *В течение 14 дней — для отдельных брендов
                  (уточняйте при заказе).
                </Paragraph>
              </Wrapp>
            </FlexCol>

            <FlexCol>
              <Wrapp>
                <BlockTitle>Причины возврата по ошибке продавца</BlockTitle>
                <List>
                  <li>Неполная комплектация товара</li>
                  <li>Брак или дефект товара</li>
                  <li>
                    Если вы выявили дефект, сделайте фото и отправьте на почту{" "}
                    <a href="mailto:mail@at-svet.ru">mail@at-svet.ru</a> с
                    кратким описанием. Мы заменим товар или довезем недостающие
                    части — доставка бесплатна.
                  </li>
                </List>
              </Wrapp>
            </FlexCol>

            <FlexCol>
              <Wrapp>
                <BlockTitle>Возврат денежных средств</BlockTitle>
                <Paragraph>
                  Возврат денежных средств осуществляется путем перевода на
                  банковские реквизиты покупателя при наличии письменного
                  заявления.
                </Paragraph>
              </Wrapp>
            </FlexCol>
          </FlexRow>
        </FlexGlobal>
      </Container>
    </Section>
  );
};
export default ReturnPage;