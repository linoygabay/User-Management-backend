const handleRequest = (handler) => async (req, res) => {
    try {
        const result = await handler(req);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = handleRequest;