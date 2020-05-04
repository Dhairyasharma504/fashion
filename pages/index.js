import Head from 'next/head'
import Navbar from '../component/Navbar';
import Homepage from '../component/Homepage';
import Profile from '../component/Profile';

export default function Home() {
  return (
    <div className="main">


<Navbar/>
<Homepage/>
<Profile/>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"/>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>


      </Head>
     
    </div>
  )
}
