import "../styles/preloader.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

const Preloader = () => {
  return (
    <>
      {/* Your metadata here */}
      <div className="preloader-video">
        <video autoPlay loop muted>
          <source src="/preloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Preloader;
