import Route from './components/route';
import AccordionPage from './pages/accordion';
import DropDownPage from './pages/dropDown';
import Sidebar from './components/sidebar';
import ColorPage from './pages/buttonPage';
import ModalPage from './pages/modalPage';
import TablePage from './pages/table';
import CounterPage from './pages/counterPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path={'/Accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/DropDown'}>
          <DropDownPage />
        </Route>
        <Route path={'/Color'}>
          <ColorPage />
        </Route>
        <Route path={'/Modal'}>
          <ModalPage />
        </Route>
        <Route path={'/Table'}>
          <TablePage />
        </Route>
        <Route path={'/Counter'}>
          <CounterPage initialValue={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
