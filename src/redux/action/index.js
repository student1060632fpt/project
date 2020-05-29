import * as ActionType from "./../constants/ActionType";
import Axios from "axios";

export const actThemNguoiDungAPI = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
      .then(rs => {
        console.log(rs.data);
      })
      .catch(err => {
        alert(err.response.data);
        console.log(err.response.data);
      });
  };
};

export const actLoginAdmin = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user
    })
      .then(rs => {
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          // Chuyen huong trang Dashboard
          history.push("/admin/dashboard");
        } else {
          alert("Ban khong co quyen truy cap");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    })
      .then(rs => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actDetailMovie = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
      .then(rs => {
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actSeat = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    })
    .then(rs => {
      dispatch(actGetSeat(rs.data))
    })
    .catch(err => {
      console.log(err);
      
    })
  }
}

export const actTheater = maRap => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`
    })
      .then(rs => {
        // console.log(rs.data);
        dispatch(actGetTheater(rs.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const actCinema = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
    })
    .then(rs => {
      dispatch(actGetCinema(rs.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const actGetListMovie = listMovie => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie
  };
};

export const actGetDetailMovie = detailMovie => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie
  };
};

export const actGetTheater = theater => {
  return {
    type: ActionType.GET_THEATER,
    data: theater
  }
}

export const actGetCinema = cinema => {
  return {
    type: ActionType.GET_CINEMA,
    data: cinema
  }
}

export const actGetSeat = seat => {
  return{
    type: ActionType.GET_SEAT,
    data: seat
  }
}