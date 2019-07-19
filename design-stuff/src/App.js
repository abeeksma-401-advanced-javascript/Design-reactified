import React from 'react';
import './styles/core/base.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Table from './components/table/table';

function App() {
  return (
    <> 
    <Header />
    <div className="app grid-box"> 
      <div className="sub-header-box">
        some tidly bits we be here once i knonw what i wantn to do with this
      </div>
      <div className="table-box">
          <Table />
      </div>
    </div>      
    <Footer />
    </>
  );
}

export default App;
