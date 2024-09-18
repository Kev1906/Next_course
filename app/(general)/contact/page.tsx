import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Esta es la pagina de contacto de la aplicacion',
};
export default function ContactPage(){
    return (
        <>
            <span className="text-4xl text-sky-50">This is the Contact Page</span>
        </>
    )
}