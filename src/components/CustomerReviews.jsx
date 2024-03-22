import "./CustomerReviews.css";
import Customer1 from "../assets/images/homeImage/customer_batool.png";
import Customer2 from "../assets/images/homeImage/customer_jacob.png";
import Customer3 from "../assets/images/homeImage/customer_sharon.png";
import OrganizationLogo from "../assets/images/homeImage/org_logo.png";
import MaxWidthWrapper from "../Screens/MaxWidthWrapper";
import Heading from "../Screens/resuable/Heading";



const CustomerReview = ({ label }) => {
  const customerArray = [
    {
      name: "Batool Dharamsey",
      desc: "Amazing service. Shirley and Juliana were  very welcoming and knowledgeable with the products . We entered thinking we are going to a showroom but it is warehouse with so much variety. Excellent experience. Definitely going back for the bathroom",
      designation: "Customer",
      image: Customer1,
    },
    {
      name: "Jacob M",
      desc: "Great experience with Shirley. She was very friendly and answered any questions we had. They had a bunch to choose from and I think we found what we are going to go with. I just wish they had their granite options on the website.",
      designation: "Customer",
      image: Customer2,
    },
    {
      name: "Sharon White",
      desc: "Shelley was extremely amazing. She was so kind helped me find exactly what I was looking for right in time for birthday. I can’t wait to come back! She was truly amazing",
      image: Customer3,
      designation: "Customer",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="home-customerreview-container">
        <Heading className='text-center'>
          {label}
        </Heading>
        <div className=" overflow-scroll cards-scroll w-full mt-6">
          <div className="flex justify-between gap-6 w-full min-w-[1024px]  ">
            {customerArray.map((v, i) => (
              <div key={i} className="flex flex-col gap-4 flex-grow  w-full">
                <div className="bg-[#fef6f7] sm:px-8 px-6 sm:py-8 py-6  h-full flex-grow">
                  <p className="md:text-lg text-sm font-medium font-albert text-black ">{v.desc}</p>
                </div>

                <div className="flex justify-between gap-4 items-center">
                  <span className="flex gap-2 items-center">
                    <div>
                      <img src={v.image} alt="Customer-Image" className="lg:w-16 w-12 lg:h-16 h-12 " />
                    </div>
                    <div>
                      <h4 className="lg:text-base text-sm  font-semibold font-albert text-black">{v.name}</h4>
                      <p className="text-sm">{v.designation}</p>
                    </div>
                  </span>
                  <span>
                    <img src={OrganizationLogo} alt="google-logo" className="lg:w-22 w-16 " />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReview;
