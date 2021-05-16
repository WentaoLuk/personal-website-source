import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';


export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Wentao Lu -- Computer Science Student at Algonquin'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Wentao Lu Simplefolio'} />
        <script src="https://kit.fontawesome.com/b18013c08b.js" crossorigin="anonymous"></script>
      </Helmet>
      <App />
    </>
  );
};
