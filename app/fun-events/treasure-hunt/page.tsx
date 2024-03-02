"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const TreasureHunt = () => {
    return (
        <div className="pt-20 pb-20">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSd34MkbEFaSlsqDiuTTlqJZeho9ncBzBLpzoQjAypjpIIhR6Q/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default TreasureHunt;