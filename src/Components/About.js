import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <h1 className="md:text-4xl text-center font-bold mx-20 my-10">Welcome to Olex Pumps - Your Trusted Source for Water Solutions</h1>
            <div className="md:mx-96 p-6">
                <p className="p-4">At Olex Pumps, we take pride in being the go-to brand for affordable and efficient water solutions, dedicated to powering your flow with care. With over 30 years of experience in the industry, we have honed our expertise to understand your unique needs and deliver the value you rightfully deserve.</p>
                <p className="p-4">Our journey spans three decades, during which we have consistently provided timely and reliable water solutions. Today, we are excited to bring you our latest innovations – highly resilient and reliable submersible and self-priming pumps designed to meet all your residential and agricultural needs.</p>
                <p className="p-4">Our commitment to excellence is reflected in every product we offer. We understand the importance of a seamless flow in your daily life, and our team is dedicated to ensuring that you receive the highest quality water solutions that stand the test of time.</p>
            </div>
            <h1 className="md:text-4xl text-center mx-12 my-10 font-bold">Why choose Olex Pumps?</h1>
            <div className="md:mx-96 p-6">
                <strong>Over 30 Years of Experience:</strong><p className="p-2">Benefit from our extensive knowledge and insights gained over three decades in the industry. We understand the nuances of water solutions, and our experience speaks volumes.</p>
                <strong>Comprehensive Solutions:</strong><p className="p-2">From residential to agricultural needs, our range of submersible and self-priming pumps is designed to cater to a variety of applications. Whatever your requirements, Olex Pumps has you covered.</p>
                <strong>Reliability and Resilience:</strong><p className="p-2">Our products are not just pumps; they are a testament to our commitment to durability and reliability. Experience the peace of mind that comes with water solutions that stand up to the toughest conditions.</p>
                <strong>Customer-Centric Approach:</strong><p className="p-2">At Olex Pumps, we prioritize your satisfaction. Our customer-centric approach ensures that you not only get what you need but also receive the value you have the right to expect.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default About;