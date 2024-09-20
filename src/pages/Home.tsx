import Card from "../components/Card";
import Carrosel from "../components/Carrosel";
import { CostumerReview } from "../components/CostumerReview/CostumerReview";
import LogosRow from "../components/LogosRow/LogosRow";
import { RowItem } from "../components/RowItem/RowItem";
import RowItemTabs from "../components/RowItemTabs/RowItemTabs";
import Socials from "../components/Socials/Socials";
import { useCustomBuilds } from "../hooks/useCustomBuilds/useCustomBuilds";

interface useCustomBuildsTypes {
  available: boolean;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
}

function Home() {
  const customThemes: useCustomBuildsTypes[][] = useCustomBuilds();
  const labels: string[] = ["MSI GS Series", "MSI GT Series", "MSI GL Series", "MSI GE Series"];
  const labelsBelow: string[] = ["MSI Influence Series", "MSI Triden", "MSI GL Series", "MSI Nightblade"];
  const images: string[] = ["rowCard1.png", "rowCard2.png", "rowCard3.png", "rowCard4.png"];
  return (
    <div>
      <Carrosel />
      <Card />
      <RowItem theme={customThemes[0]} imgTheme="rowCard1.png" />
      <RowItemTabs customTheme={customThemes} imgThemeArrayList={images} labels={labels} />
      <RowItemTabs customTheme={customThemes} imgThemeArrayList={images} labels={labelsBelow} />
      <RowItem theme={customThemes[3]} imgTheme="rowCard4.png" />
      <LogosRow />
      <Socials />
      <CostumerReview />
    </div>
  );
}

export { Home };
/*todo: necessita finalizar o dropdown do menu, está apenas com um nível, necessitando de 3

todo: necessita finalizar a função de carrinho, adicionar um modal/dropdown com ele com uma pequena lista dos produtos que estão no carrinho

todo: no header criar o hidden search

todo: ajustar versão mobile

todo: criar sistema de carrinho que irá absorver => preço, nome, quantidade(useState), 
mandar isso para valor final da compra e ajustar lá as condicionantes pra geração do boleto/pix/cartão

todo: adicionar no objeto opção se promocional ou não, se o valor for promocional dar display dele com o valor original riscado, caso contrário
n risca e nem mostra o segundo valor
*/
