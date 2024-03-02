"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Codex = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSfXVd8iG3kZH3Jexvp4618cACUt_yIPE9EW47zpHx04WWRqlQ/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Codex;