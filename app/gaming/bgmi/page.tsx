"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Bgmi = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSdkPnyws0cE36FbMggU1l9ivZfpEZipxqh6YNjOJ_CVqJEfvQ/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Bgmi;