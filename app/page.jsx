import "@styles/index.css";

import Hero from "@components/Hero";

export const metadata = {
  title: "adenlall - portfolio",
  description: "welcome to my public portfolio, enjoy it.",
};

export default function Page() {
  return (
    <>
          <Hero/>
          <Works 
               title="GTK Desktop Application"
               description="GTK app for Debian GNU/LINUX, It's an app for salat (pray) time calculation for Muslims with powerful control over calculation methods and adjustments, without need to Internet access, and for any place around the world (because it works with lat&long)."
          />
    </>
  );
}
