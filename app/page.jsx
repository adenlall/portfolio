import "@styles/index.css";

import Hero from "@components/Hero";
import Works from '@components/Works';
import Footer from '@components/Footer';


export default function Page() {
  return (
    <>
          <Hero/>
          <div className="w-full bg-blue-400 p-15 m-0 flex flex-col md:flex-row justify-center content-center justify-center">
               <Works
                    image={"/160.jpg"}
                    title={"Salatok GTK4 Desktop Application"}
                    description={"GTK app for Debian GNU/LINUX, It's an app for salat (pray) time calculation for Muslims with powerful control over calculation methods and adjustments, without need to Internet access, and for any place around the world (because it works with lat&long)."}
                    link={"https://github.com/adenlall/salatok-gtk"}
               />
               <Works
                    image={"/160.jpg"}
                    title={"allacc Laravel web application"}
                    description={"Full stack application, build with Laravel/Inertia/React. a Linktree alternative built with php. create account and get your public page for listing your link social media account and more..."}
                    link={"https://github.com/adenlall/allacc.tk"}
               />
               <Works
                    image={"/160.jpg"}
                    title={"Salatok SPA React web application"}
                    description={"React application,  It's an app for salat (pray) time calculation for Muslims, and Quran reacer&reciter."}
                    link={"https://github.com/adenlall/salatok"}
               />
          </div>
          <Footer/>
    </>
  );
}
