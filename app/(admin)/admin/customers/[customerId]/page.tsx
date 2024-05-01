import AdminAccountActivity from "./components/adminAccountActivity";
import AdminPaymentHistory from "./components/adminPaymentHistory";
import AdminPurchased from "./components/adminPerchased";
import AdminProfile from "./components/adminProfile";
import AdminReserved from "./components/adminReserved";


interface Props {
    params: {
        customerId: number;
    };
}
export default function page({ params }: Props) {


    return (
        <div className="w-full">
            <AdminProfile id={params?.customerId} />
            <br />
            <br />
            <br />
            <AdminPurchased id={params?.customerId} />
            <br />
            <br />
            <br />
            <br />
            <AdminReserved id={params?.customerId} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <AdminPaymentHistory id={params?.customerId} />
            <br />
            <br />
            <br />
            <br />

            <AdminAccountActivity id={params?.customerId} />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
}
