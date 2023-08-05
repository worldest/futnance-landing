import { Feature } from "@/types/feature";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full" style={{backgroundColor: "#ffffff90", padding: 10, borderRadius: 10, border: "2px solid #496bf6"}}>
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {
          icon ? 
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
          :
          <></>
        }
        
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl" style={{fontSize: 12, color: "#000"}}>
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color" style={{fontSize: 12, color: "#000"}}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
