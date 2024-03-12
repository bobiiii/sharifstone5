import React from "react";
import "./NoWarrantyCover.css";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";
import Button from "../../resuable/Button";

function NoWarrantyCover() {

  const handleDownloadPDF = () => {
    const pdfDirectUrl = 'https://drive.google.com/uc?id=1oO9uRlQUWcN3GEJNoCW6O462-8qC74EY';

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
          {/* <div className="ourmission-heading "></div> */}
          <Heading>
            WHAT THIS WARRANTY WILL NOT COVER:
          </Heading>

          <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9 }} />

          <div className="w-full flex justify-between lg:flex-row flex-col  gap-6 "
          >
            <div className="lg:w-[60%] w-full">
              <div className="md:mt-0 mt-3">
                <h4 className="mb-3 xs:text-[22px] text-base font-bold text-black font-albert">Defects and Damages Exclusions:</h4>

                <p className="xs:text-lg text-sm font-normal font-albert "
                >
                  Any defects or damages resulting from improper use,  care, maintenance, fabrication, installation,  modifications, coverings, treatments, scratches, normal  wear and tear, temporary markings, staining,  discoloration, fading, variances in color, shade, size,  shape, distribution of the pattern of natural quartz, or  natural variations in background tone are not covered.  This includes cracks due to force or other impacts,  abnormal use and conditions, commercial use  applications, acts of God, unpaid materials, vandalism,  relocation of material, material that was inspected  upon delivery and accepted as defect-free upon receipt,  rental use, bending, curving, or other creative use of the  stone during or after installation, modifications that  change the load or other capacity of the material  resulting in structural failure, material that has been  milled or reduced in thickness, installed in any outdoor  application exposed to elements, mishandling, irregular  use, misuse, or physical or chemical abuse or exposure,  direct or sustained heat or cold or sudden or rapid  changes in temperature or thermal shock, abuse,  excessive force, or exposure to abrasive or corrosive  substances.

                </p>

              </div>
            </div>
            <div className="lg:w-[40%] w-full">
              <div>
                <h4 className="mb-3  xs:text-[22px] text-base font-bold text-black font-albert">Intended Use and Warranty Activation:</h4>
                <p className="xs:text-lg text-sm font-normal font-albert "
                >
                  Sharifstone® Surfaces is intended for interior use in  residential applications only. Any use other than in residential kitchens and baths will not be covered under  the Limited Warranty. To activate the Limited Warranty,  the owner/purchaser must carry out the registration  process within 30 days of fully installing and paying for  Sharifstone® Surfaces at their residential  home/location. The homeowner/purchaser must  provide a copy of the contract with the authorized  fabricator/installer and proof of full payment within the  30-day period. Failure to meet this enrollment  requirement within 30 days will nullify the Warranty,  and access to coverage shall terminate at the end of this  period.
                </p>
              </div>
            </div>
          </div>
          {/* nowarranty-button */}
          <div className="w-full  justify-center items-center text-center mt-4" >
            <Button  className="bg-[#ee2a2e] max-w-none px-8 py-2.5 text-white  font-medium font-albert rounded-[41px]" clickFunc={handleDownloadPDF}>
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default NoWarrantyCover;
