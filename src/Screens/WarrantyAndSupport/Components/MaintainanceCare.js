import './MaintainanceCare.css'
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";
import WARRANTYANDSUPPORT from "../files/MAINTENANCEANDCARE.pdf";

function MaintainanceCare() {
  const handleDownloadPDF = () => {

    const pdfDirectUrl = WARRANTYANDSUPPORT

    const link = document.createElement('a');
    link.href = pdfDirectUrl;
    link.download = 'MAINTENANCE AND CARE.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <MaxWidthWrapper>
      <div className="reorganize_container">
        <div className="ourmission-container">
          <Heading>
            MAINTENANCE AND CARE.
          </Heading>
          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />

          <div className="flex justify-between lg:flex-row flex-col gap-10 ">
            <div className="lg:w-[55%] w-full flex-col  ">
              <span >
                <p className="sm:text-base text-sm font-normal text-black font-albert  ">
                  Sharifstone® Surfaces is a man-made engineered Quartz surface, which undergoes several certification inspections that meet and in some cases exceeds the industry standards.
                </p>
              </span>
              <span >
                <p className="sm:text-base  text-sm font-normal text-black font-albert py-4 ">
                  Sharifstone® Surfaces are certified as being more resistant than Natural Marble Surfaces against scratching, etching, staining, cracking or thereafter common causes of failure in those Natural Surfaces.
                </p>
              </span>
              <span>
                <p className="sm:text-base text-sm font-normal text-black font-albert ">
                  Being more resistant, is not equal to being scratch proof, nor will they prevent staining on a varied list of common sources of stains against these Surfaces. Sharifstone® Surfaces, are Engineered quartz slabs which are factory-produced by combining highly purified quartz powder with resins, binding agents, and occasionally pigments in order to obtain some distinct designs.
                </p>
              </span>
              <span>
                <p className="sm:text-base text-sm font-normal text-black font-albert py-4">
                  Sharifstone® Surfaces will resist permanent staining when exposed to liquids like wine, vinegar, tea, lemon juice, and soda, or fruits and vegetables and it’s important to wipe up spills immediately, before they have a chance to dry. Take care of fresh spills with mild dish-washing detergent and a soft cloth or sponge.
                </p>
              </span>
            </div>

            <div className="lg:w-[45%] w-full flex-col gap-6 ">
              <span>
                <p className="sm:text-base text-sm font-normal text-black font-albert ">
                  For dried spills or heavy stains, the best option is using a leading brand surface cleaner together with a nonabrasive sponge, and a circular rubbing motion. This needs to be repeated in the span of several hours, or days when the stain is very dark and hard to get off. Eventually it will clear away from the surface, as engineered Quartz is seldom deeply penetrated by liquids, as it is the norm for Marble and other natural stone surfaces.
                </p>
              </span>
              <span>
                <p className="sm:text-base text-sm font-normal text-black font-albert py-4 ">
                  Most leading brands of household cleaners on the market will provide indications if they are safe to use on Quartz surfaces on their labels,Always make sure to test first in a small area, before you employ them on the full surface.
                </p>
              </span>
              <span>
                <p className="sm:text-base text-sm font-normal text-black font-albert ">
                  As with any man-made materials, Sharifstone® Surfaces will not be immune to the common things that affect other Natural Stones. However, the fact that it’s an engineered surface, creates a stronger resistance against these common problems
                </p>
              </span>

            </div>
          </div>




          <div className="w-full  justify-center items-center text-center mt-4" >
            <Button className="bg-[#ee2a2e] max-w-none px-8 py-2.5 text-white  font-medium font-albert rounded-[41px]" clickFunc={handleDownloadPDF}>
              Download PDF
            </Button>
          </div>
        </div>
      </div>



    </MaxWidthWrapper>
  );
}

export default MaintainanceCare;
