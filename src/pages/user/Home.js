import React from "react";
import Banner from '../../components/home/BannerHome';
import TicketSearch from "../../components/home/TicketSearch";
import CarouselMovie from "../../components/home/CarouselMovie";

export default function Home(props) {
  return (
    <>
      {/* banner section  */}
      <Banner />
      {/* ticket search  */}
      <TicketSearch />
      {/* carousel movie */}
      <CarouselMovie/>
    </>
  );
}
