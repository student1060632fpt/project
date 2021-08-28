import React, { Component } from 'react'
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { forwardRef } from 'react';
import { connect } from 'react-redux';
import * as action from "../../redux/action";

class AdminQLND extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Tài khoản', field: 'taiKhoan', editable: 'onAdd' },
                { title: 'Mật khẩu', field: 'matKhau', type: 'password' },
                { title: 'Email', field: 'email', type: 'email' },
                { title: 'Số điện thoại', field: 'soDt', type: 'numeric' },
                {
                    title: 'Loại',
                    field: 'maLoaiNguoiDung',
                    lookup: { QuanTri: 'Quản trị', KhachHang: 'Khách Hàng' },
                },
                { title: 'Họ tên', field: 'hoTen' },
            ],
            data: this.props.list,
        }
    }

    componentDidMount() {
        this.props.getDSND();
        
        setTimeout(() => {
            this.setState({
                data: this.props.list
            })
        }, 2000);
    }

    renderData = () => {
        if (this.props.list) {
            this.setState({
                data: this.props.list
            })
        }
    }

    handleEdit = userInput => {
        delete userInput['tableData'];
        let user = { ...userInput, maNhom: "GP09" };
        this.props.putDSND(user);
    }

    handleAdd = user => {
        delete user['tableData'];
        console.log(user);
        this.props.addDSND(user);
    }

    handleDelete = user => {
        // console.log(user.taiKhoan);
        this.props.deleteDSND(user.taiKhoan);
    }

    render() {
        let tableIcons = {
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
        };
        return (
            <>
                <MaterialTable
                    icons={tableIcons}
                    title="Editable Example"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    // thêm người dùng 
                                    this.handleAdd(newData);
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    //gửi axios lên sửa user
                                    this.handleEdit(newData);
                                    if (oldData) {
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    // gửi axios lên xóa user 
                                    this.handleDelete(oldData);
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.userReducer.list || [{
            email: "thanhvienmoi@gmail.com",
            hoTen: "Đặng Thái Vỉ",
            maLoaiNguoiDung: "QuanTri",
            matKhau: "123456",
            soDt: "0123123213",
            taiKhoan: "dangthaivi123"
        }]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDSND: () => {
            dispatch(action.actLayDanhSachNguoiDung({}))
        },
        putDSND: data => {
            dispatch(action.actPutDSND(data))
        },
        deleteDSND: data => {
            dispatch(action.actDeleteDSND(data))
        },
        addDSND: data => {
            dispatch(action.actAddDSND(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminQLND);