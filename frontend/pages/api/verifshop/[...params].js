import axios from 'axios';

export default async function handler(req, res) {
    const { params } = req.query;
    const shopId = params[0];
    const BASE_URL = `${process.env.NEXT_PUBLIC_HASURA_REST}/verifshop/${shopId}`;
    try {
        const myshop = { id: shopId };
        await axios.post(BASE_URL, myshop, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.send({
            status: 200,
            shop: 'le shop a été validé',
        });
    } catch (error) {
        res.json({
            status: 400,
            error,
        });
    }
}
