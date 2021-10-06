import styled from '@emotion/styled';
import Image from 'next/image';

const Boosters = () => {
    const booster = [
        {
            id: 1,
            name: 'Base 50/50',
            image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/base_roegp4.png',
            desscription: 'lorem',
        },
        {
            id: 2,
            name: 'Boster B3',
            image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/boost_b3_mdrsxv.png',
            desscription: 'lorem',
        },
        // {
        //     is: 3,
        //     name: 'Booster B4',
        //     image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/boost_b6_wpyrgq.png',
        //     desscription: 'lorem',
        // },
        // {
        //     id: 4,
        //     name: 'Nico Fresh',
        //     image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/nico_fresh_mfshwf.png',
        //     desscription: 'lorem',
        // },
        // {
        //     id: 5,
        //     name: 'Nico Cool',
        //     image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/nico_cool_voey9j.png',
        //     desscription: 'lorem',
        // },
        {
            id: 6,
            name: 'Nico Freeze',
            image: 'https://res.cloudinary.com/dagmffgu0/image/upload/v1633090984/bobble_mix_assets/boosters_base/nico_freez_bqpcxx.png',
            desscription: 'lorem',
        },
    ];

    const OptionGrid = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 0.25fr);
        grid-column-gap: 1rem;
        /* padding-left: 1rem; */
        /* padding-right: 1rem; */
    `;
    const OptionsCard = styled.div`
        /* border: 1px solid red; */
        /* display: grid; */
        justify-content: center;
        align-items: center;
        justify-items: center;
        img {
            /* border: 1px solid violet; */
        }
        h6 {
            /* border: 1px solid violet; */
            text-transform: uppercase;
            text-align: center;
            color: orange;
            font-size: 0.75rem;
            font-weight: 700;
            padding-bottom: 0rem;
        }
    `;

    return (
        <OptionGrid>
            {booster.map((i, k) => (
                <OptionsCard key={k}>
                    <Image src={i.image} alt={i.name} layout="fixed" width="88" height="120" />
                    <h6>{i.name}</h6>
                </OptionsCard>
            ))}
        </OptionGrid>
    );
};
export default Boosters;
