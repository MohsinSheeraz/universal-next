import ReservedDetail from "./component/reservedDetail";
interface Props {
  params: {
    id: number;
  };
}

export default function page({ params }: Props) {
  return <ReservedDetail params={params} />;
}
