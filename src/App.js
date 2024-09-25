import { BrowserRouter,Navigate, Route, Routes} from 'react-router-dom';

import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './layout/Dashboard';
import SinksTable from './layout/SinksTable';
import MirrorTable from './layout/MirrorTable';
import FuacetsTable from './layout/FuacetsTable';
import VanitiesTable from './layout/VanitiesTable';
import AccessoriesTable from './layout/AccessoriesTable';
import AccessoriesAdd from './layout/AccessoriesAdd';
import FuacetsAdd from './layout/FuacetsAdd';
import MirrorAdd from './layout/MirrorAdd';
import SinksAdd from './layout/SinksAdd';
import VanitiesAdd from './layout/VanitiesAdd';
import Login from './layout/Login';

function App() {
  
  return (
    <BrowserRouter>
     <TopNav/>
     <SideNav/>
     
     <Routes>

     <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sinks' element={<SinksTable/>}/>
      <Route path='/sinks/add' element={<SinksAdd/>}/>
      <Route path='/mirror' element={<MirrorTable/>}/>
      <Route path='/mirror/add' element={<MirrorAdd/>}/>
      <Route path='/fuacets' element={<FuacetsTable/>}/>
      <Route path='/fuacets/add' element={<FuacetsAdd/>}/>
      <Route path='/vanities' element={<VanitiesTable/>}/>
      <Route path='/vanities/add' element={<VanitiesAdd/>}/>
      <Route path='/accessories' element={<AccessoriesTable/>}/>
      <Route path='/accessories/add' element={<AccessoriesAdd/>}/>
      <Route path='/accessories/update/id:' element={<AccessoriesAdd/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
