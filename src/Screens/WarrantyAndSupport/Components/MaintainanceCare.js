import React from "react";
import './MaintainanceCare.css'
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from "../../resuable/Heading";

function MaintainanceCare() {
  const handleDownloadPDF = () => {

    const pdfUrl = 'https://drive.google.com/uc?id=1v9X6gvXkwauWqfow7NbEkr_T5nT0ghMs';

    const link = document.createElement('a');
    link.href = pdfUrl;

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
          <div className="maintaincecare-cuntainer ">
            <div className="nowarranty-cover">
              <div className="maintaincecare-subcuntainer">
                Sharifstone® Surfaces is a man-made engineered Quartz surface,
                which undergoes several certification inspections that meet and in
                some cases exceeds the industry standards.
                <br />
                <br />
                Sharifstone® Surfaces are certified as being more resistant than
                Natural Marble Surfaces against scratching, etching, staining,
                cracking or thereafter common causes of failure in those Natural
                Surfaces.
                <br />
                <br />
                Being more resistant, is not equal to being scratch proof, nor
                will they prevent staining on a varied list of common sources of
                stains against these Surfaces. Sharifstone® Surfaces, are
                Engineered quartz slabs which are factory-produced by combining
                highly purified quartz powder with resins, binding agents, and
                occasionally pigments in order to obtain some distinct designs.
                <br />
                <br />
                Sharifstone® Surfaces will resist permanent staining when exposed
                to liquids like wine, vinegar, tea, lemon juice, and soda, or
                fruits and vegetables and it’s important to wipe up spills
                immediately, before they have a chance to dry. Take care of fresh
                spills with mild dish-washing detergent and a soft cloth or
                sponge.



              </div>
              <div className="maintaincecare-subcuntainer">
                For dried spills or heavy stains, the best option is using a
                leading brand surface cleaner together with a nonabrasive sponge,
                and a circular rubbing motion. This needs to be repeated in the
                span of several hours, or days when the stain is very dark and
                hard to get off. Eventually it will clear away from the surface,
                as engineered Quartz is seldom deeply penetrated by liquids, as it
                is the norm for Marble and other natural stone surfaces.
                <br />
                <br />
                Most leading brands of household cleaners on the market will
                provide indications if they are safe to use on Quartz surfaces on
                their labels,Always make sure to test first in a small area,
                before you employ them on the full surface.
                <br />
                <br />
                As with any man-made materials, Sharifstone® Surfaces will not be
                immune to the common things that affect other Natural Stones.
                However, the fact that it’s an engineered surface, creates a
                stronger resistance against these common problems.
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="maintaincecare-button " onClick={handleDownloadPDF}>
        Download PDF
      </div>
    </MaxWidthWrapper>
  );
}

export default MaintainanceCare;
