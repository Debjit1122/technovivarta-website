"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Poseidon = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSfyWHUkFAYT6woUDBjmctzNw7Wyh3PFAOevCuU9mlgXo-I46Q/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Poseidon;