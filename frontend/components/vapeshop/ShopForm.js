import { useMutation } from '@apollo/client';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { CREATE_USER_SHOP } from '../gql/graphql';
import { ShopSaved } from '../styles/AlertAndToast';

const VapeForm = styled.form`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
`;

const ShopForm = (props) => {
    const { user } = props;
    const userId = user.id;

    const [posting, setPosting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const CheckingShop = async (url) => {
        const sendingMail = await fetch(url);
        await sendingMail.json();
    };

    const [creatShop] = useMutation(CREATE_USER_SHOP, {
        onCompleted: (data) => {
            // console.log(`l'utilisateur ${user.name} avec l'email ${user.email} à créé un shop`);
            // console.log(`nom du shop: ${name}; adresse: ${address}, ${phone} / ${email}`);
            // console.log('new shop to validated', data.insert_shops_one.id, userId);
            const checkURL = `/api/mailverifshop/${data.insert_shops_one.id}/${userId}/${encodeURIComponent(
                user.name
            )}/${encodeURIComponent(user.email)}/${encodeURIComponent(name)}/${encodeURIComponent(
                address
            )}/${encodeURIComponent(phone)}/${encodeURIComponent(email)}`;
            CheckingShop(checkURL);
        },
    });

    const Reset = () => {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setPosting(false);
        console.log('form controle cleaned');
    };

    // ? create shop for user
    const createUserShop = async (event) => {
        event.preventDefault();
        console.log(userId);
        console.log(name, email, phone, address);
        setPosting(true);
        try {
            await creatShop({
                variables: { name, address, phone, email, userId },
            });
            await ShopSaved.fire();
            Reset();
        } catch (error) {
            console.log(error);
            Reset();
        }
    };

    return (
        <VapeForm method="POST" onSubmit={createUserShop}>
            <FormControl isRequired>
                <FormLabel htmlFor="name">Nom du shop</FormLabel>
                <Input
                    focusBorderColor="orange.600"
                    errorBorderColor="crimson"
                    style={{ boxShadow: 'none' }}
                    id="name"
                    name="name"
                    value={name}
                    placeholder="nom du shop"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="phone">Téléphone du shop</FormLabel>
                <Input
                    focusBorderColor="orange.600"
                    errorBorderColor="crimson"
                    style={{ boxShadow: 'none' }}
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="téléphone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="email">Email du shop</FormLabel>
                <Input
                    focusBorderColor="orange.600"
                    errorBorderColor="crimson"
                    style={{ boxShadow: 'none' }}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="address">Adresse du shop</FormLabel>
                <Input
                    focusBorderColor="orange.600"
                    errorBorderColor="crimson"
                    style={{ boxShadow: 'none' }}
                    id="address"
                    name="address"
                    value={address}
                    placeholder="adresse"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </FormControl>

            <Button
                type="submit"
                size="md"
                bg={'orange'}
                color={'white'}
                variant="solid"
                style={{ boxShadow: 'none' }}
                py={'1.5rem'}
                isLoading={posting}
                loadingText="ENREGISTREMENT..."
                isDisabled={name === '' || email === '' || phone === '' || address === ''}
            >
                Enregistrer
            </Button>
        </VapeForm>
    );
};
export default ShopForm;
