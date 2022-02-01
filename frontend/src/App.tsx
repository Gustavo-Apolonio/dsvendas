import 'assets/css/styles.css';
import DataTable from 'components/dataTable';
import Footer from 'components/footer';
import Navbar from 'components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className="text-primary">
          Olá mundo!
        </h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
