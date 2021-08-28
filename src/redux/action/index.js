import * as ActionType from "./../constants/ActionType";
import Axios from "axios";

export const actDangNhap = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    })
    .then(rs => {
      console.log(rs);
      // alert("Sign in successful!");
      localStorage.setItem("user", JSON.stringify(rs.data));
      history.push("/");
    })
    .catch(err => {
      alert(err.response.data);
    })
  }
}

export const actDangKy = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    })
      .then(rs => {
        // console.log(rs.data);
        alert("Sign up successful!");
        history.push("/home");
        dispatch(actGetDangNhap(rs.data));
      })
      .catch(err => {
        alert(err.response.data);
      })
  }
}

export const actThemNguoiDungAPI = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user
    })
      .then(rs => {
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          // Chuyen huong trang Dashboard
          history.push("/admin/admin-quan-ly-lich-chieu");
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
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    })
      .then(rs => {
        dispatch(actGetSeat(rs.data))
        // console.log(rs.data);
        
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP09`
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
    })
      .then(rs => {
        dispatch(actGetCinema(rs.data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// -----------ADMIN DANH SACH NGUOI DUNG-----------
export const actLayDanhSachNguoiDung = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`
    })
    .then(rs => {
      dispatch(actDanhSachNguoiDung(rs.data));
    })
    .catch(err=>{
      console.log("Lấy danh sách người dùng bị lỗi" , err);
    })
  }
}

export const actPutDSND = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "PUT",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
      console.log("Put người dùng thành công", rs.data);
      // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const actAddDSND = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
      console.log("Thêm người dùng thành công");
      // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const actDeleteDSND = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
      // data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
        console.log("Delete người dùng thành công", rs.data);
        // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      alert(err.response.data);
    })
  }
}
export const actDanhSachNguoiDung = list => {
  return {
    type: ActionType.GET_LIST_ND,
    data: list
  }
}
// -----------END ADMIN DANH SACH NGUOI DUNG-----------
// -----------ADMIN QUAN LY LICH CHIEU ---------
export const actAddLC = movie => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
      console.log("Thêm phim thành công");
      // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const actEditLC = movie => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  return dispatch => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
      console.log("Put movie thành công", rs.data);
      // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
export const actDeleteLC = user => {
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));

  return dispatch => {
    Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${user}`,
      // data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs => {
        console.log("Delete movie thành công", rs.data);
        // dispatch(actPutNguoiDung(rs.data));
    })
    .catch(err => {
      alert(err.response.data);
    })
  }
}
// -----------END ADMIN QUAN LY LICH CHIEU ---------

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

export const actResetSeat = seat => {
  return {
    type: ActionType.GET_RESET_SEAT,
    data: seat
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
  return {
    type: ActionType.GET_SEAT,
    data: seat
  }
}

export const actGetDangNhap = user => {
  return {
    type: ActionType.GET_USER,
    data: user
  }
}

export const actPropsSeat = seat =>{
  return {
    type: ActionType.PROPS_SEAT,
    data: seat
  }
}

export const actGetKeyWord = keyword => {
  return {
    type: ActionType.SEARCH,
    data: keyword
  }
}

export const actProcess = data => {
  return {
    type: ActionType.PROCESS,
    data
  }
}