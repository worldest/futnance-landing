import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph="
            Futnance is a top football prediction website that guarantees accurate football predictions on every market available. Every day of the week, our team of expert analysts and statisticians are working tirelessly to guarantee our daily returns on their stake. Profit is our watchword at Futnance, and we are in this business to provide you with predictions that will suit your taste. We have various predictions for the low-stakes and high stakes. Our predictions include double chance, chance mix, under 2.5 goals, straight winnings, GG, and over 2.5, amongst others. 
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
