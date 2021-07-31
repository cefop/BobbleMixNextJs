import { Image } from '@chakra-ui/image';
import styled from '@emotion/styled';
import Link from 'next/link';

const LogoImg = styled.div`
    padding-left: 0.75rem;
    display: grid;
    align-items: center;
    justify-content: center;
    img {
        height: 64px;
        width: auto;
    }
    a:focus {
        box-shadow: none;
    }
`;

const Logo = () => {
    return (
        <LogoImg>
            <Link href="/">
                <a>
                    <Image src="/assets/bobble-logo-black.png" alt="booble mix" />
                </a>
            </Link>
        </LogoImg>
    );
};

export default Logo;
