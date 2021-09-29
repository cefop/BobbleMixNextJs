import Link from 'next/link';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';
import { UserCookiesToast } from './styles/AlertAndToast';

const Consent = () => {
    const router = useRouter();
    const cc = `Nous utilisons des cookies pour analyser notre trafic et pour faire fonctionner certaines fonctionnalités sur le site. <a href="/tos">Voir les détails</a>`;

    return (
        <CookieConsent
            location="bottom"
            style={{ background: '#1D1D1B' }}
            contentStyle={{ textAlign: 'end' }}
            buttonText="oui!"
            declineButtonText="non!"
            buttonStyle={{
                background: 'orange',
                color: 'black',
                fontSize: '1em',
            }}
            declineButtonStyle={{ background: 'red', color: 'black', fontSize: '1em' }}
            flipButtons={true}
            overlay={true}
            cookieName="bobblemixCookie"
            expires={365}
            debug={true}
            onAccept={(acceptedByScrolling) => {
                if (acceptedByScrolling) {
                    UserCookiesToast.fire({
                        html: cc,
                    });
                } else {
                    UserCookiesToast.fire({
                        html: cc,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('CONFIRMED');
                        }
                        if (result.isDenied) {
                            console.log('DENIED');
                        }
                    });
                }
            }}
            enableDeclineButton
            onDecline={() => {
                router.push('https://www.qwant.com/');
            }}
        >
            Avez vous plus de 18 ans ?
        </CookieConsent>
    );
};

export default Consent;
