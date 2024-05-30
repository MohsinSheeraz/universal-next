import ContactUs from "@/components/pages/contact/ContactUs";

export default function Page() {
  return (
    <>
      <div className=" col-xl-10 col-lg-10 jus col-md-10 col-sm-12 col-12 detailedsection">
        <div className="col-12">
          <ContactUs stockId={0} stockcode={"Contact Us Page"} />
        </div>
      </div>
    </>
  );
}
