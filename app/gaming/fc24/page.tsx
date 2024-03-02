"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Fc24 = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSejbKBKa93CV_d7JlG9jPNTtTE97a96MnekiE6oJnR_0-HbhA/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Fc24;