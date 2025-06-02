
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full space-y-2 mx-auto">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </div>
    );
}
 
export default RootLayout;