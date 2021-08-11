import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Center, Button, HStack } from '@chakra-ui/react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { FaRegFileImage, FaRegFilePdf } from 'react-icons/fa';

const LabelContainer = styled.div`
    padding: 0;
    margin: 0;
    height: 250px;
    width: 650px;
    color: #000;
    border: 1px dashed lightgray;
    text-align: center;
`;

// ATTENION THIS COMPONENT NEED A SSR ERROR MANAGEMENT props.Windows
// https://github.com/im-salman/react-component-export-image/issues/42

// component to print
const ComponentToPrint = React.forwardRef((props, ref) => {
    const { name } = props;
    return (
        <LabelContainer ref={ref}>
            <div>{name}</div>
        </LabelContainer>
    );
});

const ModalLabel = (props) => {
    const { name } = props;

    const componentRef = useRef();
    const params = {
        fileName: `BobbleMix ${name.replace('/', '-')}`,
        pdfOptions: {
            w: 650,
            h: 250,
            x: 0,
            y: 0,
            unit: 'px',
            orientation: 'l',
            // pdfFormat: 'c9',
        },
        html2CanvasOptions: {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight,
        },
    };

    return (
        <>
            <Center>
                <ComponentToPrint ref={componentRef} name={name} />
            </Center>

            <Center>
                <HStack py={5}>
                    <Button
                        colorScheme="orange"
                        style={{ boxShadow: 'none' }}
                        leftIcon={<FaRegFileImage />}
                        onClick={() => exportComponentAsJPEG(componentRef, params)}
                    >
                        image JPG
                    </Button>
                    <Button
                        colorScheme="orange"
                        style={{ boxShadow: 'none' }}
                        leftIcon={<FaRegFileImage />}
                        onClick={() => exportComponentAsPNG(componentRef, params)}
                    >
                        image PNG
                    </Button>
                    <Button
                        colorScheme="orange"
                        style={{ boxShadow: 'none' }}
                        leftIcon={<FaRegFilePdf />}
                        onClick={() => exportComponentAsPDF(componentRef, params)}
                    >
                        format PDF
                    </Button>
                </HStack>
            </Center>
        </>
    );
};
export default ModalLabel;