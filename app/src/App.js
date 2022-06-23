import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Footer from "./Footer";
import Principal from "./Principal";
import Content from "./Content";
import Navbar from "./NavBar";
import Gallery from "./Gallery";
import {Divider} from "@mui/material";


const tiers = [
    {
        title: 'E-max maquiado',
        price: '350',
        description: [
            'Ponte fixa à partir de 3 elementos R$ 420,00',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'E-max estratificado',
        price: '380',
        description: [
            'Ponte fixa à partir de 3 elementos R$ 460,00',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Facetas E.Max maquiado',
        price: '360',
        description: [' '],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Facetas E.Max estratificado',
        price: '400',
        description: [' '],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Bloco E.Max',
        price: '320',
        description: [' '],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Bloco cerâmica creation sob refratário',
        price: '320',
        description: [
            'Coroa de cerâmica pura R$ 380,00',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Prótese s/ implante metal tilit',
        price: '195',
        description: [
            'À partir de 3 elementos R$ 245,00',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Fundição de núcleo não nobre direta',
        price: '135',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Fundição de núcleo não nobre esculpido',
        price: '165',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Metal não nobre unitário',
        price: '195',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Metal não nobre à partir de 3 elementos',
        price: '225',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Enceramento diagnóstico',
        price: '45',
        description: [
            'Elemento',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Dissilicato de lítio fresada por elemento',
        price: '520',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Zirconia fresada por elemento maquiada',
        price: '560',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Zirconia fresada por elemento estratificada',
        price: '620',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Zirconia à partir de 3 elementos',
        price: '635',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Protocolo de zirconia',
        price: '-',
        description: [
            'A combinar ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Gengiva rosa COE-SOFT por elemento',
        price: '68',
        description: [
            ' ',
        ],
        buttonText: 'solicitar',
        buttonVariant: 'outlined',
    },
];

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

function PricingContent() {
    const company = "Atelié Dental"
    return (
        <React.Fragment>
            <GlobalStyles
                styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <Navbar company={company}/>
            <Principal company={company}/>
            <Gallery/>
            <Divider variant="middle"/>
            <Content tiers={tiers}/>
            <Footer footers={footers}/>
        </React.Fragment>
    );
}

export default function Pricing() {
    return <PricingContent/>;
}
