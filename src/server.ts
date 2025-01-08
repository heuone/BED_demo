import app from "./app";

import { Server } from "http";

const PORT: string | 3000 = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

export default server;