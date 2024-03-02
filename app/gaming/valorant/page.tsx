"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Valorant = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSfG6EYvvGmLedwZa7QPt6N8_rXO9S857Q1ZBTjz_qrTn0X44w/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Valorant;