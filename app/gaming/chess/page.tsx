"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Bgmi = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLScjssJfWuugWRaeadRZndl4Wy1vxTmrA0BApjzytTCcEuVMsw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Bgmi;