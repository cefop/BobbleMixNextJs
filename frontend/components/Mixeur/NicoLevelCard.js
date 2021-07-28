import { useRadio, Box } from '@chakra-ui/react';

const NicoLevelCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                backgroundColor="#eee"
                borderColor="#eee"
                color="#0e0e0e"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _disabled={{
                    bg: 'lightgray',
                    color: 'black',
                    borderColor: 'withe',
                    cursor: 'not-allowed',
                }}
                _checked={{
                    bg: '#ed9500',
                    color: 'white',
                    fontWeight: 600,
                    borderColor: '#ed9500',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={2}
                py={2}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default NicoLevelCard;
