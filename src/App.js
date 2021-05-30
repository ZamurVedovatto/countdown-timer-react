import { GlobalStyle } from './styles'

import Footer from 'components/Footer/Footer'
import Countdown from 'components/Countdown/Countdown.jsx'

function App() {
  return (
    <>
      <GlobalStyle />
      <Countdown />
      <Footer />
    </>
  );
}

export default App;