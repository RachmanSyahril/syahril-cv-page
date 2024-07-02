import { createRoot } from 'react-dom/client';
import CVPage from "./CVPage";
import ReactGA from "react-ga4";

ReactGA.initialize("YOUR_MEASURING_ID");

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<CVPage />);