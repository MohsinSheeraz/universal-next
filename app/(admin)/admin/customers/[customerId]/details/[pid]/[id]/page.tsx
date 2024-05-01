import AdminReservedDetail from "./component/reservedDetail";
interface Props {
  params: {
    id: number;
    customerId: number;
  };
}

export default function page({ params }: Props) {
  return <AdminReservedDetail params={params} />;
}
