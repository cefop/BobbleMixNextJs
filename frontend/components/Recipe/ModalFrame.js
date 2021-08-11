import { ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import ModalLabel from './ModalLabel';

const ModalFrame = (props) => {
    const { name, fingerprint } = props;
    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader style={{ alignSelf: 'center', color: 'black' }}>étiquette bobblemix</ModalHeader>
                <ModalCloseButton style={{ color: 'orange', outline: 'none', boxShadow: 'none' }} />
                <ModalBody>
                    <ModalLabel name={name} />
                </ModalBody>

                <ModalFooter style={{ alignSelf: 'center', color: 'lightgray' }}>ref: {fingerprint}</ModalFooter>
            </ModalContent>
        </>
    );
};
export default ModalFrame;
