import { Box } from "@mui/material";
import Heading from "./Heading/inex";
import Footing from "./Footing";

export default function GuestLayout({ children }: { children: React.ReactNode }) {

    return (
        <Box className='layout gues-layout-main'>
            <Heading />
            <main className="page-main-content">
                <div className="page-content">
                    {children}
                </div>
                <Footing />
            </main>
        </Box>
    )
}