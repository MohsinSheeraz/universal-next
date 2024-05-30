import ContactUs from "@/components/pages/contact/ContactUs";

export default function Page() {
  return (
    <>
      <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 detailedsection">
        <div className="col-md-8 mt-5 md:mt-0 col-sm-4 col-12">
          <ContactUs stockId={0} stockcode={"Contact Us Page"} />
        </div>
      </div>
    </>
  );
}
