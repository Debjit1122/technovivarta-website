"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Webyard = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLScoIM8TMeT6njgSv7h-FRkTAc4foiETid5i_HG24wFdZ3jW2Q/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Webyard;