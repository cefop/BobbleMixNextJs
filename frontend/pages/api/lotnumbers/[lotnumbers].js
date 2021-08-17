const handler = async (req, res) => {
    console.log(req.query.lotmubers);
    try {
        return res.status(200).json({ text: 'Hello' });
    } catch (error) {
        return res.json({
            data: {
                responce: error.message,
                message: 'something not working!',
            },
        });
    }
};
export default handler;
