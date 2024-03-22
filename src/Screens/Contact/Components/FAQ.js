import { useState } from "react";
import "./FAQ.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import Heading from "../../resuable/Heading";
import MaxWidthWrapper from "../../MaxWidthWrapper";

function FAQ() {
  const [faq, setFaq] = useState(-1);
  const faqArray = [
    {
      question: "1. How do I clean Quartz surfaces?",
      message:
        "Cleaning Quartz surfaces is hassle-free. Use a soft cloth  or sponge with mild dish soap and warm water to wipe  away spills. Avoid abrasive cleaners, scouring pads,  and harsh chemicals, as they can damage the surface.  For stubborn stains, a mixture of baking soda and  water can be applied gently and wiped clean. ",
    },
    {
      question: "2. Can you refer us to fabricators for installation services?",
      message:
        "While we specialize in supplying high-quality stone  slabs, we're happy to recommend trusted fabricators  in our network for installation services. Reach out to  our team for more information and location-based recommendations. ",
    },
    {
      question:
        "3. What are the advantages of choosing quartz stone slabs over other materials for remodeling projects? ",
      message:
        "Quartz stone slabs offer exceptional durability and a  diverse range of design options, enhancing the  aesthetic appeal of any space. Additionally, their  resistance to scratches, stains, and heat makes them a practical and long-lasting choice for various  remodeling applications.",
    },
    {
      question:
        "4. How can I protect my Quartz surfaces from damage?",
      message:
        "To maintain the pristine condition of your Quartz  surfaces, use trivets or heat-resistant pads for hot  items and avoid cutting directly on the surface. These  simple precautions go a long way in preventing  potential scratches or heat-related issues over time,  ensuring your Quartz retains its beauty and durability.",
    },
    {
      question:
        "5. Are there any specific care instructions for Quartz  with veining or patterns?",
      message:
        "When caring for Quartz with intricate patterns or  veining, stick to a routine of regular cleaning using a  mild soap and water solution. Pay special attention to  textured areas, delicately removing any residue. It's  crucial to steer clear of harsh cleaning tools to  safeguard the beauty of the unique patterns and  maintain the longevity of your Quartz surfaces.",
    },
    {
      question:
        "6. What is the process for ordering and delivery of  stone slabs?",
      message:
        "To place an order, simply reach out to our  team with your specifications. We ensure a  streamlined ordering process and efficient delivery,  prioritizing timely and secure transportation to your  designated location.",
    },
    {
      question:
        "7. Do you offer materials other than quartz?",
      message:
        "Certainly! In addition to quartz, we provide a selection  of premium materials, including marble, granite,  quartzite, and porcelain. Explore your options by  clicking the live inventory button above to discover the  diverse range of materials available for your project.",
    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="faq-container">
        <div className="faq-innercontainer w-full ">
          <div className="w-full text-center">
            <Heading>
              FIND ANSWERS QUICKLY
            </Heading>
          </div>
          <hr className="faq-sepeartor" />
          <div className="faq-formcontainer">
            {faqArray.map((v, i) => {
              return (
                <div
                  key={i}
                  className={
                    faq === i
                      ? "faq-questioncontaier-active duration-300 "
                      : "faq-questioncontaier sm:py-8 py-4 md:w-[95%] w-full duration-300"
                  }
                  onClick={() => i === faq ? setFaq(-1) : setFaq(i)}
                >
                  <div className="faq-questionrow w-full flex justify-between md:gap-16 gap-8">
                    <div >
                      <h3 className="sm:text-[22px] text-base font-semibold font-albert text-[#221F1F] ">
                        {v.question}
                      </h3>
                    </div>
                    <div>
                      {faq === i ? <FiMinus size={25} className="cursor-pointer" /> : <FiPlus size={25} className="cursor-pointer" />}
                    </div>
                  </div>
                  {faq === i && <div className="  mt-4 ">
                    <p className="sm:text-lg text-sm  text-[#221F1F] font-light font-albert">
                      {v.message}
                    </p>
                  </div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default FAQ;
