"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const BlastOff = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLScf0p6RfJxKtzMf2VAKo7_zTEczjZD6kxAyGNEZWy2sh1bw0g/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default BlastOff;