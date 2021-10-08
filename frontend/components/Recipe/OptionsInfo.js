import { useState } from 'react';
import styled from '@emotion/styled';
import { IconButton, Tooltip } from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineFacebook } from 'react-icons/ai';
import Boosters from './Boosters';

const RecipeInfosContainer = styled.div`
    /* border: 4px solid navy; */
    text-align: left;
    padding-left: 5rem;
    padding-right: 5rem;
    /* padding-top: 1.5rem; */
    /* padding-bottom: 5rem; */
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    h5 {
        padding-bottom: 2.32rem;
        color: #1d1d1b;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`;

const OptionsBox = styled.div`
    /* border: 0.5px solid palevioletred; */
    height: 100%;
`;

const ShareContainer = styled.div`
    /* border: 1px solid cyan; */
    /* height: 100%; */
    display: grid;
    grid-template-columns: auto 4fr;
    align-self: top;
    justify-self: center;
    justify-items: start;
    align-items: flex-end;
    padding-left: 0rem;
`;

const SocialBox = styled.div`
    /* border: 1px solid greenyellow; */
    margin-right: 1rem;
    span {
        /* border: 1px solid khaki; */
        display: grid;
        align-items: flex-end;
        padding-bottom: 5px;
    }
    a,
    a:active {
        outline: none;
    }
`;

const QrContainer = styled.div`
    /* border: 1px solid red; */
    /* background-image: url('/assets/svg/white.png'); */
    /* background-repeat: repeat repeat; */
    :hover {
        cursor: pointer;
    }
`;

const OptionsInfo = (props) => {
    const { fingerprint } = props;
    const [copied, setCopied] = useState(false);
    // TODO new metatags

    function onCopy() {
        setCopied(true);
        setTimeout(function () {
            setCopied(false);
        }, 3000);
    }

    return (
        <RecipeInfosContainer>
            <OptionsBox>
                <h5>options :</h5>
                <Boosters />
            </OptionsBox>
            <OptionsBox>
                <h5>partagez cette recette :</h5>
                <ShareContainer>
                    <SocialBox>
                        <span>
                            <a
                                target="_blank"
                                href={`https://www.facebook.com/sharer/sharer.php?u=https://bobblemixfrontend.vercel.app/recipe?fingerprint=${fingerprint}`}
                            >
                                <Tooltip label="Partagez sur facebook!" fontSize="md" bg="black">
                                    <IconButton
                                        style={{ boxShadow: 'none' }}
                                        aria-label="Partagez sur facebook!"
                                        icon={<AiOutlineFacebook size={64} color="orange" />}
                                        // onClick={() => }
                                    />
                                </Tooltip>
                            </a>
                        </span>
                    </SocialBox>

                    <Tooltip label={copied ? `copié!` : `copiez l'adresse de la recette!`} fontSize="md" bg="black">
                        <QrContainer>
                            <CopyToClipboard
                                onCopy={() => onCopy()}
                                text={`https://bobblemixfrontend.vercel.app/recipe?fingerprint=${fingerprint}`}
                            >
                                <QRCode
                                    value={`https://bobblemixfrontend.vercel.app/recipe?fingerprint=${fingerprint}`}
                                    size={144}
                                    bgColor={'#ffffff'}
                                    fgColor={copied === true ? 'orange' : '#000000'}
                                    level={'L'}
                                    includeMargin={false}
                                    renderAs={'svg'}
                                    imageSettings={{
                                        src: '/favicon/logo_bobble_orange_54px_600dpi.png',
                                        x: null,
                                        y: null,
                                        height: 24,
                                        width: 24,
                                        excavate: true,
                                    }}
                                />
                            </CopyToClipboard>
                        </QrContainer>
                    </Tooltip>
                </ShareContainer>
            </OptionsBox>
        </RecipeInfosContainer>
    );
};

export default OptionsInfo;
