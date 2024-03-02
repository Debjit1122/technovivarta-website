"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const FoodEatingCompetition = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSeE43X6fG3DxMXDJgL8WKIKa8RHDFzXrXkh4vbaBUcQPb14Zg/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default FoodEatingCompetition;