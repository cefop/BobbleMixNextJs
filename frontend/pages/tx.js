import { useContext, useEffect } from 'react';
import { useUser } from '../components/hooks/useUser';
import NotAuth from '../components/NotAuth';
import { BobbleUserContext } from '../components/hooks/BobbleUserContext';
import Tx from '../components/tx';

export default function TxPage() {
    const { user } = useUser();
    const { bobbleUser } = useContext(BobbleUserContext);
    const shopID = bobbleUser?.users?.[0]?.shops[0]?.id;
    // console.log('is it ', bobbleUser?.users);

    useEffect(() => {
        if (shopID !== undefined) {
            console.log('user shop id', shopID);
        }
    }, [shopID]);

    return (
        <>
            {!user && shopID !== undefined ? (
                <NotAuth />
            ) : (
                <>
                    <Tx shop_id={shopID} />
                </>
            )}
        </>
    );
}
