
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './signInForm';
import CreateBill from '../Bills/CreateBill';
import ViewBill from '../Bills/ViewBill';
import EditBill from '../Bills/EditBill';

import BillReview from '../Bills/BillReview/BillReview';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/bills/create" element={<CreateBill />} />
        <Route path="/bills/1" element={<ViewBill />} />
        <Route path="/bills/1/edit" element={<EditBill />} />
        <Route path="/bills/create/billReview" element={<BillReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

