import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.5408325, 126.9459381),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    var markerPosition = new kakao.maps.LatLng(37.5408325, 126.9459381);

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <MapDiv>
      <div id="map"></div>
    </MapDiv>
  );
};

const MapDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  #map {
    width: inherit;
    height: inherit;
  }
`;

export default Map;
