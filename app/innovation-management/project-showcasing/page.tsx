"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const ProjectShowcasing = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSfvH-q6jPsD2viVky3n2hKKcxqEaBzWN6Q94VETww9Olph0dw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default ProjectShowcasing;