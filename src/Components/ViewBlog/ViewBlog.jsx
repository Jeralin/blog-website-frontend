import React from "react";
import "./ViewBlog.css";
import ppic1 from "../../Assets/ppic1.jpg";
import tajmahal from "../../Assets/tajmahal.jpg";

const ViewBlog = () => {
  return (
    <>
      <div className="custom-width custom-max-width-3xl text-center mx-auto custom-h-screen d-flex flex-column align-items-center justify-content-center gap-4 margin-top-9 margin-top-14 ">
        <img src={ppic1} alt="" className="rounded-circle w-50 " />

        <h3 className="d-flex align-content-end gap-2 text-md-2fs text-md-2xl mb-3">
          Taj Mahal
        </h3>
        <h1 className="text-3-xl text-6xll lg-text ">Symbol of Love</h1>
        <p className="max-w-2xll mx-auto">
          The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ -/ TAHJ mə-HAHL, TAHZH -⁠,
          Hindi: [taːdʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white
          marble mausoleum on the right bank of the river Yamuna in Agra, Uttar
          Pradesh, India. It was commissioned in 1631 by the fifth Mughal
          emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved
          wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The
          tomb is the centrepiece of a 17-hectare (42-acre) complex, which
          includes a mosque and a guest house, and is set in formal gardens
          bounded on three sides by a crenellated wall. <br /> <br />
          Construction of the mausoleum was completed in 1648, but work
          continued on other phases of the project for another five years. The
          first ceremony held at the mausoleum was an observance by Shah Jahan,
          on 6 February 1643, of the 12th anniversary of the death of Mumtaz
          Mahal. The Taj Mahal complex is believed to have been completed in its
          entirety in 1653 at a cost estimated at the time to be around ₹5
          million, which in 2023 would be approximately ₹35 billion (US$77.8
          million). <br /> <br /> The building complex incorporates the design
          traditions of Indo-Islamic and Mughal architecture. It employs
          symmetrical constructions with the usage of various shapes and
          symbols. While the mausoleum is constructed of white marble inlaid
          with semi-precious stones, red sandstone was used for other buildings
          in the complex similar to the Mughal era buildings of the time.
        </p>

        <div className="w-100 pxx-1 pyy-10">
          <h4 className="text-center mb-2 text-lgg">Architectural Marvel</h4>
          <h2 className="text-center text-5xll ">About Architectural Marvel</h2>
        </div>
      </div>

      <div className=" gap-4 margin-top-14 justify-content-center  text-center mx-auto custom-h-screen custom-width custom-max-width-3xl  d-flex w-100 flex-column flex-lg-row align-items-center gapp-20 myy-20">
        <div className="  px-lg-5 py-sm-12 js-c-sm js-start d-flex max-w-maxx position-relative  ">
          {/* mx-auto */}
          <img
            src={tajmahal}
            alt=""
            className="smm-w-80 ww-64 rounded-3xll max-w-nonee margin-top-im margin-top-15 "
          />
        </div>
        <div className="flexx-1">
          <p className="mbb-10 maxx-w-2xl ">
            The Taj Mahal is a true masterpiece of Mughal architecture,
            combining elements of Indian, Persian, and Islamic styles.
            Constructed between 1631 and 1653 by Emperor Shah Jahan in memory of
            his beloved wife Mumtaz Mahal, the Taj Mahal stands as a symbol of
            eternal love.The entire structure is made of white marble that
            reflects different hues throughout the day. This marble was sourced
            from the quarries of Makrana, Rajasthan, and transported using
            elephants and oxen.One of the most striking features of the Taj
            Mahal is its perfect symmetry. The main dome is flanked by four
            smaller domes, and the structure is surrounded by four minarets,
            each standing at a slight outward angle to prevent them from falling
            onto the tomb in case of an earthquake.
            <br /> <br />
            The Taj Mahal is a true masterpiece of Mughal architecture,
            combining elements of Indian, Persian, and Islamic styles.
            Constructed between 1631 and 1653 by Emperor Shah Jahan in memory of
            his beloved wife Mumtaz Mahal, the Taj Mahal stands as a symbol of
            eternal love.The entire structure is made of white marble that
            reflects different hues throughout the day. This marble was sourced
            from the quarries of Makrana, Rajasthan, and transported using
            elephants and oxen.One of the most striking features of the Taj
            Mahal is its perfect symmetry. The main dome is flanked by four
            smaller domes, and the structure is surrounded by four minarets.
          </p>
        </div>
      </div>

      <div className=" gap-4 margin-top-14  margin-top-13 justify-content-center  text-center mx-auto custom-h-screen custom-width custom-max-width-3xl  d-flex w-100 flex-column flex-lg-row align-items-center gapp-20 myy-20">
        <ul>
          <li className="borderr borderr-gray-400 rounded-xll list-unstyled pp-6 cursorr-pointer mbb-10 maxx-w-2xl ">
            <h3 className="my-4 font-semiboldd text-grayy-700 ">
              White Marble Construction
            </h3>
            <p className="text-grayy-600 text-smm">
              The entire structure is built from pristine white marble that
              changes color depending on the time of day and the light
              conditions.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ViewBlog;
