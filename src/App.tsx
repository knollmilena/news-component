import { newsDat } from "./fakeBD/fakeBD";
import { NewsListPage } from "./shared/ui/Templates/NewsListPage/NewsListPage";

function App() {
  return <NewsListPage news={newsDat} />;
}

export default App;
