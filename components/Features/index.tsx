"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

const Features = () => {
  useEffect(() => {
    (function(b, s, p, o, r, t) {
      b["broadage"] = b["broadage"] || [];
      if (!b["broadage"].length) {
        r = document.createElement(s);
        t = document.getElementsByTagName(s)[0];
        r.async = true;
        r.src = p;
        t.parentNode.insertBefore(r, t);
      }
      b["broadage"].push({ "bundleId": o.bundleId, "widgets": o.widgets, "accountId": o.accountId });
    })(window, "script", "//cdn-saas.broadage.com/widgets/loader/loader.js", {
      "bundleId": ["soccer-fx"],
      "accountId": "c542c505-0a65-4ee0-accb-9339cacd35bf",
      "widgets": {
        "soccerFixture": [{
          "element": "DOM_element_id_in_your_website_1691140881637",
          "tournamentId": 2
        }]
      }
    });
  }, [])
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <h1 style={{fontWeight: "900", fontSize: 30}}>Premier League Starts Soon</h1>
          <br />
          <Link
            href="https://futnance-new.vercel.app/"
            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            🔥 Subscribe for Premium Tips
          </Link>
          {" "}
          <Link
            href="/"
            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Join Telegram Channel
          </Link>
          {" "}
          <Link
            href="https://futnance-new.vercel.app/premium"
            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            🔥 200 Odds Tips
          </Link>
          <br /><br />
        <div id="DOM_element_id_in_your_website_1691140881637"></div>
        
        <br />
          <SectionTitle
            title="About Us"
            paragraph="
            Ranked among the best football prediction sites in the world, and particularly acclaimed in the World, we offer accurate forecasts that are guaranteed to enhance your winning potential. Whether you're in search of a sure banker prediction or any other type of football tip, we possess the comprehensive information necessary for you to secure more successful bets.
Our platform provides forecasts for a wide range of markets, including but not limited to 1.50 Odds, 2.00 Odds, 3.00 Odds, 20.00 Odds, 200 Odds under Accumulators, Over 1.5 Goals, Over 2.5 Goals, Under 2.5 Goals, UNDER 3.5 Goals, Both Teams to Score (BTTS), Double Chance, Draws, Half-time/Full-time, Handicap, Under 1.5 Goals, and many more. With an array of options at your disposal, you can easily navigate through specific markets based on your preferences.
            "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
