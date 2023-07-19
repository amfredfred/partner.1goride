import { HashRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from '../../Views/Layouts/Guest/inex'
import useAssets from '../../Hooks/useAssets'
import Welcome from '../../Views/Pages/Welcome'

export default function Routings() {
    useAssets()

    const Guest = (
        <GuestLayout>
            <Routes>
                <Route path='' element={<Welcome />} />
            </Routes>
        </GuestLayout>
    )


    return (
        <HashRouter>
            {Guest}
        </HashRouter>
    )
}