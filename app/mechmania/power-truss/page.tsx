"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const PowerTruss = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSf4InuBpXi4vlI3cc8rve0ugHA17f6MZOjffK6iiOKce3km9Q/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default PowerTruss;