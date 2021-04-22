import { http } from "./http";
import "./websocket/client";

// iniciando o servidor
http.listen(3333, () => console.log('Server running on http://localhost:3333'));