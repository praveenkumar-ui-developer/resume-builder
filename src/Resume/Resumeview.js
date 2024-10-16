import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ResumePDF from '../Templates/Tradition';
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import Template3 from '../Templates/Template3'; 
import Template4 from '../Templates/Template4';
import Template5 from '../Templates/Template5';

import { useReducer, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// images
import darkmodeImg from '.././Assets/darkmode.png';
import tradition from '.././Assets/tradition.png';
import modern from '.././Assets/modern.png'
import template3 from '.././Assets/template3.png'
import template4 from '.././Assets/template4.png'

function Resumeview() {
    const resumeData = useSelector((state) => state.resume);
    const templates = { Tradition: ResumePDF, Template1, Template2,Template3, Template4, Template5 };

    const storedTemplate = localStorage.getItem('selecttemp') || 'Tradition';
    const initialTemplate = templates[storedTemplate];

    const templateRef = useRef(initialTemplate);
    const scrollRef = useRef(null);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        templateRef.current = templates[storedTemplate];
        console.log("Current template on mount:", templateRef.current);
    }, [storedTemplate]);

    const changetemp = (tempName) => {
        console.log("Changing to template:", tempName);
        if (templates[tempName]) {
            templateRef.current = templates[tempName];
            localStorage.setItem('selecttemp', tempName);
            forceUpdate();
        } else {
            console.error("Invalid template name:", tempName);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const templateProp = storedTemplate === 'Modern' ? 'darkMode' : 'elegant';

    if (!templateRef.current) {
        return <div>Error: Template not found</div>;
    }

    return (
        <div>
            <h1 className='border border-blue-200 p-2 text-center rounded-lg mb-1'>Choose Template</h1>
            <div className="flex items-center">
    <button onClick={scrollLeft} className="p-2 text-2xl">&larr;</button>
    
    <div
        className="flex overflow-x-auto space-x-4 p-2 border border-gray-300 rounded-lg scrollbar-hide"
        style={{ scrollBehavior: 'smooth', width: '1500px' }}
        ref={scrollRef}
    >
        <img
            src={tradition}
            alt='Tradition Template'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Tradition')}
            style={{ width: '300px', height: '200px' }}
        />
        <img
            src={modern}
            alt='Modern Template'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template1')}
            style={{ width: '300px', height: '200px' }}
        />
        <img
            src={darkmodeImg}
            alt='Template 2'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template2')}
            style={{ width: '300px', height: '200px' }}
        />
        <img
            src={template3}
            alt='Template 3'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template3')}
            style={{ width: '300px', height: '200px' }}
        />
         <img
            src={template4}
            alt='Template 4'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template4')}
            style={{ width: '300px', height: '200px' }}
        />
         <img
            src={Template5}
            alt='Template 5'
            className='cursor-pointer border-2 border-gray-300 hover:border-blue-500 rounded-lg'
            onClick={() => changetemp('Template5')}
            style={{ width: '300px', height: '200px' }}
        />
    </div>
    <button onClick={scrollRight} className="p-2 text-2xl">&rarr;</button>
</div>

            <PDFDownloadLink
                style={{ width: '100%', height: '60px' }}
                className='bg-blu-300 pt-10 text-blue-400 bg-'
                document={<templateRef.current resumeData={resumeData} template={templateProp} />}
                fileName="resume.pdf"
            >
                {({ loading }) => (loading ? 'Loading document...' : 'Download Resume')}
            </PDFDownloadLink>

            <PDFViewer style={{ width: '100%', height: '500px', backgroundColor: 'white' }}>
                <templateRef.current resumeData={resumeData} template={templateProp} />
            </PDFViewer>
        </div>
    );
}

export default Resumeview;
