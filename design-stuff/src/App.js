import React from 'react';
import './styles/core/base.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        some tidly bits we be here once i knonw what i wantn to do with this
      </section>
      <Table />
      <Footer />
    </div>
  );
}

export default App;
