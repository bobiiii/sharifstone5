import "./OurMission.css";
import WarrantyImage from "../../../assets/images/warranty1.png";
import ws from './images/ws.png'
import Heading from '../../resuable/Heading'
import MaxWidthWrapper from '../../MaxWidthWrapper'

function OurMission() {
  return (
    <MaxWidthWrapper >
      <div className="reorganize_container">
        <div className="ourmission-container">
          <Heading>
            MORE ABOUT WARRANTY
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />
          <div className="flex justify-between gap-8 w-full lg:flex-row flex-col items-center ">
            <div className="lg:w-1/2 w-full">
              <img className="w-full rounded-[24px]  xl:h-full  lg:h-[50vh] h-full" src={WarrantyImage} />
            </div>
            <div className="lg:w-1/2 w-full">
              <b>I. WARRANTY COVERS</b>
              <br />
              <p className="mt-1 sm:text-base  text-sm font-light font-albert">
                This category pertains to Sharifstone® Surfaces that  have been purchased from an Authorized Sharifstone®  Installer/Dealer and installed in your residence  location by an Authorized Installer.
              </p>
              <br />

              <b>II. WHAT IT COVERS IN DETAIL</b>
              <br />
              <p className="mt-1 sm:text-base text-sm font-light font-albert">
                The warranty specifically addresses defects arising  from the manufacturing process. When making a claim  during the warranty coverage period, an inspection  will be conducted on the installed Surfaces. If the  defects are confirmed as originating from the  manufacturing process, the warranty will cover the  replacement of the Surface with either the same  material or a comparable alternative available at the  time of the claim.
              </p>
              <br />
              <b>III. MAINTENANCE REQUIREMENTS</b>
              <br />
              <p className="mt-1 sm:text-base text-sm font-light font-albert">
                Maintenance coverage is contingent on adhering to  the Sharifstone® Surfaces Care and Maintenance  guidelines, as well as maintaining the Surfaces in  accordance with accepted standards for engineered  Quartz surfaces.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-8 w-full lg:flex-row flex-col-reverse items-center   mt-10">
            <div className="lg:w-1/2 w-full">
              <b>IV. AUTHORIZED SOURCES</b>
              <br />
              <p className="mt-1 sm:text-base text-sm font-light font-albert">
                To ensure warranty eligibility, it is essential to make purchases exclusively through Authorized Sharifstone® Installers/Dealers. Additionally, installations must be carried out by Authorized Installers to validate the warranty.
              </p>
              <br />
              <b>V. CLAIM PROCESS</b>
              <br />
              <p className="mt-1 sm:text-base text-sm font-light font-albert">
                In the absence of warranty documentation, the process for making claims can be initiated by following the general industry standards for warranty claims. This may involve contacting the point of purchase or the Authorized Installer and providing necessary information about the claim.
              </p>
              <br />
              <b>VI. CONTACT INFORMATION</b>
              <br />
              <p className="mt-1 sm:text-base text-sm font-light font-albert">
                For any inquiries or to initiate a warranty claim, reach out to the point of purchase or the Authorized Installer. They should be able to guide you through the process and provide any necessary assistance.
              </p>
            </div>
            <div className="lg:w-1/2 w-full  ">
              <img className="w-full rounded-[24px] xl:h-[80%]   lg:h-[50vh] h-full" src={ws} />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default OurMission;
