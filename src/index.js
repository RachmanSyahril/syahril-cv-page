import { createRoot } from 'react-dom/client';
import CVPage from "./CVPage";
import ReactGA from "react-ga4";

ReactGA.initialize("G-Y98L0ZT1M1");

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<CVPage />);