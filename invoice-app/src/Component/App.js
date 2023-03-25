
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './signInForm';
import CreateBill from '../Bills/CreateBill';
import ViewBill from '../Bills/ViewBill';
import EditBill from '../Bills/EditBill';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/bills/create" element={<CreateBill />} />
        <Route path="/bills/1" element={<ViewBill />} />
        <Route path="/bills/1/edit" element={<EditBill />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

