import { http } from "./http";
import "./websockets/client";
import "./websockets/admin";

// iniciando o servidor
http.listen(3333, () => console.log('Server running on http://localhost:3333'));